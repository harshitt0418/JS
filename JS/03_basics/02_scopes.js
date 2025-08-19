if(true){
    let a=10;
    const b=20;
    var c=30; 
    d=40;
}

//console.log(a);->it will give error as a is declared inside the scope 
//console.log(b);->it will give error as b is declared inside the scope
console.log(c);//it gives output which is a problem as it is declared inside the scope so it should also give error and that's why we dont use var
console.log(d)//it gives output which is a problem as it is declared inside the scope so it should also give error and that's why we use let or const 

function one(){
    const username="Harshit"

    function two(){
        const website="Youtube"
        console.log(username);
    }
    //console.log(website);->because it was declared inside the function two and it is being accessed outside the function
    two()
}
one()

if(true){
    const username="Harshit"
    if(true){
        const website=' youtube'
        console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);




//++++++++++++++++++++++++++++++++   INTERESTING     ++++++++++++++++++++++++++++//


console.log(addOne(5));
function addOne(num){
    return num+1;
}

//console.log(abc(5));//this will give error as the function is stored in variable
const abc=function addTwo(num){//another way to declare a function!!
    return num+2
}


