let darkModeToggle = document.getElementById("darkModeToggle");

const leftFire = document.querySelector("#leftFire");
const midFire = document.querySelector("#midFire");
const rightFire = document.querySelector("#rightFire");

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
   const elementsToBeChanged = [document.body, leftFire, midFire, rightFire];

   if(event.target.checked){
       localStorage.setItem('darkMode', true);
       elementsToBeChanged.forEach(eachElement =>  eachElement.classList.add('darkMode'));
   }
   else{
    localStorage.removeItem('darkMode');
    elementsToBeChanged.forEach(eachElement => eachElement.classList.remove('darkMode'));
   }
});