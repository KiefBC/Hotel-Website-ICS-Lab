document.addEventListener('DOMContentLoaded', function () {
    counter();

    let nameInput = document.getElementById('name-input');
    let letterInput = document.getElementById('find-letter-input');

    nameInput.addEventListener('input', updateLetterCounts);
    letterInput.addEventListener('input', updateLetterCounts);

    const dateInput = document.getElementById('date-input');
    dateInput.addEventListener('change', logSelectedDate);
});

const counter = () => {
    let nameInput = document.getElementById('name-input');
    let spaceCounter = document.getElementById('space-counter');

    nameInput.addEventListener('input', function () {
        let spaceCount = this.value.split(' ').length - 1;
        spaceCounter.innerHTML = `<p class="my-3">Spaces: ${spaceCount}</p>`;
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
        return `Occurrences of "${letter}": ${count}`;
    });

    letterCounter.innerHTML = counts.join('<br>');
};

const removeDuplicates = (array) => {
    return array.filter((element, index, self) => {
        return self.indexOf(element) === index;
    });
};

const logSelectedDate = (event) => {
    // Access the value of the input (the selected date)
    const selectedDateString = event.target.value;

    // Create a Date object from the selected date string
    const selectedDate = new Date(selectedDateString);

    // Print the Date object to the console
    console.log(selectedDate);

    // Alternatively, to display the date in a more readable format:
    console.log(selectedDate.toDateString());
};