function setUsername(username){
    this.username=username;
    console.log("hiii");
}
function createUser(username,email,pass){
    setUsername.call(this,username);
    //.call function is used so when the is executed then all its context doesnt erease from global context 
    //here this is given to tell the function to not use its this context instead use this of this outer function
    this.email=email;
    this.pass=pass;
}
const newUser=new createUser("Harshit",'hmittal0418@gmail.com','1223334444');
// now this will create a new user and we can see all its attributes like username mail and pass
console.log(newUser);

