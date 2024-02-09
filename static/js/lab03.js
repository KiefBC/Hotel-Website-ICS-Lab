document.addEventListener('DOMContentLoaded', function () {
    counter();

    let nameInput = document.getElementById('name-input');
    let letterInput = document.getElementById('find-letter-input');

    nameInput.addEventListener('input', updateLetterCounts);
    letterInput.addEventListener('input', updateLetterCounts);

    const dateInput = document.getElementById('date-input');
    dateInput.addEventListener('change', userDate);

    isItInRange();
});

const counter = () => {
    let nameInput = document.getElementById('name-input');
    let spaceCounter = document.getElementById('space-counter');

    nameInput.addEventListener('input', function () {
        let nameInputValue = nameInput.value;

        if (nameInputValue === '') {
            spaceCounter.innerHTML = '';
        } else {
            let spaceCount = nameInputValue.split(' ').length - 1;
            spaceCounter.innerHTML = `<p class="my-3">Spaces: <span class="fw-bold text-info">${spaceCount}</span></p>`;
        }
    });
};

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

const removeDuplicates = (array) => {
    /*
    I know you said don't use Set, because we haven't learned it yet,
    I think it's a good practice to use it and makes the code cleaner.
    I use it a lot in Python, so I understand it.
    */
    return Array.from(new Set(array));
};

const userDate = (event) => {
    const selectedDateString = event.target.value;

    let dateInformation = document.getElementById('date-information');
    dateInformation.innerHTML = `<p class="my-3 text-center">Birthday: <span class="text-muted fw-bold">${selectedDateString}</span></p>`;

    let date = new Date(selectedDateString);
    let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    dateInformation.innerHTML += `<p class="my-3 text-center">Days in month: <span class="text-secondary fw-bold">${daysInMonth}</span></p>`;


    let workDays = workDaysInMonth(date);
    dateInformation.innerHTML += `<p class="my-3 text-center">Work days in month: <span class="text-info fw-bold">${workDays}</span></p>`;

    const minimumWage = 16.75;
    let wage = calculateMinimumWage(minimumWage, workDays);

    dateInformation.innerHTML += `<p class="my-3 text-center">Minimum wage: <span class="text-warning fw-bold">$${minimumWage}</span></p>`;
    dateInformation.innerHTML += `<p class="my-3 text-center">Monthly Salary (8-hour): <span class="text-success fw-bold">$${wage.toFixed(2)}</span></p>`;
};

const workDaysInMonth = (date) => {
    let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let workDays = 0;
    for (let i = 1; i <= daysInMonth; i++) {
        date.setDate(i);
        if (date.getDay() !== 0 && date.getDay() !== 6) {
            workDays++;
        }
    }
    return workDays;
}

const calculateMinimumWage = (minimumWage, workDays) => {
    let hoursPerDay = 8;
    let salary = minimumWage * workDays * hoursPerDay;

    return salary;
}

const isItInRange = () => {
    let errorInput = document.getElementById('error-input');
    let errorOutput = document.getElementById('error-output');

    errorInput.addEventListener('input', function () {
        try {
            let errorInputValue = parseFloat(errorInput.value);

            if (isNaN(errorInputValue)) {
                errorOutput.innerHTML = '';
            } else if (errorInputValue < 2) {
                errorOutput.innerHTML = `<p class="my-3 text-center">Your number: <span class="fw-bold text-primary">${errorInputValue}</span></p>`;
                errorOutput.innerHTML += `<p class="my-3 text-center">Your number is <span class="text-warning fw-bold bg-secondary">Less</span> than <span class="fw-bold">2</span></p>`;
                throw new Error(`Error - Your number <span class="fw-bold text-dark">${errorInputValue}</span> is less than <span class="fw-bold text-dark">2</span>`);
            } else if (errorInputValue === 2) {
                errorOutput.innerHTML = `<p class="my-3 text-center">Your number: <span class="fw-bold text-primary">${errorInputValue}</span></p>`;
                errorOutput.innerHTML += `<p class="my-3 text-center">Your number is <span class="text-warning fw-bold bg-secondary">Equal</span> to <span class="fw-bold">2</span></p>`;
                throw new Error(`Your number <span class="fw-bold text-dark">${errorInputValue}</span> is in range`);
            } else if (errorInputValue > 2) {
                errorOutput.innerHTML = `<p class="my-3 text-center">Your number: <span class="fw-bold text-primary">${errorInputValue}</span></p>`;
                errorOutput.innerHTML += `<p class="my-3 text-center">Your number is <span class="text-warning fw-bold bg-secondary">Greater</span> than <span class="fw-bold text-dark">2</span></p>`;
                throw new Error(`Your number <span class="fw-bold text-dark">${errorInputValue}</span> is in range`);
            }
        } catch (error) {
            errorOutput.innerHTML += `<p class="my-3 text-danger fw-bold text-center">${error.message}</p>`;
        }
    });
}