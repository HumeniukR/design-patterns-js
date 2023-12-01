/*
  Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.
*/

// Context
class Context {
  constructor() {
    this.state = new StateDay();
  }

  setState(state) {
    this.state = state;
  }

  request() {
    this.state.handle(this);
  }
}

// State interface
class State {
  handle(context) {}
}

// Concrete States
class StateDay extends State {
  handle(context) {
    console.log('mafia to go back to sleep, townspeople wake up');
    context.setState(new StateNight());
  }
}

class StateNight extends State {
  handle(context) {
    console.log('townspeople village going to sleep, mafia wake up');
    context.setState(new StateDay());
  }
}

// Example "Mafia" card game 
const mafiaContext = new Context();

mafiaContext.request(); // mafia to go back to sleep, townspeople wake up
mafiaContext.request(); // townspeople village going to sleep, mafia wake up
mafiaContext.request(); // mafia to go back to sleep, townspeople wake up
