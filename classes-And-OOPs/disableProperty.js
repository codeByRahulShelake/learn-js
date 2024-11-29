const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

console.log('Before change : ',Math.PI);
Math.PI = 5
console.log('After change : ',Math.PI);

const rahul = {
    name: 'Rahul Shelake',
    age: 22,
    isAvailable: true,

    display: function(){
        console.log("I am Rahul Shelake");
    }
}

console.log(Object.getOwnPropertyDescriptor(rahul, "name"));

Object.defineProperty(rahul, 'name', {
    writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(rahul, "name"));

for (let [key, value] of Object.entries(rahul)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}