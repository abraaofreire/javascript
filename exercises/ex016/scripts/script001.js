function parimpar(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let result = parimpar(3)
console.log(`O número é ${result.toUpperCase()}.`)