document.addEventListener('DOMContentLoaded', function () {

    displayHotelCards();
    initializeHotelRoomButtons();
});

/**
 * This object contains the hotel room information.
 */
const hotelRooms = [{
    title: "Standard Package",
    description: "This is our standard package. It includes a bed, a bathroom, and a TV. It's perfect for a short stay.",
    price: "$100",
    imgRef: "static/img/hotel-room-one.webp"
}, {
    title: "Deluxe Package",
    description: "This is the deluxe package. It includes a bed, a bathroom, a TV, and a balcony. It's perfect for a longer stay.",
    price: "$200",
    imgRef: "static/img/hotel-room-two.webp"
}, {
    title: "Suite Package",
    description: "This is the suite package. It includes a bed, a bathroom, a TV, a balcony, and a kitchen. It's perfect for a forever stay.",
    price: "$300",
    imgRef: "static/img/hotel-room-three.webp"
}];

/**
 * This function displays the hotel room cards on the page.
 * It uses the hotelRooms object to generate the cards.
 *
 * Personal Note: I wish I knew how to round the corners of the images to match the cards.
 *                I also never knew of '/g' in Javascript REGEX. It will come in handy for future ideas.
 */
const displayHotelCards = () => {
    const hotelRoomContainer = document.getElementById('hotel-room-cards');
    hotelRooms.forEach(room => {
        hotelRoomContainer.innerHTML += `
        <div class="col-md my-5 px-5 mx-auto">
            <div class="card" id="${room.title.replace(/\s/g, '-').toLowerCase()}-card">
                <div class="card-body py-1">
                    <div class="row" id="hotel-rooms-cards">
                        <div class="col-md-8 m-0 p-0 mx-auto my-auto">
                            <img src="${room.imgRef}" class="img-fluid rounded-3" alt="${room.title}">
                        </div>
                        <div class="col-md d-flex flex-column">
                            <h5 class="card-title text-center mt-3 mb-4 title-underline">${room.title}</h5>
                            <p class="card-text my-auto mx-auto px-2 mt-5 py-auto">${room.description}</p>
                            <p class="card-text mx-auto">Price: ${room.price}</p>
                            <div class="mt-auto text-end">
                                <button class="btn btn-primary mb-3" id="${room.title.replace(/\s/g, '-').toLowerCase()}-button">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });
}

const displayHotelTable = () => {
    const hotelTableContainer = document.getElementById('hotel-room-table');

}

/**
 * This function initializes the hotel room buttons.
 * It adds an event listener to each button that alerts the user that they have booked the room.
 * The alert message includes the room title and price.
 */
const initializeHotelRoomButtons = () => {
    hotelRooms.forEach(room => {
        document.getElementById(`${room.title.replace(/\s/g, '-').toLowerCase()}-button`)
            .addEventListener('click', () => alert(`You have booked the ${room.title} for ${room.price}.`));
    });
}

const initializeHotelTableButton = () => {
    return null;
}