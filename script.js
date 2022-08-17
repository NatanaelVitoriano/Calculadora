const calculadora = {
    numCalculo1: 0,
    numCalculo2: 0,
    operador: '',
};


function atualizaBotao(tipo, btn) {
    if(tipo == 'num') {
        var valorDoCampo = document.getElementById("resultado").value;
        document.getElementById("resultado").value = valorDoCampo + btn;
        if (calculadora.operador == '') {
            calculadora.numCalculo1 = document.getElementById('resultado').value;
        } else {
            calculadora.numCalculo2 = document.getElementById('resultado').value;
        }
       
    } else {
        document.getElementById('resultado').value = '';
        calculadora.operador = btn;
    }
} 

function resultado () {
    let result = 0;
    if (calculadora.operador == '+'){
        result = parseInt(calculadora.numCalculo1) + parseInt(calculadora.numCalculo2);
    } else if (calculadora.operador == '-'){
        result = parseInt(calculadora.numCalculo1) - parseInt(calculadora.numCalculo2);    
    } else if (calculadora.operador == '/'){
        result = parseInt(calculadora.numCalculo1) / parseInt(calculadora.numCalculo2);
    } else if (calculadora.operador == '*'){
        result = parseInt(calculadora.numCalculo1) * parseInt(calculadora.numCalculo2);
    }
    document.getElementById('resultado').value = result;
    calculadora.numCalculo1 = result;
}