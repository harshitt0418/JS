const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.map((item)=>{return item+10})

const newNums=myNums
                    .map((num)=>num*10)
                    .map((num)=>num+5)
                    .filter((num)=>num>40)//it is known as chaining
console.log(newNums);