import triggerLeftFire from './modules/FireEvents/leftFire.js'
import triggerRightFire from './modules/FireEvents/rightFire.js'
import triggerMidFire from './modules/FireEvents/midFire.js'
import displayModal from './modules/displayModal.js';
import addPointsToDB from './modules/Points/addPointsToDB.js';
import loadModulesonStart from './modules/scriptLoaders/loadModulesOnStart.js';

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
let startTime;

start.addEventListener('click', function(event){
  startHasBeenClicked = true;
  const bgMusic = document.createElement('audio');
  backgroundMusic.muted = true;
  bgMusic.src='./styles/codmwBlackout.mp3';
  bgMusic.loop = true;
  document.body.appendChild(bgMusic);
  bgMusic.play();
  // Hide the menu bar
  toggleMenuBar.dispatchEvent(new Event('click'));
  [leftFire, midFire, rightFire, leftBow, midBow, rightBow, player].forEach(e => e.classList.remove('beforeStart'));

  loadModulesonStart();
  console.log("Game has Begun");
  startTime = performance.now();
  setTimeout(()=>triggerLeftFire(), Math.random()*1000+1);
  setTimeout(()=> triggerMidFire(), (Math.random()*1000)+11);
  setTimeout(()=>triggerRightFire(), Math.random()*1000+5);

  // Unhide the STOP button & Hide the START button
  stop.hidden=false;
  start.hidden=true;
});


function stopGame(){

  [leftFire, midFire, rightFire, leftBow, midBow, rightBow, player].forEach(e => e.hidden=true)

  // remove the event listener to avoid multiple triggering due to the arrows still fired.
  stop.removeEventListener('click', stopGame);

  const points = Math.ceil((performance.now()-startTime)/100);

  if(localStorage.getItem('userId')){
    // The addPointsToDB will call the location.reload() in it's cb, after fetch is executed, else the fetch fails since reload happens before the async request.
    addPointsToDB(points);
  }
  else{
    setTimeout(() => {
      location.reload();
    }, 1000);
  }

  let htmlContent = `<div style="text-align:center;position:absolute; top:87px;left:225px">OUT! </div> <div style="text-align:center;position:absolute; top:200px;left:217px  "> Points: ` + points + `</div>`;
  displayModal(htmlContent, 'DoneModal', 1000);
}

stop.addEventListener('click', stopGame);
