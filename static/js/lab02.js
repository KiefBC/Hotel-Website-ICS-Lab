document.addEventListener("DOMContentLoaded", function () {

    getOccupancy();
    setupRoomPriceButton();
    iterationMagic();
    compareSpeeds();
});

/**
 * This function is used to calculate the mean and middle value of the prices of 3 rooms
 *
 * @returns {void}
 *
 * @example
 * calculateAndDisplayResults();
 */
function calculateAndDisplayResults() {
    const inputs = document.querySelectorAll('#room-price-fields input');
    const values = Array.from(inputs).map(input => parseInt(input.value, 10) || 0);
    const mean = values.reduce((acc, val) => acc + val, 0) / values.length;
    const sortedValues = [...values].sort((a, b) => a - b);
    const middle = sortedValues[Math.floor(sortedValues.length / 2)];

    document.getElementById('middle-math').innerHTML = `Middle: $${middle}`;
    document.getElementById('mean-math').innerHTML = `Mean: $${mean}`;
    document.getElementById('room-prices').innerHTML = `Room Prices: $${values.join(', $')}`;

    // Remove input fields and reset button text
    document.getElementById('room-price-fields').remove();
    document.getElementById('math-button').textContent = 'Add Inputs';
}

/**
 * This function is used to get the occupancy of a hotel and display the percentage of occupancy
 *
 * @returns {void}
 *
 * @example
 *
 * getOccupancy();
 */
function getOccupancy() {
    //TODO: Add extra flavor to the output when the occupancy is above 90%

    let hotelOccupancyOutput = document.getElementById("hotelOccupancyOutput");
    let occupancyButton = document.getElementById("occupancy-button");

    occupancyButton.addEventListener("click", function (event) {
        event.preventDefault();
        hotelOccupancyOutput.innerHTML = '';
        hotelOccupancyOutput.style.color = '';

        let occupancy = parseInt(document.getElementById("hotel-occupancy-input").value);

        if (isNaN(occupancy) || occupancy < 0 || occupancy >= 101) {
            hotelOccupancyOutput.style.color = 'teal';
            hotelOccupancyOutput.innerHTML = `The hotel occupancy must be a number between 0 and 100`;
        } else {
            if (occupancy >= 90) {
                hotelOccupancyOutput.style.color = 'green';
            } else if (occupancy >= 80) {
                hotelOccupancyOutput.style.color = 'blue';
            } else if (occupancy >= 65) {
                hotelOccupancyOutput.style.color = 'yellow';
            } else if (occupancy >= 51) {
                hotelOccupancyOutput.style.color = 'black';
            } else {
                hotelOccupancyOutput.style.color = 'red';
            }

            hotelOccupancyOutput.innerHTML = `The hotel occupancy is: ${occupancy}%`;
        }
    });
}

/**
 * This function is used to setup the room price button
 * @returns {void}
 * @example
 * setupRoomPriceButton();
 */
function setupRoomPriceButton() {
    document.getElementById('math-button').addEventListener('click', function () {
        const button = this;
        if (button.textContent.includes('Add Inputs')) {
            roomPriceInputs(button);
        } else {
            calculateAndDisplayResults();
        }
    });
}

/**
 * This function is used to add the input fields for the room prices
 * and change the button text to 'Calculate Mean and Middle'
 * @returns {void}
 *
 * @param button {HTMLElement} - The button element to change the text of
 *
 * @example
 * roomPriceInputs(button);
 */
function roomPriceInputs(button) {
    const inputHTML = `
        <div id="room-price-fields">
            <input type="number" class="form-control my-2" id="input1" placeholder="Enter Room 1 Price">
            <input type="number" class="form-control my-2" id="input2" placeholder="Enter Room 2 Price">
            <input type="number" class="form-control my-2" id="input3" placeholder="Enter Room 3 Price">
        </div>
    `;
    document.querySelector('#math-card .card-body').insertAdjacentHTML('beforeend', inputHTML);
    button.textContent = 'Calculate Mean and Middle';
}

/**
 * This function is used to create a pyramid of a given character using iteration
 *
 * @returns {void}
 *
 * @example
 * iterationMagic();
 */
function iterationMagic() {
    let iterationOutput = document.getElementById("iteration-output");
    let iterationButton = document.getElementById("iteration-button");

    iterationButton.addEventListener("click", function (event) {
        event.preventDefault();

        iterationOutput.innerHTML = '';
        let iterationValue = document.getElementById("iteration-input").value;
        let n = 5;
        let pyramid = '';

        for(let i = 1; i <= n; i++) {
            pyramid += iterationValue.repeat(i) + '<br>';
        }
        for(let i = n - 1; i >= 1; i--) {
            pyramid += iterationValue.repeat(i) + '<br>';
        }

        iterationOutput.style.color = 'blue';
        iterationOutput.innerHTML = pyramid;
    });
}

function compareSpeeds() {
    let speedOutput = document.getElementById("speed-output");
    let speedButton = document.getElementById("speed-button");

    speedButton.addEventListener("click", function (event) {
        event.preventDefault();

        speedOutput.innerHTML = '';
        let speedOneValue = document.getElementById("speed1-input").value;
        let speedTwoValue = document.getElementById("speed2-input").value;

        speedOutput.innerHTML = `
            <p id="speed1-output">Speed 1: ${speedOneValue}</p>
            <p id="speed2-output">Speed 2: ${speedTwoValue}</p>
            `;

        document.getElementById("speed1-output").style.color = "red";
        document.getElementById("speed2-output").style.color = "blue";

        if (isNaN(speedOneValue) || isNaN(speedTwoValue)) {
            speedOutput.style.color = 'red';
            speedOutput.innerHTML = `<p class="speed-compare">The speed must be a number</p>`;
        } else {
            if (speedOneValue > speedTwoValue) {
                speedOutput.style.color = 'green';
                speedOutput.innerHTML += `<p class="speed-compare">The first speed is greater than the second speed</p>`;
            } else if (speedOneValue < speedTwoValue) {
                speedOutput.style.color = 'blue';
                speedOutput.innerHTML += `<p class="speed-compare">The second speed is greater than the first speed</p>`;
            } else {
                speedOutput.style.color = 'black';
                speedOutput.innerHTML += `<p class="speed-compare">The two speeds are equal</p>`;
            }
        }
    });
}