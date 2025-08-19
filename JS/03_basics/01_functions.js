function SayMyName(){
    console.log('H');
    console.log('A');
    console.log('R');
    console.log('S');
    console.log('H');
    console.log('I');
    console.log('T');
}
SayMyName//this refers to the location where function is stored
//SayMyName()//this executes the function

/*function addTwoNumbers(number1,number2){
    console.log(number1+number2);   
}
addTwoNumbers(4,"5")//result -> 45 because it converts 4 into string
addTwoNumbers(4,5)//result -> 9*/


function addTwoNumbers(number1,number2){
   // let result=number1+number2
   // return result  
   return number1+number2  
}
const result=addTwoNumbers(7,4)
console.log(`result: ${result}`)


function loginUserMessage(username/*="sam"if we initialize with any default value then if any value wont be passed it will automatically consider this*/){
    if(!username){
        console.log(`Please enter username`);
        return
        
    }
    return `${username} just logged in!!`
}
console.log(loginUserMessage("Harshit"));
console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,400,500,2000));


function calculateCartPrice2(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice2(100,200,400,500,2000));

const user={
    username:"harshit",
    price:2299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)