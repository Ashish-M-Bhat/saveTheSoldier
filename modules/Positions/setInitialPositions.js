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

// Code for toggleMenuBar

const toggleMenuBar = document.querySelector('#toggleMenuBar');
const menuBar = document.querySelector('#menuBar');

let initialToggleMarginTop = getComputedStyle(toggleMenuBar).marginTop;
let initialMenuDisplayType = getComputedStyle(menuBar).display;
toggleMenuBar.addEventListener('click', function(event){

    if(getComputedStyle(menuBar).display === 'flex'){
        menuBar.style.display = 'none';
        toggleMenuBar.innerHTML = '&#x25B6';
        toggleMenuBar.style.marginTop= '20%';
    }
    else if(getComputedStyle(menuBar).display === 'none'){
        menuBar.style.display = initialMenuDisplayType;
        toggleMenuBar.innerHTML = '&#x25C0';
        toggleMenuBar.style.marginTop= initialToggleMarginTop;
    }
})