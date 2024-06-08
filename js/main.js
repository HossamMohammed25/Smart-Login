let signupName = document.getElementById('signupName');
let signupEmail = document.getElementById('signupEmail');
let signupPassword = document.getElementById('signupPassword');
let signupBtn = document.getElementById('signupBtn');
let invalidName = document.getElementById('invalidName')
let invalidEmail = document.getElementById('invalidEmail')
let invalidPassword = document.getElementById('invalidPassword')
let exist = document.getElementById('exist')
let inputs = [];

/*-------------------------------------------------------       Sign up Page  --------------------------------------------------------*/
let usernameValue = localStorage.getItem('hamada');
if (usernameValue) {
    document.getElementById('username').innerHTML = 'Welcome ' + usernameValue;
}
if (localStorage.getItem('inputsContainer') !== null) {
    inputs = JSON.parse(localStorage.getItem('inputsContainer'))

}

function inputData() {
    if (validationName() == true && validationEmail() == true && validationPassword()) {
        let data = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value,

        }


        inputs.push(data);
        localStorage.setItem('inputsContainer', JSON.stringify(inputs))


        signupName.classList.remove('is-invalid')
        signupEmail.classList.remove('is-invalid')
        signupPassword.classList.remove('is-invalid')
        document.getElementById('exist').innerHTML = ('success')
        exist.style.cssText = `
        color:#28a745;
        `
    } else {
        signupName.classList.add('is-invalid')
        signupEmail.classList.add('is-invalid')
        signupPassword.classList.add('is-invalid')

    }
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        invalidName.classList.add('d-none')
        document.getElementById('exist').innerHTML = ('All inputs is required')
        exist.style.cssText = `
        color:#dc3545;
        `
    }
    clearInputs()

}




if (signupBtn !== null) {
    signupBtn.addEventListener('click', inputData)

    function validationName() {
        var regex = /^\w{3,}(\s+\w+)*$/gm;
        var text = signupName.value;

        if (regex.test(text)) {
            signupName.classList.add('is-valid')
            signupName.classList.remove('is-invalid')
            invalidName.classList.add('d-none')

            return true;

        } else {
            signupName.classList.remove('is-valid')
            signupName.classList.add('is-invalid')
            invalidName.classList.remove('d-none')
            return false;
        }

    }
    signupName.addEventListener('input', validationName)

    function validationEmail() {
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-.]+$/
        var text = signupEmail.value;
        if (regex.test(text)) {
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
                    document.getElementById('exist').innerHTML = ('Your Email Already Exist')
                    exist.style.cssText = `
                    color:#dc3545;
                    `
                    return false
                }
            }
            signupEmail.classList.add('is-valid')
            signupEmail.classList.remove('is-invalid')
            invalidEmail.classList.add('d-none')
            return true;
        } else {

            signupEmail.classList.remove('is-valid')
            signupEmail.classList.add('is-invalid')
            invalidEmail.classList.remove('d-none')
            return false;
        }
    }

    signupEmail.addEventListener('input', validationEmail)

    function validationPassword() {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        var text = signupPassword.value;
        if (regex.test(text)) {
            signupPassword.classList.add('is-valid')
            signupPassword.classList.remove('is-invalid')
            invalidPassword.classList.add('d-none')
            return true;
        } else {
            signupPassword.classList.remove('is-valid')
            signupPassword.classList.add('is-invalid')
            invalidPassword.classList.remove('d-none')

            return false;
        }

    }
    signupPassword.addEventListener('input', validationPassword)

}


function clearInputs() {
    signupName.value = '';
    signupEmail.value = '';
    signupPassword.value = '';
}


/*-------------------------------------------------------       Sign in Page  --------------------------------------------------------*/
let signinEmail = document.getElementById('signinEmail')
let signinPassword = document.getElementById('signinPassword')
let signinBtn = document.getElementById('signinBtn')
let invalidInEmail = document.getElementById('invalidInEmail')
let invalidInPassword = document.getElementById('invalidInPassword')
let incorrect = document.getElementById('incorrect')

if (signinBtn !== null) {
    signinBtn.addEventListener('click', signinFun)
    function validationEmailIn() {
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-.]+$/
        var text = signinEmail.value;
        if (regex.test(text)) {

            signinEmail.classList.add('is-valid')
            signinEmail.classList.remove('is-invalid')
            invalidInEmail.classList.add('d-none')
            return true;
        } else {

            signinEmail.classList.remove('is-valid')
            signinEmail.classList.add('is-invalid')
            invalidInEmail.classList.remove('d-none')
            return false;
        }
    }
    signinEmail.addEventListener('input', validationEmailIn)

    function validationPasswordIn() {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        var text = signinPassword.value;
        if (regex.test(text)) {
            signinPassword.classList.add('is-valid')
            signinPassword.classList.remove('is-invalid')
            invalidInPassword.classList.add('d-none')
            return true;
        } else {
            signinPassword.classList.remove('is-valid')
            signinPassword.classList.add('is-invalid')
            invalidInPassword.classList.remove('d-none')

            return false;
        }

    }
    signinPassword.addEventListener('input', validationPasswordIn)


    function signinFun() {
        let email = signinEmail.value;
        let password = signinPassword.value;


        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].email.toLowerCase() == email.toLowerCase() && inputs[i].password.toLowerCase() == password.toLowerCase()) {
                localStorage.setItem('hamada', inputs[i].name);
                document.getElementById('incorrect').innerHTML = ('success');
                incorrect.style.cssText = `
                color:#28a745;
                `;
                window.location.href = './home.html';
            } else {
                signinEmail.classList.add('is-invalid');
                signinPassword.classList.add('is-invalid');
                document.getElementById('incorrect').innerHTML = "Invalid Email OR Password";
                incorrect.style.cssText = `
        color:#dc3545;
        `;
                    
            }
            if (signinEmail.value == "" || signinPassword.value == "") {
                invalidInEmail.classList.add('d-none');
                document.getElementById('incorrect').innerHTML = ('All inputs is Empty');
                incorrect.style.cssText = `
                color:#dc3545;
                `;
            }

        }



    }


}

