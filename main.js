$(document).ready(function() {
    // Aplica máscara aos campos de CPF, telefone e CEP
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#telefone').mask('(00) 0000-0000');
    $('#cep').mask('00000-000');
  
    // Submete o formulário
    $('#cadastro-form').submit(function(event) {
      event.preventDefault();
      
      console.log('Formulário submetido');
    });
  });