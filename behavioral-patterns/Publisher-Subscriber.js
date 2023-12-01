/*
  A variation of the Observer pattern, where publishers and subscribers communicate through a message broker.
*/

class Publisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
  }

  notifySubscribers(message) {
    this.subscribers.forEach(subscriber => subscriber.notify(message));
  }

  publishMessage(message) {
    console.log(`Message published: ${message}`);
    this.notifySubscribers(message);
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  notify(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Instances
const subscriber1 = new Subscriber('Subscriber Taras');
const subscriber2 = new Subscriber('Subscriber Victoria');

const weatherPublisher = new Publisher();

// Subscribing to the publisher
weatherPublisher.subscribe(subscriber1);
weatherPublisher.subscribe(subscriber2);

// Publishing message
weatherPublisher.publishMessage("(-5 C) wind 28 km/h: pull in your hat, it's cold today");
// Message published: (-5 C) wind 28 km/h: pull in your hat, it's cold today
// Subscriber Taras received message: (-5 C) wind 28 km/h: pull in your hat, it's cold today
// Subscriber Victoria received message: (-5 C) wind 28 km/h: pull in your hat, it's cold today

// Unsubscribing the 1st subscriber
weatherPublisher.unsubscribe(subscriber1);

// New message updates
weatherPublisher.publishMessage('(10 C) wind 0 km/h: today is sunny');
// Message published: (10 C) wind 0 km/h: today is sunny
// Subscriber Victoria received message: (10 C) wind 0 km/h: today is sunny
