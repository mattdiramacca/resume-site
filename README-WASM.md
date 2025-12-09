# WebAssembly Snake Game Setup

This guide explains how to compile the C Snake game to WebAssembly and use it in your website.

## Quick Start (Optimized JavaScript - Recommended)

The JavaScript version has been optimized and should be faster now. If you want even better performance, follow the WebAssembly setup below.

## WebAssembly Setup

### Prerequisites

1. **Install Emscripten SDK**:
   ```bash
   # Clone Emscripten
   git clone https://github.com/emscripten-core/emsdk.git
   cd emsdk
   
   # Install and activate
   ./emsdk install latest
   ./emsdk activate latest
   
   # On Windows (PowerShell):
   # .\emsdk install latest
   # .\emsdk activate latest
   ```

2. **Activate Emscripten** (run this each time you open a new terminal):
   ```bash
   # Linux/Mac:
   source ./emsdk_env.sh
   
   # Windows:
   emsdk_env.bat
   ```

### Compilation

1. **Using Makefile** (recommended):
   ```bash
   make all
   ```
   This will generate `game.js` and `game.wasm` files.

2. **Manual compilation**:
   ```bash
   emcc game.c -o game.js -s WASM=1 \
     -s EXPORTED_FUNCTIONS='["_init_game","_update_game","_get_snake","_get_snake_length","_get_food","_get_score","_set_direction","_set_game_running","_reset_game","_start_game"]' \
     -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]' \
     -s MODULARIZE=1 \
     -s EXPORT_NAME='createGameModule' \
     -O3
   ```

### Integration

1. **Update `index.html`** to load the WebAssembly module:
   ```html
   <!-- Add before dynamic.js -->
   <script src="game.js"></script>
   <script src="game-wasm.js"></script>
   ```

2. **Update `dynamic.js`** to use WebAssembly version:
   ```javascript
   // Replace the SnakeGame initialization with:
   document.addEventListener('DOMContentLoaded', async () => {
       initializeResume();
       
       // Try to load WebAssembly, fallback to JavaScript
       const wasmLoaded = await initWasmGame();
       if (wasmLoaded) {
           const game = new WasmSnakeGame('game-canvas');
           game.draw();
       } else {
           // Fallback to JavaScript version
           const game = new SnakeGame('game-canvas');
           game.draw();
       }
       
       // ... rest of initialization
   });
   ```

## Performance Comparison

- **JavaScript (optimized)**: ~100ms update rate, smooth on modern browsers
- **WebAssembly**: ~80ms update rate, potentially faster on lower-end devices

## Troubleshooting

1. **Emscripten not found**: Make sure you've activated the Emscripten environment
2. **Module not loading**: Check browser console for errors, ensure `game.js` and `game.wasm` are in the same directory
3. **CORS issues**: Serve files through a web server (not file://)

## Alternative: Just Use Optimized JavaScript

The JavaScript version has been optimized with:
- `requestAnimationFrame` for smoother rendering
- Faster update rate (100ms instead of 150ms)
- Better performance overall

For most use cases, the optimized JavaScript version should be sufficient!

