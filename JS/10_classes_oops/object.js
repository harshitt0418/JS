function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power=8;
console.log(multiplyBy5(6));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// const num={
//     username:"Harshit",
//     userMail:"hmittal0418@gmail.com",
//     isLoggedIn:true
// }
// console.log(num.isLoggedIn);
// console.log(num.prototype);

function user(username,score){
    this.username=username;
    this.score=score;
}
user.prototype.increment=function(score){
    this.score++;
}
// here this keyword is very imp as it tells which obj is calling for example if are there are two objects refering the same function then we have to specify which obj is calling which can be done only using this keyword
user.prototype.printSCore=function(score){
    console.log(`price is ${this.score}`);
    
}
const chai=new user("chai",25)
// here new keyword is very very imp as we cant access to prototype without this new keyword
const tea=new user('tea',50)
chai.increment();
chai.printSCore();