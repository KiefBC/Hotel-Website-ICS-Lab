document.addEventListener("DOMContentLoaded", function () {

    getOccupancy();
    setupRoomPriceButton();
    iterationMagic();
    compareSpeeds();
});

let interValid = null;
let styles = [];

/**
 * This function calculates the mean and middle value of the prices of 3 rooms.
 * It then displays these values in the DOM.
 * It also removes the input fields and resets the button text.
 * @returns {void}
 */
const calculateAndDisplayResults = () => {

    const inputs = document.querySelectorAll('#room-price-fields input');
    const values = Array.from(inputs).map(input => parseInt(input.value, 10) || 0);
    const mean = values.reduce((acc, val) => acc + val, 0) / values.length;
    const sortedValues = [...values].sort((a, b) => a - b);
    const middle = sortedValues[Math.floor(sortedValues.length / 2)];

    if (values.length === 0 || values.every(val => val === 0)) {

        styles = [
            { elementId: 'middle-math', color: null, fontWeight: null },
            { elementId: 'mean-math', color: null, fontWeight: null }
        ];
        styles.forEach(style => applyStyles(style.elementId, style.color, style.fontWeight));

        document.getElementById('oops').innerHTML = `<p class="mb-5">You need to input a number</p>
                                                              <p id="countdown" class="mb-5"></p>`;
        document.getElementById('room-price-fields').remove();
        document.getElementById('math-button').textContent = 'Add Inputs';

        let countdown = 3;
        const countdownElement = document.getElementById('countdown');

        interValid = setInterval(() => {
            countdownElement.textContent = `Message will disappear in ${countdown--} seconds`;
            applyStyles('countdown', 'red', 'bold')
            if (countdown < 0) {

                clearInterval(interValid);
                document.getElementById('oops').innerHTML = ``;
            }
        }, 1000);
    } else {

        document.getElementById('middle-math').innerHTML = `<span id="middle">Middle</span>: $${middle}`;
        document.getElementById('mean-math').innerHTML = `<span id="mean">Mean</span>: $${mean.toFixed(2)}`;
        document.getElementById('room-prices').innerHTML = `Room Prices: $${values.join(', $')}`;

        applyStyles('middle', 'blue', 'bold');
        applyStyles('mean', 'green', 'bold');

        document.getElementById('room-price-fields').remove();
        document.getElementById('math-button').textContent = 'Add Inputs';
    }
}

/**
 * This function gets the occupancy of a hotel and displays the percentage of occupancy.
 * It also changes the color of the output based on the occupancy percentage.
 * @returns {void}
 */
const getOccupancy = () => {

    let hotelOccupancyOutput = document.getElementById("hotelOccupancyOutput");
    let occupancyButton = document.getElementById("occupancy-button");

    occupancyButton.addEventListener("click", function (event) {
        event.preventDefault();

        clearInnerHTML("hotelOccupancyOutput");

        let occupancy = parseInt(document.getElementById("hotel-occupancy-input").value);

        if (isNaN(occupancy) || occupancy < 0 || occupancy >= 101) {

            hotelOccupancyOutput.innerHTML = `<p id="oops-occupancy" class="pb-3">The hotel occupancy must be a number between 0 and 100</p>`;
            applyStyles("oops-occupancy", "teal", null);
        } else {

            hotelOccupancyOutput.innerHTML = `<p class="pb-3" id="occupancy-statement">The hotel occupancy is: <span id="occupancy-num">${occupancy}%</span></p>`;
            applyStyles("occupancy-statement", "teal", null)

            if (occupancy >= 90) {

                applyStyles("occupancy-num", "green", "bold")
            } else if (occupancy >= 80) {

                applyStyles("occupancy-num", "blue", "bold")
            } else if (occupancy >= 65) {

                applyStyles("occupancy-num", "yellow", "bold")
            } else if (occupancy >= 51) {

                applyStyles("occupancy-num", "black", "bold")
            } else {

                applyStyles("occupancy-num", "red", "bold")
            }
        }
    });
}

/**
 * This function sets up the room price button.
 * It clears the previous results and either adds input fields or calculates the results based on the button text.
 * @returns {void}
 */
const setupRoomPriceButton = () => {

    document.getElementById('math-button').addEventListener('click', function () {
        const button = this;

        styles = [
            { elementId: 'middle-math' },
            { elementId: 'mean-math' },
            { elementId: 'room-prices' }
        ];

        styles.forEach(style => clearInnerHTML(style.elementId));

        if (button.textContent.includes('Add Inputs')) {
            roomPriceInputs(button);
        } else {
            calculateAndDisplayResults();
        }
    });
}

/**
 * This function adds the input fields for the room prices and changes the button text to 'Calculate Mean and Middle'.
 * @param {HTMLElement} button - The button element to change the text of.
 * @returns {void}
 */
const roomPriceInputs = (button) => {

    const inputHTML = `
        <div id="room-price-fields">
            <input type="number" class="form-control my-2" id="input1" placeholder="Enter Room 1 Price">
            <input type="number" class="form-control my-2" id="input2" placeholder="Enter Room 2 Price">
            <input type="number" class="form-control my-2" id="input3" placeholder="Enter Room 3 Price">
        </div>
    `;
    document.querySelector('#math-card .card-body').insertAdjacentHTML('beforeend', inputHTML);
    button.textContent = 'Calculate Mean and Middle';

    // If the countdown is running, stop it and clear the oops element
    if (interValid) {
        clearInterval(interValid);
        clearInnerHTML("oops");
    }
}

/**
 * This function creates a pyramid of a given character using iteration.
 * The pyramid is displayed in the DOM.
 * @returns {void}
 */
const iterationMagic = () => {

    let iterationOutput = document.getElementById("iteration-output");
    let iterationButton = document.getElementById("iteration-button");

    iterationButton.addEventListener("click", function (event) {
        event.preventDefault();

        iterationOutput.innerHTML = '';
        let iterationValue = document.getElementById("iteration-input").value;
        let n = 5;
        let pyramid = '';

        for (let i = 1; i <= n; i++) {
            pyramid += iterationValue.repeat(i) + '<br>';
        }
        for (let i = n - 1; i >= 1; i--) {
            pyramid += iterationValue.repeat(i) + '<br>';
        }

        if (iterationValue === '') {
            iterationOutput.innerHTML = `<p class="mt-5 mb-3">The character must not be empty</p>`;
            applyStyles("iteration-output", "teal", null)
        } else {
            iterationOutput.innerHTML = `<p class="mt-5 mb-3">${pyramid}</p>`;
            applyStyles("iteration-output", "blue", "bold")
        }
    });
}

/**
 * This function compares the speeds of two entities (Alexa and Siri) and displays the results in the DOM.
 * It also changes the color and font weight of the output based on the comparison results.
 * @returns {void}
 */
const compareSpeeds = () => {

    let speedOutput = document.getElementById("speed-output");
    let speederOutput = document.getElementById("speeder-output");
    let speedButton = document.getElementById("speed-button");

    speedButton.addEventListener("click", function (event) {
        event.preventDefault();

        let speedOneValue = document.getElementById("speed1-input").value;
        let speedTwoValue = document.getElementById("speed2-input").value;

        if (isNaN(speedOneValue) || isNaN(speedTwoValue) || speedOneValue === '' || speedTwoValue === '') {

            clearInnerHTML("speeder-output", "speed-output");

            speedOutput.innerHTML = `<p id="nan-output">The speed must be a number</p>`;
            applyStyles("nan-output", "teal", null);

        } else {

            speederOutput.innerHTML = `
            <p id="speed1-output" class="my-4"><span id="alexa">Alexa's</span> speed: <span id="true-speed1">${speedOneValue}</span></p>
            <p id="speed2-output" class="my-4"><span id="siri">Siri's</span> speed: <span id="true-speed2">${speedTwoValue}</span></p>
            `;

            styles = [
                { elementId: "true-speed1", color: "blue", fontWeight: "bold" },
                { elementId: "true-speed2", color: "red", fontWeight: "bold" },
                { elementId: "alexa", color: "blue", fontWeight: "bold" },
                { elementId: "siri", color: "red", fontWeight: "bold" }
            ];

            styles.forEach(style => applyStyles(style.elementId, style.color, style.fontWeight));

            if (speedOneValue > speedTwoValue) {

                speedOutput.innerHTML = `<p id="first"><span id="speeder-names">Alexa</span> gets there first!</p>`;

                styles = [
                    { elementId: "speeder-names", color: "blue", fontWeight: "bold" },
                    { elementId: "first", color: "teal", fontWeight: null }
                ];

                styles.forEach(style => applyStyles(style.elementId, style.color, style.fontWeight));

            } else if (speedOneValue < speedTwoValue) {

                speedOutput.innerHTML = `<p id="first"><span id="speeder-names">Siri</span> gets there first!</p>`;
                applyStyles("speeder-names", "red", "bold");
                applyStyles("first", "teal", null)

            } else {

                speedOutput.innerHTML = `<p id="speeds-equal-statement">The two speeds are equal! <span id="siri-same">Siri</span> and <span id="alexa-same">Alexa</span> will get there at the same time!</p>`;

                styles = [
                    { elementId: "siri-same", color: "red", fontWeight: "bold" },
                    { elementId: "alexa-same", color: "blue", fontWeight: "bold" },
                    { elementId: "speeds-equal-statement", color: "teal", fontWeight: null }
                ];

                styles.forEach(style => applyStyles(style.elementId, style.color, style.fontWeight));
            }

        }
    });
}

/**
 * This function applies the specified styles to the HTML element with the given ID.
 * @param {string} elementId - The ID of the HTML element to apply styles to.
 * @param {null} color - The color to apply to the HTML element.
 * @param {null} fontWeight - The font weight to apply to the HTML element.
 */
const applyStyles = (elementId, color, fontWeight) => {
    const element = document.getElementById(elementId);
    element.style.color = color;
    element.style.fontWeight = fontWeight;
}

/**
 * This function clears the inner HTML of the specified elements.
 * @param {string} elementId - The ID of the first element to clear the inner HTML of.
 * @param more - The IDs of the other elements to clear the inner HTML of.
 */
const clearInnerHTML = (elementId, ...more) => {
    const elements = [document.getElementById(elementId), ...more];
    elements.forEach(element => element.innerHTML = '');
}