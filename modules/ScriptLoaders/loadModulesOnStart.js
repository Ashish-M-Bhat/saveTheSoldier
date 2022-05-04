// Loads modules on start. These modules neededn't be loaded unnecessarily, when the page initially loads
// Includes modules responsible for setting arrow keys functionality and firing.
export default function loadModulesonStart(){
  const externalJsFiles = ["modules/arrowKeys.js", "modules/FireEvents/fireEvent.js", "modules/FireEvents/leftFire.js", "modules/FireEvents/midFire.js", "modules/FireEvents/rightFire.js"];

  console.log('Loading defered scripts...');
  externalJsFiles.forEach(eachScript => {
      const script = document.createElement('script');
      script.src = eachScript;
      script.type='module';
      script.defer = true;
      document.body.appendChild(script);
  })
}