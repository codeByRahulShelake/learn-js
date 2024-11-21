let marvel_heroes = ["Thor","IronMan","Spiderman"]
console.log(marvel_heroes)

let dc_heroes = ["Superman","Flash","BatMan"]
console.log(dc_heroes)

// let newArr = marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

console.log(marvel_heroes.concat(dc_heroes))

console.log([...marvel_heroes,...dc_heroes])

const arr3 = [1,2,3,[4,5],6,7,[8,9,10,[11,12,13]]]
console.log(arr3) 

console.log(arr3.flat(Infinity))


console.log(Array.from("Rahul"))

console.log(Array.isArray("Shelake"))

console.log(Array.from({fullName : "Rahul Shelake"}))
