function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 22 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        // Bom dia
        img.src = '../Ex013/fotos/manha.png'
        document.body.style.background = '#81860A'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = '../Ex013/fotos/tarde.png'
        document.body.style.background = '#C2A35D'
    } else {
        //Boa noite
        img.src = '../Ex013/fotos/noite.png'
        document.body.style.background = '#252928'
    }
}