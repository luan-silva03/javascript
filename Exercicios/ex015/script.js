function verificar() {
       var data = new Date()
       var ano = data.getFullYear()
       var fano = document.getElementById('txtano')
       var res = document.querySelector('div#res')
       if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Varifique os dados e tente novamente!')
       } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 14) {
                //criança
                img.setAttribute('src', '../ex015/fotos/menino.jpg')
            } else if (idade < 30) {
                //adulto
                img.setAttribute('src', '../ex015/fotos/homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', '../ex015/fotos/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 14) {
                //criança
                img.setAttribute('src', '../ex015/fotos/menina.jpg')
            } else if (idade < 30) {
                //adulto
                img.setAttribute('src', '../ex015/fotos/mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', '../ex015/fotos/idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.borderRadius = '50%'
    }
}