const login = document.querySelector('#login');
const logout = document.querySelector('#logout');
const profile = document.querySelector("#profile");

// If user is not loged in, show the login button. Else display the logout button
login.hidden = localStorage.getItem('idToken');
logout.hidden = !login.hidden;
profile.hidden = !login.hidden;

// When profile button is clicked, redirect to showUserPoints page
profile.addEventListener('click', function(event){
    event.preventDefault();
    location.href='./modules/Points/showUserPoints.html';
});

// When user logs out, clear the localStorage, toggle the login/logout forms
logout.addEventListener('click', function(event){
             event.preventDefault();
             localStorage.clear();
             login.hidden = false;
             logout.hidden = !login.hidden;
             profile.hidden = !login.hidden;

             // Force a reolad, since the highlighting of leaderBoard needs to take place once userId is removed from localStorage
             location.reload();
         });