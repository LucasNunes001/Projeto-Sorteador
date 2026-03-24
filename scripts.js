const buttonGerenate = document.querySelector('.button-generate') // variavel do botão 'sortear' 
function generateNumber() { // função para gerar o numero aleatorio

    const min = Math.ceil(document.querySelector('.input-min').value) // variavel do input minimo, para pegar o valor digitado e arredondar para cima, caso o numero seja decimal
    const max = Math.floor(document.querySelector('.input-max').value) // variavel do input maximo, para pegar o valor digitado e arredondar para baixo, caso o numero seja decimal

    const result = Math.floor(Math.random() * (max - min + 1)) + Number(min) // variavel com a formula para gerar o numero aleatorio, arredondando para baixo, multiplicando pelo intervalo (max - min + 1) e somando o valor minimo para garantir que o numero gerado esteja dentro do intervalo definido


    document.getElementById('result').innerText = result // seleciona o elemento com id 'result' e define seu texto como o numero gerado, para exibir o resultado na tela



    console.log('sorteando...')
    console.log(result)
}


buttonGerenate.addEventListener('click', generateNumber) // adiciona um evento de clique no botão 'sortear' e chama a função 'generateNumber'
