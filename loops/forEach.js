const programming = ["js", "rb", "py", "java", "cpp"]
console.log("Programming languages :");
programming.forEach(function (lang) {
    console.log(lang);
    
})

const names = ["Rahul", "ROhan", "Akash", "Abhi", "Sonali"]
console.log("\nNames :");
names.forEach( (name) => {
    console.log(name);
    
})

console.log("\nUsing function calling from for each :");
names.forEach(printMe)

function printMe(item){
        console.log(item);
    }

const users =[
    {
        username : "Supriya",
        userId : 101
    },
    {
        username : "Sarang",
        userId : 111
    },
    {
        username : "Jonny",
        userId : 108
    },
    {
        username : "Thugesh",
        userId : 104
    }
]

console.log("\nUsers :");
users.forEach((user) => {
    console.log(`Username : ${user.username}\tUser Id : ${user.userId}`);
})


const myArr = ["Sam","Ram,","Sham","Kam","Dham"]
console.log("\nPrinting value its index and whole array");
myArr.forEach((val, index, arr) => {
    console.log(val, index, arr);
})