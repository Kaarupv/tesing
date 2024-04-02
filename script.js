//////////////////////
// GLOBAL VARIABLES //
//////////////////////

//main game area
export const gameArea = document.getElementById("game-area");
export const BOARD_WIDTH = 800;
export const BOARD_HEIGHT = 600;
//welcome screen definition
const welcomeScreen = document.getElementById("welcome-screen");

//boolen to track game start/stop
let gameStarted = false;


//Player parameters and object
export const playerWidth = 80;
export const playerHeight = 10;
export const STARTING_POS_X = BOARD_WIDTH / 2 - playerWidth / 2;

export var playerObj = {
  width: playerWidth,
  height: playerHeight, 
  x: STARTING_POS_X, 
  y: BOARD_HEIGHT - playerHeight - 20
};

export var playerVelocity = 370;

//Framerate variables
let targetFPS = 60;
export let targetFrameTime = 1000 / targetFPS;

/////////////
// IMPORTS //
/////////////


import * as blocks from '/engine/blocks.js'
import * as engine from '/engine/engine.js'
import * as player from '/engine/player.js'

////////////////////
// Initialization //
////////////////////

gameArea.style.width = BOARD_WIDTH + 'px';
gameArea.style.height = BOARD_HEIGHT + 'px';

blocks.initializeBlocks();
player.initializePlayer();

//If the game has not started it shows the welcome screen
function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    welcomeScreen.style.display = "none";
    document.getElementById("level-selection").style.display = "flex";
  }
}

//basic level selection function, not done yet...
function selectLevel(level) {
  document.getElementById("level-selection").style.display = "none";
  blocks.blocksArr.forEach((column) => {
    column.forEach((block) => {
      if (block.status === 1) {
        block.element.style.display = "block";
      }
    });
  });
  document.getElementById("player").style.display = "block";
}

/////////////////////
// Event listeners //
/////////////////////

//event listener for each level
document.querySelectorAll(".level-btn").forEach((button) => {
  button.addEventListener("click", function () {
    selectLevel(this.getAttribute("data-level"));
  });
});

export let moveLeft = false;
export let moveRight = false;
export let globalID;


document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight" && gameStarted) {
    moveRight = true;
  } else if (event.code === "ArrowLeft" && gameStarted) {
    moveLeft = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowRight" && gameStarted) {
    moveRight = false;
  } else if (event.code === "ArrowLeft" && gameStarted) {
    moveLeft = false;
  }
});

//Listens for space and if game is not started it starts it
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !gameStarted) {
    startGame();
  }
});

////////////////////
// Start gameloop //
////////////////////

window.requestAnimationFrame(engine.GameLoop);