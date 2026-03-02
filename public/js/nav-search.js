document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const searchToggle = document.getElementById('busca-topo');
    const searchTab = document.getElementById('buscaAba');
    const searchInput = searchTab ? searchTab.querySelector('.busca-input') : null;
    const mobileQuery = window.matchMedia('(max-width: 768px)');

    const closeMenu = () => {
        if (!navLinks || !menuToggle) {
            return;
        }

        navLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    const closeSearchTab = () => {
        if (!searchTab || !searchToggle) {
            return;
        }

        searchTab.classList.remove('is-open');
        searchToggle.setAttribute('aria-expanded', 'false');
    };

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));

            if (isOpen) {
                closeSearchTab();
            }
        });

        navLinks.addEventListener('click', (event) => {
            if (mobileQuery.matches && event.target.closest('a')) {
                closeMenu();
            }
        });
    }

    if (searchToggle && searchTab) {
        searchToggle.addEventListener('click', () => {
            const isOpen = searchTab.classList.toggle('is-open');
            searchToggle.setAttribute('aria-expanded', String(isOpen));

            if (isOpen && searchInput) {
                searchInput.focus();
            }
        });
    }

    document.addEventListener('click', (event) => {
        if (
            menuToggle &&
            navLinks &&
            mobileQuery.matches &&
            !event.target.closest('#menuToggle') &&
            !event.target.closest('#navLinks')
        ) {
            closeMenu();
        }

        if (
            searchToggle &&
            searchTab &&
            !event.target.closest('#busca-topo') &&
            !event.target.closest('#buscaAba')
        ) {
            closeSearchTab();
        }
    });

    window.addEventListener('resize', () => {
        if (!mobileQuery.matches) {
            closeMenu();
        }
    });
});
