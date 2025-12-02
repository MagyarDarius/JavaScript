let state = {
    products : [
        {
            id: crypto.randomUUID(),
            name: "Teszt termék 1",
            price: 2500,
            isInStock: true
        },
        {
            id: crypto.randomUUID(),
            name: "Teszt termék 2",
            price: 3500,
            isInStock: true
        },
        {
            id: crypto.randomUUID(),
            name: "Teszt termék 3",
            price: 5550,
            isInStock: false
        }
    ],
    editedId: ""
};

function renderEditProduct(){    
    if(state.editedId==""){
        document.getElementById("edit-product").innerHTML="";
        return
    }
    let foundProduct;
    for (const product of state.products) {
        if (product.id === state.editedId){
            foundProduct = product;
            break;
        }
    }

    let editFormHTML = `
        <h3>Termék szerkesztése</h3>
        <form id="update-product" class="p-5">
            <label class="w-100">
              Név:
              <input class="form-control" type="text" name="name" value="${foundProduct.name}">
            </label>
            <label class="w-100">
              Ár:
              <input class="form-control" type="number" name="price" value="${foundProduct.price}">
            </label>
            <label class="w-100">
              Van készleten?
              <input class="form-control" type="checkbox" name="isInStock" ${foundProduct.isInStock ? "checked" : ""}>
            </label>
            <button class="btn btn-primary" type="submit">Küldés</button>
        </form>
    `;

    document.getElementById("edit-product").innerHTML = editFormHTML;

    document.getElementById('update-product').onsubmit = (event) => {
        event.preventDefault();

        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const isInStock = event.target.elements.isInStock.checked;

        let foundIndex;

        for (let index = 0; index < state.products.length; index++){
            if (state.products[index].id == state.editedId){
                foundIndex = index;
                break;
            }
        }

        state.products[foundIndex] = {
            id: state.editedId,
            name,
            price,
            isInStock
        }
        state.editedId=""
        renderProducts();
        renderEditProduct();
    };
}

function renderProducts() {
    var productsHTML = '';
    for (const product of state.products){
        productsHTML +=`
        <div class="card m-2 p-2 ${product.isInStock ? "" : "bg-danger"}">
            <p>${product.name}</p>
            <p>${product.price}</p>
            <button class="btn btn-warning float-right edit-product md-2" data-productid="${product.id}">Szerkesztés</button>
            <button class="btn btn-danger float-right delete-product" data-productid="${product.id}">Törlés</button>
        </div>
        `;
    }
    document.getElementById('product-list-component').innerHTML = productsHTML;

    for(const editBtn of document.querySelectorAll(".edit-product")){
        editBtn.onclick = (event) => { 
            let id = event.target.dataset.productid;
            state.editedId = id;
            renderEditProduct();
        }
    }

    for(const deleteBtn of document.querySelectorAll(".delete-product")){
        deleteBtn.onclick = (event) => {
            let id = event.target.dataset.productid;
            /*let foundIndex;

            for(let index=0; index < state.products.length; index++){
                if(state.products[index].id == id){
                    foundIndex = index;
                    break;
                }
            }

            state.products.splice(foundIndex, 1);*/
            state.products = state.products.filter((product) => product.id !== id)
            renderProducts();
        }
    }
}

window.onload = renderProducts;

document.getElementById('create-product').onsubmit = (event) => {
    event.preventDefault();
    const id = crypto.randomUUID();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const isInStock = event.target.elements.isInStock.checked;

    state.products.push({
        id,
        name,
        price,
        isInStock
    });

    renderProducts();
};