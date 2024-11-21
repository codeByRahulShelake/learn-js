//Object.create()    a singleton object

let mySym = Symbol("Key1")

const myObj = {
    fullName : "Rahul Shelake",
    age : 22,
    [mySym] : "Mykey",
    Gender : "Male",
    isLoggedIn : false
}


console.log(myObj.age)
console.log(myObj[mySym])
myObj.age = 24
// Object.freeze(myObj)
// myObj.fullName = "Ram"



myObj.display = function() {
    console.log("Hello")
}

myObj.displayInfo = function() {
    console.log(`Name : ${this.fullName}
Age : ${this.age}
Key : ${this[mySym]} 
Gender : ${this.Gender}
Logged in : ${this.isLoggedIn}`)
}

console.log(myObj.display())
console.log(myObj.displayInfo())

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 1 : "a", 2 : "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}  // combining two objects with spread operator
console.log(obj3);


const userInfo = { // object inside object
    name : {
        firstName : "Rahul",
        lastName : "Shelake"
    },
    id : 101 
}

console.log(userInfo.name.firstName);

console.log(Object.keys(myObj)); // display each key in array format
console.log(Object.values(myObj));// display each value in array format
console.log(Object.entries(myObj));// display each key-value pair in array format

console.log(myObj.hasOwnProperty("fullName"));

const {fullName : name} = myObj // object destructure

console.log(name);