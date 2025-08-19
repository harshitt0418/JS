//   DATES

const myDate= new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

console.log(typeof myDate);

let myCreatedDate=new Date(2004,05,04,11,39,53)
console.log(myCreatedDate);

let anotherOne=new Date("06-04-2004")
console.log(anotherOne.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myDate.getTime())
console.log(Math.floor(Date.now()/1000));






