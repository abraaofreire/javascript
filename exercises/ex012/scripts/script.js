function contar() {
    var txtinicio = document.getElementById('txti')
    var txtfim = document.getElementById('txtf')
    var txtpasso = document.getElementById('txtp')
    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)
    var result = document.getElementById('result')

    if (txtinicio.value.length == 0 || txtfim.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        result.innerHTML = 'Impossível contar!'
    } else if (inicio < fim) {
        result.innerHTML = 'Contando: <br>'
        if (txtpasso.value.length == 0 || passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            for (inicio;inicio<=fim;inicio+=1) {
                result.innerHTML += `${inicio} &#x1F449; `
            }
        } else {
            for (inicio;inicio<=fim;inicio+=passo) {
                result.innerHTML += `${inicio} &#x1f449; `
            }
        }
        result.innerHTML += '&#x1F3F4;'
    } else {
        result.innerHTML = 'Contando: <br>'
        if (txtpasso.value.length == 0 || passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            for (fim;fim<=inicio;inicio-=1) {
                result.innerHTML += `${inicio} &#x1f449; `
            }
        } else {
            for (fim;fim<=inicio;inicio-=passo) {
                result.innerHTML += `${inicio} &#x1f449; `
            }
        }
        result.innerHTML += '&#x1F3F4;'
    }
}