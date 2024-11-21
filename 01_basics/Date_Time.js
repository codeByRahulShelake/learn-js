let date = Date.now()
console.log(date)

let newDate = new Date()
console.log(newDate)
console.log(newDate.toString())
console.log(newDate.toDateString())
console.log(newDate.toISOString())


// Convert to Indian Standard Time (IST)
console.log(newDate.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })); // Full date and time
console.log(newDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })); // Only date
console.log(newDate.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })); // Only time
console.log(newDate.getMonth()+1)


let anotherDate = new Date(2002,2,12,12,3,12,12)
console.log(anotherDate.toString())

let createdDate = new Date();
createdDate.setFullYear(2002)
createdDate.setMonth(6)
createdDate.setDate(6)
createdDate.setHours(10)
createdDate.setMinutes(49)
createdDate.setSeconds(12)

console.log(createdDate.toDateString())





