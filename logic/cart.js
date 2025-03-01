

        
// Function to update cart totals


let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart)

function product_cart() {
    if(cart) {
        let total = 0
        cart.forEach(product => {
            console.log(product.image)
            const product_data = document.getElementById("table_product")
            console.log(product)
             total_one_product = parseFloat(product.price) * parseInt(product.quantity)
            const product_body = ` <tbody>
                    <tr>
                         <td><img  src="${product.image}"/></td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>
                            ${product.quantity}
                        </td>
                        <td>${total_one_product}</td>
                    </tr>
                </tbody>`
                total +=total_one_product
                product_data.innerHTML  += product_body
        });
        document.getElementById("product_total_price").innerHTML = total
        document.getElementById("product_total_price_shipping").innerHTML=total+13
    }
}

product_cart()


// ==================================popuppp==================

function cheackout() {
    let x = []
    localStorage.setItem("cart", JSON.stringify(x));
}