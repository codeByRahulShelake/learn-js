class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const rahul = new Teacher("Rahul Shelake", "chai@teacher.com", "123")

rahul.logMe()
rahul.addCourse()
const rohan = new User("Rohan Patil")

rohan.logMe()

console.log(rahul instanceof User);