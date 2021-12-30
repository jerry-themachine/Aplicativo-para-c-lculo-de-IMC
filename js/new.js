let form = document.getElementById('form');
let name = document.getElementById('nome');
let res = document.getElementById('resImc');


form.addEventListener('submit', function(event){
    let altura = parseFloat(document.getElementById('altura').value) / 100;
    let peso = parseFloat(document.getElementById('peso').value);
    let quadrado = (altura * altura);
    let imc = peso / quadrado.toFixed(2);
    let tabela = ('');
    if(imc < 18.50){
        tabela = ('<span style="color: #f00";>Atenção<br>Abaixo do peso</span>');
    }else if(imc >= 18.50 && imc <= 24.99 ){
        tabela = ('Parabéns<br>Peso normal');
    }else if(imc >= 25.00 && imc <=29.99){
        tabela = ('<span style="color: #f00";>Atenção<br>Sobrepeso</span>');
    }else if(imc >= 30.00 && imc < 34.99 ){
        tabela = ('<span style="color: #f00";>Atenção<br>Obesidade Grau I</span>');
    }else if(imc >= 35.00 && imc <= 39.99 ){
        tabela = ('<span style="color: #f00";>Atenção<br>Obesidade Grau II</span>');
    }else{
        tabela = ('<span style="color: #f00";>Atenção<br>Obesidade Grau III</span>');
    }

    res.innerHTML = (`${nome.value} o valor do seu IMC é ${imc.toFixed(2)}<br>${tabela}`);
    event.preventDefault();
});

form.addEventListener('reset', function(event){
    location.reload();
    event.preventDefault();
});






