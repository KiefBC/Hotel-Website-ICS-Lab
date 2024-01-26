document.addEventListener("DOMContentLoaded", function () {

    let userName = prompt("What is your name?");
    let taxRate = parseInt(prompt("What is the tax rate?")) / 100;
    let roomCost = parseInt(prompt("How much does it cost to book a room?"));
    let rooms = parseInt(prompt("How many rooms do you want to book?"));

    let totalCost = roomCost * rooms * (1 + taxRate);
    totalCost = parseFloat(totalCost.toFixed(2));

    let helloMessage = `Hello, ${userName}.`;
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

    // Change Avatar on mouseover
    let svgAvatar = document.getElementById('svgAvatar');
    svgAvatar.addEventListener('mouseover', function() {
        svgAvatar.src = 'static/img/ironman-av.svg';
    });
    svgAvatar.addEventListener('mouseout', function() {
        svgAvatar.src = 'static/img/batman-av.svg';
    });

    // Run the function when the window is resized
    window.addEventListener('resize', updateSvgVisibility);
    updateSvgVisibility(svgAvatar);

    createTable(roomCost, taxRate, rooms, totalCost);
});

function createTable(roomCost, taxRate, rooms, totalCost) {
    // Get the table element
    let table = document.getElementById("hotelTable");

    // Define an array of objects, each representing a row in the table
    let tableData = [
        { label: "Amount", value: "$" + roomCost.toFixed(2) },
        { label: "Tax Rate", value: taxRate + "%" },
        { label: "# of Rooms", value: rooms },
        { label: "Total Cost**", value: "$" + totalCost.toFixed(2) }
    ];

    // Loop through the array and create a row for each object
    for (let data of tableData) {
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.innerHTML = data.label;
        cell2.innerHTML = data.value.toString();
    }

    // Apply new table classes
    void table.offsetWidth;
    // table.classList.add(`table-hover`, `table-striped`);
}

function updateSvgVisibility(svgAvatar) {
    if (window.innerWidth > 1024) {
        svgAvatar.classList.add('visible');
    } else {
        svgAvatar.classList.remove('visible');
    }
}