const productModel = require('../models/productModel');
const presenter = require('../presenters/pagePresenter');

function home(req, res) {
    const products = productModel.getAllProducts();
    res.render('home', presenter.presentHome(products));
}

function catalogo(req, res) {
    const query = typeof req.query.q === 'string' ? req.query.q.trim() : '';
    const products = query
        ? productModel.searchProducts(query)
        : productModel.getAllProducts();

    res.render('catalogo', presenter.presentCatalog(products, query));
}

function cadastro(req, res) {
    res.render('cadastro', presenter.presentCadastro());
}

function suporte(req, res) {
    res.render('suporte', presenter.presentSuporte());
}

function comoGanhar(req, res) {
    res.render('como-ganhar', presenter.presentComoGanhar());
}

function publique(req, res) {
    res.render('publique', presenter.presentPublique());
}

function productDetail(req, res) {
    const product = productModel.getProductById(req.params.id);

    if (!product) {
        const notFound = presenter.presentProductNotFound();
        return res.status(notFound.statusCode).render(notFound.view, notFound.model);
    }

    res.render('product', presenter.presentProduct(product));
}

module.exports = {
    home,
    catalogo,
    cadastro,
    suporte,
    comoGanhar,
    publique,
    productDetail
};
