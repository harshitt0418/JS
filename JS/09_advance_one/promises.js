const promiseOne=new Promise (function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task is completed");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise is consumed");
})
new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Task 2 is resolved");
    
})
promiseThree=new Promise(function (resolve,reject) {
    setTimeout(()=>{
        resolve({Name:"Harshit",Email:"hmittal0418@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})
promiseFour= new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({Name:"Kanha",Email:"harshitmittal0418@gmail.com"});
        }
        else{
            reject("Error: Something went wrong");
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user);
    return user.Name;
}).then(function(name){
    console.log(name); 
}).catch((error)=>console.log(error));

const promiseFive=new Promise(function(resolve,reject){

})
fetch("https://randomuser.me/api/").
then((response)=>{
    return response.json(); 
}).then((data)=>console.log(data))
.catch((error)=>console.log(error))