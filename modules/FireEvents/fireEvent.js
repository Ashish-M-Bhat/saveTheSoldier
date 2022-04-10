import getPositions from "../Positions/getPositions.js";

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
          // else if the elefante isn't hit by an arrow & arrow HASN'T reached the dead bottom, move it down
          // Notice the inerHeight/10 being subracted. This it to prevent the window being scrolled down for a split second each time the fire reaches the bootom
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

/* Note : The bottom stage has two parts:
            1. When the arrow hits the elefante
            2. Arrow reaches all the way down since the elefante has avoided the arrow
*/