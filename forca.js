const teclado = document.querySelector('.teclado')
let palavraSecreta = ''
let tentativas = 6
const img = document.querySelector('.img-forca')
const letraCorretas = []
let palavraEmformacao = ''

//faz parte do eveto click do teclado 
teclado.addEventListener('click', (event) => {
    
    if(!event.target.classList.value.includes('teclado')){
        //so entra aqui se não tiver classe teclado  
    
    event.target.style.backgroundColor = 'black'
    const letra = event.target.textContent
    if(palavraSecreta.includes(letra)){
        letraCorretas.push(letra)
        
    }else{
        tentativas = tentativas - 1
    }
    if(tentativas === 6){
        img.setAttribute('src','./assets/robo_forca_0.png')
    }else if(tentativas === 5){
        img.setAttribute('src','./assets/robo_forca_1.png')
    }else if(tentativas === 4){
        img.setAttribute('src','./assets/robo_forca_2.png')
    }else if(tentativas === 3){
        img.setAttribute('src','./assets/robo_forca_3.png')
    }else if(tentativas === 2){
        img.setAttribute('src','./assets/robo_forca_4.png')
    }else if(tentativas === 1){
        img.setAttribute('src','./assets/robo_forca_5.png')
    }else if(tentativas === 0){
        img.setAttribute('src','./assets/robo_forca_6.png')
        alert(`você perdeu, jamanta a palavra é: ${palavraSecreta}`)
    }
    exibirPalavra()

    }
})


//capitura de valores de um novo jogo 
const inputPalavrasecreta =  document.querySelector ('.input-palavra-secreta')
const inputDica =  document.querySelector ('.input-dica')
const dica = document.querySelector('.dica')
const botaoIniciar = document.querySelector('.botao-iniciar')
botaoIniciar.addEventListener('click', (event) => {
    palavraSecreta = inputPalavrasecreta.value.toUpperCase()
    dica.textContent  = inputDica.value
    exibirPalavra()
    inputDica.value = ''
    inputPalavrasecreta.value = ''
})

const saidaPalavraSecreta = document.querySelector('.palavra-secreta')


function exibirPalavra(){
    
    palavraEmformacao = ''
    for (letra in palavraSecreta){
        if(letraCorretas.includes (palavraSecreta[letra])){
            palavraEmformacao = palavraEmformacao + ' ' + palavraSecreta[letra] + ' '
        }else{
            palavraEmformacao = palavraEmformacao + ' _ '
        }
    }
    saidaPalavraSecreta.textContent = palavraEmformacao
}