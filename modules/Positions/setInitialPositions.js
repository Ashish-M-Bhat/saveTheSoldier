import isMobileDevice from '../isMobileDevice.js';
import getPositions from './getPositions.js';

// ----------------------------------------------------------------------------------------------
// Get the ids
const leftBow = document.querySelector("#leftBow");
const leftFire = document.querySelector("#leftFire");
const midBow = document.querySelector("#midBow");
const midFire = document.querySelector("#midFire");
const rightBow = document.querySelector("#rightBow");
const rightFire = document.querySelector("#rightFire");
const player = document.querySelector("#player");

// ----------------------------------------------------------------------------------------------
// Set initial postions got cannons, fire and possible player positions
const positions = getPositions();
leftBow.style.left = positions.leftBowPosition + "px";
leftFire.style.left = positions.leftFirePosition + "px";

midBow.style.left = positions.midBowPosition + "px";
midFire.style.left = positions.midFirePosition + "px";

rightBow.style.left = positions.rightBowPosition + "px";
rightFire.style.left = positions.rightFirePosition + "px";

player.style.left = positions.playerMidPosition + "px";

// ----------------------------------------------------------------------------------------------
// Code for toggleMenuBar. This hides the START button, leaderBoard, DarkMode toggler, Login/Logout button and unhides the STOP button and vice versa.

const toggleMenuBar = document.querySelector('#toggleMenuBar');
const stop = document.querySelector('#stop');

let initialToggleMarginTop = getComputedStyle(toggleMenuBar).marginTop;
toggleMenuBar.addEventListener('click', function(event){

    // If leaderBoard is visible, this means we are at home page. So hide the elements except STOP

    if(getComputedStyle(leaderBoard).display !== 'none'){
        for(let eachElementToBeHidden of menuBar.children){
            // If start was clicked, make the stop button visible & hide the toggleMenuBar button
            if(startHasBeenClicked){
                if(!isMobileDevice()){
                    stop.hidden=false;
                    stop.style.marginTop= '25vh';
                }
                toggleMenuBar.hidden = true;
            }
            if(eachElementToBeHidden !== stop)
                eachElementToBeHidden.style.display = 'none';
        }
        toggleMenuBar.innerHTML = '&#x25B6'; // >
        // Bring toggleMenuBar to ~ middle of the page, vertically
        toggleMenuBar.style.marginTop= '20%';
    }
    // Bring back all of them except stop, ofcourse!
    else if(getComputedStyle(leaderBoard).display === 'none'){
        for(let eachElementToBeShown of menuBar.children){
            if(eachElementToBeShown !== stop)
                eachElementToBeShown.style.display = '';
        }
        stop.hidden = true;
        toggleMenuBar.innerHTML = '&#x25C0'; // <
        toggleMenuBar.style.marginTop= initialToggleMarginTop;
    }
})