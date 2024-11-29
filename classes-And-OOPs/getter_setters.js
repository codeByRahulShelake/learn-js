class User {
    constructor(name, email, age){
        this.name = name
        this.email = email
        this.age = age
    }

    get email(){ // if you are writing get then you must write set also  
                    // you cannot write only get or only set
        return this._email.toUpperCase()
    }
    set email(value)
    {
        this._email = value+'tdfycs'
    }
}

let rahul = new User('Rahul Shelake', 'rahulshelake.connect@gmail.com', 22)

console.log(rahul.email);