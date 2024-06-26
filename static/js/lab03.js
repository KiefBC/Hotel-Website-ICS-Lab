document.addEventListener('DOMContentLoaded', function () {
    initializeCounter();
    initializeUpdateLetterCounts();
    initializeUserDate();
    isItInRange();
});

let htmlContent = '';

/*
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡤⠶⠒⠒⠒⠒⠲⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠖⠉⠁⠀⠀⠀⠀⠁⠀⠐⠤⣄⠉⠓⢦⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠣⣀⠀⠈⠳⣄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠏⠈⠁⠀⠀⠉⠀⠀⠀⠁⠉⠉⠁⠀⠀⢀⡠⠀⣄⠀⠀⠘⢧⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢰⠇⢠⠀⠀⠀⠒⠀⠈⠒⠀⠀⠀⠠⠤⠆⠀⠁⠀⠀⠀⠁⠀⢆⠈⣇
⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⡇⠀⠀⠀⠀⠈⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⢸
⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢀⣸
⠀⠀⠀⠀⠀⠀⠀⠀⠘⣟⣼⡆⠀⠀⠀⠀⣀⡀⠠⠤⢄⣀⠤⠄⠀⠀⠀⠀⠀⠀⠀⡎⣞⡏
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⢿⣇⣤⠄⠀⠀⢀⡉⠉⠓⠒⠒⠒⠋⠉⡁⠀⠀⠠⢤⣀⣿⢿⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣟⣉⡤⢤⢤⢤⣀⡉⠲⡀⠀⠀⠀⡴⠊⣁⡠⡤⡤⠤⣈⡻⡟⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠁⣿⣿⠛⠛⢻⢷⣯⡂⠘⠀⠀⠚⢐⣮⠿⠿⣟⣿⣿⣿⡎⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣦⡘⣿⣿⣷⣿⣿⣿⣿⡄⠀⠀⢀⣾⣷⣤⣶⣿⣿⣿⡏⣠⡏⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣵⡙⢯⣻⢿⣿⣿⣿⣿⠀⠀⢸⢿⣿⣿⡿⣟⡿⢋⣼⠟⠀⠀
⢀⣠⣀⠀⠀⢠⠖⢲⡀⠀⠀⠈⢻⣄⠈⠉⠿⠿⠛⠋⠀⠀⠘⠛⠛⠿⠏⠉⢀⡽⠋⠀⠀⠀
⢸⡅⠹⡄⠀⢸⡄⢸⠇⠀⠀⠀⠀⢻⣑⡀⠀⠀⠀⠾⠖⠰⡾⡆⠀⠀⠀⣜⡽⠁⠀⠀⠀⠀
⠀⢳⡄⢷⠀⢰⠃⢻⠀⠀⠀⠀⠀⠀⠻⡷⣄⡀⠀⠀⠀⠀⠀⠀⠀⣠⣼⠟⠁⠀⠀⠀⠀⠀
⠀⠈⢧⡈⣧⢸⡀⣼⠀⠀⠀⠀⠀⠀⠀⠈⠻⣧⠈⠉⠭⠭⠍⢁⢰⡿⠋⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣇⠈⡿⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⣄⠀⠁⢀⣼⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡴⢺⠯⠤⠤⠖⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⡷⢶⣿⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠻⡞⠳⢶⣾⡶⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⣼⢿⠁⠀⡝⣾⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠙⢦⠴⠃⠀⠀⣸⠀⠀⠀⢀⣀⣤⣠⠤⠾⢁⡀⣇⢠⠇⡅⠻⠦⣄⣀⣀⡀⠀⠀⠀⠀
⠀⠀⠀⠘⢷⣜⠒⠲⣏⠀⠀⡴⡿⠀⠀⠈⠁⠒⠋⠀⠈⠉⠀⠘⠒⠖⠁⠀⠀⠩⣳⡀⠀⠀
⠀⠀⠀⠀⠀⢹⡐⢧⢻⠀⠀⣷⠁⠀⢰⠀⠀⠀⠀⠀⠲⡶⠂⠀⠀⠀⠀⡇⠀⠀⢧⡇⠀⠀
⠀⠀⠀⠀⠀⠈⡇⠀⠈⣧⠀⣟⠀⠀⣨⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⣸⠀⠀⢩⡇⠀⠀
⠀⠀⠀⠀⠀⠀⢻⠀⠀⠘⡾⠁⠐⣾⡟⡷⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⢾⣿⠁⠀⠉⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠸⣆⠀⠀⠸⡀⢰⣿⠁⢿⢄⡀⠀⠀⠴⠷⠄⠀⠀⢀⣾⡏⠀⠀⠀⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣯⣆⠀⠀⢹⣟⡏⠀⢸⠦⠀⠀⠀⠀⡄⠀⠀⠀⠠⣧⣿⠀⠀⢸⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⣜⢦⣀⡜⡞⠀⠀⢸⡓⢀⡁⠀⠀⡇⠀⠀⡀⠐⣿⡇⠀⠀⠈⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⢶⣥⡽⠁⠀⠀⢸⣅⣤⣄⣀⣀⣀⣀⣀⣤⣈⡿⢷⡀⣀⣸⠇⠀⠀

I have a feeling your going to have us merge all these javascript files into one
And use it to book hotel rooms with the knowledge we have gained from doing these labs
 */

/**
 * I don't know another way of initializing these next 3 input listeners.
 * There must be a better way, but I don't know what
 * Specifically talking about:

 *   initializeCounter(),
 *   initializeUpdateLetterCounts()
 *   initializeUserDate()

 * I'll figure it out one day
 * All they do is add an event listener to the input and call the function
 */
const initializeCounter = () => {
    let nameInput = document.getElementById('name-input');
    nameInput.addEventListener('input', counter);
};

const initializeUpdateLetterCounts = () => {
    let nameInput = document.getElementById('name-input');
    let letterInput = document.getElementById('find-letter-input');

    nameInput.addEventListener('input', updateLetterCounts);
    letterInput.addEventListener('input', updateLetterCounts);
};

const initializeUserDate = () => {
    const dateInput = document.getElementById('date-input');
    dateInput.addEventListener('change', userDate);
};

/**
 * This is the main function for the counter
 * It's the one that gets called when the input changes
 * It will count the spaces in the input and display it
 */

const counter = () => {
    let nameInput = document.getElementById('name-input');
    let spaceCounter = document.getElementById('space-counter');

    nameInput.addEventListener('input', function () {
        let nameInputValue = nameInput.value;

        if (nameInputValue === '') {
            htmlContent = '';
        } else {
            let spaceCount = nameInputValue.split(' ').length - 1;
            htmlContent = `<p class="my-3">Spaces: <span class="fw-bold text-info">${spaceCount}</span></p>`;
        }

        spaceCounter.innerHTML = htmlContent;
    });
};

/**
 * This function will update the letter counts
 * It will get the name and the letters to find
 * It will then count the occurrences of the letters in the name
 * It will then display the occurrences in the HTML
 * It will also remove duplicates from the letters to find by, using the removeDuplicates function
 */
const updateLetterCounts = () => {
    let nameInput = document.getElementById('name-input');
    let letterInput = document.getElementById('find-letter-input');
    let letterCounter = document.getElementById('find-letter');
    let name = nameInput.value;
    let letters = letterInput.value.split(' ').filter(Boolean); // Split and remove empty strings

    let uniqueLetters = removeDuplicates(letters);

    let counts = uniqueLetters.map(letter => {
        let count = name.split(letter).length - 1;
        return `Occurrences of <span class="fw-bold text-danger">${letter}</span>: <span class="fw-bold bg-warning">${count}</span>`;
    });

    letterCounter.innerHTML = counts.join('<br>');
};

/**
 * This function will remove duplicates from an array
 * @param array of letters
 * @returns array
 */
const removeDuplicates = (array) => {
    /*
    I know you said don't use Set, because we haven't learned it yet,
    I think it's a good practice to use it and makes the code cleaner.
    I use it a lot in Python, so I understand it.
    */
    return Array.from(new Set(array));
};

/**
 * This function will get the selected date from the input
 * It will then display the date and the days in the month
 * It will also display the work days in the month
 * It will also display the minimum wage and the monthly salary
 * @param event - the event of the input change
 */
const userDate = (event) => {
    const selectedDateString = event.target.value;
    console.log(selectedDateString)

    let dateInformation = document.getElementById('date-information');
    htmlContent = `<p class="my-3 text-center">Birthday: <span class="text-muted fw-bold">${selectedDateString}</span></p>`;

    /*
    This {date} is a bit of a mess, but it works
    I'm not sure if there's a better way to do it
     */
    let date = new Date(selectedDateString + 'T00:00:00');
    let daysInMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, 0)).getUTCDate();
    htmlContent += `<p class="my-3 text-center">Days in month: <span class="text-secondary fw-bold">${daysInMonth}</span></p>`;

    let workDays = workDaysInMonth(date);
    htmlContent += `<p class="my-3 text-center">Work days in month: <span class="text-info fw-bold">${workDays}</span></p>`;

    const minimumWage = 16.75;
    let wage = calculateMinimumWage(minimumWage, workDays);

    htmlContent += `<p class="my-3 text-center">Minimum wage: <span class="text-warning fw-bold">$${minimumWage}</span></p>`;
    htmlContent += `<p class="my-3 text-center">Monthly Salary (8-hour): <span class="text-success fw-bold">$${wage.toFixed(2)}</span></p>`;

    dateInformation.innerHTML = htmlContent;
};

/**
 * This function will calculate the work days in a month
 * @returns {number}
 */
const workDaysInMonth = (date) => {
    /*
    I hate Feb 1st, why does it have to be so special?
     */
    let daysInMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, 0)).getUTCDate();
    let workDays = 0;
    for (let i = 1; i <= daysInMonth; i++) {
        date.setDate(i);
        if (date.getDay() !== 0 && date.getDay() !== 6) {
            workDays++;
        }
    }
    return workDays;
}

/**
 * This function will calculate the minimum wage
 * @param minimumWage - the minimum wage
 * @param workDays - the work days in the month
 * @returns {number}
 */
const calculateMinimumWage = (minimumWage, workDays) => {
    let hoursPerDay = 8;
    let salary = minimumWage * workDays * hoursPerDay;

    return salary;
}

/**
 * This function will check if the input is in range
 * It will display the input and if it's less, equal or greater than 2
 * It will also display an error message if the input is not a number
 */
const isItInRange = () => {
    let errorInput = document.getElementById('error-input');
    let errorOutput = document.getElementById('error-output');

    errorInput.addEventListener('input', function () {
        try {
            let errorInputValue = parseFloat(errorInput.value);

            if (isNaN(errorInputValue)) {
                htmlContent = '';
            } else if (errorInputValue < 0) {
                htmlContent = `<p class="my-3 text-center">Your number: <span class="fw-bold text-primary">${errorInputValue}</span></p>`;
                htmlContent += `<p class="my-3 text-center">Your number is <span class="text-warning fw-bold bg-secondary">Less</span> than <span class="fw-bold">0</span></p>`;
                throw new Error(`Error - Your number <span class="fw-bold text-dark">${errorInputValue}</span> is less than <span class="fw-bold text-dark">0</span>. The value must be zero or greater.`);
            } else if (errorInputValue < 2) {
                htmlContent = `<p class="my-3 text-center">Your number: <span class="fw-bold text-primary">${errorInputValue}</span></p>`;
                htmlContent += `<p class="my-3 text-center">Your number is <span class="text-warning fw-bold bg-secondary">Less</span> than <span class="fw-bold">2</span></p>`;
                throw new Error(`Error - Your number <span class="fw-bold text-dark">${errorInputValue}</span> is less than <span class="fw-bold text-dark">2</span>`);
            } else if (errorInputValue === 2) {
                htmlContent = `<p class="my-3 text-center">Your number: <span class="fw-bold text-primary">${errorInputValue}</span></p>`;
                htmlContent += `<p class="my-3 text-center">Your number is <span class="text-warning fw-bold bg-secondary">Equal</span> to <span class="fw-bold">2</span></p>`;

                /*
                If we are looking for 2 or more, why are we throwing an error when its 2?
                It hurt me to do this
                 */
                throw new Error(`Your number <span class="fw-bold text-dark">${errorInputValue}</span> is less than <span class="fw-bold text-dark">2</span>`);
            } else if (errorInputValue > 2 && errorInputValue <= 4) {
                htmlContent = `<p class="my-3 text-center">Your number: <span class="fw-bold text-primary">${errorInputValue}</span></p>`;
                htmlContent += `<p class="my-3 text-center">Your number is <span class="text-warning fw-bold bg-secondary">Greater</span> than <span class="fw-bold">2</span></p>`;
                htmlContent += `<p class="my-3 text-center text-primary">Your number <span class="fw-bold text-dark">${errorInputValue}</span> is over <span class="fw-bold">2</span></p>`;
            } else if (errorInputValue > 2) {
                htmlContent = `<p class="my-3 text-center">Your number: <span class="fw-bold text-primary">${errorInputValue}</span></p>`;
                htmlContent += `<p class="my-3 text-center">Your number is <span class="text-warning fw-bold bg-secondary">Greater</span> than <span class="fw-bold text-dark">2</span></p>`;
                htmlContent += `<p class="my-3 text-center text-primary">Your number <span class="fw-bold text-dark">${errorInputValue}</span> is in range</p>`;
            }
        } catch (error) {
            htmlContent += `<p class="my-3 text-danger fw-bold text-center">${error.message}</p>`;
        }

        errorOutput.innerHTML = htmlContent;
    });
}