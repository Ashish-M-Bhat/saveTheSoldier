import fireEvent from './fireEvent.js'

var timeoutId;

function triggerMidFire() {
    let midFire = document.querySelector("#midFire");
    var countOfMidFires = 0, maxDelay=12, minDelay=2;  
    countOfMidFires++;
    if(countOfMidFires <= 2){
        fireEvent(midFire);
    }
    let randomTimeoutForMidFire =  Math.random() * (maxDelay - minDelay + 1) + minDelay ;
    timeoutId = setTimeout(triggerMidFire, randomTimeoutForMidFire*2000);
        
  }
  
export default triggerMidFire;


