const externalJsFiles = ["modules/arrowKeys.js", "modules/fireEvent.js", "modules/leftFire.js", "modules/rightFire.js", "main.js"];

document.getElementById('start').addEventListener('click', function(){
  externalJsFiles.forEach(eachScript => {
      const script = document.createElement('script');
      script.src = eachScript;
      script.type='module';
      script.defer = true;
      document.body.appendChild(script);
  })
});