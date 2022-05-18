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
//check the length of userName and password
function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getCapFirstLetter(input)} need to be greater than ${min} character`)
    }
    else if(input.value.length > max){
        showError(input, `${getCapFirstLetter(input)} need to be less than ${max} character`);
    }
    else{
        showSuccess(input);
    }
}
// match password
function MatchPasswordCheck(input1, input2) {
    if (input1 !== input2) {
        showError(input2, `Password did not match`);
    }
}
form.addEventListener('submit', function(e){
    e.preventDefault();
     
    checkRequired([username,email,password,password2]);
    // console.log(username.value);
    checkLength(username, 3, 15) ;
    checkLength(password, 6, 25) ;
    MatchPasswordCheck(password, password2)
});