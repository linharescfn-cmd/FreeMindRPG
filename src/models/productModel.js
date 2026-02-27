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
        titulo: 'Vampiro: o Réquiem',
        price: 120.00,
        img: '/img/livros/Vampiros o Reqium.jpg'
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

function getProductById(id) {
    return products.find((product) => product.id === Number(id));
}

module.exports = {
    getAllProducts,
    getProductById
};
