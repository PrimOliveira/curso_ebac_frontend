document.addEventListener('DOMContentLoaded', () => {
    // AOS (Animate On Scroll Library)
    AOS.init({
        duration: 1000, // duração da animação
        once: true, // apenas uma vez
    });

    // Efeito de scroll suave para links
    const links = document.querySelectorAll('.nav-list a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
   // Funcionalidade do menu hamburger
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', () => {
    navList.classList.toggle('active'); // Adiciona/remover a classe active
});
});