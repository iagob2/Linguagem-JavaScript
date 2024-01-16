function carregar() {
    var msg =  document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    msg.innerHTML=`agora são ${hora} horas e ${minutos} minutos `;

    if(hora >= 0 && hora < 12) { 
        //dia 
        img.src = '../imagens/dia.png' ;
        document.body.style.backgroundColor = '#fcbf54';
    }else if (hora >= 12 && hora <=18) { 
        //tarde 
        img.src = '../imagens/tarde.png';
        document.body.style.backgroundColor = '#826675';

    }else { 
        // noite 
        img.src = '../imagens/noite.png';
        document.body.style.backgroundColor = '#233a44';
    }
}