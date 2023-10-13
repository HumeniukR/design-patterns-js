/*
  Allows objects to inherit properties and methods from other objects, promoting reusability.
*/

// Create a prototype object
const vehiclePrototype = {
  init: function (make, model) {
    this.make = make;
    this.model = model;
  },
  start: function () {
    console.log(`Starting the ${this.make} ${this.model}`);
  },
  stop: function () {
    console.log(`Stopping the ${this.make} ${this.model}`);
  },
};

// Create new objects using the prototype
const car1 = Object.create(vehiclePrototype);
car1.init('Toyota', 'Supra');

const car2 = Object.create(vehiclePrototype);
car2.init('Nissan', 'GTR');

// Usage the prototype's methods
car1.start(); //  Starting the Toyota Supra
car2.stop();  //  Stopping the Nissan GTR
