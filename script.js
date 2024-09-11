var numero = ''
var operadorAtual = ''
var numeroAnterior = ''

function addNumero(caracter){
    numero += caracter
    document.getElementById('display').value = numero
}

function limparDisplay(){
    document.getElementById('display').value = ''
    numero = ''
    numeroAnterior = ''
    operadorAtual = ''
}

function apagar(){
    numero = numero.slice(0, -1)
    document.getElementById('display').value = numero
}

function operador(op){
    if(numero !== ''){
        numeroAnterior = numero
        operadorAtual = op
        numero = ''
        document.getElementById('display').value = ''
    }
}

function calcular(){
    let resultado = 0
    let atual = parseFloat(numero)
    let anterior = parseFloat(numeroAnterior)

    if(operadorAtual === '+'){
        resultado = anterior + atual
    } else if(operadorAtual === '-'){
        resultado = anterior - atual
    } else if(operadorAtual === '*'){
        resultado = anterior * atual
    } else if(operadorAtual === '/'){
        resultado = anterior / atual
    }

    document.getElementById('display').value = resultado
    numero = resultado.toString()
    operadorAtual = ''
    numeroAnterior = ''
}