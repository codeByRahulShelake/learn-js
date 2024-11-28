function setUserName (username)  {
    this.username = username
}

function createUser (username, age, password){
    setUserName.call(this, username)

    this.age = age
    this.password = password
}

let rahul = new createUser('Rahul Shelake', 22, 'Rahul@Shelake')

console.log(rahul);