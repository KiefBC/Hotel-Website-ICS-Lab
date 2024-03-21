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

            if (this.booked > this.rooms / 2) {
                document.getElementById('booked-rooms').style.color = "red";
            } else {
                document.getElementById('booked-rooms').style.color = "black";
            }

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

            if (this.booked > this.rooms / 2) {
                document.getElementById('booked-rooms').style.color = "red";
            } else {
                document.getElementById('booked-rooms').style.color = "black";
            }

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
            <div class="col-md-6 mt-3">
                <div class="card" id="hotel-card">
                    <h5 class="card-header">Welcome!</h5>
                    <div class="card-body">
                        <h1 class="card-title"><span class="text-decoration-underline">${this.name}</span></h1>
                        <h5 class="mt-3 mb-3">Hotel Information:</h5>
                        <p class="card-text m-0"><span class="fw-bolder">Room Types:</span> ${this.roomtypes}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Rooms Available:</span> ${this.rooms - this.booked}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Location:</span> ${this.location}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Has Gym:</span> ${this.hasGym}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Has Pool:</span> ${this.hasPool}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Has Shuttle:</span> ${this.hasShuttle}</p>
                        <h3 class="mt-3">Restaurants:</h3>
                        <ol>
                            ${restaurants}
                        </ol>
                        <p class="card-text" id="booked-rooms">There are ${this.booked}/${this.rooms} room booked! Act fast!</p>
                        <button class="btn btn-primary" id="book-hotel-button">Book a Room</button>
                        <button class="btn btn-danger" id="cancel-hotel-button">Cancel a Room</button>
                    </div>
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
        let ArrayOfNames = ["Hilton Resort", "Marriott Resort", "Sheraton Resort", "Ritz-Carlton Resort", "Four Seasons Resort"];
        let ArrayOfTypes = ["Family", "Couples", "Business", "Luxury", "Budget"];
        let ArrayOfBeachFront = [true, false];
        let ArrayOfKidsClub = [true, false];

        let resort = new Resort(ArrayOfNames[Math.floor(Math.random() * ArrayOfNames.length)], ArrayOfTypes[Math.floor(Math.random() * ArrayOfTypes.length)], ArrayOfBeachFront[Math.floor(Math.random() * ArrayOfBeachFront.length)], ArrayOfKidsClub[Math.floor(Math.random() * ArrayOfKidsClub.length)]);
        resort.buildResortCard();

        // remove button
        const showResortButton = document.getElementById("btn-resort-get");
        showResortButton.remove();
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
        const resortButton = document.getElementById("btn-resort-get");

        let restaurants = "";
        for (let [name, type] of this.restaurants) {
            restaurants += `<li>${name} - ${type}</li>`;
        }

        const card = document.createElement("div");
        card.setAttribute("class", "col-md-6 mt-3");

        card.innerHTML += `
            <div class="card" id="resort-card">
                <h5 class="card-header">Welcome!</h5>
                <div class="card-body">
                    <h1 class="card-title"><span class="text-decoration-underline">${this.name}</span></h1>
                    <h5 class="mt-3 mb-3">Hotel Information:</h5>
                    <p class="card-text m-0"><span class="fw-bolder">Room Types:</span> ${this.roomtypes}</p>
                    <p class="card-text m-0"><span class="fw-bolder">Rooms Available:</span> ${this.rooms - this.booked}</p>
                    <p class="card-text m-0"><span class="fw-bolder">Location:</span> ${this.location}</p>
                    <p class="card-text m-0"><span class="fw-bolder">Has Gym:</span> ${this.hasGym}</p>
                    <p class="card-text m-0"><span class="fw-bolder">Has Pool:</span> ${this.hasPool}</p>
                    <p class="card-text m-0"><span class="fw-bolder">Has Shuttle:</span> ${this.hasShuttle}</p>
                    <h3 class="mt-3">Restaurants:</h3>
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

            if (this.booked > this.rooms / 2) {
                document.getElementById('resort-rooms').style.color = "red";
            } else {
                document.getElementById('resort-rooms').style.color = "black";
            }

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

            if (this.booked > this.rooms / 2) {
                document.getElementById('resort-rooms').style.color = "red";
            } else {
                document.getElementById('resort-rooms').style.color = "black";
            }

            document.getElementById('resort-rooms').textContent = `There are ${this.booked}/${this.rooms} room booked! Act fast!`;
            return true;
        } else {
            console.log("\nNo rooms to cancel!\n");
            return false;
        }
    }
}

let hotel = new Hotel("The Hilton Hotel");
hotel.buildHotelCard();

