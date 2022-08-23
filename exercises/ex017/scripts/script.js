let fnum = document.getElementById('fnum')
let selresult = document.getElementById('selresult')
let fr = document.getElementById('result')
let valores = []

function isNumber(x) {
    if (x < 100 && x > 0) {
        return true
    } else {
        return false
    }
}

function isRepeated(x,y) {
    if (y.indexOf(Number(x)) != -1) {
        return true
    } else {
        return false
    }
}

function greaterthan(x) {
    let maior = 0
    for (c=0;c<x.length;c++) {
        if (x[c] > maior) {
            maior = x[c]
        }
    }
    return maior
}

function lessthan(x) {
    let menor = 101
    for (c=0;c<x.length;c++){
        if (x[c] < menor) {
            menor = x[c]
        }
    }
    return menor
}

function soma(x) {
    let soma = 0
    for (c=0;c<x.length;c++) {
       soma += x[c]
    }
    return soma
}

function media(x) {
    let media = soma(x)/x.length
    return media
}

function adicionar() {
    if (isNumber(fnum.value) && !isRepeated(fnum.value, valores)) {
        let num = Number(fnum.value)
        let s = document.createElement('option')
        valores.push(num)
        s.text = `Valor ${num} adicionado.`
        selresult.appendChild(s)
        fr.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já adicionado na lista!')
    }
    fnum.value = ''
    fnum.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        fr.innerHTML = ''
        let fc = document.createElement('p')
        fc.style.lineHeight = '2em'
        fc.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.<br>`
        fc.innerHTML += `O maior valor informado foi ${greaterthan(valores)}.<br>`
        fc.innerHTML += `O menor valor informado foi ${lessthan(valores)}.<br>`
        fc.innerHTML += `Somando todos os valores, temos ${soma(valores)}.<br>`
        fc.innerHTML += `A média dos valores digitados é ${media(valores).toFixed(2).replace('.',',')}.`
        fr.appendChild(fc)
    }
}