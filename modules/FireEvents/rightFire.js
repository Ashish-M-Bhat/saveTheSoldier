import fireEvent from './fireEvent.js'

var timeoutId;

// Responsible for firing the right most cannon
// Calls fireEvent() by passing the id of the right cannon

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


