const { name } = require("browser-sync");

let state = {
    products: [
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
            price: 5500,
            isInStock: true
        }
    ]
}
function renderProduct(){
    var productsHTML
}