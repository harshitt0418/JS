// Immediately Invoked Function Expressions (IIFE)->this function is used to prevent function from global pollution


(function chai(){
    console.log(`DB Connected`);
    
})();//this is iife in which the first () stands for the block while the second () stands for the calling of function just like in chai()
//imp point-> always use ';' after last paranthesis as it tells iife where to stop

((name) => {//iife using arrow function
    console.log(`DB Connected using arrow function and with username ${name}`);
    
})('Harshit');