class User {
    constructor(name = 'unknown', age = 0, address = 'unknown')
    {
        this.name = name
        this.age = age
        this.address = address
    }

    displayUser(){
        console.log(`Name : ${this.name}\t Age : ${this.age}\t Address : ${this.address}`);
    }
}

const rahul = new User('Rahul Shelake',22, 'Kolhapur')
rahul.displayUser()

const unknown = new User()
unknown.displayUser()