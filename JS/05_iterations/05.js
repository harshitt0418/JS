/*const coding=['javascript','ruby','cpp','swift','python','java']

const myAns=coding.forEach( (item) => {
    console.log(item);
    return item;
});
console.log(myAns);//for each doesnt return any values no matter what we use return or not!!*/

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((nums)=>nums>4)
// console.log(newNums); 

// const newNums=myNums.filter((nums)=>{
//     return nums>4
// })//always remember that we use arrow functions with scope we have to use return keyword to return but if we dont use it and end our arrow function in one line it automatically returns
// console.log(newNums);

const newNums=[]

myNums.forEach((element) => {
    if (element>4) {
        newNums.push(element)   
    }
});//another way to do the above work without using filter
console.log(newNums);

//filter function is very useful to collect some speific datas which satisfy the given conditions


