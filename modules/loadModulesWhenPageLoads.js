const externalJsFiles = ["modules/setInitialPositions.js", "modules/darkModeToggle.js", "modules/leftFire.js", "modules/authentication/logout.js"];

externalJsFiles.forEach(eachScript => {
    const script = document.createElement('script');
    script.src = eachScript;
    script.type='module';
    document.body.appendChild(script);
  });
