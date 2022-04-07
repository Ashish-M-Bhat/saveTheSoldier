import getPositions from './getPositions.js';

const leftBow = document.querySelector("#leftBow");
const leftFire = document.querySelector("#leftFire");
const midBow = document.querySelector("#midBow");
const midFire = document.querySelector("#midFire");
const rightBow = document.querySelector("#rightBow");
const rightFire = document.querySelector("#rightFire");
const player = document.querySelector("#player");

const positions = getPositions();
leftBow.style.left = positions.leftBowPosition + "px";
leftFire.style.left = positions.leftFirePosition + "px";

midBow.style.left = positions.midBowPosition + "px";
midFire.style.left = positions.midFirePosition + "px";

rightBow.style.left = positions.rightBowPosition + "px";
rightFire.style.left = positions.rightFirePosition + "px";

player.style.left = positions.playerMidPosition + "px";