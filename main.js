function menorPalavra(array) {
    let primeiraPalavra = array[0];

    for(let i = 0; i < array.length; i++) {
        if(primeiraPalavra.length > array[i].length) {
            primeiraPalavra = array[i]
        }
    }
    return primeiraPalavra;
}

document.getElementById('botao').addEventListener('click', () => {
    const frase = document.getElementById('frase').value;
    const separadas = frase.trim().split(' ');
    const palavra = menorPalavra(separadas);
    const codigo = `<p>${palavra}</p>`
    document.querySelector('.resposta-na-tela').innerHTML = codigo;
})
    

    


