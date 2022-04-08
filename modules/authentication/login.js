function loginOrSignup(event){
    event.preventDefault();

    const apiKey='AIzaSyA357y-kI6368NgHXnMI5pW77y71GqpGuw';
    const url= event.target.id ==='loginHandler'?'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=': 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';

    const email = event.target.id ==='loginHandler'? loginEmail.value:signupEmail.value;
    const password = event.target.id ==='loginHandler'? loginPassword.value:signupPassword.value;

    fetch(url+apiKey, {
        method:'POST',
        body:JSON.stringify({email:email, password:password}),
        headers:{'Content-type':'application/json'}
      })
      .then(response => {
        if(response.ok){
          return response.json();

        }
        else{
          alert('fail');

        }
      })
      .then(data => {
        localStorage.setItem('idToken', data.idToken);
        location.href = "../../";
      })
      .catch((e)=> alert(e));
}

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

const loginHandler = document.getElementById('loginHandler');
const signupHandler = document.getElementById('signupHandler');

const createAccount = document.getElementById('createAccount');
const alreadyHaveAccount = document.getElementById('alreadyHaveAccount');

loginHandler.addEventListener('click', loginOrSignup);
signupHandler.addEventListener('click', loginOrSignup);

createAccount.onclick = (event)=>{
    event.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = '';
};

alreadyHaveAccount.onclick = (event)=>{
    event.preventDefault();

    loginForm.style.display = '';
    signupForm.style.display = 'none';
};