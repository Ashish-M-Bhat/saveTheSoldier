import getPositions from "./Positions/getPositions.js";

const player = document.querySelector("#player");

function movePlayerLeftOrRight(event){
  event.preventDefault();
  const positions = getPositions();
  let currentStyleOfPlayer = getComputedStyle(player);

  if(event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft' || event.type ==='click'){

      // If at Mid, move to Left else if at Right, move to Mid
      if(Math.abs(parseInt(currentStyleOfPlayer.left) - positions.playerMidPosition) < 10)
        player.style.left = positions.playerLeftPosition + "px";

      else if(Math.abs(parseInt(currentStyleOfPlayer.left) - positions.playerRightPosition) < 10)
                player.style.left = positions.playerMidPosition + "px";
  }

  else if(event.key === 'd' || event.key === 'D'|| event.key === 'ArrowRight' || event.type ==='contextmenu'){

      // If at Left, move to Mid else if at Mid, move to Right
      if(Math.abs(parseInt(currentStyleOfPlayer.left) - positions.playerLeftPosition)< 10)
        player.style.left = positions.playerMidPosition + "px";

      else if(Math.abs(parseInt(currentStyleOfPlayer.left) - positions.playerMidPosition) < 10)
          player.style.left = positions.playerRightPosition + "px";
  }

}

document.addEventListener('keydown',movePlayerLeftOrRight);
document.addEventListener('click', movePlayerLeftOrRight);
document.addEventListener('contextmenu', movePlayerLeftOrRight);