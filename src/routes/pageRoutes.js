const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.get('/', pageController.home);
router.get('/catalogo', pageController.catalogo);
router.get('/cadastro', pageController.cadastro);
router.get('/suporte', pageController.suporte);
router.get('/como-ganhar', pageController.comoGanhar);
router.get('/product/:id', pageController.productDetail);
router.get('/publique', pageController.publique);

module.exports = router;
