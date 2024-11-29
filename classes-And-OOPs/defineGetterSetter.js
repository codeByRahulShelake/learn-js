function obj (name, email, password) {
    this. name = name 
    this.email = email 
    this.password = password 

    Object.defineProperty(this, 'password', {
        get : function()
        {
            return password.toUpperCase()
        },

        set : function(value)
        {
            password = value
        }
    })
}

let rahul = new obj('Rahul Shelake', 'rahul@gmail.com', 'Rahul@Shelake')

console.log(rahul.password);