const user={
    username:"Harshit",
    price:2999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this); 
    }
}
user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()

console.log(this);


//++++++++++++++++++++++++++++++++++++    ARROW FUNCTION    +++++++++++++++++++++++++++++++++++//

const addTwoNums = (num1,num2) => { //syntax of arrow function 
    return num1+num2
}
console.log(addTwoNums(4,3));

const addTwo = (num1,num2) => (num1+num2)//another syntax of arrow function, in this we use paranthesis instead of curly braces and when we use curly braces we have to use return keyword but with paranthesis we dont have to use return keyword
console.log(addTwo(4,3));

const objectReturn = (num1,num2) => ({username:"Harshit"})
console.log(objectReturn(8,2));

