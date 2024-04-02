import {gameArea} from '../script.js'

//block parameters
export const blockRowCount = 5;
export const blockColumnCount = 8;
export const blockWidth = 83.75;
export const blockHeight = 20;
export const blockPadding = 10;
export const blockOffsetTop = 20;
export const blockOffsetLeft = 30;
//where we store block elements
export let blocksArr = [];

//creates a div for each block and stores them in the array
export function initializeBlocks() {
    //irritate over collumns
    console.log('export successful');
    for (let c = 0; c < blockColumnCount; c++) {
      blocksArr[c] = [];
      //irritate over each row in a collumn
      for (let r = 0; r < blockRowCount; r++) {
        //calculate positions based on row and column indexes
        const blockX = c * (blockWidth + blockPadding) + blockOffsetLeft + "px";
        const blockY = r * (blockHeight + blockPadding) + blockOffsetTop + "px";
        //create a new div for each block
        let blockElement = document.createElement("div");
        //add the block to each div based on these parameters
        blockElement.style.position = "absolute";
        blockElement.style.left = blockX;
        blockElement.style.top = blockY;
        blockElement.style.width = blockWidth + "px";
        blockElement.style.height = blockHeight + "px";
        blockElement.style.backgroundColor = "#0095DD";
        blockElement.style.display = "none";
        gameArea.appendChild(blockElement);
        blocksArr[c][r] = { element: blockElement, status: 1 };
      }
    }
}