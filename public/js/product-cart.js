document.addEventListener('DOMContentLoaded', () => {
    const cartKey = 'freemind_cart';
    const addButton = document.getElementById('produtoAddCart');
    const cartFloat = document.getElementById('cartFloat');
    const cartCount = document.getElementById('cartFloatCount');

    if (!addButton || !cartFloat || !cartCount) {
        return;
    }

    const getCart = () => {
        try {
            const rawValue = localStorage.getItem(cartKey);
            const parsed = rawValue ? JSON.parse(rawValue) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            return [];
        }
    };

    const saveCart = (cartItems) => {
        localStorage.setItem(cartKey, JSON.stringify(cartItems));
    };

    const updateCount = () => {
        const cartItems = getCart();
        const totalItems = cartItems.reduce((total, item) => total + Number(item.qty || 0), 0);
        cartCount.textContent = String(totalItems);
    };

    addButton.addEventListener('click', () => {
        const productId = Number(addButton.dataset.id);
        const cartItems = getCart();
        const existingItem = cartItems.find((item) => Number(item.id) === productId);

        if (existingItem) {
            existingItem.qty += 1;
        } else {
            cartItems.push({
                id: productId,
                titulo: addButton.dataset.titulo,
                price: Number(addButton.dataset.price),
                img: addButton.dataset.img,
                qty: 1
            });
        }

        saveCart(cartItems);
        updateCount();
    });

    cartFloat.addEventListener('click', () => {
        window.location.href = '/catalogo';
    });

    updateCount();
});
