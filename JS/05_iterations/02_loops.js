//for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings="Hello World!"
for (const greet of greetings) {
    //console.log(`Each char of greetings ${greet}`);
    
}

const myMap=new Map()
myMap.set("IN","India")
myMap.set("US","United states of america")
myMap.set("FR","France")
myMap.set("IN","India")
console.log(myMap);// in map duplicate pair are not considered

for (const keys of myMap) {
    console.log(keys);
}//this prints all the pairs in the array

for (const [keys,values] of myMap) {
    console.log(keys, ':-', values);
}//this differentiates between keys and pair ny which we can use them alone also

const myObj={
    "game 1":"NFS",
    "game 2":"Spiderman"
}//we cant use for of loop for objects 
