$(document).ready(function() {
    // Função para adicionar uma tarefa à lista
    $('#task-form').submit(function(event) {
      event.preventDefault(); // Impede o comportamento padrão do formulário
  
      // Obtém o valor do campo de entrada
      var taskName = $('#task-input').val();
  
      // Verifica se o campo de entrada não está vazio
      if (taskName !== '') {
        // Cria um novo item da lista e adiciona à lista
        var taskItem = $('<li>').text(taskName);
        $('#task-list').append(taskItem);
  
        // Limpa o campo de entrada
        $('#task-input').val('');
      }
    });
  
    // Adiciona um evento de clique a todos os itens da lista
    $('#task-list').on('click', 'li', function() {
      // Adiciona ou remove a classe 'completed' para aplicar o estilo de linha através do CSS
      $(this).toggleClass('completed');
    });
  });