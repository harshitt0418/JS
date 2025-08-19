//singleton -> when objects are created using constructor they are classified as singleton


//Object literals which are not classified as singleton

const MySym=Symbol("key1")


const JsUser={
    name: "Harshit",
    "full Name": "Harshit Mittal",
    [MySym]: "key2",
    age: 21,
    location: "Bahraich",
    email: "hmittal0418@gmail.com",
    isLoggedIn: false
}

console.log(JsUser.name);//this is okay but with this we cant access full name key as it is string
console.log(JsUser["full Name"]);//best way to access the data of objects
console.log(JsUser[MySym]);//cant access symbol with dot('.') only way to access symbols

JsUser.email="harshitkota1357@gmail.com"//method to change values in object


//Object.freeze(JsUser)
JsUser.name="Kanha"
JsUser["full Name"]="Kanha Mittal"
JsUser.age=20
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello user");
}
console.log(JsUser.greeting());

JsUser.greetingtwo = function(){
    console.log(`Hello user,${this.name}`);
}
console.log(JsUser.greetingtwo());
