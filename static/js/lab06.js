class Hotel {
    ArrayOfRestaurants;

    constructor(name) {
        console.log("\nConstructing your Hotel...\n")
        this.name = name;
        this.rooms = 30;
        this.booked = 12;
        this.hasGym = false;
        this.location = "";
        this.roomtypes = ['Single, Double, Suite, Penthouse'];
        this.hasPool = false;
        this.hasShuttle = false;
        this.restaurants = new Map();

        this.ArrayOfRestaurants = [["Mcdonalds", "Japanese"], ["Burger King", "American"], ["KFC", "European"]];
        this.ArrayOfRestaurants.forEach((element) => {
            this.restaurants.set(element[0], element[1]);
        });
    }

    checkAvailability() {
        console.log("\nChecking availability...\n")
        console.log("\nRooms available: " + (this.rooms - this.booked));
        return this.rooms - this.booked;
    }

    bookRoom() {
        console.log("\nBooking a room...\n")
        if (this.checkAvailability() > 0) {
            this.booked += 1;
            console.log("\nRoom booked!\n");
            console.log("\nRooms available: " + this.checkAvailability());

            document.getElementById('booked-rooms').textContent = `There are ${this.booked}/${this.rooms} room booked! Act fast!`;

            return true;
        } else {
            console.log("\nNo rooms available!\n");
            return false;
        }
    }

    cancelRoom() {
        console.log("\nCancelling a room...\n")
        if (this.booked > 0) {
            this.booked -= 1;
            console.log("\nRoom cancelled!\n");
            console.log("\nRooms available: " + this.checkAvailability());

            document.getElementById('booked-rooms').textContent = `There are ${this.booked}/${this.rooms} room booked! Act fast!`;
            return true;
        } else {
            console.log("\nNo rooms to cancel!\n");
            return false;
        }
    }

    set hotelName(name) {
        this.name = name;
    }

    get hotelName() {
        return this.name;
    }

    set hotelRoomAmount(rooms) {
        this.rooms = rooms;
    }

    get hotelRoomAmount() {
        return this.rooms;
    }

    set hotelBookedAmount(booked) {
        this.booked += booked;
    }

    get hotelBookedAmount() {
        return this.booked;
    }

    set hotelHasGym(hasGym) {
        this.hasGym = hasGym;
    }

    get hotelHasGym() {
        return this.hasGym;
    }

    set hotelLocation(location) {
        this.location = location;
    }

    get hotelLocation() {
        return this.location;
    }

    buildHotelCard() {
        console.log("\nBuilding Hotel Card...\n");
        const row = document.querySelector(".row");

        let restaurants = "";
        for (let [name, type] of this.restaurants) {
            restaurants += `<li>${name} - ${type}</li>`;
        }

        row.innerHTML += `
            <div class="col-md-6">
                <div class="card" id="hotel-card">
                    <h5 class="card-header">Welcome!</h5>
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <h3>Hotel Information:</h3>
                        <p class="card-text">Room Types: ${this.roomtypes}</p>
                        <p class="card-text">Rooms Available: ${this.rooms - this.booked}</p>
                        <p class="card-text">Location: ${this.location}</p>
                        <p class="card-text">Has Gym: ${this.hasGym}</p>
                        <p class="card-text">Has Pool: ${this.hasPool}</p>
                        <p class="card-text">Has Shuttle: ${this.hasShuttle}</p>
                        <h3>Restaurants:</h3>
                        <ol>
                            ${restaurants}
                        </ol>
                        <p class="card-text" id="booked-rooms">There are ${this.booked}/${this.rooms} room booked! Act fast!</p>
                        <button class="btn btn-primary" id="book-hotel-button">Book a Room</button>
                        <button class="btn btn-danger" id="cancel-hotel-button">Cancel a Room</button>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center mt-3 mb-3" id="resort-button">
                    <button id="btn-resort-get" class="btn btn-primary">See our Sister Resort</button>
                </div>
            </div>
        `;

        const bookButton = document.getElementById("book-hotel-button");
        const cancelButton = document.getElementById("cancel-hotel-button");
        const showResortButton = document.getElementById("btn-resort-get");

        bookButton.addEventListener("click", () => this.bookRoom());
        cancelButton.addEventListener("click", () => this.cancelRoom());
        showResortButton.addEventListener("click", () => this.showResort());
    }

    showResort() {
        console.log("\nShowing Resort...\n");
        let resort = new Resort("Hilton Resort", "Family", true, true);
        resort.buildResortCard();
    }
}

class Resort extends Hotel {
    constructor(name, resortType, beachFront, kidsClub) {
        super(name);
        this.resortType = resortType;
        this.beachFront = beachFront;
        this.kidsClub = kidsClub;
    }

    buildResortCard() {
        console.log("\nBuilding Resort Card...\n");
        const row = document.querySelector(".row");

        let restaurants = "";
        for (let [name, type] of this.restaurants) {
            restaurants += `<li>${name} - ${type}</li>`;
        }

        const card = document.createElement("div");
        card.setAttribute("class", "col-md-6");

        card.innerHTML += `
            <div class="card">
                <h5 class="card-header">Welcome!</h5>
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <h3>Hotel Information:</h3>
                    <p class="card-text">Room Types: ${this.roomtypes}</p>
                    <p class="card-text">Rooms Available: ${this.rooms - this.booked}</p>
                    <p class="card-text">Location: ${this.location}</p>
                    <p class="card-text">Has Gym: ${this.hasGym}</p>
                    <p class="card-text">Has Pool: ${this.hasPool}</p>
                    <p class="card-text">Has Shuttle: ${this.hasShuttle}</p>
                    <h3>Restaurants:</h3>
                    <ol>
                        ${restaurants}
                    </ol>
                    <p class="card-text" id="resort-rooms">There are ${this.booked}/${this.rooms} room booked! Act fast!</p>
                    <button class="btn btn-primary" id="book-resort-button">Book a Room</button>
                    <button class="btn btn-danger" id="cancel-resort-button">Cancel a Room</button>
                </div>
            </div>
        `;
        row.appendChild(card);

        const bookButton = document.getElementById("book-resort-button");
        const cancelButton = document.getElementById("cancel-resort-button");

        bookButton.addEventListener("click", () => this.bookRoom());
        cancelButton.addEventListener("click", () => this.cancelRoom());
    }

    bookRoom() {
        console.log("\nBooking a room...\n")
        if (this.checkAvailability() > 0) {
            this.booked += 1;
            console.log("\nRoom booked!\n");
            console.log("\nRooms available: " + this.checkAvailability());

            document.getElementById('resort-rooms').textContent = `There are ${this.booked}/${this.rooms} room booked! Act fast!`;

            return true;
        } else {
            console.log("\nNo rooms available!\n");
            return false;
        }
    }

    cancelRoom() {
        console.log("\nCancelling a room...\n")
        if (this.booked > 0) {
            this.booked -= 1;
            console.log("\nRoom cancelled!\n");
            console.log("\nRooms available: " + this.checkAvailability());

            document.getElementById('resort-rooms').textContent = `There are ${this.booked}/${this.rooms} room booked! Act fast!`;
            return true;
        } else {
            console.log("\nNo rooms to cancel!\n");
            return false;
        }
    }
}

let hotel = new Hotel("Hilton");
// let resort = new Resort("Hilton Resort", "Family", true, true);

hotel.buildHotelCard();
// resort.buildResortCard();

