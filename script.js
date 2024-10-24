document.addEventListener('DOMContentLoaded', () => {
    const cover = document.getElementById('cover');
    const enterBtn = document.getElementById('enter-btn');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const themeSwitcher = document.getElementById('theme-switcher');
    const welcomeTitle = document.getElementById('welcome-title');
    const sections = document.querySelectorAll('.content');
    const header = document.getElementById('header');
    let darkMode = false;

    // Efeito de digitação
    const welcomeText = "Olá, bem-vindo(a) ao GeekZone!";
    let index = 0;

    function typeText() {
        if (index < welcomeText.length) {
            welcomeTitle.textContent += welcomeText.charAt(index);
            index++;
            setTimeout(typeText, 100); // velocidade da digitação
        }
    }

    // Iniciar efeito de digitação ao carregar
    typeText();

// Remover capa ao clicar no botão "Entrar" e rolar para o topo do site
enterBtn.addEventListener('click', () => {
    cover.style.opacity = '0'; // Reduz a opacidade da capa
    setTimeout(() => {
        cover.style.display = 'none'; // Oculta a capa
        document.body.style.overflow = 'auto'; // Habilita o scroll
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola até o topo do site
        // Exibe o cabeçalho e as seções com animação
        header.classList.add('visible');
        sections.forEach(section => section.classList.add('visible'));
    }, 500);
});

       // Alternar menu lateral em dispositivos móveis
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    

    // Alternar modo claro/escuro
    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        darkMode = !darkMode;
        themeSwitcher.textContent = darkMode ? '🌙' : '💡';
    });

    // Efeito de surgimento ao rolar
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollPosition > sectionTop + 100) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    });
     // Evento de scroll para aplicar animações nas seções
     window.addEventListener("scroll", function () {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.style.opacity = 1; 
                section.style.transform = 'translateY(0)';
            }
        });
    }); 
});
