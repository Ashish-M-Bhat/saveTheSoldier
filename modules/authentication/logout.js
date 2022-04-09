const login = document.querySelector('#login');
const logout = document.querySelector('#logout');
const profile = document.querySelector("#profile");

login.hidden = localStorage.getItem('idToken');
logout.hidden = !login.hidden;
profile.hidden = !login.hidden;

profile.addEventListener('click', function(event){
    event.preventDefault();
    location.href='./modules/Points/showUserPoints.html';
})
logout.addEventListener('click', function(event){
             event.preventDefault();
             localStorage.removeItem('idToken');
             localStorage.removeItem('userId');
             login.hidden = false;
             logout.hidden = !login.hidden;
             profile.hidden = !login.hidden;
         });