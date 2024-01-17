function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    img.style.width = '300px'
    img.style.borderRadius = '10%'
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        // Bom dia
        img.src = '../Ex012/fotos/manha.jpg'
        document.body.style.background = '#81860A'
        
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = '../Ex012/fotos/tarde.jpg'
        document.body.style.background = '#C2A35D'
    } else {
        //Boa noite
        img.src = '../Ex012/fotos/noite.jpg'
        document.body.style.background = '#252928'
    }
}