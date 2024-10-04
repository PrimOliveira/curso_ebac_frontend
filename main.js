// Função para adicionar animações nos ícones ao passar o mouse
const features = document.querySelectorAll('.feature');

features.forEach(feature => {
feature.addEventListener('mouseover', () => {
    feature.querySelector('i').style.transform = 'rotate(20deg)';
});

feature.addEventListener('mouseout', () => {
    feature.querySelector('i').style.transform = 'rotate(0)';
});
});

// Scroll suave para seções ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
    });
});
});
