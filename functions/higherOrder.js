// A function that takes another function as an argument
function applyOperation(a, b, operation) {
    return operation(a, b);
  }
  
  const add = (x, y) => x + y;
  const multiply = (x, y) => x * y;
  
  console.log(applyOperation(5, 3, add));        // Output: 8
  console.log(applyOperation(5, 3, multiply));   // Output: 15
  

  function stringFormatter(str, formatter) {
    return formatter(str);
  }
  
  const toUpperCase = (text) => text.toUpperCase();
  const toLowerCase = (text) => text.toLowerCase();
  const addExclamation = (text) => `${text}!`;
  
  console.log(stringFormatter('hello', toUpperCase));    // Output: HELLO
  console.log(stringFormatter('WORLD', toLowerCase));    // Output: world
  console.log(stringFormatter('Hi there', addExclamation)); // Output: Hi there!
  

  function message(message, logType) {
    return logType(message);
  }
  
  const info = (msg) => `INFO: ${msg}`;
  const warn = (msg) => `WARN: ${msg}`;
  const error = (msg) => `ERROR: ${msg}`;
  
  console.log(message('System is running', info));      // Output: INFO: System is running
  console.log(message('Disk space low', warn));         // Output: WARN: Disk space low
  console.log(message('System crash detected', error)); // Output: ERROR: System crash detected
  