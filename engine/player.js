import { BOARD_HEIGHT, BOARD_WIDTH, gameArea, playerObj } from "../script.js";

export function initializePlayer() {
    let playerDiv = document.createElement("div");
    playerDiv.id = "player"
    playerDiv.style.position = "absolute";
    playerDiv.style.left = playerObj.x + "px";
    playerDiv.style.top = playerObj.y + "px";
    playerDiv.style.width = playerObj.width + "px";
    playerDiv.style.height = playerObj.height + "px";
    playerDiv.style.backgroundColor = "#FFFFFF";
    playerDiv.style.display = "none";
    gameArea.appendChild(playerDiv);
}