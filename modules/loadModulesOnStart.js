
export default function loadModulesonStart(){
  const externalJsFiles = ["modules/arrowKeys.js", "modules/fireEvent.js", "modules/leftFire.js", "modules/rightFire.js"];

  console.log('Loading defered scripts...');
  externalJsFiles.forEach(eachScript => {
      const script = document.createElement('script');
      script.src = eachScript;
      script.type='module';
      script.defer = true;
      document.body.appendChild(script);
  })
}