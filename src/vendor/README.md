# Vendor Dependencies

This directory contains all third-party dependencies that were previously loaded from external CDNs. All code has been localized to improve reliability and reduce dependency on external services.

## Directory Structure

```
vendor/
├── async-eval/          # JavaScript async evaluation library (steve02081504)
│   ├── browser.mjs      # Browser version (247K)
│   └── deno.mjs        # Deno/Node version (4.7K)
├── cap-widget/         # POW CAPTCHA widget (tiagozip)
│   └── widget.js       # Widget implementation (16K)
├── eslint-config/      # ESLint configuration (steve02081504)
│   └── deno.mjs        # ESLint rules and plugins (4KB)
├── icons/              # Icon resources (steve02081504)
│   └── icon.js         # Console icon display (349B)
├── markdown-deps/      # Markdown processing dependencies
│   └── index.mjs       # Re-exports from esm.sh (1.1K)
├── polyfills/          # Browser polyfills (steve02081504)
│   ├── browser.mjs     # Browser-specific polyfills (408B)
│   ├── core-js.mjs     # Core JavaScript polyfills (277K)
│   ├── css-anchor-positioning.mjs  # CSS anchor positioning (113K)
│   ├── index.mjs       # Main entry point (222B)
│   ├── popover-polyfill.mjs  # Popover API polyfill (12K)
│   └── ruffle.mjs      # Flash emulator (379K)
└── rpack/              # RisuAI compression format (kwaroran)
    └── rpack_bg.wasm   # WASM binary (27K)
```

**Total size: ~1.1MB**

Note: ESLint config uses standard npm packages which are managed separately.

## Updated Files

### Server-side files (Deno runtime):
- `src/server/timers.mjs` - Updated async-eval import
- `src/scripts/format.mjs` - Updated async-eval import

### Browser-side files:
- `src/pages/base.mjs` - Updated polyfills and icon.js paths
- `src/pages/scripts/template.mjs` - Updated async-eval import
- `src/pages/scripts/markdownConvertor.mjs` - Centralized markdown deps
- `src/pages/scripts/POWcaptcha.mjs` - Updated cap.js widget path
- `src/public/shells/home/public/src/ui.mjs` - Updated async-eval import
- `src/public/ImportHandlers/Risu/rpack.mjs` - Updated rpack.wasm path

### Configuration files:
- `eslint.config.mjs` - Updated ESLint config import

## Original Sources

All dependencies were downloaded from:

1. **steve02081504**:
   - async-eval: https://cdn.jsdelivr.net/gh/steve02081504/async-eval/
   - icons: https://cdn.jsdelivr.net/gh/steve02081504/fount/imgs/
   - polyfills: https://cdn.jsdelivr.net/gh/steve02081504/js-polyfill/
   - eslint-config: https://cdn.jsdelivr.net/gh/steve02081504/my-eslint-config/

2. **kwaroran**:
   - rpack: https://cdn.jsdelivr.net/gh/kwaroran/RisuAI@main/src/ts/rpack/

3. **tiagozip**:
   - cap.js: https://cdn.jsdelivr.net/npm/@cap.js/widget

4. **Markdown dependencies** (via esm.sh):
   - Currently re-exported from esm.sh for flexibility
   - Can be fully localized in the future if needed

## Polyfills Details

The polyfills directory contains browser compatibility shims that are loaded conditionally:

- **core-js** (277KB): Comprehensive JavaScript polyfills for modern features
- **css-anchor-positioning** (113KB): Polyfill for CSS anchor positioning API
- **popover-polyfill** (12KB): Polyfill for the HTML popover API
- **ruffle** (379KB): Flash Player emulator for legacy SWF content

These polyfills use feature detection to only load when necessary, ensuring optimal performance on modern browsers while maintaining compatibility with older ones.

## Notes

- `@steve02081504/virtual-console` is kept as npm dependency (not duplicated here)
- Markdown dependencies remain on esm.sh but are centralized through `markdown-deps/index.mjs`
- All paths have been updated to use relative imports from this vendor directory
- Polyfills are loaded asynchronously and use feature detection to avoid unnecessary overhead
