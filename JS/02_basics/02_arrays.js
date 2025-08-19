// const marvel_heros=["thor","ironman","spiderman"];
// const dc_heros=["superman","flash","batman"];

// //marvel_heros.push(dc_heros);

// //console.log(marvel_heros);      
// //console.log(marvel_heros[3][1]);    //this is not good practice 

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);

// const new_all_heros=[...marvel_heros,...dc_heros]
// console.log(new_all_heros);  //this is a better practice to merge two arrays as concatinate applies only to two arrays and this is known as spread operator

// const another_array=[1,2,3,[4,5],[6,[7,8,[9,10]]]];
// const real_another_array=another_array.flat(Infinity);
// console.log(real_another_array);


// console.log(Array.isArray("Harshit"));//isArray operator checks wheteher the given input is array or not 
// console.log(Array.from("Harshit"));//from operator converts any string or numbers into array
console.log(Array.from({Name: "Harshit"}))// in this case we have to specify which part we want to make array if not specified it will return empty array

// const score1=100
// const score2=200
// const score3=300

// console.log(Array.of(score1,score2,score3));



