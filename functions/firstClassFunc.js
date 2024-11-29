// Assigning a function to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
  };
  
  console.log(greet('Rahul'));  // Output: Hello, Rahul!
  
  // Passing functions as arguments
  function execute(fn) {
    console.log(fn('Rahul'));
  }
  
  execute(greet);  // Output: Hello, Rahul!
  
  // Returning a function from another function
  function outer() {
    return function() {
      console.log('Inner function');
    };
  }
  
  const inner = outer();
  inner();  // Output: Inner function
  