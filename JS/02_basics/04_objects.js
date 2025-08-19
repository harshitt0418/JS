//singleton 

const myUser=new Object()
myUser.Name='Harshit Mittal'
myUser.Id=123
myUser.IsLoggedIn=true

console.log(myUser);

const newUser={
    email:"hmittal0418@gmail.com",
    fullname:{
        username:{
            userfirstname:"Hitesh",
            usersecondname:"Sharma"
        }
    }
}
console.log(newUser.fullname.username.userfirstname);

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}

const combineObject=Object.assign({},obj1,obj2)//empty brackate is used here because assign copies all the data to any targeted source and if we dont use {} it will directly copy data to the first object as mentioned in the funtion!!
console.log(combineObject);

const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"ha@gmail.com"
    },
    {
        id:3,
        email:"hb@gmail.com"
    },
    {
        id:4,
        email:"hc@gmail.com"
    },
    {
        id:5,
        email:"hd@gmail.com"
    },
]
console.log(users[1].email);

console.log(myUser);
console.log(Object.keys(myUser));//this object.keys function stores all the keys in the array which is very helpful
console.log(Object.values(myUser));//this object.values function stores all the values in the array which is very helpful
console.log(Object.entries(myUser));

console.log(myUser.hasOwnProperty('IsLoggedIn'));


const course={
    courseName: "js in hindi",
    coursePrice: 999,
    courseTeacher: "Hitesh"
}

const {courseTeacher:Teacher}=course//object destructure -> whenever we use curly braces just look if it is destructuring or not in react
console.log(course.courseTeacher);
console.log(Teacher);



