import getPositions from "./Positions/getPositions.js";

// Adds functionality to move the player left or right
// For moving left, user can click the keys 'a' or 'A' or the left arrow key or LMB(Left Mouse Button)
// For moving right, user can click the keys 'd' or 'D' or the right arrow key or RMB(Right Mouse Button)

const player = document.querySelector("#player");

function movePlayerLeftOrRight(event){
  event.preventDefault();
  const positions = getPositions();
  let currentStyleOfPlayer = getComputedStyle(player);

  // User wishes to move left
  if(event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft' || event.type ==='click'){

      // If at Mid, move the player to Left else if at Right, move to Mid
      if(Math.abs(parseInt(currentStyleOfPlayer.left) - positions.playerMidPosition) < 10)
        player.style.left = positions.playerLeftPosition + "px";

      else if(Math.abs(parseInt(currentStyleOfPlayer.left) - positions.playerRightPosition) < 10)
                player.style.left = positions.playerMidPosition + "px";
  }

  // User wishes to move right
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