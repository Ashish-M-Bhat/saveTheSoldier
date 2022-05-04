// Loads those module which are needed immedietly when the page loads
// Includes modules for setting inital positions of divs, setting the theme(dark/standard mode), displaying login/logout buttons, displaying leaderBoard and th emain.js

const externalJsFiles = ["modules/Positions/setInitialPositions.js", "modules/darkModeToggle.js", "modules/Authentication/logout.js", "modules/Points/leaderBoard.js", "main.js"];

externalJsFiles.forEach(eachScript => {
    const script = document.createElement('script');
    script.src = eachScript;
    script.type='module';
    document.body.appendChild(script);
  });
