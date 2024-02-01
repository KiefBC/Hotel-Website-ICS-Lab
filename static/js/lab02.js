document.addEventListener("DOMContentLoaded", function () {

    getRoomPrices();
    getOccupancy();
});

/**
 * This function is used to get the prices of 3 rooms and display the mean and middle value of the prices
 *
 * @returns {void}
 *
 * @example
 * getRoomPrices();
 */
function getRoomPrices() {
    //TODO: Add extra flavor to the output when the mean is greater than the middle value
    //TODO: Add extra flavor to the output when the middle value is greater than the mean
    //TODO: Add extra flavor to the output when the mean and middle value are the same
    //TODO: Dynamic Input form for the room prices and validate the input

    let roomCard = document.getElementById("room-prices");
    let middleMath = document.getElementById("middle-math");
    let meanMath = document.getElementById("mean-math");
    let mathButton = document.getElementById("math-button");

    mathButton.addEventListener("click", function () {
        let questions = [`What is the price of room 1?`, `What is the price of room 2?`, `What is the price of room 3?`]
        let userInputs = questions.map(question => parseInt(prompt(question))).sort();
        let mean = parseInt((userInputs.reduce((a, b) => a + b) / userInputs.length).toFixed(2));
        let middleValue = userInputs.sort()[Math.floor(userInputs.length / 2)];

        roomCard.innerHTML = `The Prices for the 3 Rooms are: $${userInputs[0]}, $${userInputs[1]}, $${userInputs[2]}`
        middleMath.innerHTML = `The middle value is: $${middleValue}`;
        meanMath.innerHTML = `The mean value is: $${mean}`;
    });
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

        let occupancy = parseInt(document.getElementById("hotelOccupancyInput").value);

        if (isNaN(occupancy) || occupancy < 0 || occupancy > 100) {
            hotelOccupancyOutput.innerHTML = `The hotel occupancy must be a number between 0 and 100`;
        }

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
    });
}