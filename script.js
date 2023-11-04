const submitBtn = document.querySelector('#submit-btn');
const input = document.querySelectorAll('input');
const emailInput = document.querySelector('#email-input')
submitBtn.addEventListener("click",checkForm);

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

function checkForm(){
    for (const element of input) {
        if(element.value===''){
            element.classList.add('error')
            element.nextElementSibling.style.display='flex'
            if(element == emailInput){
                element.value = "email@example/com";
                element.style.color = " #FF7979";
                element.nextElementSibling.textContent='Email cannot be empty'
            }
        }else{
            element.classList.remove('error')
            element.nextElementSibling.style.display='none'
            if(element == emailInput && !isValidEmail(element.value)){
                element.nextElementSibling.style.display='flex'
                element.nextElementSibling.textContent='Looks like this is not an email'
            }
        }
    }
}

input.forEach(element => {
   element.addEventListener('input',()=>{
    element.nextElementSibling.style.display='none'
    element.classList.remove('error')
   }) 
});
emailInput.addEventListener('click',()=>{
    if(emailInput.value == 'email@example/com'){
        emailInput.value=''
        emailInput.style.color = "#3D3B48";
    }
})