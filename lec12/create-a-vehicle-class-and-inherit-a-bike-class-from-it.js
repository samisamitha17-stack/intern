class Vehicle {
    constructor(name) {
        this.name = name;
    }
}

class Bike extends Vehicle {
    constructor(name, brand) {
        super(name);
        this.brand = brand;
    }

    display() {
        console.log("Vehicle: " + this.name);
        console.log("Brand: " + this.brand);
    }
}

let bike1 = new Bike("Bike", "Yamaha");
bike1.display(); 