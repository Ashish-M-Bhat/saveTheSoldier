

const submitLogin = document.getElementById('submitLogin');
    if(submitLogin)
    {
        submitLogin.addEventListener('click', function(event){
            event.preventDefault();
            const apiKey='AIzaSyA357y-kI6368NgHXnMI5pW77y71GqpGuw';
            const url= 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

            fetch(url+apiKey, {
                method:'POST',
                body:JSON.stringify({email:email.value,password:password.value}),
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
            });
    }

