class User{
    constructor(username,email,pass){
        this.username=username;
        this.email=email;
        this.pass=pass;
    }
    encryptPass(){
        return `${this.pass}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}
const newUser=new User("Harshit",'hmittal0418@gmail.com','1223334444');
console.log(newUser.encryptPass());
console.log(newUser.changeUsername());
