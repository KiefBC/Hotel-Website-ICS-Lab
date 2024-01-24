document.addEventListener("DOMContentLoaded", function () {

    let questions = [`What is the price of room 1?`, `What is the price of room 2?`, `What is the price of room 3?`]
    let userInputs = questions.map(question => parseInt(prompt(question))).sort();

    console.log(userInputs)

    let mean = parseInt((userInputs.reduce((a, b) => a + b) / userInputs.length).toFixed(2));
    let middleValue = userInputs.sort()[Math.floor(userInputs.length / 2)];

    let target = document.getElementById("rooms");

    target.innerHTML = `
<h1>The Prices for the 3 Rooms are:</h1>
<ul>
    <li>Room 1: $${userInputs[0]}</li>
    <li>Room 2: $${userInputs[1]}</li>
    <li>Room 3: $${userInputs[2]}</li>
</ul>
<p>The Mean Price is: ${mean}</p>
<p>The Median Price is: ${middleValue % 2 === 0 ? `<span style="color:red;">${middleValue}</span>` : `<span style="color:blue;">${middleValue}</span>`}</p>`;

let hotelOccupancyInput = document.getElementById("hotelOccupancyInput").value;
console.log(hotelOccupancyInput)
});