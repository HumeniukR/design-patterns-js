/*
  The pattern enables to work with complex hierarchies of objects by treating both 
  individual objects and compositions of objects in a uniform manner.
*/

// Component interface
class Graphic {
  draw() {}
}

// Leaf class representing a simple graphical shape
class Circle extends Graphic {
  constructor(name) {
    super();
    this.name = name;
  }

  draw() {
    console.log(`Drawing Circle: ${this.name}`);
  }
}

// Composite class representing a group of graphical shapes
class CompositeGraphic extends Graphic {
  constructor(name) {
    super();
    this.name = name;
    this.graphics = [];
  }

  add(graphic) {
    this.graphics.push(graphic);
  }

  remove(graphic) {
    this.graphics = this.graphics.filter(g => g !== graphic);
  }

  draw() {
    console.log(`Drawing Composite: ${this.name}`);
    this.graphics.forEach(graphic => graphic.draw());
  }
}

// Example
const circle1 = new Circle('Circle 1');
const circle2 = new Circle('Circle 2');
const composite = new CompositeGraphic('Composite 1');

composite.add(circle1);
composite.add(circle2);

const circle3 = new Circle('Circle 3');
const composite2 = new CompositeGraphic('Composite 2');

composite2.add(circle3);
composite2.add(composite);

// Drawing the entire structure
composite2.draw();
