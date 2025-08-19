const userEmail=[]

if(userEmail){
    console.log("Got user email!");
}else{
    console.log("Didn't got user email!");
}

//falsy values
//-> false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//-> true, "0", 'false', ' ' , [], {}, function(){}

if(userEmail.length===0){
    console.log("Array is empty");
    
}

const Obj={}

if(Object.keys(Obj).length===0){
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator (??): null undefined

let val1=2;
//val1=5 ?? 10//output-> 5 it takes the first value that we assign to it instead of null and undefined
//val1=null ?? 15//output-> 15
//val1=undefined ?? 20//output-> 20
//val1=null ?? 15 ?? 20//output-> 15
console.log(val1);

// Terniary Operator
//condition ? true : false

const iceTeaPrices=100
iceTeaPrices<=80 ? console.log(`Price is less than 80`) : console.log(`Price is greater than 80`);
;

