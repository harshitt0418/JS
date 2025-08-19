const myObject={
    js:'Javascript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by apple'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming=['js','rb','cpp','swift','py']

for (const key in programming) {
    console.log(key);
}
//maps are not itrable so map cant be itrated neither using forof nor using forin

