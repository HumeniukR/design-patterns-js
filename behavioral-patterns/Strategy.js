/*
  Defines a family of algorithms, encapsulates each one, and makes them interchangeable. 
  It allows the algorithm to vary independently from clients that use it.
*/


class RoundingContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  performRounding(data) {
    return this.strategy.round(data);
  }
}

// Strategy interface
class RoundingStrategy {
  round(data) {}
}

// Concrete Strategies
class DiscountsStrategy extends RoundingStrategy {
  round(data) {
    const res = data.map(x => Math.ceil(x));
    console.log('Ceiled discounts: ' + res.join(', '));
    return res
  }
}

class PromotionsStrategy extends RoundingStrategy {
  round(data) {
    const res = data.map(x => Math.floor(x));
    console.log('Floored promotions: ' + res.join(', '));
    return res
  }
}


// promotions and discounts coefficients for half of year
const promotionsData = [5.123, 2.0972, 8.214, 1.12, 7.3211, 0.432, 3.543];
const discountsData = [5.2313, 2.4324, 8.764, 1.5435, 7.0143, 1.55, 6];

const ds = new DiscountsStrategy();
const ps = new PromotionsStrategy();


const context = new RoundingContext(ds);


// Round discounts
context.performRounding(discountsData);

// Changing strategy
context.setStrategy(ps);
// Round promotions
context.performRounding(promotionsData);

