const User = {
    _name : 'Rahul Shelake', 
    _email : 'rahul@gmail.com',
    _password : 'Rahu@98',

    get email() {
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }

}

let rahul = Object.create(User)  // another way to create object

console.log(rahul.email); // we can directly call it by get method name

console.log(rahul._email); // using this will get the raw data without invoking the getter