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


let domains_array = []
for (let domainName in domains){
    domains_array.push([domains[domainName],domainName])
}

domains_array.sort((a, b) => b[0] - a[0])
console.log(`The most common domain is ${domains_array[0][1]} with a frequency of ${domains_array[0][0]}`)


console.log('The 10 most common domains and their frequeny are:')
for (let j=0; j<10; j++){
    console.log(domains_array[j][1], domains_array[j][0])
}

