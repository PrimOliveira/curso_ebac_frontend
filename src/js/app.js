document.addEventListener('DOMContentLoaded', function() {
  const result = document.getElementById('result');
  const button = document.getElementById('sortButton');

  button.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    result.textContent = 'Número sorteado: ' + randomNumber;
  });
});

  