let n = []
let c = 0

for (c;c<=10;c++) {
    n.push(2**c)
}

for (c=0;c<n.length;c++) {
    console.log(`Array ${c} com valor ${n[c]}`)
}

console.log(`Array tem ${n.length} posições`)


