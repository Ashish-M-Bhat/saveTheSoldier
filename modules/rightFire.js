import fireEvent from './fireEvent.js'

var timeoutId;

function triggerRightFire() {
    let rightFire = document.querySelector("#rightFire");
    var countOfRightFires = 0, maxDelay=15, minDelay=5;  
    countOfRightFires++;
    if(countOfRightFires <= 2){
        fireEvent(rightFire);
    }
    let randomTimeoutForRightFire =  Math.random() * (maxDelay - minDelay + 1) + minDelay ;
    timeoutId = setTimeout(triggerRightFire, randomTimeoutForRightFire*1000);
        
  }
  
export default triggerRightFire;


