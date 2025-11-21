// Local polyfill entry point
// Replaces: https://cdn.jsdelivr.net/gh/steve02081504/js-polyfill/index.mjs

await import('./core-js.mjs').catch(_ => 0)

if (globalThis.document) await import('./browser.mjs').catch(_ => 0)
