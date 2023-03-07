"use strict"

//=== Goal: very simple square fractal================================
let canvasf1 = document.getElementById("canvasF1");
let cf1 = canvasf1.getContext("2d");
let generation = 1;



drawSquaresDiag(generation, 100,100, 200, 200);
function drawSquaresDiag(generation, topX, topY, side ){
  if (generation >=3){
    return;
  }
 // cf1.globalAlpha = 1/generation;
  if (generation%2==0){
    cf1.fillStyle = "rgb(255, 0, 0)";
  }
  else {
    cf1.fillStyle = "rgb(0, 0, 255)";
  }
  cf1.fillRect(topX, topY, side, side);
  drawSquaresDiag(generation+1, topX+side*1/3, topY+side*1/3, side*4/5, side*4/5);
}

