const fs = require('fs')
const prompt = require("prompt-sync")()
const file = fs.readFileSync('test.txt','utf8')
//parts 2 and 3

const regEx2 = /\b(\S+)@(\S+)\b/g
const matchesArr = [...file.matchAll(regEx2)]
const matchesDomains = matchesArr.map(match => match[2])
const domains = {}

for (let i=0; i< matchesDomains.length; i++){
    if (domains[matchesDomains[i]] === undefined){
        domains[matchesDomains[i]]=1
    } else {
        domains[matchesDomains[i]] ++
    }
}

let domains_array = []
for (let domainName in domains){
    domains_array.push([domains[domainName],domainName])
}

domains_array.sort((a, b) => b[0] - a[0])
console.log(`The most common domain is ${domains_array[0][1]} with a frequency of ${domains_array[0][0]}`)

//Stretch Goal 1
console.log('The 10 most common domains and their frequeny are:')
for (let j=0; j<10; j++){
    console.log(domains_array[j][1], domains_array[j][0])
}

//Stretch Goal 2
desiredFrequency = prompt('Please enter the number ')
console.log(`The domains that occur ${desiredFrequency} times or over are: `)
for (let k=0; k<domains_array.length; k++){
    if (domains_array[k][0] >= desiredFrequency){
        console.log(domains_array[k][1])
    }
}

//Stretch goal 3
const regEx3 = /@[\w-]+\./g
const highOrdMatch = file.match(regEx3)
let highOrdObj = {}
for (let l=0; l< highOrdMatch.length; l++){
    if (highOrdObj[highOrdMatch[l]] === undefined){
        highOrdObj[highOrdMatch[l]]=1
    } else {
        highOrdObj[highOrdMatch[l]] ++
    }
}

console.log(highOrdObj)