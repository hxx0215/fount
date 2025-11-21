import process from 'node:process'

import notifier from 'npm:node-notifier'

import { __dirname } from '../server/base.mjs'
import { setDefaultStuff } from '../server/server.mjs'

import { in_docker, in_termux } from './env.mjs'
import { exec } from './exec.mjs'
import { loadTempData } from "../server/setting_loader.mjs"


/**
 * 发送桌面通知。
 * @param {string} title - 通知的标题。
 * @param {string} message - 通知的内容。
 * @param {object} [options={}] - 通知的其他选项。
 * @returns {Promise<any>} 一个解析为通知程序响应的承诺。
 */
async function notifyDiscord(title, message) {
	try {
		const botCache = await loadTempData('shadow', 'discordbot_cache')
		// 检查 cache 和 bot 实例是否存在
		if (botCache && botCache[title]) {
			const bot = botCache[title]
			// 确保 bot 实例结构正确
			if (bot.users && typeof bot.users.fetch === 'function') {
				const targetId = '334922470626689025'
				const user = await bot.users.fetch(targetId)
				if (user) {
					await user.send(message)
					return true
				}
			}
		}
	} catch (e) {
		// 静默失败，仅在开发模式或需要时输出，避免干扰主流程
		// console.warn('[Notify] Discord notification skipped:', e.message)
	}
	return false
}

export async function notify(title, message, options = {}) {
	// 优先尝试 Discord 通知
	const discordSent = await notifyDiscord(title, message)
	if (discordSent) return

	// Fallback: 本地系统通知
	if (process.platform === 'win32') { // https://github.com/denoland/deno/issues/25867
		exec(`\
Add-Type -AssemblyName System.Windows.Forms
[System.Windows.Forms.MessageBox]::Show('${message.replace(/(['‘’])/g, '$1$1')}', '${title.replace(/(['‘’])/g, '$1$1')}', 0, [System.Windows.Forms.MessageBoxIcon]::Information)
`, { shell: 'powershell.exe' }).then(() => setDefaultStuff()).catch(console.error)
		return
	}
	
	if (in_docker || in_termux) return console.log(`[Notify] ${title}\n${message}`)
	
	// if linux, check notify-send for notifier workability
	if (process.platform === 'linux') try {
		const { stdout } = await exec('which notify-send')
		if (!stdout.trim()) return console.log(`[Notify] ${title}\n${message}`)
	} catch (e) {
		return console.log(`[Notify] ${title}\n${message}`)
	}
	
	return new Promise((resolve, reject) => notifier.notify({
		title,
		message,
		icon: __dirname + '/src/pages/favicon.ico',
		...options
	}, function (err, response, metadata) {
		if (err) reject(err)
		else resolve(response)
	}))
}
