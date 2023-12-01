/*
  A way to create objects by defining a constructor function and then instantiating objects with the 'new' keyword.
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Maria', 26);
const person2 = new Person('Anton', 18);
