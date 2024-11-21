function display(){
    console.log("Hello");
}

display()

function add(num1, num2){
    console.log(num1 + num2);
}

add(1,2)
console.log(add(32,12));
add(1,"ra")

function returnAdd(num1 , num2){
    return num1 + num2
}

console.log(returnAdd(34,42));

function displayName(name){
    console.log(`Name : ${name}`);
}

displayName("Rahul Shelake")

function displayNum(...num){
    console.log(num)
}

displayNum(100,200,300,400)

const myObj = {
    fullName : "Rahul Shelake",
    age : 22
}

function displayObj(anyobj){
    console.log(`My name is ${anyobj.fullName} and my age is ${anyobj.age}.`);
}

displayObj(myObj)

displayObj({
    fullName : "Rohan Patil",
    age : 18
})

function displayIndexValue(anyArr,index){
    return anyArr[index]
}

console.log(displayIndexValue([10,20,30,40,50],3));