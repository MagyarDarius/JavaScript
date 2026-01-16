let sale = document.querySelector(".sale")
let products = document.querySelectorAll(".product")
sale.onclick = function() {
    if(sale.checked){
        products.forEach((product) => {
            if (!product.querySelector(".product-old-price")){
                product.style.display= "none"
            }
        })
    } else{
        products.forEach((product) => {
            product.style.display = "inline-block"
        })
    }
}
let order = document.querySelector(".order")
let productsArray = Array.from(products)
order.onchange = () => {
    switch(order.value){
        case "0":
            productsArray.sort((a, b) => {
                let aValue = Number(a.querySelector(".product-price").innerText.replace(".", "").replace(" Ft", ""))
                let bValue = Number(b.querySelector(".product-price").innerText.replace(".", "").replace(" Ft", ""))
                return aValue-bValue;
            })
            break;
        case "1":
        productsArray.sort((a, b) => {
                let aValue = Number(a.querySelector(".product-price").innerText.replace(".", "").replace(" Ft", ""))
                let bValue = Number(b.querySelector(".product-price").innerText.replace(".", "").replace(" Ft", ""))
                return bValue-aValue;
        })
            break;
        case "2":
            productsArray.sort((a, b) =>{
                let aValue = a.querySelector(".product-name").innerText;
                let bValue = b.querySelector(".product-name").innerText;
                return aValue.localeCompare(bValue);
            })
            break;
        case "3":
                productsArray.sort((a, b) =>{
                let aValue = a.querySelector(".product-name").innerText;
                let bValue = b.querySelector(".product-name").innerText;
                return bValue.localeCompare(aValue);
            })
            break;
    }
    document.querySelector(".products").innerHTML = ""
    for (const product of productsArray){
        document.querySelector(".products").appendChild(product);
    }
}