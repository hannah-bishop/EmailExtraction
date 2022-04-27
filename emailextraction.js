const fs = require('fs')
const file = fs.readFileSync('test.txt','utf8')
words_arr = file.split(/\s+/)

let counter = 0
for (let i=0; i<words_arr.length; i++){
    if (words_arr[i].endsWith('@softwire.com')){
    console.log(words_arr[i])
    counter++
    }
}

console.log(counter)