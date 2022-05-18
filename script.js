const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//eror message show
function showError(input, message) {        
    const formControl = input.parentElement;
    formControl.className = ' form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//Success message show
function showSuccess(input, message) {        
    const formControl = input.parentElement;
    formControl.className = ' form-control success';
}
//check requred fields
function checkRequired(inputArr) {
    inputArr.forEach(input => {
      if(input.value === ""){
        showError(input, `${getCapFirstLetter(input)} is requred`);
    }
    else {
        showSuccess(input);
    } 
    });
}
// get and captilise the first letter
function getCapFirstLetter(errorID) {
    return errorID.id.charAt(0).toUpperCase() + errorID.id.slice(1);

}
form.addEventListener('submit', function(e){
    e.preventDefault();
     
    checkRequired([username,email,password,password2]);
    // console.log(username.value);
});