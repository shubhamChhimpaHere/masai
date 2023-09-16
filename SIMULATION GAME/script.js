// Create a basic Vehicle constructor function that initializes properties like brand, model, speed, and fuelType.
// Using the prototype, add common methods to the Vehicle object like accelerate(), brake(), and refuel().

// accelerate() should increase the speed of the vehicle.
// brake() should decrease the speed.
// refuel() should log a message indicating the vehicle is refueling.


function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function() {
    let speedi =  this.speed;
    console.log(speedi, speedi += 5, speedi += 5, '_______');
    console.log('accelerated');
}
Vehicle.prototype.brake = function() {
    let speedd =  this.speed;
    console.log(speedd, speedd -= 5, speedd -= 5, '______');
    console.log('brake applied ');
}

Vehicle.prototype.refuel = function() {
    console.log(this.brand,' is refueling...')
}

//   ****** example *****

let vehicle1 = new Vehicle('maruti','alto', 120, 'petrol');
// console.log(vehicle1)
// vehicle1.accelerate()
// console.log(vehicle1)
// vehicle1.brake()
// console.log(vehicle1)
vehicle1.refuel()




// Now, create a Car constructor function. The Car function should inherit properties and methods from the Vehicle object. Additionally, Car should have an extra property numberOfWheels and a method honk() that logs a honking sound.



function Car(brand, model, speed, fuelType, numberOfWheels) {

   Vehicle.call(this, brand,model, speed, fuelType)
   this.numberOfWheels = numberOfWheels;
    
}
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.prototype.honk = function() {
    console.log('p p p p.... honk applied');
}


// ****** example *******

// let car1 = new Car('maruti','alto', 120, 'pertrol',4);
// console.log(car1)
// car1.brake()
// car1.honk()


// Similarly, create an Airplane constructor function that inherits from Vehicle. It should have properties numberOfEngines and hasLandingGear and a method takeOff() that logs a message indicating the airplane is taking off.

function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType)
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}

Object.setPrototypeOf(Airplane.prototype, Vehicle.prototype);

Airplane.prototype.takeOff = function() {
    console.log('airplane is taking off.')
}

// ****** example ******

// let airplane1 = new Airplane('maruti', 'alto', 120, 'ev', 2, true);
// console.log(airplane1)
// airplane1.takeOff()
// airplane1.brake()


// Show how you would create a new instance of Car and Airplane, and demonstrate invoking their methods, ensuring that both types of vehicles can still accelerate, brake, and refuel through their prototype chain.


let car2 = new Car('maruti', 'alto', 120, 'petrol', 4);

car2.accelerate()
car2.brake()
car2.refuel()

let airplane2 = new Airplane('maruti2', 'alto2', 120, 'petrol', 4, true);

airplane2.accelerate()
airplane2.brake()
airplane2.refuel()