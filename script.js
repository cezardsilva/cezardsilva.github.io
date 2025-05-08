// Atualiza o script para garantir que funciona em mobile
window.onscroll = function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "flex"; // Alterado para flex
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Suaviza o scroll para o topo
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Configuração do carrossel
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-track img');
    const itemWidth = 140; // Largura de cada item (img + margin)

    // Duplica os itens para um loop contínuo
    track.innerHTML += track.innerHTML;

    // Ajusta a largura total do track
    track.style.width = `${itemWidth * items.length * 2}px`;

    // Reinicia a animação quando chegar ao final
    track.addEventListener('animationiteration', () => {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        setTimeout(() => {
            track.style.transition = 'transform 0.5s linear';
        }, 10);
    });
});

// Menu Mobile
const menuIcon = document.querySelector('.mobile-menu-icon');
const menuList = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

// Fechar menu ao clicar em um item
document.querySelectorAll('.link-menu').forEach(item => {
    item.addEventListener('click', () => {
        menuList.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});
