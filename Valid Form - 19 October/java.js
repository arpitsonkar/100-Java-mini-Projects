let nE = document.querySelector("#name-error");
let pE = document.querySelector("#phone-error");
let eE = document.querySelector("#email-error");
let tE = document.querySelector("#text-error");
let sE = document.querySelector("#submit-error");

function validateName(){
    let name = document.querySelector("#full-name").value;

    if(name.length == 0){
        nE.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nE.innerHTML = 'Write full name';
        return false;
    }
    nE.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('phoneno').value;

    if(phone.length == 0){
        pE.innerHTML = 'number is required';
        return false;
    }

    if (phone.length !== 10){
        pE.innerHTML = 'should be 10 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        pE.innerHTML = 'numbers only';
        return false;
    }
    

    pE.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateEmail(){
    let email = document.getElementById('emailid').value;

    if(email.length == 0){
        eE.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        eE.innerHTML = 'Invalid email';
        return false;
    }

    eE.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateText(){
    let textsf = document.getElementById('textbox').value;

    if(textsf == 0){
        tE.innerHTML = 'Message is required';
        return false
    }
    tE.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateForm() {
    if (!validateName() && !validatePhone() && !validateEmail() && !validateText()) {
        sE.style.display = 'block';
        sE.innerHTML = 'Please fix errors to submit.';
        setTimeout(function() {
            sE.style.display = 'none';
        }, 3000);
        return false;
    }
}