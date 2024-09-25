//colocando todos os inputs como objeto. 
const userInputs = {
  name: document.getElementById("name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password")
}


function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
    const err = new Error('Email inválido.');
    err.input = "email";
    throw err;
  }
}

function validatePassword(password){
  if(password.length < 8 ||
      !password.match(/[a-z]/) || 
      !password.match(/[A-Z]/) || 
      !password.match(/\d/) || 
      !password.match(/[^a-zA-Z\s0-9]/)){
        
    const err = new Error('Senha inválida.');
    err.input = "password";
    throw err;

  }
}

function removeClassList() {
  document.querySelector("#email-error").textContent = "";
  document.querySelector("#name-error").textContent = "";
  document.querySelector("#password-error").textContent = "";

  userInputs.name.classList.remove('error');

  userInputs.email.classList.remove('error');
  
  userInputs.password.classList.remove('error');
}


const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  removeClassList();

  try {
    validateEmail(userInputs.email.value);
    validatePassword(userInputs.password.value);
    
  } catch (err) {
    
    userInputs[err.input].classList.add('error');
    document.querySelector(`#${err.input}-error`).textContent = err.message;
  }
});

