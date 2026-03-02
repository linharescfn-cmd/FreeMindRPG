const products = [
    {
        id: 1,
        titulo: 'O chamado de Cthulhu',
        price: 125.00,
        desc: 'O Chamado de Cthulhu é um RPG de horror cósmico baseado na obra do escritor H.P. Lovecraft. Os jogadores assumem o papel de investigadores que enfrentam horrores indescritíveis e entidades cósmicas além da compreensão humana. O jogo enfatiza a narrativa, a atmosfera e a sanidade dos personagens, proporcionando uma experiência imersiva e aterrorizante.',
        img: '/img/livros/Chamado-do-Cthulhu.png'
    },
    {
        id: 2,
        titulo: 'Dungeons & Dragons',
        price: 150.00,
        img: '/img/livros/d&D.png'
    },
    {
        id: 3,
        titulo: 'Cronicas das Trevas',
        price: 130.00,
        img: '/img/livros/cronicas das trevas.webp'
    },
    {
        id: 4,
        titulo: 'Vampiros: o Réquien',
        price: 120.00,
        img: '/img/livros/vampiros o requien.jpg'
    },
    {
        id: 5,
        titulo: 'Magos: o Despertar',
        price: 140.00,
        img: '/img/livros/magos o despertar.jpg'
    },
    {
        id: 6,
        titulo: 'Lobisomens: o Apocalipse',
        price: 135.00,
        img: '/img/livros/lobisomens.jpg'
    },
    {
        id: 7,
        titulo: 'Kult',
        price: 110.00,
        img: '/img/livros/kult.webp'
    }
];

function getAllProducts() {
    return products;
}

function normalizeValue(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

function searchProducts(query) {
    const searchTerm = normalizeValue(query);

    if (!searchTerm) {
        return getAllProducts();
    }

    return products.filter((product) => {
        const title = normalizeValue(product.titulo);
        const description = normalizeValue(product.desc);

        return title.includes(searchTerm) || description.includes(searchTerm);
    });
}

function getProductById(id) {
    return products.find((product) => product.id === Number(id));
}

module.exports = {
    getAllProducts,
    searchProducts,
    getProductById
};
