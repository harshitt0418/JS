const myname='Harshit'
const myid=21846
console.log(`My name is ${myname} and my id is ${myid}`)
const gameid=new String('Harshit-123-abc')
console.log(gameid);

console.log(gameid[0])
console.log(gameid.toUpperCase())
console.log(gameid.charAt(4))
console.log(gameid.indexOf('t'))

const newString=gameid.substring(0,5)
console.log(newString)

const anotherString=gameid.slice(-9,11)
console.log(anotherString)

const spacestring="     Harshit     "
console.log(spacestring)
console.log(spacestring.trim())
console.log(spacestring.trimEnd())

const url="file:///C:/Users/hp/Desktop/HTML%20project_1.html"
console.log(url.replace('%20','/'))
console.log(url.includes('HTml'));

console.log(gameid.split('-'))