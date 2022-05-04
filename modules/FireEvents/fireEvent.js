import getPositions from "../Positions/getPositions.js";

// Gets called by Left, Mid & RightFireEvent()
// For an interval of 30ms, it updates each fire by adding valuse to style.top
// If the fire has reached bottom and player is at that position, displatch an event listener for stopButton
// If the fire has reached bottom and player isn't hit, move the fire to dead bottom and then rest the style.top
export default function fireEvent(elementToBeFired){
    setInterval(()=>{
        let player = document.getElementById("player");
        let currentFireStyle = getComputedStyle(elementToBeFired);
        const positions = getPositions();

        // If arrow has reached bottom
        if(parseInt(currentFireStyle.top) > window.innerHeight-145){

          // Player is still on the same side
          if((
            (elementToBeFired.id === 'leftFire') && Math.abs(parseInt(getComputedStyle(player).left) - positions.playerLeftPosition) < 10) ||
              ((elementToBeFired.id === 'midFire') && Math.abs(parseInt(getComputedStyle(player).left) - positions.playerMidPosition) < 10) ||
              ((elementToBeFired.id === 'rightFire') && Math.abs(parseInt(getComputedStyle(player).left) - positions.playerRightPosition) < 10)
          )
          {
            const stopButton = document.querySelector("#stop")
            if(stopButton)
              stopButton.dispatchEvent(new Event('click'));
          }
          // else if the soldier isn't hit & the fire HASN'T reached the dead bottom, move it down
          // Notice the inerHeight/10 being subracted. This it to prevent the window being scrolled down for a split second each time the fire reaches the bottom
          else if(parseInt(currentFireStyle.top) < window.innerHeight - innerHeight/10) {
            elementToBeFired.style.top= parseInt(currentFireStyle.top) + (window.innerHeight/68.6) + "px";
          }
          // else, reset it to the top.
          else{
            elementToBeFired.style.top = "0px";
          }


        }
        // If the arrow has reached the bottom stage.
        else
           elementToBeFired.style.top= parseInt(currentFireStyle.top) + (window.innerHeight/68.6) + "px";
      },30);
}