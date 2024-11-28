// async function getData(){
//     try {
//        const response = await fetch('https://api.github.com/users/codeByRahulShelake')
//         const data = await response.json()
//        console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
    
// }
// getData()

fetch('https://api.github.com/users/codeByRahulShelake')
.then((response)=> {
    return response.json()
})
.then((data)=> {
    console.log(data);
})
