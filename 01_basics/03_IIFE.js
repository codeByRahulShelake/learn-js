
(function dbConnection(){
console.log("Database connected.");
})();  // always remember to ends the IIFE with semicolon.

((userName) => {
    console.log("My name is ",userName);
})("Rahul Shelake");  