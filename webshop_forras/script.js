let state = {
  products: [
    { name: "Társasjáték", price: 6500, url: "tarsas.jpg" },
    { name: "Puzzle", price: 2000, url: "puzzle.jpg" },
    { name: "Tetris", price: 3500, url: "tetris.jpeg" },
    { name: "Holdautó", price: 7300, url: "holdauto.jpg" },
  ]
};


function render() {
  let products = document.getElementById("products");
  productHTML = '<div class="row">';
  for (const product of state.products) {
    productHTML += `
    <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="card">
            <img src="img/${product.url}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price} Ft</p>
          </div>
        </div>
    `
  }
  productHTML += "</div>";
  products.innerHTML = productHTML;
}

window.onload = render;

document.getElementById('create-product').onsubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const price = parseInt(event.target.elements.price.value);
    const url = event.target.elements.url.value;

    state.products.push({ name, price, url });

    render();
    event.target.reset();
};
