import getPositions from "./getPositions.js";

const player = document.querySelector("#player");

document.addEventListener('keydown',function(event){
    const keyPressed = event.key;
    const positions = getPositions();

    let currentStyleOfPlayer = getComputedStyle(player);
    switch(keyPressed){
      case "ArrowLeft":
              // If at Mid, move to Left else if at Right, move to Mid
              if(Math.abs(parseInt(currentStyleOfPlayer.left) - positions.playerMidPosition) < 10){
                player.style.left = positions.playerLeftPosition + "px";
              }

              else if(Math.abs(parseInt(currentStyleOfPlayer.left) - positions.playerRightPosition) < 10)
                       player.style.left = positions.playerMidPosition + "px";
                  break;
      case "ArrowRight":
              // If at Left, move to Mid else if at Mid, move to Right
              if(Math.abs(parseInt(currentStyleOfPlayer.left) - positions.playerLeftPosition)< 10)
                    player.style.left = positions.playerMidPosition + "px";
                    else if(Math.abs(parseInt(currentStyleOfPlayer.left) - positions.playerMidPosition) < 10)
                        player.style.left = positions.playerRightPosition + "px";
                break;

    }
  });