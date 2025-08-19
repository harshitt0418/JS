//function to find sum of all the elements of array

const nums=[1,2,3]

// const myTotal=nums.reduce(function (acc,currVal) {
//     return acc+currVal
// },0)
// console.log(myTotal);//in this function 0 is the initial value that we assign to the accumulator or acc

// const myTotal=nums.reduce((acc,currVal)=>acc+currVal,0)//in this function 0 is the initial value that we assign to the accumulator or acc
// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"dsa course",
        price:12999
    },
    {
        itemName:"html and css course",
        price:4999
    },
    {
        itemName:"mobile dev course",
        price:6999
    },
    {
        itemName:"web dev course",
        price:5999
    },
]

const priceToPay=shoppingCart.reduce((acc,currVal)=>acc+currVal.price,0)
console.log(priceToPay);
