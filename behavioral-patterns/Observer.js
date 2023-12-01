/*
  Defines a one-to-many dependency between objects so that when one object changes state, 
  all its dependents are notified and updated automatically.
*/

class Observable {
  constructor() {
    this.observers = [];
    this.message = '';
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.message));
  }

  setMessage(message) {
    this.message = message;
    this.notifyObservers();
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Instances
const alfa = new Observer('Alfa');
const delta = new Observer('Delta');

const observableTarget = new Observable();
observableTarget.addObserver(alfa);
observableTarget.addObserver(delta);

// Updates
observableTarget.setMessage('Our target started moving to the West');
// Alfa received message: Our target started moving to the West
// Delta received message: Our target started moving to the West

// Removing an observer
observableTarget.removeObserver(alfa);

// New update
observableTarget.setMessage('Alfa started relocation, continue watching');
// Delta received message: Alfa started relocation, continue watching
