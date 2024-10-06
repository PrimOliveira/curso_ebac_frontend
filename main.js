document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade do menu hamburger
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Contador regressivo para 10 de Maio de 2025
    const countdown = () => {
        const targetDate = new Date('May 10, 2025 00:00:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        } else {
            document.getElementById('countdown').innerHTML = "<h2>Feliz Aniversário!</h2>";
        }
    };

    // Atualiza o contador a cada segundo
    setInterval(countdown, 1000);
});
