(function(){


    const eyeBtn = document.querySelector('#eye_button');

    const email = document.querySelector('#password');


      eyeBtn.addEventListener('click', (e)=>{
    const passwordInput = e.target.previousElementSibling;
    
    if(passwordInput.getAttribute('type') === 'password'){
        passwordInput.setAttribute('type', 'text');
        e.target.setAttribute('class', 'fa fa-eye-slash');
        eyeBtn.style.color = 'blue'
       
    }else{
        passwordInput.setAttribute('type', 'password');
        e.target.setAttribute('class', 'fa fa-eye');
        eyeBtn.style.color = '#333'
    }
   
})





   const form = document.getElementById('form');
   const emailid = document.getElementById('email');
   const password = document.getElementById('password');
   const message = document.querySelector('.message');
   
   form.addEventListener('submit', (e)=>{
       e.preventDefault();
    if(emailid.value === 'wajeed@intevest.in' && password.value === 'intevest'){
        document.location.href = 'index.html'
    }
    else{
        const p = document.createElement('p');
 
        p.innerText = 'Please enter correct mail and password!'
        p.style.color = 'red'
        message.appendChild(p);
 
 
        setTimeout(()=>{
            p.remove();
        },2000);
    }
   })

})()
