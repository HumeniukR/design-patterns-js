/*
  Creates objects without specifying the exact class of object to be created. 
  It defines an interface for creating an object but lets subclasses alter the type of objects that will be created.
*/

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

function Cat(name, breed) {
  this.name = name;
  this.breed = breed;
}

function createAnimal(name, breed, type) {
  switch (type) {
    case 'dog':
      return new Dog(name, breed);
    case 'cat':
      return new Cat(name, breed);
    default:
      return null;
  }
}

const myDog = createAnimal('Beem', 'Golden Retriever', 'dog');
const myCat = createAnimal('Markiz', 'Siamese', 'cat');
