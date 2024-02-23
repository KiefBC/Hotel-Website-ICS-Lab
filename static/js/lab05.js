document.addEventListener('DOMContentLoaded', function () {
    initializeLoginButton();
    registerUser();
});

userLoggedIn = false;

const initializeLoginButton = () => {
    const navbar = document.querySelector('#navbarNav');
    const loginButton = document.createElement('button');

    if (userLoggedIn) {
        loginButton.innerText = 'Logout';
    } else {
        loginButton.innerText = 'Testing Login';
    }

    loginButton.classList.add('btn', 'btn-outline-success', 'ms-auto');
    loginButton.id = 'signup-log-btn';
    loginButton.type = 'button';
    loginButton.dataset.bsToggle = 'modal';
    loginButton.dataset.bsTarget = '#register-user-modal';

    navbar.appendChild(loginButton);
}

const registerUser = () => {
    const submitButton = document.getElementById('register-submit-btn');
    const registerForm = document.getElementById('register-user-form');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (registerForm.checkValidity()) {
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const userAge = document.getElementById('age').value;
            const userEmail = document.getElementById('email').value;
            const userPhone = document.getElementById('phone-number').value;
            const userAddress = document.getElementById('postal-code').value;

            console.log(firstName, lastName, userAge, userEmail, userPhone, userAddress);
        } else {
            console.log('Form is not valid, showing errors...');
            registerForm.reportValidity();
        }
    });
}
