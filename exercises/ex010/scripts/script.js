var time = new Date()
var year = time.getFullYear()

function verificar() {
    txtano = document.getElementById('txtano')
    ano = Number(txtano.value)
    result = document.getElementById('result')

    if (ano > year || ano == '') {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        idade = Number.parseInt(year - ano)
        fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        

        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade < 10) {
                // child
                img.setAttribute('src', './images/child-man.png')
            } else if (idade < 21) {
                // young
                img.setAttribute('src', './images/young-man.png')
            } else if (idade < 50) {
                // adult
                img.setAttribute('src', './images/adult-man.png')
            } else {
                // old
                img.setAttribute('src', './images/old-man.png')
            }
        } else {
            var genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // child
                img.setAttribute('src', './images/child-woman.png')
            } else if (idade < 21) {
                // young
                img.setAttribute('src', './images/young-woman.png')
            } else if (idade < 50) {
                // adult
                img.setAttribute('src', './images/adult-woman.png')
            } else {
                // old
                img.setAttribute('src', './images/old-woman.png')
            }
        }
        result.style.textAlign = 'Center'
        result.innerHTML = `Detectamos <strong>${genero.toLowerCase()}</strong> de ${idade} anos.`
        result.appendChild(img)
    }
}