var bancoImagem = ["../img/png/bob.png",
                   "../img/png/clorinde.png", 
                   "../img/png/roney.png", 
                   "../img/png/flocks.png", 
                   "../img/png/aristotle.png"];


exibeModalDonate = () => {
    const modal = document.getElementById("modalDonate");
    modal.style.display = "block";
    modal.style.animationName = "exibe";
}

escondeModalDonate = () => {
    const modal = document.getElementById("modalDonate");
    modal.style.animationName = "oculta";
}

carrosselEsq = () => {

    let imagem = bancoImagem.shift();
    bancoImagem.push(imagem);

    for(let conta = 0 ; conta < 4 ; conta++){
        document.getElementById("img00" + (conta + 1)).src = bancoImagem[conta];
    }

}

carrosselDir = () => {

    let imagem = bancoImagem.pop();
    bancoImagem.unshift(imagem);

    for(let conta = 0 ; conta < 4 ; conta++){
        document.getElementById("img00" + (conta + 1)).src = bancoImagem[conta];
    }

}
