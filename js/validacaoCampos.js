let campoNome = document.getElementById('nome');
let campoAltura = document.getElementById('altura');
let campoPeso = document.getElementById('peso');


campoNome.oninvalid = function (){
    this.setCustomValidity('');
    if(!this.validity.valid){
       this.setCustomValidity(`Preencha o campo nome para continuar o cálculo`) ;
    }
}


campoAltura.oninvalid = function (){
    this.setCustomValidity('');
    if(!this.validity.valid){
       this.setCustomValidity(`${campoNome.value} preencha o campo altura para continuar o cálculo`);
    }
}


campoPeso.oninvalid = function (){
    this.setCustomValidity('');
    if(!this.validity.valid){
       this.setCustomValidity(`${campoNome.value} preencha o campo peso para continuar o cálculo`);
    }
}

