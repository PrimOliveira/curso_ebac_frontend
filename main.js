document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade do menu hamburger
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active'); // Adiciona/remover a classe active
        console.log(navList.classList); // Adicionar log para verificar se a classe active é adicionada corretamente
    });
});
