function trocaimagem(imagem, descricao) {
    var imagemAlterada = document.getElementById('imagem-alterada');
    imagemAlterada.src = imagem + ".png";
    imagemAlterada.style.display = 'block'; // Exibe a imagem alterada

    var descricaoElement = document.getElementById('descricao');
    descricaoElement.textContent = descricao;
}
