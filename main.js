import triggerLeftFire from './modules/leftFire.js'
import triggerRightFire from './modules/rightFire.js'
import triggerMidFire from './modules/midFire.js'
import displayModal from './modules/displayModal.js';
import addPointsToDB from './modules/Points/addPointsToDB.js';

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");


let startTime = performance.now();

(function startGame(){
  console.log("Game has Begun");
  setTimeout(()=>triggerLeftFire(), Math.random()*1000+1);
  setTimeout(()=> triggerMidFire(), (Math.random()*1000)+11);
  setTimeout(()=>triggerRightFire(), Math.random()*1000+5);

  // Unhide the STOP button & Hide the START button
  stop.hidden=false;
  start.hidden=true;

})();

  function stopGame(event){
    stop.removeEventListener('click', stopGame);
    const points = Math.ceil((performance.now()-startTime)/100);
    addPointsToDB(points);
    let htmlContent = `<div style="text-align:center;position:absolute; top:87px;left:225px">OUT! </div> <div style="text-align:center;position:absolute; top:200px;left:217px  "> Points: ` + points + `</div>`;

    displayModal(htmlContent, 'DoneModal', 2000);
  }

  stop.addEventListener('click', stopGame);
