let fullName = "Rahul Shelake"
let city = new String("Kolhapur")
let age = 22
//string interpolation
console.log(`My name is ${fullName} and my age is ${age} and am from ${city}`)

console.log(fullName.length)
console.log(fullName.charAt(1))
console.log(fullName.indexOf('e'))
console.log(fullName.toUpperCase())

let newString = fullName.substring(0,6)
console.log(newString)

let anotherString = fullName.slice(-7,9)
console.log(anotherString)

let newName = "    Rahul    "
console.log(newName.trim())