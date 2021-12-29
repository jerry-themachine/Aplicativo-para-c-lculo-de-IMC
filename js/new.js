var form = document.getElementById('form');
var nome = document.getElementById('nome');
var res = document.getElementById('resImc');


form.addEventListener('submit',function(event){    
   
    var altura = parseFloat(document.getElementById('altura').value) / 100;
    var peso = parseFloat(document.getElementById('peso').value);    
    var imc = peso / (altura * altura).toFixed(2);    
    res.innerHTML = (`O valor do IMC para ${nome.value} é ${imc.toFixed(2)}`);
  
    
    event.preventDefault();
    
});








