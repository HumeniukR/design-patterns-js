/*
  This pattern allows to dynamically add or modify the behavior of objects without initial
  implementation, providing extendability of the functionality of individual objects.
*/

// Component interface
class Coffee {
  cost() {
    return 5; // Base cost for a regular coffee
  }

  getDescription() {
    return 'Regular Coffee';
  }
}

// Concrete component
class Espresso extends Coffee {
  cost() {
    return 8; // Cost for Espresso is higher
  }

  getDescription() {
    return 'Espresso';
  }
}

// Decorator
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost();
  }

  getDescription() {
    return this.coffee.getDescription();
  }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 2; // Adding cost for milk
  }

  getDescription() {
    return `${this.coffee.getDescription()} with Milk`;
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1; // Adding cost for sugar
  }

  getDescription() {
    return `${this.coffee.getDescription()} with Sugar`;
  }
}

// Example
const regularCoffee = new Coffee();
console.log(`Cost: $${regularCoffee.cost()}, Description: ${regularCoffee.getDescription()}`);

const espressoWithMilkAndSugar = new SugarDecorator(new MilkDecorator(new Espresso()));
console.log(`Cost: $${espressoWithMilkAndSugar.cost()}, Description: ${espressoWithMilkAndSugar.getDescription()}`);
