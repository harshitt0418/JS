class User{
    constructor(username){
        this.username=username;
    }
    logIn(){
        console.log(`Username ${this.username} logged in`);
    }
    static createId(){
        console.log(`123`);
    }
}
const user1=new User("abcd");
// user1.createId(); this will not run as this function is static which means it is only available in a class and you cant access it outside the class
class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
const user2=new Teacher("abcd123","111@gmail.com");
// user2.createId();this cant also be accessed reason is same as of above