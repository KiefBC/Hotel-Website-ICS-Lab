document.addEventListener("DOMContentLoaded", function () {

    let userName = prompt("What is your name?");
    let taxRate = parseInt(prompt("What is the tax rate?"));
    let roomCost = parseInt(prompt("How much does it cost to book a room?"));
    let rooms = parseInt(prompt("How many rooms do you want to book?"));

    let totalCost = roomCost * rooms * (1 + (taxRate / 100));
    totalCost = parseFloat(totalCost.toFixed(2));

    let helloMessage = `Hello, ${userName}.`;
    let helloMessageEle = document.getElementById("hello");
    let element = '<span>' + helloMessage.split('').join('</span><span>') + '</span>';

    /**
     * This is a hacky way to get the effect I want
     * I know I could use a for loop to append each letter,
     * but I wanted to try something different
     */
    $(element).hide().appendTo(helloMessageEle).each(function (i) {
        $(this).delay(100 * i).css({
            display: 'inline',
            opacity: 0
        }).animate({
            opacity: 1
        }, 100);
    });

    // Change Avatar on mouseover
    let svgAvatar = document.getElementById('svgAvatar');
    svgAvatar.addEventListener('mouseover', function() {
        svgAvatar.src = 'static/img/ironman-av.svg';
    });
    svgAvatar.addEventListener('mouseout', function() {
        svgAvatar.src = 'static/img/batman-av.svg';
    });

    createTable(roomCost, taxRate, rooms, totalCost);
});

/**
 * Create the table with the given data
 * @param roomCost - The cost of a single room
 * @param taxRate - The tax rate
 * @param rooms - The number of rooms
 * @param totalCost - The total cost
 *
 * @return void
 */
function createTable(roomCost, taxRate, rooms, totalCost) {
    let table = document.getElementById("hotelTable");

    let tableData = [
        { label: "Amount", value: "$" + roomCost.toFixed(2) },
        { label: "Tax Rate", value: taxRate + "%" },
        { label: "Number of Rooms", value: rooms + " rooms"},
        { label: "Total Cost**", value: "$" + totalCost.toFixed(2) }
    ];

    for (let data of tableData) {
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.innerHTML = data.label;
        cell2.innerHTML = data.value.toString();
    }
}