document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    function handleScroll() {
        const currentScroll = window.scrollY;
        const isMobile = window.matchMedia('(max-width: 1020px)').matches;

        if (isMobile) {
            // Mobile
            if (currentScroll > lastScrollTop && currentScroll > 50) {
                // Rolar para baixo
                header.classList.add('header-scrolled');
                header.style.top = '-190px';
            } else {
                // Rolar para cima
                header.classList.remove('header-scrolled');
                header.style.top = '0';
            }
        } else {
            // Desktop
            if (currentScroll > 50) {
                // Rolar para baixo
                header.classList.add('header-scrolled');
                header.style.top = '-190px';
            } else {
                // Rolar para o topo
                header.classList.remove('header-scrolled');
                header.style.top = '0';
            }
        }

        lastScrollTop = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('mousemove', function(event) {
        const isMobile = window.matchMedia('(max-width: 1020px)').matches;

        if (event.clientY < 50) {
            // Mobile: Mouse perto do topo
            header.style.top = '0';
        }
    });

    // Menu Mobile
    const menuToggle = document.querySelector('.nexcode-open-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlayMenu = document.querySelector('.overlay-menu');
    const closeMenu = document.querySelector('.nexcode-fechar');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.style.width = '80%';
            overlayMenu.classList.add('active');
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', function() {
            mobileMenu.style.width = '0';
            overlayMenu.classList.remove('active');
        });
    }
});
