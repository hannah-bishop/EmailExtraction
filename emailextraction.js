const fs = require('fs')
const file = fs.readFileSync('test.txt','utf8')


const regEx = /\w+@\w+(\.\w+)+\b/g
const regEx2 = /@\w+(\.\w+)+\b/g
const matches = file.match(regEx)
const matchesDomains = file.match(regEx2)

const domains = {}

for (let i=0; i< matchesDomains.length; i++){
    if (domains[matchesDomains[i]] === undefined){
        domains[matchesDomains[i]]=1
    } else {
        domains[matchesDomains[i]] ++
    }
}
console.log(domains)

let frequencyCount = 0
let mostFreqDom = ''
for (let domainName in domains){
    if (domains[domainName] > frequencyCount){
        frequencyCount = domains[domainName]
        mostFreqDom = domainName
    }
}

console.log(`The most common domain is ${mostFreqDom} with a frequency of ${frequencyCount}`)