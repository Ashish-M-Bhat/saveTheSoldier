const login = document.querySelector('#login');
const logout = document.querySelector('#logout');

login.hidden = localStorage.getItem('idToken');
logout.hidden = !login.hidden;

logout.addEventListener('click', function(event){
             event.preventDefault();
             localStorage.removeItem('idToken');
             login.hidden = false;
             logout.hidden = !login.hidden;
         });