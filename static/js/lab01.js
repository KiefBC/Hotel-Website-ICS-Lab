document.addEventListener("DOMContentLoaded", function () {

    // Prompt the user for their name
    let userName = prompt("What is your name?");

    // Prompt the user for the tax rate
    let taxRate = parseInt(prompt("What is the tax rate?"));
    taxRate = taxRate / 100;

    // Amount it costs to book a room
    let roomCost = parseInt(prompt("How much does it cost to book a room?"));

    // Prompt the user for the number of rooms they want to book
    let rooms = parseInt(prompt("How many rooms do you want to book?"));

    // Calculate the cost of the rooms
    let totalCost = roomCost * rooms * (1 + taxRate);
    totalCost = parseFloat(totalCost.toFixed(2));

    // Display a message that says "Hello, [name], How many rooms do you want to book?"
    let helloMessage = `Hello, ${userName}, How many Rooms do you want to book?`;
    let helloMessageEle = document.getElementById("hello");

    let ele = '<span>' + helloMessage.split('').join('</span><span>') + '</span>';

    $(ele).hide().appendTo(helloMessageEle).each(function (i) {
        $(this).delay(100 * i).css({
            display: 'inline',
            opacity: 0
        }).animate({
            opacity: 1
        }, 100);
    });


    // Get the table element
    let table = document.getElementById("hotelTable");

    // Create a new row and cells for the user's name
    let row1 = table.insertRow();
    let cell1 = row1.insertCell();
    let cell2 = row1.insertCell();
    cell1.innerHTML = "Amount";
    cell2.innerHTML = roomCost.toString();

    // Create a new row and cells for the tax rate
    let row2 = table.insertRow();
    let cell3 = row2.insertCell();
    let cell4 = row2.insertCell();
    cell3.innerHTML = "Tax Rate";
    cell4.innerHTML = taxRate.toString();

    // Create a new row and cells for the room cost
    let row3 = table.insertRow();
    let cell5 = row3.insertCell();
    let cell6 = row3.insertCell();
    cell5.innerHTML = "# of Rooms";
    cell6.innerHTML = rooms.toString();

    // Create a new row and cells for the total cost
    let row5 = table.insertRow();
    let cell9 = row5.insertCell();
    let cell10 = row5.insertCell();
    cell9.innerHTML = "Total Cost";
    cell10.innerHTML = totalCost.toString();

    // Apply new table classes
    void table.offsetWidth;
    table.classList.add(`table-hover`, `table-striped`);
});