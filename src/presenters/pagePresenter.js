function createViewModel(pageTitle, extraData = {}) {
    return {
        pageTitle,
        ...extraData
    };
}

function presentHome(products) {
    return createViewModel('Início', { products });
}

function presentCatalog(products, q = '') {
    return createViewModel('Catálogo', { products, q });
}

function presentCadastro() {
    return createViewModel('Cadastro');
}

function presentSuporte(errorMessage) {
    return createViewModel('Suporte', { errorMessage });
}

function presentComoGanhar() {
    return createViewModel('Como Ganhar');
}

function presentPublique() {
    return createViewModel('Publique sua Obra');
}

function presentProduct(product) {
    return createViewModel(product.titulo, { product });
}

function presentProductNotFound() {
    return {
        statusCode: 404,
        view: 'suporte',
        model: createViewModel('Produto não encontrado', {
            errorMessage: 'Produto não encontrado. Tente novamente pelo catálogo.'
        })
    };
}

module.exports = {
    presentHome,
    presentCatalog,
    presentCadastro,
    presentSuporte,
    presentComoGanhar,
    presentPublique,
    presentProduct,
    presentProductNotFound
};
