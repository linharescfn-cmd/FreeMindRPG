document.addEventListener('DOMContentLoaded', () => {
    const tabClassicos = document.getElementById('tabClassicos');
    const tabIndependentes = document.getElementById('tabIndependentes');
    const classicosContainer = document.getElementById('catalogoClassicos');
    const independentesContainer = document.getElementById('catalogoIndependentes');
    const pagination = document.getElementById('catalogoPagination');

    if (!tabClassicos || !tabIndependentes || !classicosContainer || !independentesContainer) {
        return;
    }

    const allClassicItems = Array.from(classicosContainer.querySelectorAll('.catalogo-item'));
    const itemsPerPage = 12;
    let currentPage = 1;

    const setTabState = (tabName) => {
        const isClassicos = tabName === 'classicos';

        tabClassicos.classList.toggle('is-active', isClassicos);
        tabClassicos.setAttribute('aria-selected', String(isClassicos));

        tabIndependentes.classList.toggle('is-active', !isClassicos);
        tabIndependentes.setAttribute('aria-selected', String(!isClassicos));

        classicosContainer.hidden = !isClassicos;
        independentesContainer.hidden = isClassicos;
    };

    const renderPagination = (totalPages) => {
        if (!pagination) {
            return;
        }

        pagination.innerHTML = '';

        if (totalPages <= 1) {
            return;
        }

        for (let page = 1; page <= totalPages; page += 1) {
            const pageButton = document.createElement('button');
            pageButton.type = 'button';
            pageButton.className = 'catalogo-page-btn';
            pageButton.textContent = String(page);
            pageButton.addEventListener('click', () => {
                currentPage = page;
                renderClassicPage();
            });

            if (page === currentPage) {
                pageButton.classList.add('is-active');
            }

            pagination.appendChild(pageButton);
        }
    };

    const renderClassicPage = () => {
        const totalPages = Math.max(1, Math.ceil(allClassicItems.length / itemsPerPage));
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        allClassicItems.forEach((item, index) => {
            const isVisible = index >= startIndex && index < endIndex;
            item.hidden = !isVisible;
        });

        renderPagination(totalPages);
    };

    tabClassicos.addEventListener('click', () => {
        setTabState('classicos');
        renderClassicPage();
    });

    tabIndependentes.addEventListener('click', () => {
        setTabState('independentes');
    });

    setTabState('classicos');
    renderClassicPage();
});
