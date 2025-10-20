let state = {
    products : [
        {
            name: "Teszt termék 1",
            price: 2500,
            isInStock: true
        },
        {
            name: "Teszt termék 2",
            price: 3500,
            isInStock: true
        },
        {
            name: "Teszt termék 3",
            price: 5550,
            isInStock: false
        }
    ]
}
function renderProducts() {
    var productsHTML = '';
    for (const products of state.products){
        productsHTML +=`
        <div class="card m-2 p-2 ${products.isInStock ? "" : "bg-danger"}">
            <p>${products.name}</p>
            <p>${products.price}</p>
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