function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2  // it can also be treated as object

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);  // it will return empty prototype

function product(name, price){
    this.name = name
    this.price = price
}

product.prototype.increment = function(incPrice){
    this.price += incPrice
}
product.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}

const chai = new product("chai", 25)
const tea = product("tea", 250)

chai.increment(200)

chai.printMe()

