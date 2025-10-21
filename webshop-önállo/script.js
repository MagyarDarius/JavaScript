let state = {
    products : [
        {
            name: "Barna Kenyér",
            price: 1500,
            isInStock: true
        },
        {
            name: "Fehér Kenyér",
            price: 1000,
            isInStock: true 
        },
        {
            name: "Teljes Kiörlésü Kenyér",
            price: 1300,
            isInStock: true
        },
        {
            name: "Kukorica Kenyér",
            price: 1600,
            isInStock: true
        },
        {
            name: "Gluténmentes Kenyér",
            price: 1400,
            isInStock: true 
        }
    ]
}
function renderProducts() {
    var productsHTML = '';
    for (const products of state.products){
        productsHTML +=`
        <div class="termek">
            <p>${products.name}</p>
            <p>${products.price}Ft/kg</p>
        </div>
        `
    }
    document.getElementById('product-list-component').innerHTML = productsHTML;
}
window.onload = renderProducts;
document.getElementById('create-product').onsubmit =  (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const isInStock = event.target.elements.isInStock.checked;
    state.products.push({
        name,
        price,
        isInStock
    });

    renderProducts();
}