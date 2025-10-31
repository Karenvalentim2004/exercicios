function calcular() {
    const valorConta = parseFloat(document.getElementById('valorConta').value)
    const valorPorcentagem = parseFloat(document.getElementById('valorPorcentagem').value)
    const funcao = document.getElementById('funcao').value
    const resultado = document.getElementById('resultado')

    let valorFinal = 0;

    if (funcao === 'desconto') {
        valorFinal = valorConta - (valorConta * (valorPorcentagem / 100));
    } else {
        valorFinal = valorConta + (valorConta * (valorPorcentagem / 100));
    }

    
   resultado.innerHTML = `Valor a pagar<br><strong>R$ ${valorFinal.toFixed(2).replace('.', ',')}</strong>`;



}

