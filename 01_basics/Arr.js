let arr = [1,2,3,4,5]
console.log(arr)

let arr2 = new Array(6,7,8,9,10)
console.log(arr2)

console.log(arr.includes(3))
arr.shift()
console.log(arr)
arr.unshift(9)
console.log(arr)

arr.push(54,12,21)
console.log(arr)
arr.pop()
console.log(arr)

const sl = arr.slice(0,3)
console.log("Sliec element : ",sl)
console.log("Now arr after slice : ",arr)

const sp = arr.splice(0,3)
console.log("Splice element : ",sp)
console.log("Now arr after splice : ",arr)



