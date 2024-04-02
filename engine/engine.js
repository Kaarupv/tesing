import * as update from './update.js'
import {targetFrameTime} from '../script.js'

let lastFrame = 0;
let currentFrame;
let fps;
var startTime;
var deltaTime;

export function GameLoop(time) {
  if (startTime === undefined) {
    startTime = time;
  } else {
    currentFrame = Math.round((time - startTime) / targetFrameTime);
    deltaTime = (currentFrame - lastFrame) * targetFrameTime;
  }

  if (deltaTime !== 0) {
    update.update(deltaTime);
    fps = Math.ceil(1000 / deltaTime);
    console.log(fps);
    document.getElementById("fpsOut").textContent = fps;
    document.getElementById("dt").textContent = deltaTime;
  }

  lastFrame = currentFrame;
  window.requestAnimationFrame(GameLoop);
}