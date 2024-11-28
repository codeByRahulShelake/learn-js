const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Rahul Shelake');
        resolve()
    },1000)

    
})

promise1.then(() => {
    console.log('Promise resolved');
})

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Second promise');
        resolve(45)
    },1000)

    
})

promise2.then((no) => {
    console.log(`Second Promise resolved ${no}`);
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Third promise without variable');
        resolve()
    },1000)

    
}).then(() => {
    console.log('Third Promise resolved');
})

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Fourth promise');
        resolve({name : "Rahul Shelake", age : 22})
    },1000)

    
})

promise4.then((obj) => {
    console.log(obj);
})

const promise5 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if(error){
            reject('Error : Something went wrong')
        }
        else
        {
            resolve({name : "Rahul Shelake", age : 22})
        }
    },1000)

    
})

promise5.then((obj) => {
    console.log(obj);
})
.catch((error) => {
    console.log(error);
})

const promise6 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if(error){
            reject('Error : Something went wrong')
        }
        else
        {
            resolve({name : "Rahul Shelake", age : 22})
        }
    },1000)

    
})

promise6.then((obj) => {
    return obj.name
})
.then((name) => {
    console.log('Name : ',name);
})
.catch((error) => {
    console.log(error);
})

const promise7 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if(error){
            reject('Error : Something went wrong')
        }
        else
        {
            resolve({name : "Rahul Shelake", age : 22})
        }
    },1000)

    
})

promise7.then((obj) => {
    console.log(obj);
})
.catch((error) => {
    console.log(error);
})
.finally((eror) => {
    console.log('Finally blocked which always execute');
})


const promise8 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if(error){
            reject('Error : Something went wrong')
        }
        else
        {
            resolve({name : "Rahul Shelake", age : 22})
        }
    },1000)
})

async function display(){
    try {
        const data = await promise8
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

display()