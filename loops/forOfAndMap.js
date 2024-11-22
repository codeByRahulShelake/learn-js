let myArray = ["flash", "batman", "superman"]

for (const element of myArray) {
    console.log(element);
    
}
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

const map = new Map()
map.set("Rahul" , 85)
map.set("Rohan" , 76)
map.set("Akash" , 35)
map.set("Abhi" , 98)
map.set("Sonali" , 76)

for (const element of map) {
    console.log(element);
}
map.set("Rahul" , 89)  // dont have duplicate values but can change the value of a duplicate key
for (const [key, value] of map) {
    console.log(key , " : ",value);
}

