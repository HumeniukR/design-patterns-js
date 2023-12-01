/*
  Encapsulates a set of functions and data into a single object, providing privacy and preventing naming conflicts.
*/

const Module = (function () {
  let privateVar = 'I am private';

  function privateFunction() {
    console.log('This is a private function');
  }

  return {
    publicVar: 'I am public',
    publicFunction: function () {
      console.log('This is a public function');
    },
  };
})();

console.log(Module.publicVar);
Module.publicFunction();
// Accessing privateVar or privateFunction directly would result in an error
