let state = {
    products: [
        { id: crypto.randomUUID(), name: "Barna Kenyér", price: 1500, isInStock: true, picture: "barna.png" },
        { id: crypto.randomUUID(), name: "Fehér Kenyér", price: 1000, isInStock: true, picture: "fehér.png" },
        { id: crypto.randomUUID(), name: "Teljes Kiörlésü Kenyér", price: 1300, isInStock: true, picture: "teljes.png" },
        { id: crypto.randomUUID(), name: "Kukorica Kenyér", price: 1600, isInStock: true, picture: "kukorica_kenyér.png" },
        { id: crypto.randomUUID(), name: "Gluténmentes Kenyér", price: 1400, isInStock: true, picture: "gluténmentes.png" }
    ],
    editedId: ""
};


function renderEditProduct() {
    const container = document.getElementById("edit-product");

    if (!container) return;

    if (!state.editedId) {
        container.style.display = "none";
        container.innerHTML = "";
        return;
    }

    container.style.display = "flex";

    const product = state.products.find(p => p.id === state.editedId);
    if (!product) return;

    container.innerHTML = `
        <h3>Termék szerkesztése</h3>
        <form id="update-product">

                <input type="text" name="name" value="${product.name}">

                <input type="number" name="price" value="${product.price}">

            <label id="stock"> Van készleten?
                <input type="checkbox" name="isInStock" ${product.isInStock ? "checked" : ""}>
            </label>

            <button type="submit">Mentés</button>
        </form>
    `;

    document.getElementById("update-product").onsubmit = (event) => {
        event.preventDefault();

        product.name = event.target.elements.name.value;
        product.price = parseInt(event.target.elements.price.value);
        product.isInStock = event.target.elements.isInStock.checked;

        state.editedId = "";
        renderProducts();
        renderEditProduct();
    };
}


function renderProducts() {
    const container = document.getElementById('product-list-component');
    let productsHTML = '';

    for (const product of state.products) {
        productsHTML += `
            <div class="termek ${product.isInStock ? "" : "bg-danger"}">
                <p>${product.name}</p>
                <p>${product.price} Ft/kg</p>
                <p>${product.isInStock ? 'Készleten' : 'Nincs készleten'}</p>
                <img src="${product.picture}" alt="${product.name}">
                <button class="edit-product" data-id="${product.id}">✏ Szerkesztés</button>
                <button class="delete-product" data-id="${product.id}">🗑 Törlés</button>
            </div>
        `;
    }

    container.innerHTML = productsHTML;

    document.querySelectorAll(".edit-product").forEach(btn => {
        btn.onclick = () => {
            state.editedId = btn.dataset.id;
            renderEditProduct();
        };
    });

    document.querySelectorAll(".delete-product").forEach(btn => {
        btn.onclick = () => {
            state.products = state.products.filter(p => p.id !== btn.dataset.id);
            renderProducts();
            renderEditProduct();
        };
    });
}


window.onload = () => {
renderProducts();
};

document.getElementById('create-product').onsubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const price = parseInt(event.target.price.value);
    const isInStock = event.target.isInStock.checked;

    state.products.push({
        id: crypto.randomUUID(),
        name,
        price,
        isInStock,
        picture: "placeholder.png"
    });

    event.target.reset();
    renderProducts();
};