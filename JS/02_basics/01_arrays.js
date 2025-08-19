//    ARRAY

const Arr1=[1,2,3,4,5]
console.log(Arr1);

const myArr=[1,2,3,4,5,'Harshit']
console.log(myArr);

const myArr2=new Array(1,2,3,4,5)
console.log(myArr2);
console.log(myArr2[1]);

console.log(typeof Arr1);
console.log(typeof myArr2);

//                          ARRAY METHODS                            //


myArr2.push(6)
myArr2.push(7)
console.log(myArr2);
myArr2.pop()
console.log(myArr2);

console.log(`12`);
myArr2.unshift(9)
console.log(myArr2);

myArr2.shift()
console.log(myArr2);

console.log(myArr2.includes(9));

let newStringArr=myArr2.join()
console.log(myArr2);
console.log(newStringArr);

console.log("A",myArr2);
console.log(myArr2.slice(1,3));

console.log("B",myArr2);
console.log(myArr2.splice(1,3));

console.log("C",myArr2);


