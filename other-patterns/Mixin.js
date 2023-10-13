/*
  A way to add properties and methods from one object to another, combining multiple objects functionality into a single object.
*/

// Define mixin objects
const canEat = {
  eat: function (food) {
    console.log(`Eating ${food}`);
  },
};

const canSleep = {
  sleep: function () {
    console.log('Sleeping');
  },
};

const canPlay = {
  play: function (game) {
    console.log(`Playing ${game}`);
  },
};

// Create an object and mix in the functionality
const pet = {};
Object.assign(pet, canEat, canSleep, canPlay);

// Now, the 'pet' object has the combined functionality
pet.eat('Biscuits');  // Eating Biscuits
pet.sleep();          // Sleeping
pet.play('Fetch');    // Playing Fetch