/*
 * Snake Game in C - Compile to WebAssembly using Emscripten
 * 
 * Compilation command:
 * emcc game.c -o game.js -s WASM=1 -s EXPORTED_FUNCTIONS='["_init_game","_update_game","_get_snake","_get_food","_get_score","_set_direction","_reset_game"]' -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]' -O3
 * 
 * Or use the Makefile provided
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <emscripten.h>
#include <emscripten/html5.h>

#define GRID_SIZE 20
#define TILE_COUNT 20
#define MAX_SNAKE_LENGTH 400

typedef struct {
    int x;
    int y;
} Point;

typedef struct {
    Point snake[MAX_SNAKE_LENGTH];
    int snakeLength;
    Point food;
    int dx;
    int dy;
    int score;
    int gameRunning;
} GameState;

static GameState game;

// Initialize the game
EMSCRIPTEN_KEEPALIVE
void init_game() {
    game.snakeLength = 1;
    game.snake[0].x = 10;
    game.snake[0].y = 10;
    game.food.x = 15;
    game.food.y = 15;
    game.dx = 0;
    game.dy = 0;
    game.score = 0;
    game.gameRunning = 0;
}

// Generate new food position
void generate_food() {
    int valid = 0;
    while (!valid) {
        game.food.x = rand() % TILE_COUNT;
        game.food.y = rand() % TILE_COUNT;
        valid = 1;
        for (int i = 0; i < game.snakeLength; i++) {
            if (game.snake[i].x == game.food.x && game.snake[i].y == game.food.y) {
                valid = 0;
                break;
            }
        }
    }
}

// Update game state
EMSCRIPTEN_KEEPALIVE
int update_game() {
    if (!game.gameRunning || (game.dx == 0 && game.dy == 0)) {
        return 0; // Game not running or no direction set
    }

    // Calculate new head position
    Point newHead;
    newHead.x = game.snake[0].x + game.dx;
    newHead.y = game.snake[0].y + game.dy;

    // Check wall collision
    if (newHead.x < 0 || newHead.x >= TILE_COUNT || 
        newHead.y < 0 || newHead.y >= TILE_COUNT) {
        return -1; // Game over
    }

    // Check self collision (skip first segment which is current head)
    for (int i = 1; i < game.snakeLength; i++) {
        if (game.snake[i].x == newHead.x && game.snake[i].y == newHead.y) {
            return -1; // Game over
        }
    }

    // Move snake
    for (int i = game.snakeLength; i > 0; i--) {
        game.snake[i] = game.snake[i - 1];
    }
    game.snake[0] = newHead;

    // Check food collision
    if (newHead.x == game.food.x && newHead.y == game.food.y) {
        game.score++;
        game.snakeLength++;
        if (game.snakeLength >= MAX_SNAKE_LENGTH) {
            game.snakeLength = MAX_SNAKE_LENGTH;
        }
        generate_food();
        return 1; // Food eaten
    }

    return 0; // Normal update
}

// Get snake data (returns pointer to snake array)
EMSCRIPTEN_KEEPALIVE
Point* get_snake() {
    return game.snake;
}

// Get snake length
EMSCRIPTEN_KEEPALIVE
int get_snake_length() {
    return game.snakeLength;
}

// Get food position
EMSCRIPTEN_KEEPALIVE
Point get_food() {
    return game.food;
}

// Get score
EMSCRIPTEN_KEEPALIVE
int get_score() {
    return game.score;
}

// Set direction
EMSCRIPTEN_KEEPALIVE
void set_direction(int dx, int dy) {
    // Prevent reversing into itself
    if ((game.dx != 0 && dx == -game.dx) || (game.dy != 0 && dy == -game.dy)) {
        return;
    }
    game.dx = dx;
    game.dy = dy;
}

// Set game running state
EMSCRIPTEN_KEEPALIVE
void set_game_running(int running) {
    game.gameRunning = running;
}

// Reset game
EMSCRIPTEN_KEEPALIVE
void reset_game() {
    init_game();
    generate_food();
}

// Initialize food position on reset
EMSCRIPTEN_KEEPALIVE
void start_game() {
    game.gameRunning = 1;
    generate_food();
}

