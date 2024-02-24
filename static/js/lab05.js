document.addEventListener('DOMContentLoaded', function () {
    initializeLogin();
    registerUser();
    checkUserLoggedIn();
});

/**
 * Check if the user is logged in
 */
let userLoggedIn = false;

/**
 * Initialize the login button in the navbar
 * If the signup-log-btn does not exist, create a new button and add it to the navbar
 */
const initializeLogin = () => {
    const signUpButton = document.getElementById('signup-log-btn');
    const navbar = document.querySelector('#navbarNav');
    const modal = document.getElementById('register-user-modal');

    if (!signUpButton) {
        const loginButton = document.createElement('button');

        loginButton.innerText = 'Login';
        loginButton.classList.add('btn', 'btn-outline-success', 'ms-auto');
        loginButton.id = 'signup-log-btn';
        loginButton.type = 'button';
        loginButton.dataset.bsToggle = 'modal';
        loginButton.dataset.bsTarget = '#register-user-modal';

        navbar.appendChild(loginButton);

        modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content card">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="register-modal">Registration Form</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="register-user-form" class="was-validated" novalidate>
                        <div class="mb-3 input-group">
                            <label for="first-name" class="form-label" hidden>First Name</label>
                            <span class="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     class="bi bi-person-standing" viewBox="0 0 16 16">
                                    <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0"/>
                                </svg>
                            </span>
                            <input type="text" class="form-control" id="first-name" placeholder="Enter your first name..."
                                   required pattern="^[A-Za-z]+$">
                            <div class="valid-feedback text-center">Valid.</div>
                            <div class="invalid-feedback text-center">Please fill out this field.</div>
                        </div>
                        <div class="mb-3 input-group">
                            <label for="last-name" class="form-label" hidden>Last Name</label>
                            <span class="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     class="bi bi-person-walking" viewBox="0 0 16 16">
                                  <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/>
                                  <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/>
                                </svg>
                            </span>
                            <input type="text" class="form-control" id="last-name" placeholder="Enter your last name..."
                                   required pattern="^[A-Za-z]+$">
                            <div class="valid-feedback text-center">Valid.</div>
                            <div class="invalid-feedback text-center">Please fill out this field.</div>
                        </div>
                        <div class="mb-3 input-group">
                            <label for="age" class="form-label" hidden>Age</label>
                            <span class="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     class="bi bi-lungs-fill" viewBox="0 0 16 16">
                                  <path d="M8 1a.5.5 0 0 1 .5.5v5.243L9 7.1V4.72C9 3.77 9.77 3 10.72 3c.524 0 1.023.27 1.443.592.431.332.847.773 1.216 1.229.736.908 1.347 1.946 1.58 2.48.176.405.393 1.16.556 2.011.165.857.283 1.857.24 2.759-.04.867-.232 1.79-.837 2.33-.67.6-1.622.556-2.741-.004l-1.795-.897A2.5 2.5 0 0 1 9 11.264V8.329l-1-.715-1 .715V7.214c-.1 0-.202.03-.29.093l-2.5 1.786a.5.5 0 1 0 .58.814L7 8.329v2.935A2.5 2.5 0 0 1 5.618 13.5l-1.795.897c-1.12.56-2.07.603-2.741.004-.605-.54-.798-1.463-.838-2.33-.042-.902.076-1.902.24-2.759.164-.852.38-1.606.558-2.012.232-.533.843-1.571 1.579-2.479.37-.456.785-.897 1.216-1.229C4.257 3.27 4.756 3 5.28 3 6.23 3 7 3.77 7 4.72V7.1l.5-.357V1.5A.5.5 0 0 1 8 1m3.21 8.907a.5.5 0 1 0 .58-.814l-2.5-1.786A.5.5 0 0 0 9 7.214V8.33z"/>
                                </svg>
                            </span>
                            <input type="number" class="form-control" id="age" placeholder="Enter your age..." required min="0" max="120">
                            <div class="valid-feedback text-center">Valid.</div>
                            <div class="invalid-feedback text-center">Please fill out this field.</div>
                        </div>
                        <div class="mb-3 input-group">
                            <label for="email" class="form-label" hidden>Email address</label>
                            <span class="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     class="bi bi-postcard-fill" viewBox="0 0 16 16">
                                  <path d="M11 8h2V6h-2z"/>
                                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM2 5.5a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 0-1H2.5a.5.5 0 0 0-.5.5M2.5 7a.5.5 0 0 0 0 1H6a.5.5 0 0 0 0-1zM2 9.5a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 0-1H2.5a.5.5 0 0 0-.5.5m8-4v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5"/>
                                </svg>
                            </span>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email..." required pattern="[^@\\s]+@[^@\\s]+\\.[^@\\s]+">
                            <div class="valid-feedback text-center">Valid.</div>
                            <div class="invalid-feedback text-center">Please fill out this field.</div>
                        </div>
                        <div class="mb-3 input-group">
                            <label for="postal-code" class="form-label" hidden>Postal Code</label>
                            <span class="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     class="bi bi-fuel-pump-fill" viewBox="0 0 16 16">
                                  <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z"/>
                                </svg>
                            </span>
                            <input type="text" class="form-control" id="postal-code" placeholder="Enter your postal..."
                                   required pattern="^[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d$">
                            <div class="valid-feedback text-center">Valid.</div>
                            <div class="invalid-feedback text-center">Please fill out this field.</div>
                        </div>
                        <div class="mb-3 input-group">
                            <label for="phone-number" class="form-label" hidden>Phone Number</label>
                            <span class="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     class="bi bi-reception-4" viewBox="0 0 16 16">
                                  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </span>
                            <input type="tel" class="form-control" id="phone-number"
                                   placeholder="Enter your phone number..." required pattern="^(?:\\d{3}-\\d{3}-\\d{4}|\\d{10}|\\d{3} \\d{3} \\d{4})$">
                            <div class="valid-feedback text-center">Valid.</div>
                            <div class="invalid-feedback text-center">Please fill out this field.</div>
                        </div>
                    </form>
                    <div class="d-flex flex-column justify-content-center mb-3" id="register-response">
                    </div>
                    <p>Form Will Keep Correct Values</p>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="register-submit-btn">Submit</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="close-modal-button">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

/**
 * Logout the user
 * When the user logs out, the user card will be removed and the login button will be reset
 */
const logoutUser = () => {
    const userCard = document.getElementById('user-card');
    const userGreetings = document.getElementById('greet-user');

    if (userLoggedIn) {
        userLoggedIn = false;
        checkUserLoggedIn();

        userCard.classList.add('animate__animated', 'animate__fadeOut');
        userGreetings.classList.add('animate__animated', 'animate__slideOutUp');

        setTimeout(() => {
            userCard.remove();
            userGreetings.remove();
            /*
            I could not find a better way of doing this without breaking the animation(s) and the user experience
            I hate the refresh, but it works for now
             */
            window.location.reload();
        }, 1000);
    }

    initializeLogin();
}

/**
 * Check if the user is logged in
 * If the user is logged in, the button will display "Logout"
 * If the user is not logged in, the button will display "Login"
 */
const checkUserLoggedIn = () => {
    const loginButton = document.getElementById('signup-log-btn');

    if (userLoggedIn) {
        loginButton.innerText = 'Logout';
        loginButton.classList.remove('btn-outline-success');
        loginButton.classList.add('btn-outline-danger');

        loginButton.removeEventListener('click', registerUser);
        loginButton.addEventListener('click', logoutUser);
    } else {
        loginButton.innerText = 'Login';
        loginButton.classList.remove('btn-outline-danger');
        loginButton.classList.add('btn-outline-success');

        loginButton.setAttribute('data-bs-toggle', 'modal');
        loginButton.setAttribute('data-bs-target', '#register-user-modal');
    }
}

/**
 * Clear invalid inputs
 * If the user enters invalid input, the input will be cleared
 * If the user enters valid input, the input will remain
 */
const clearInvalidInputs = () => {
    const firstName = document.getElementById('first-name');
    if (!/^[A-Za-z]+$/.test(firstName.value)) {
        firstName.value = ''; // Clear if invalid
    }

    const lastName = document.getElementById('last-name');
    if (!/^[A-Za-z]+$/.test(lastName.value)) {
        lastName.value = ''; // Clear if invalid
    }

    const phoneNumber = document.getElementById('phone-number');
    if (!/^(?:\d{3}-\d{3}-\d{4}|\d{10}|\d{3} \d{3} \d{4})$/.test(phoneNumber.value)) {
        phoneNumber.value = ''; // Clear if invalid
    }

    const email = document.getElementById('email');
    if (!/[^@\s]+@[^@\s]+\.[^@\s]+/.test(email.value)) {
        email.value = ''; // Clear if invalid
    }

    const age = document.getElementById('age');
    if (age.value < 0 || age.value > 120) {
        age.value = ''; // Clear if invalid
    }

    const postalCode = document.getElementById('postal-code');
    if (!/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/.test(postalCode.value)) {
        postalCode.value = ''; // Clear if invalid
    }
};

/**
 * Register a new user
 * When the user submits the form, the user will be registered and a user card will be generated
 */
const registerUser = () => {
    const loginButton = document.getElementById('signup-log-btn');
    const submitButton = document.getElementById('register-submit-btn');
    const closeButton = document.getElementById('close-modal-button');
    const registerForm = document.getElementById('register-user-form');
    const modal = document.getElementById('register-user-modal');
    const formResponse = document.getElementById('register-response');
    const modalInstance = new bootstrap.Modal(modal);

    const modalDialog = document.querySelector('.modal-dialog');

    modal.addEventListener('show.bs.modal', () => {
        modalDialog.classList.remove('animate__lightSpeedInLeft');
        modalDialog.classList.add('animate__animated', 'animate__lightSpeedInRight', 'animate__slow');
        formResponse.innerHTML = '';
    });

    modal.addEventListener('hide.bs.modal', clearInvalidInputs);

    closeButton.addEventListener('click', () => {
        clearInvalidInputs();
        formResponse.innerHTML = '';
    });

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const userAge = document.getElementById('age').value;
        const userEmail = document.getElementById('email').value;
        const userPhone = document.getElementById('phone-number').value;
        const userAddress = document.getElementById('postal-code').value;

        if (registerForm.checkValidity()) {
            userLoggedIn = true;
            checkUserLoggedIn();

            welcomeUser(firstName, lastName);
            generateUserCard(firstName, lastName, userAge, userEmail, userPhone, userAddress);

            modalDialog.classList.remove('animate__lightSpeedInRight');
            modalDialog.classList.add('animate__hinge');

            /*
            If I don't do this, the animation won't work correctly - took me way to long to figure out
            Surely there is a better way to do this, but I couldn't find it
             */
            setTimeout(() => {
                modalInstance.hide();
            }, 1000);

            loginButton.removeAttribute('data-bs-toggle');
            loginButton.removeAttribute('data-bs-target');
            loginButton.removeEventListener('click', registerUser);
            loginButton.addEventListener('click', logoutUser);

        } else {
            console.log('Form is not valid, showing errors...');
            registerForm.reportValidity();

            const validationMessages = validateForm(firstName, lastName, userPhone, userEmail, userAge, userAddress);

            if (validationMessages.length > 0) {
                const responseDiv = document.getElementById('register-response');
                responseDiv.innerHTML = generateFormResponse(validationMessages);
            }
        }
    });
}

/**
 * Generate form response
 * If the user enters invalid input, the form will display an error message
 * @param validationMessages - array of validation messages
 */
const generateFormResponse = (validationMessages) => {
    return validationMessages.map(message => `<div class="alert alert-danger" role="alert">${message}</div>`).join('');
}

/**
 * Validate the form
 * @param firstName - user's first name
 * @param lastName - user's last name
 * @param phoneNumber - user's phone number
 * @param email - user's email
 * @param age - user's age
 * @param postalCode - user's postal code
 */
const validateForm = (firstName, lastName, phoneNumber, email, age, postalCode) => {
    let validationMessages = [];

    if (/[0-9]+$/.test(firstName)) {
        validationMessages.push('No digits allowed in First Name.');
    } else if (firstName === "") {
        validationMessages.push('First Name cannot be empty.');
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
        validationMessages.push('No spaces allowed in First Name.');
    }

    if (/[0-9]]+$/.test(lastName)) {
        validationMessages.push('No digits allowed in Last Name.');
    } else if (lastName === "") {
        validationMessages.push('Last Name cannot be empty.');
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
        validationMessages.push('No spaces allowed in Last Name.');
    }

    if (phoneNumber === "") {
        validationMessages.push('Phone Number cannot be empty.');
    } else if (/[a-zA-Z]$/.test(phoneNumber)) {
        validationMessages.push('Invalid phone number format. No characters allowed. (Yet...)');
    } else if (!/^(?:\d{3}-\d{3}-\d{4}|\d{10}|\d{3} \d{3} \d{4})$/.test(phoneNumber)) {
        validationMessages.push('Invalid phone number format. Use 000-000-0000, 0000000000, or 000 000 0000.');
    }

    if (email === "") {
        validationMessages.push('Email cannot be empty.');
    } else if (!/[^@\s]+@[^@\s]+\.[^@\s]+/.test(email)) {
        validationMessages.push('Invalid email format. Use email@email.com');
    }

    if (age === "") {
        validationMessages.push('Age cannot be empty.');
    } else if (age < 0 || age > 120 || !/^\d+$/.test(age)) {
        validationMessages.push('Invalid age. Must be between 0 and 120.');
    }

    if (postalCode === "") {
        validationMessages.push('Postal Code cannot be empty.');
    } else if (!/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/.test(postalCode)) {
        validationMessages.push('Invalid postal code format. Use ANANAN or ANA NAN format.');
    }

    return validationMessages;
}

/**
 * Welcome the user to the website
 * When the user logs in, a welcome message will be displayed in the navbar
 * @param firstName - user's first name
 * @param lastName - user's last name
 */
const welcomeUser = (firstName, lastName) => {
    const welcomeMessage = document.getElementById('greet-user');

    welcomeMessage.innerHTML = `
    <p class="align-items-center mb-0">Welcome ${firstName} ${lastName}!</p>
    `;
}

/**
 * Generate a user card
 * When the user logs in, a user card will be generated with the user's information
 * The user card will be displayed below the navbar
 * @param firstName - user's first name
 * @param lastName - user's last name
 * @param age - user's age
 * @param email - user's email
 * @param phone - user's phone number
 * @param address - user's postal code
 */
const generateUserCard = (firstName, lastName, age, email, phone, address) => {
    const navbar = document.querySelector('nav');
    const userCard = document.createElement('div');
    userCard.classList.add('container', 'animate__jackInTheBox', 'animate__animated', 'animate__slow');

    userCard.innerHTML = `
    <div class="col-md-6 my-5 px-5 mx-auto" id="user-card">
        <div class="card">
          <div class="card-header">
            <h5 class="text-center mt-3">User Account</h5>
          </div>
            <div class="card-body py-1">
                <div class="row" id="hotel-rooms-cards">
                    <div class="col-md d-flex flex-column">
                        <img src="static/img/portrait.jpg" class="img-fluid rounded-3" alt="face">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <p class="card-text text-center"><span class="fw-bolder fs-5">${firstName} ${lastName}</span><br><span class="text-warning fw-bolder">${email}</span></p>
                            </li>
                            <li class="list-group-item"><p class="card-text text-center">Age: <span class="text-danger fw-bold">${age}</span></p></li>
                            <li class="list-group-item"><p class="card-text text-center">Postal Code: <span class="text-success fw-bold">${address}</span></p></li>
                            <li class="list-group-item"><p class="card-text text-center">Phone: <span class="text-info fw-bold">${phone}</span></p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    navbar.parentNode.insertBefore(userCard, navbar.nextSibling);
}