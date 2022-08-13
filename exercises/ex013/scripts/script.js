function tabuada() {
    let txtn = document.getElementById('n')
    let tab = document.getElementById('seltab')
    
    if (txtn.value.length == 0) {
        window.alert('Digite um número, por favor!')
    } else {
        let f1 = Number(n.value)
        let f2 = 1
        tab.innerHTML = ''
        for (f2;f2<=10;f2++) {
            let item = document.createElement('option')
            item.text = `${f1} x ${f2} = ${f1*f2}`
            item.value = `tab${f2}`
            tab.appendChild(item)
        }
    } 
}