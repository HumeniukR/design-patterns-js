/*
   Passes a request along a chain of handlers. Upon receiving a request, each handler
   decides either to process the request or to pass it to the next handler in the chain.
*/

class Request {
  constructor(type, content) {
    this.type = type;
    this.content = content;
  }
}

class Handler {
  constructor(successor = null) {
    this.successor = successor;
  }

  handleRequest(request) {
    if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}

class ConcreteHandlerA extends Handler {
  handleRequest(request) {
    if (request.type === 'A') {
      console.log(`Handler A processed the request: ${request.content}`);
    } else {
      super.handleRequest(request);
    }
  }
}

class ConcreteHandlerB extends Handler {
  handleRequest(request) {
    if (request.type === 'B') {
      console.log(`Handler B processed the request: ${request.content}`);
    } else {
      super.handleRequest(request);
    }
  }
}

class ConcreteHandlerC extends Handler {
  handleRequest(request) {
    if (request.type === 'C') {
      console.log(`Handler C processed the request: ${request.content}`);
    } else {
      console.log('Request could not be handled.');
    }
  }
}

// Create the chain of handlers
const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();
const handlerC = new ConcreteHandlerC();

handlerA.successor = handlerB;
handlerB.successor = handlerC;

// Test the chain
const request1 = new Request('A', 'Request A');
const request2 = new Request('B', 'Request B');
const request3 = new Request('C', 'Request C');
const request4 = new Request('D', 'Request D');

handlerA.handleRequest(request1);
handlerA.handleRequest(request2);
handlerA.handleRequest(request3);
handlerA.handleRequest(request4);

/*
Result:
  "Handler A processed the request: Request A"
  "Handler B processed the request: Request B"
  "Handler C processed the request: Request C"
  "Request could not be handled."
*/