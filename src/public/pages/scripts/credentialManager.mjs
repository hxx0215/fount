/**
 * 凭据管理器 - 用于安全地从 URL 参数中检索加密凭据
 * 仅用于支持自动登录功能（通过 URL 参数传递加密凭据）
 */
import CryptoJS from 'https://esm.sh/crypto-js'

/**
 * 获取用于加密/解密的密钥。
 * @param {string} secret - 密钥。
 * @returns {Promise<CryptoJS.lib.WordArray>} - 加密/解密密钥。
 */
async function getKey(secret) {
	const salt = CryptoJS.enc.Utf8.parse('fount-credential-salt')
	const keySize = 256 / 32 // 256-bit key, 32-bit words
	const iterations = 100000

	const key = CryptoJS.PBKDF2(secret, salt, {
		keySize,
		iterations,
		hasher: CryptoJS.algo.SHA256 // Use SHA256 as the hash algorithm
	})
	return key
}

/**
 * 解密 AES-256-CBC 加密的有效负载。
 * @param {string} encryptedJson 包含 iv 和内容的 JSON 字符串。
 * @param {string} secret 用于加密的密钥（UUID）。
 * @returns {Promise<string>} 解密的纯文本。
 */
async function decrypt(encryptedJson, secret) {
	try {
		const key = await getKey(secret)

		const data = JSON.parse(encryptedJson)
		const iv = CryptoJS.enc.Base64.parse(data.iv)

		const decrypted = CryptoJS.AES.decrypt(data.content, key, {
			iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		})

		const plaintext = decrypted.toString(CryptoJS.enc.Utf8)
		if (!plaintext)
			throw new Error('Decryption resulted in empty or invalid plaintext.')

		return plaintext
	}
	catch (e) {
		console.error('Decryption failed:', e)
		throw new Error('Could not decrypt data. The data may be corrupt or the key incorrect.')
	}
}

/**
 * 从 URL hash 检索并解密凭据。
 * 用于支持自动登录功能（通过 URL 参数传递加密凭据）。
 * @param {URLSearchParams} hashParams - URL hash 参数。
 * @param {string} uuid - fount 实例的 UUID。
 * @returns {Promise<string|null>} 解密的纯文本凭据（JSON 字符串）或 null。
 */
export async function retrieveAndDecryptCredentials(hashParams, uuid) {
	const encryptedFromHash = hashParams.get('encrypted_creds')
	if (!encryptedFromHash) return null

	const encryptedData = decodeURIComponent(encryptedFromHash)

	if (encryptedData && uuid)
		return decrypt(encryptedData, uuid)

	return null
}
