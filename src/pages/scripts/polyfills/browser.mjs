// Browser-specific polyfills
// Replaces: https://cdn.jsdelivr.net/gh/steve02081504/js-polyfill/browser.mjs

if (!('anchorName' in document.documentElement.style))
	import('./css-anchor-positioning.mjs').catch(_ => 0)

if (!('popover' in HTMLElement.prototype))
	await import('./popover-polyfill.mjs').catch(_ => 0)

if (!navigator?.plugins?.['Shockwave Flash'])
	await import('./ruffle.mjs').catch(_ => 0)
