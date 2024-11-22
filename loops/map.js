const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => num + 10)
console.log(newNums);

const anotherNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(anotherNums);

const returnNums  = myNumers.map( (num) => {
    if (num > 3)
        return num
})
console.log(returnNums);  // it will return undefined if the condition is not satisfied