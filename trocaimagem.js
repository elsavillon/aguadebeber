function trocaimagem(imagem, descricao) {
        var descricaoElement = document.getElementById('descricao');
        var imagemAlterada = document.getElementById('imagem-alterada');


    imagemAlterada.src = "unidades/" + imagem + ".png";

    descricaoElement.textContent = descricao;

    imagemAlterada.style.display = 'block';
}
