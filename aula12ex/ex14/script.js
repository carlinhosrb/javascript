function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src='imagens/fotomanha.png'
        document.body.style.background ='#FEB611'
    }
    else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src='imagens/fototarde.png'
        document.body.style.background ='#1B384E'
    }
    else{
        //Boa noite
        img.src='imagens/fotonoite.png'
        document.body.style.background = '#01142A'
    }
}
