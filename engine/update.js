import { BOARD_HEIGHT, BOARD_WIDTH, playerObj, moveLeft, moveRight, globalID, playerVelocity} from '../script.js'

export function updatePlayer(deltaTime) {
  let playerDiv = document.getElementById("player")
  let movement;


  if (moveLeft) {
    movement = playerObj.x - (deltaTime * playerVelocity / 1000);
    playerObj.x = Math.max(movement, 0);
  }

  if (moveRight) {
    movement = playerObj.x + (deltaTime * playerVelocity / 1000);
    playerObj.x = Math.min(movement, BOARD_WIDTH - playerObj.width);
  }

  playerDiv.style.left = playerObj.x + 'px';
  
}

export function update(progress) {
    updatePlayer(progress);
}