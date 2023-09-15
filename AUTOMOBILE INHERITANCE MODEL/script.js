

// type car , truch ,suv ev
// engine gasoline, diesel, electric
// transmission automatic , manual
// speed 100, 200, 150 ( max )


function Vehicle(type, engine, transmission, speed) {
    this.type = type;
    this.engine = engine;
    this.transmission = transmission;
    this.speed = speed;
}


Vehicle.prototype.honk = function() {
    console.log('p... p.. p.. p.. ');
}

Vehicle.prototype.startEngine = function() {
    console.log('engine started');
}

Vehicle.prototype.stopEngine = function() {
    console.log('engine stoped');
}

let car = new Vehicle('suv','diesel' ,'automatic', 120 );
console.log(car);