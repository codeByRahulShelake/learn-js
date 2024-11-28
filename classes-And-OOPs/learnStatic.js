class Example {
    static greet() {
        return 'Hello, world!';
    }

    getByClass() {
        return Example.greet(); // Can only access via the class name
    }
}

const ex = new Example();
// console.log(ex.greet())    not works with instance variable
console.log(Example.greet()); // Works
console.log(ex.getByClass()); // Works via method call
