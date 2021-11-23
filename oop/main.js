// class Book {
//     constructor(title, author, genre, year) {
//         this.title = title;
//         this.author = author;
//         this.genre = genre;
//         this.year = year; //binding the parameter to this instance of the class

//     }

//     getSummary() {
//         return `${this.title} is written by ${this.author}. The genre is ${this.genre} and it was published in ${this.year}`;
//     }
// }

// const book1 = new Book("Harry Potter and the Half-Blood Prince", "JK Rowling", "fiction", 2009);
// console.log(book1);


// class Magazine extends Book {
//     constructor(title, author, genre, year, length) {
//     super(title, author, genre, year)
//     this.length = length;
//     }
// }

// const mag1 = new Magazine("Mag One", "Sam Joyce", "tech", 2021, 100);
// console.log(mag1);
// console.log(mag1.getSummary());

// class Employee {
//     constructor(name, rating, grade, nextGrade) {
//         this.name = name;
//         this.rating = rating;
//         this.grade = grade;
//         this.nextGrade = nextGrade;

//     }
//     bePromoted () {
//         if(this.rating >= 7) {
//             return `${this.name} will be promoted from ${this.grade} to ${this.nextGrade}`;
//         } else {
//             return `${this.name} will not be promoted`;
//         }
//     }
    
// }

// const employeeOne = new Employee ("Natalie", 10, "manager", "senior manager");
// console.log(employeeOne.bePromoted());

// class Vehicle {
//     constructor(steeringWheel, numberOfGears, manualGears, numberOfWheels) {
//         this.steeringWheel = steeringWheel;
//         this.numberOfGears = numberOfGears;
//         this.manualGears = manualGears;
//         this.numberOfWheels = numberOfWheels;
//     }
// }

// class Car extends Vehicle {
//     constructor(steeringWheel, numberOfGears, manualGears, numberOfWheels, topSpeed) {
//     super(steeringWheel, numberOfGears, manualGears, numberOfWheels)
//     this.topSpeed = topSpeed;
//     }
// }

// class Tesla extends Car {
//     constructor(steeringWheel, numberOfGears, manualGears, numberOfWheels, topSpeed, electricEngine) {
//     super(steeringWheel, numberOfGears, manualGears, numberOfWheels, topSpeed)
//     this.electricEngine = electricEngine;
   
// }

// }

// const newCar = new Tesla(true, 4, true, 4, 100, true);
// console.log(newCar);

class Vehicle {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.currentVelocity = 0;
        this.currentDirection = 0;
    }
    getCurrentDirection () {
        return this.currentDirection;
    }

    getCurrentVelocity () {
        return this.currentVelocity;
    }

    steer(direction) {
        this.currentDirection += direction;
        console.log("Vehicle.steer(): Steering at" + this.currentDirection + "degrees");
    }

    move(velocity, direction) {
        this.currentVelocity = velocity;
        this.currentDirection = direction;
        console.log("Vehicle.move(): Moving at " + this.currentVelocity + "mph in direction" + this.currentDirection + ".");
    }

    stop() {
        this.currentVelocity = 0;
    }
}

const nataliesVehicle = new Vehicle("Tractor", "large");
console.log(nataliesVehicle.steer());
nataliesVehicle.steer(45);


class Car extends Vehicle {
    constructor(name, size, wheels, doors, gears, isManual) {
    super(name, size);
    this.wheels = wheels;
    this.doors = doors;
    this.gears = gears;
    this.isManual = isManual;
    this.currentGear = 1;
    }

    changeGear(currentGear) {
        this.currentGear = currentGear;
        console.log("Car.changeGear(): Changed to gear" + this.currentGear);
    }

    changeVelocity(speed, direction) {
        console.log("Car.changeVelocity(): Velocity" + speed + "direction " + direction);
        super.move(speed, direction);
    }
}

const nataliesCar = new Car ("NatalieCar", "Medium", 4,5,5,true, 0);
console.log(nataliesCar);

class Ferrari extends Car {
    constructor(roadServiceMonths) {
        super("Ferrari", "RWD", 4 , 5, 6, false);
        this.roadServiceMonths = roadServiceMonths;
    }

accelarate (rate) {
    let newVelocity =super.getCurrentVelocity() + rate;
    if (newVelocity == 0) {
        super.stop();
        super.changeGear(1);
    } else if (newVelocity > 0 && newVelocity <= 10 ) {
        super.changeGear(1);
    } else if (newVelocity > 10 && newVelocity <= 20 ) {
        super.changeGear(2);
    } else if (newVelocity > 20 && newVelocity <= 30 ) {
        super.changeGear(3);
    } else {
        super.changeGear(4);
    }

    if(newVelocity > 0) {
        super.changeVelocity(newVelocity, super.getCurrentDirection())
    }
}
}

const ferrari = new Ferrari(7);

ferrari.steer(45);
ferrari.accelarate(30);
ferrari.accelarate(20);