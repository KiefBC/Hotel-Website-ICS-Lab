document.addEventListener('DOMContentLoaded', function () {

    displayHotelRooms();
});

const hotelRooms = [
    {
        title: "Standard Package",
        description: "This is our standard package. It includes a bed, a bathroom, and a TV. It's perfect for a short stay.",
        price: "$100",
        imageUrl: "static/img/hotel-room-one.webp"
    },
    {
        title: "Deluxe Package",
        description: "This is the deluxe package. It includes a bed, a bathroom, a TV, and a balcony. It's perfect for a longer stay.",
        price: "$200",
        imageUrl: "static/img/hotel-room-two.webp"
    },
    {
        title: "Suite Package",
        description: "This is the suite package. It includes a bed, a bathroom, a TV, a balcony, and a kitchen. It's perfect for a forever stay.",
        price: "$300",
        imageUrl: "static/img/hotel-room-three.webp"
    }
];

function displayHotelRooms() {
    const hotelRoomContainer = document.getElementById('hotel-room-cards'); // Ensure this matches your container's ID in the HTML
    hotelRooms.forEach(room => {
        const roomHTML = `
        <div class="col-md my-5 px-5 mx-auto">
            <div class="card" id="${room.title.toLowerCase().replace(/ /g, '-')}-card">
                <div class="card-body py-1">
                    <div class="row" id="hotel-rooms-cards">
                        <div class="col-md-8 m-0 p-0 mx-auto my-auto">
                            <img src="${room.imageUrl}" class="img-fluid rounded-3" alt="${room.title}">
                        </div>
                        <div class="col-md d-flex flex-column">
                            <h5 class="card-title text-center mt-3 mb-4">${room.title}</h5> <!-- Adjust mt-3 or mb-4 as needed -->
                            <p class="card-text my-auto mx-auto px-2">${room.description}</p>
                            <p class="card-text mx-auto">Price: ${room.price}</p>
                            <div class="mt-auto text-md-end">
                                <button class="btn btn-primary mb-3" id="${room.title.toLowerCase().replace(/ /g, '-')}-package">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        hotelRoomContainer.innerHTML += roomHTML; // Append the new card to the container
    });
}
