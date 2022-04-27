const fs = require('fs')
const file = fs.readFileSync('test.txt','utf8')
const regEx = /(@softwire\.com)\b/g
const matches = file.match(regEx)
console.log(matches.length)
