let displayProduct = document.getElementById("displayProduct");
let totalPrice = document.getElementById("totalPrice");

function displayCardProduct() {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    let input = "";
    let total_price = 0;

//     if(cartData.lenght == 0) {
//         console.log("cart to impty")
        total_price = 0
        displayProduct.innerHTML = `
   <h1>cart is empty</h1>
    `
//         totalPrice.innerHTML = ``
//     }
if (cartData.length==0) {
    console.log("empty")
    total_price = 0
    displayProduct.innerHTML = `

<img id="emt" src=${"https://thumbs.dreamstime.com/z/empty-pink-shopping-cart-empty-pink-shopping-cart-pink-background-131182342.jpg"}>
`
}
    else {
        total_price = 0
        cartData.forEach((val, index) => {
            total_price += val.price;
            input += `
       <div class="all-product2">
        <img src=${val.images[0]} alt=${val.title}>
        <p>${val.title}</p>
        <p>PRICE :${val.price}</p>
        <p>STOCK :${val.stock}</p>
        <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
    </div>
    `
            displayProduct.innerHTML = input;
            totalPrice.textContent = `Total Price is ${total_price.toFixed(2)}`
        })

    }

}

displayCardProduct();
function deleteItem(index) {
    let cartProduct = JSON.parse(localStorage.getItem("cart"))
    cartProduct.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cartProduct))
    displayCardProduct()

}