const btnDec = document.querySelector('button');
const result = document.querySelector('#result');

function validarTexto(str) {
    const regex = /\s+/g
    const cleandedStr = str.replace(regex, '').toLowerCase();
    const letras = cleandedStr.split('')
    const maiorLetra = letras.reduce((current, max) => {
        return current > max ? current : max
    });
    return maiorLetra
};

btnDec.addEventListener('click', () => {
    const inputText = document.querySelector('#input-text');
    const result = validarTexto(inputText.value);
    document.querySelector('#result').innerText = `Maior letra é: ${result}`
})