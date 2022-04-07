import triggerLeftFire from './modules/leftFire.js'
import triggerRightFire from './modules/rightFire.js'
import triggerMidFire from './modules/midFire.js'

const stop = document.querySelector("#stop");

let startTime = performance.now();

(function startGame(){
  console.log("Game has Begun");
  setTimeout(()=>triggerLeftFire(), Math.random()*1000+1);
  setTimeout(()=> triggerMidFire(), (Math.random()*1000)+11);
  setTimeout(()=>triggerRightFire(), Math.random()*1000+5);
  
  // Enable the STOP button
  stop.disabled=false;

})();

(function stopGame(){
  stop.addEventListener('click', function(event){
    (function tempAlert(){
      var el = document.createElement("div");
      //el.setAttribute("style","position:absolute;top:500px;left:500px;background-color:red;height:500px;width:500px;color:white;");
      el.style.cssText = `position:absolute;
                          top:300px;
                          left:800px;
                          background-color:red;
                          height:300px;
                          width:500px;
                          color:white`;

      el.innerHTML = `OUT!\n Pointes: ${Math.ceil(performance.now()-startTime)/100}`;
      setTimeout(function(){
        el.parentNode.removeChild(el);
      },3000);

      document.body.appendChild(el);
      })();

      //location.reload();
      setTimeout(()=> location.reload(), 1000);    
  });  
})();

