class User{
    constructor(username){
        this.username=username;
    }
    logIn(){
        console.log(`Username ${this.username} logged in`);
    }
}
class Teacher extends User{
    constructor (username,email,pass){
        super(username);
        this.email=email;
        this.pass=pass;
    }
    addcourse(){
        console.log(`A new course has been added by ${this.username}`);
    }
}
const newUser=new Teacher("Akshita","123@gmail.com","hello");
newUser.addcourse();
newUser.logIn();
console.log(newUser instanceof User);
// here instance of keyword tells us whether the obj made using constructor is instance of class or not
