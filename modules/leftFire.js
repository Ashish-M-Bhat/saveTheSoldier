import fireEvent from './fireEvent.js'

var countOfLeftFires = 0, maxDelay=10, minDelay=0;

function triggerLeftFire() {
    countOfLeftFires = 0;
    let leftFire =document.querySelector("#leftFire");
    countOfLeftFires++;

    if(countOfLeftFires <= 2){
        fireEvent(leftFire);
    }
    let randomTimeoutForLeftFire =  Math.random() * (maxDelay - minDelay + 1) + minDelay ;
    //console.log(randomTimeoutForLeftFire);
    setTimeout(triggerLeftFire, randomTimeoutForLeftFire*1000)

  }

 export default triggerLeftFire;
