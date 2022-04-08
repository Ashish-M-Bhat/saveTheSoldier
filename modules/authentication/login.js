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

const loginHandler = document.getElementById('loginHandler');
const signupHandler = document.getElementById('signupHandler');
const createAccountOrAlreadyHaveAccount = document.getElementById('createAccountOrAlreadyHaveAccount');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginHandler.addEventListener('click', loginOrSignup);
signupHandler.addEventListener('click', loginOrSignup);

createAccountOrAlreadyHaveAccount.addEventListener('click', (event)=>{
    event.preventDefault();
    let currentPage = getComputedStyle(signupForm).display === 'none'?'loginPage':'signupPage';
    if(currentPage === 'loginPage'){
        createAccountOrAlreadyHaveAccount.textContent = 'Already have an Account?';
        loginForm.style.display = 'none';
        signupForm.style.display = '';
    }
    else if(currentPage === 'signupPage'){
        createAccountOrAlreadyHaveAccount.textContent = 'Create an Acount';
        loginForm.style.display = '';
        signupForm.style.display = 'none';
    }
});

