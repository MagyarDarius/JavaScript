let sale = document.querySelector(".sale")
let products = document.querySelectorAll(".product")
sale.onclick = function(){
    if (sale.checked){
        products.forEach((product) => {
            if(!product.querySelector(".product-old-price")){
                product.style.display = "none"
            }
        })
    }
    else{
        products.forEach((product) => {
            product.style.display = "inline-block"
        })
    }
}
let order = document.querySelector(".order")
let productsArray = Array.from()
order.onchange = () => {
    switch(order.value){
        case "0":
            productsArray.sort((a, b) => {
                let aValue = Number(a.querySelector(".products-price").innerText.replace(".", "").replace(" Ft", ""));
                let bValue = Number(a.querySelector(".products-price").innerText.replace(".", "").replace(" Ft", ""));
                return a-b;
            });
            break;
        case "1":
            productsArray.sort((a, b) => {
                let aValue = Number(a.querySelector(".products-price").innerText.replace(".", "").replace(" Ft", ""));
                let bValue = Number(a.querySelector(".products-price").innerText.replace(".", "").replace(" Ft", ""));
                return b-a;
            });
            break;
        case "2":
            //productsArray.sort();
            break;
        case "3":
            break;

    }
    document.querySelector(".products").innerHTML = productsArray;
}