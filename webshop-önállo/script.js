let state = {
    products: [
        { name: "Barna Kenyér", price: 1500, isInStock: true, picture: "barna.png" },
        { name: "Fehér Kenyér", price: 1000, isInStock: true, picture: "fehér.png" },
        { name: "Teljes Kiörlésü Kenyér", price: 1300, isInStock: true, picture: "teljes.png" },
        { name: "Kukorica Kenyér", price: 1600, isInStock: true, picture: "kukorica_kenyér.png" },
        { name: "Gluténmentes Kenyér", price: 1400, isInStock: true, picture: "gluténmentes.png" }
    ]
};

function renderProducts() {
    const container = document.getElementById('product-list-component');
    if (!container) {
        console.error("Missing #product-list-component in HTML!");
        return;
    }

    let productsHTML = '';

    for (const product of state.products) {
        productsHTML += `
            <div class="termek">
                <p>${product.name}</p>
                <p>${product.price} Ft/kg</p>
                <p>${product.isInStock ? 'Készleten' : 'Nincs készleten'}</p>
                <img src="${product.picture}" alt="${product.name}">
            </div>
        `;
    }

    container.innerHTML = productsHTML;
}

window.onload = renderProducts;

document.getElementById('create-product').onsubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const price = parseInt(event.target.elements.price.value);
    const isInStock = event.target.elements.isInStock.checked;

    state.products.push({ name, price, isInStock, picture: "placeholder.png" });

    renderProducts();
    event.target.reset();
};
