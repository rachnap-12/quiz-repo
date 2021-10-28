"use strict";

var canvas = document.getElementById("canvas");
canvas.getContext('3d'); //load images

var imageName = new Image();
imageName.src = "apple.png";
var audioName = new Audio();
audioName.src = ""; //draw images

canvas.Image(imageName, 40, 50, 20, 20); //draw snake

canvas.fillStyle = "red";
canvas.fillRect(100, 300, 30, 30); //

var box = 32;
canvas.fillStyle = "black";
canvas.fillRect(5 * box, 6 * box, 2 * box, 3 * box);

var draw = function draw() {};