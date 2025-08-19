const coding=['javascript','ruby','cpp','swift','python','java']

coding.forEach( (item) => {
   // console.log(item);
} )

function printMe(item){
    console.log(item);
}
//coding.forEach( printMe )

coding.forEach( (item,index,arr)=>{
    console.log(item);
    console.log(index);
    console.log(arr);
    
} )

const myCoding=[
    {
        codingLanguage:"javascript",
        filename:'js'
    },
    {
        codingLanguage:"java",
        filename:'java'
    },
    {
        codingLanguage:"c++",
        filename:'cpp'
    }
]
myCoding.forEach( (item) => {
    console.log(item.codingLanguage); 
});
