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