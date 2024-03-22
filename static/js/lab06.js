class Hotel {
    ArrayOfRestaurants;

    constructor(name, rooms, booked, hasGym, location, hasPool, hasShuttle) {
        console.log("\nConstructing your Hotel...\n")
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
        this.hasGym = hasGym;
        this.location = location;
        this.roomtypes = ['Single, Double, Suite, Penthouse'];
        this.hasPool = hasPool;
        this.hasShuttle = hasShuttle;
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

            if (this.booked < this.rooms / 2) {
                document.getElementById('booked-rooms').innerHTML = `There are <span id="room-amounts" class="fw-bold text-success">${this.booked}/${this.rooms}</span> room booked! Act fast!`;

            } else {
                document.getElementById('booked-rooms').innerHTML = `There are <span id="room-amounts" class="fw-bold text-danger">${this.booked}/${this.rooms}</span> room booked! Act fast!`;
            }

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

            if (this.booked < this.rooms / 2) {
                document.getElementById('booked-rooms').innerHTML = `There are <span id="room-amounts" class="fw-bold text-success">${this.booked}/${this.rooms}</span> room booked! Act fast!`;

            } else {
                document.getElementById('booked-rooms').innerHTML = `There are <span id="room-amounts" class="fw-bold text-danger">${this.booked}/${this.rooms}</span> room booked! Act fast!`;
            }

            document.getElementById('booked-rooms').innerHTML = `There are <span id="room-amounts" class="fw-bold text-success">${this.booked}/${this.rooms}</span> room booked! Act fast!`;
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

    roomTypes() {
        const types = document.getElementById('room-types');
        if (types) {
            types.innerHTML = `<span class="fw-bolder">Room Types:</span> ${this.roomtypes.join(', ')}`;
        }
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
                        <img src="static/img/hotel.webp" class="card-img-top" alt="Hotel Image">
                        <h1 class="card-title text-center pt-3"><span class="fw-bolder">${this.name}</span></h1>
                        <h5 class="mt-3 mb-3 text-decoration-underline">Hotel Information:</h5>
                        <p class="card-text m-0" id="room-types"></p>
                        <p class="card-text m-0"><span class="fw-bolder">Rooms Available:</span> ${this.rooms - this.booked}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Location:</span> ${this.location}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Hotel Has Gym?</span> ${this.hasGym}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Hotel Has Pool?</span> ${this.hasPool}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Hotel Has Shuttle?</span> ${this.hasShuttle}</p>
                        <h3 class="mt-3">Restaurants:</h3>
                        <ol>
                            ${restaurants}
                        </ol>
                        <p class="card-text" id="booked-rooms">There are <span id="room-amounts" class="fw-bold text-success">${this.booked}/${this.rooms}</span> room booked! Act fast!</p>
                        <button class="btn btn-primary" id="book-hotel-button">Book a Room</button>
                        <button class="btn btn-danger" id="cancel-hotel-button">Cancel a Room</button>
                        <button class="btn btn-info" id="show-add-room-type">Add Room Type</button>
                        <div id="add-room-type-form" class="mt-2" style="display: none;">
                            <input type="text" id="room-type-input" placeholder="Enter Room Type">
                            <button class="btn btn-success" id="add-room-type-button">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.roomTypes();


        const bookButton = document.getElementById("book-hotel-button");
        const cancelButton = document.getElementById("cancel-hotel-button");
        const showResortButton = document.getElementById("btn-resort-get");

        bookButton.addEventListener("click", () => this.bookRoom());
        cancelButton.addEventListener("click", () => this.cancelRoom());
        showResortButton.addEventListener("click", () => this.showResort());

        document.getElementById("show-add-room-type").addEventListener("click", function () {
            document.getElementById("add-room-type-form").style.display = "block";
        });

        document.getElementById("add-room-type-button").addEventListener("click", () => {
            const roomType = document.getElementById("room-type-input").value;
            if (roomType) {
                this.addRoomType(roomType);
                document.getElementById("room-type-input").value = '';
                document.getElementById("add-room-type-form").style.display = "none";
                console.log(`Added Room Type: ${roomType}`);
                this.roomTypes();
            }
        });
    }

    showResort() {
        console.log("\nShowing Resort...\n");
        let ArrayOfNames = ["Hilton Resort", "Marriott Resort", "Sheraton Resort", "Ritz-Carlton Resort", "Four Seasons Resort"];
        let arrayOfBeachFront = [true, false];
        let arrayOfKidsClub = [true, false];
        let arrayOfBars = [true, false];
        let arrayOfLocations = ["Miami", "Los Angeles", "Las Vegas", "Orlando", "San Francisco"];
        let roomAmount = Math.floor(Math.random() * 100);
        let bookedAmount = Math.floor(Math.random() * 100);
        // while loop to make sure the booked amount is less than half of the room amount
        while (bookedAmount > roomAmount / 2) {
            bookedAmount = Math.floor(Math.random() * 100);
        }

        let resort = new Resort(ArrayOfNames[Math.floor(Math.random() * ArrayOfNames.length)], arrayOfBeachFront[Math.floor(Math.random() * arrayOfBeachFront.length)], arrayOfKidsClub[Math.floor(Math.random() * arrayOfKidsClub.length)], roomAmount, arrayOfLocations[Math.floor(Math.random() * arrayOfLocations.length)], this.hasPool, arrayOfBars[Math.floor(Math.random() * arrayOfBars.length)], bookedAmount);
        resort.buildResortCard();

        const showResortButton = document.getElementById("btn-resort-get");
        showResortButton.remove();

        const lab6 = document.getElementById("lab6");
        lab6.remove();
    }

    addRoomType(roomType) {
        this.roomtypes.push(roomType);
    }
}

class Resort extends Hotel {
    constructor(name, beachFront, kidsClub, rooms, location, hasPool, hasBar, booked) {
        super(name, rooms, 0, false, hasPool);
        console.log("\nConstructing your Resort...\n")
        this.name = name;
        this.beachFront = beachFront;
        this.kidsClub = kidsClub;
        this.hasBar = hasBar;
        this.rooms = rooms;
        this.booked = booked;
        this.location = location;
        this.resortType = ['Family, Couples, Business, Luxury, Budget'];
        this.hasPool = hasPool;
        this.restaurants = new Map();

        this.ArrayOfRestaurants = [["Popeyes Chicken", "Chinese"], ["Olive Garden", "Guatemalan"], ["Big Fish", "European"]];
        this.ArrayOfRestaurants.forEach((element) => {
            this.restaurants.set(element[0], element[1]);
        });
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
                        <img src="static/img/resort.webp" class="card-img-top" alt="Hotel Image">
                        <h1 class="card-title text-center pt-3"><span class="fw-bolder">${this.name}</span></h1>
                        <h5 class="mt-3 mb-3 text-decoration-underline">Hotel Information:</h5>
                        <p class="card-text m-0"><span class="fw-bolder">Resort Areas:</span> ${this.resortType}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Rooms Available:</span> ${this.rooms - this.booked}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Location:</span> ${this.location}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Beach Front?</span> ${this.beachFront}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Kids Club?</span> ${this.kidsClub}</p>
                        <p class="card-text m-0"><span class="fw-bolder">Has Bar?</span> ${this.hasBar}</p>
                        <h3 class="mt-3">Restaurants:</h3>
                        <ol>
                            ${restaurants}
                        </ol>
                        <p class="card-text" id="resort-booked-rooms">There are <span id="resort-room-amounts" class="fw-bold text-success">${this.booked}/${this.rooms}</span> room booked! Act fast!</p>
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

            if (this.booked < this.rooms / 2) {
                document.getElementById('resort-booked-rooms').innerHTML = `There are <span id="resort-room-amounts" class="fw-bold text-success">${this.booked}/${this.rooms}</span> room booked! Act fast!`;

            } else {
                document.getElementById('resort-booked-rooms').innerHTML = `There are <span id="resort-room-amounts" class="fw-bold text-danger">${this.booked}/${this.rooms}</span> room booked! Act fast!`;
            }
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

            if (this.booked < this.rooms / 2) {
                document.getElementById('resort-booked-rooms').innerHTML = `There are <span id="resort-room-amounts" class="fw-bold text-success">${this.booked}/${this.rooms}</span> room booked! Act fast!`;
            } else {
                document.getElementById('resort-booked-rooms').innerHTML = `There are <span id="resort-room-amounts" class="fw-bold text-danger">${this.booked}/${this.rooms}</span> room booked! Act fast!`;
            }
            return true;
        } else {
            console.log("\nNo rooms to cancel!\n");
            return false;
        }
    }

    set resortName(name) {
        this.name = name;
    }

    get resortName() {
        return this.name;
    }

    set resortBeachFront(beachFront) {
        this.beachFront = beachFront;
    }

    get resortBeachFront() {
        return this.beachFront;
    }

    set resortKidsClub(kidsClub) {
        this.kidsClub = kidsClub;
    }

    get resortKidsClub() {
        return this.kidsClub;
    }

    set resortHasBar(hasBar) {
        this.hasBar = hasBar;
    }

    get resortHasBar() {
        return this.hasBar;
    }

    set resortLocation(location) {
        this.location = location;
    }

    get resortLocation() {
        return this.location;
    }

    resortTypes() {
        const types = document.getElementById('resort-types');
        if (types) {
            types.innerHTML = `<span class="fw-bolder">Resort Types:</span> ${this.resortType.join(', ')}`;
        }
    }

    addResortType(resortType) {
        this.resortType.push(resortType);
    }
}

let hotel = new Hotel("The Hilton Hotel", 88, 33, true, "New York", false, false);
hotel.buildHotelCard();
