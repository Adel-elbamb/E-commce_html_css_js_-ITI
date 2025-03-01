let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function toggleCart() {
    document.getElementById("cart-sidebar").classList.toggle("active");
    document.getElementById("cart-overlay").classList.toggle("active");
    updateCart();
}

function updateCart() {
    let cartItemsContainer = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let cartCount = document.getElementById("cart-count");

    cartItemsContainer.innerHTML = ""; // Clear previous content
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" width="50">
            <div>
                <p>${item.name}</p>
                <p>${item.quantity} x $${item.price.toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);

        total += item.price * item.quantity;
        count += item.quantity;
    });

    cartTotal.innerText = `$${total.toFixed(2)}`;
    cartCount.innerText = count;
}

updateCart();

// =========================================
function cheackout() {
    let x = []
    localStorage.setItem("cart", JSON.stringify(x));
}
