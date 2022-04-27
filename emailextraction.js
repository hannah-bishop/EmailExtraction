const fs = require('fs')
const file = fs.readFileSync('test.txt','utf8')

console.log(file)