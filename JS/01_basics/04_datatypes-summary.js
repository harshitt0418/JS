/*# Primitive
7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

Javascript is a dynamacially type languange because the datatypes of variables are not defined which 
means a single variable can have int, string as well as bool type values during runtime*/

const id1=Symbol('123')
const id2=Symbol('123')
console.log(id1===id2)
/*=== -> it compares values as well as datatype while == -> compares only values if datatypes are diff it 
automatically converts values to same datatype*/

/*# Refrence type Or Non-Primitive 
Array, Objects, Functions */

const heros=["shaktiman","naagraj","doga"];//array
let myobj={
	name: "Harshit",
	age: 21,
}//obj
const MyFunction=function(){
	console.log("Hello world");
}
console.log(typeof id2)

//very imp
/*Return type of variables in JavaScript

1) Primitive Datatypes
Number => number
String => string
Boolean => boolean
null => object
undefined => undefined
Symbol => symbol
BigInt => bigint

2) Non-primitive Datatypes
Arrays => object
Function => function
Object => object*/