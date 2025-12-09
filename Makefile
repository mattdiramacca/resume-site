# Makefile for compiling Snake game to WebAssembly
# Requires Emscripten SDK: https://emscripten.org/docs/getting_started/downloads.html

# Emscripten compiler
CC = emcc

# Compiler flags
CFLAGS = -O3 -s WASM=1
EXPORTED_FUNCTIONS = '_init_game','_update_game','_get_snake','_get_snake_length','_get_food','_get_score','_set_direction','_set_game_running','_reset_game','_start_game'
EXPORTED_RUNTIME = 'ccall','cwrap','UTF8ToString','stringToUTF8'

# Output files
OUTPUT_JS = game.js
OUTPUT_WASM = game.wasm

# Source file
SOURCE = game.c

.PHONY: all clean install help

all: $(OUTPUT_JS)

$(OUTPUT_JS): $(SOURCE)
	$(CC) $(SOURCE) -o $(OUTPUT_JS) \
		$(CFLAGS) \
		-s EXPORTED_FUNCTIONS='[$(EXPORTED_FUNCTIONS)]' \
		-s EXPORTED_RUNTIME_METHODS='[$(EXPORTED_RUNTIME)]' \
		-s ALLOW_MEMORY_GROWTH=1 \
		-s MODULARIZE=1 \
		-s EXPORT_NAME='createGameModule'

clean:
	rm -f $(OUTPUT_JS) $(OUTPUT_WASM) game.html

install:
	@echo "Installing Emscripten SDK..."
	@echo "Please visit: https://emscripten.org/docs/getting_started/downloads.html"
	@echo "Or use: git clone https://github.com/emscripten-core/emsdk.git"

help:
	@echo "Makefile for Snake Game WebAssembly Compilation"
	@echo ""
	@echo "Targets:"
	@echo "  make all     - Compile game.c to game.js (WebAssembly)"
	@echo "  make clean   - Remove compiled files"
	@echo "  make install - Show Emscripten installation instructions"
	@echo "  make help    - Show this help message"
	@echo ""
	@echo "Requirements:"
	@echo "  - Emscripten SDK must be installed and activated"
	@echo "  - Run: source emsdk/emsdk_env.sh (or emsdk_env.bat on Windows)"

