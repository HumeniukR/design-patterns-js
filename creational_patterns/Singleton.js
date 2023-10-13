/*
  Ensures that a class has only one instance and provides a global point of access to that instance.
*/
const Singleton = (function () {
  let instance;

  function createInstance() {
    // Private variables and methods
    let privateVar = 'I am a private variable';

    function privateMethod() {
      console.log('I am a private method');
    }

    return {
      // Public methods and variables
      publicVar: 'I am a public variable',
      publicMethod: function () {
        console.log('I am a public method');
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true, only one instance is created
