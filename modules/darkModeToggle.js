let darkModeToggle = document.getElementById("darkModeToggle");

const leftFire = document.querySelector("#leftFire");
const midFire = document.querySelector("#midFire");
const rightFire = document.querySelector("#rightFire");
const toggleMenuBar = document.querySelector("#toggleMenuBar");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const login = document.querySelector("#login");
const profile = document.querySelector("#profile");
const logout = document.querySelector("#logout");
const leaderBoard = document.querySelector("#leaderBoard");

// When window loads, check if darkMode was enabled last time. If yes, set the checkbox to true & dispatch the change event for the checkbox
window.addEventListener('load', function(){
    if(localStorage.getItem('darkMode')){
        console.log("Hit");
        darkModeToggle.checked = true;
        darkModeToggle.dispatchEvent(new Event('change'));
    }
});

// If checked, set the darkMode value to true on localstorage & set the darkMode to true in localStorage
// Note that the true is stored as a string
darkModeToggle.addEventListener('change', function(event){
   event.preventDefault();
   const elementsToBeChanged = [document.body, leftFire, midFire, rightFire, toggleMenuBar, start, stop, login, profile, logout, leaderBoard];

   if(event.target.checked){
       localStorage.setItem('darkMode', true);
       elementsToBeChanged.forEach(eachElement =>  eachElement.classList.add('darkMode'));
   }
   else{
    localStorage.removeItem('darkMode');
    elementsToBeChanged.forEach(eachElement => eachElement.classList.remove('darkMode'));
   }
});