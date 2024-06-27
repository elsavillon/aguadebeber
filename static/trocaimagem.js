function trocaimagem(src, descricao) {
    const button = event.currentTarget;

    let imagemAlterada = button.nextElementSibling;
    if (!imagemAlterada || !imagemAlterada.classList.contains('imagem-alterada')) {
        imagemAlterada = document.createElement('img');
        imagemAlterada.classList.add('imagem-alterada');
        imagemAlterada.style.display = 'block';
        imagemAlterada.style.marginTop = '10px'; 
        button.insertAdjacentElement('afterend', imagemAlterada);
    }

    imagemAlterada.src = src + '.png';

    let descricaoElemento = imagemAlterada.nextElementSibling;
    if (!descricaoElemento || !descricaoElemento.classList.contains('descricao-alterada')) {
        descricaoElemento = document.createElement('p');
        descricaoElemento.classList.add('descricao-alterada');
        descricaoElemento.style.marginTop = '10px'; 
        imagemAlterada.insertAdjacentElement('afterend', descricaoElemento);
    }

    descricaoElemento.textContent = descricao;
}
