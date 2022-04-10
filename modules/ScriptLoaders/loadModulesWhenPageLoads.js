const externalJsFiles = ["modules/Positions/setInitialPositions.js", "modules/darkModeToggle.js", "modules/Authentication/logout.js", "modules/Points/leaderBoard.js", "main.js"];

externalJsFiles.forEach(eachScript => {
    const script = document.createElement('script');
    script.src = eachScript;
    script.type='module';
    document.body.appendChild(script);
  });
