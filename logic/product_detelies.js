// Retrieve product details from localStorage
const product = JSON.parse(localStorage.getItem("selectedProduct"));

// Update the HTML with product details
if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").innerText = product.name;
    if (product.price) {
        document.getElementById("product-price").innerText = "$" + product.price.toFixed(2);
    }
} else {
    console.error("No product found in localStorage.");
}

// Function to change product image
function changeImage(imageSrc) {
    document.getElementById('product-image').src = imageSrc;
}

// Increase Quantity
function increaseQuantity() {
    let qty = document.getElementById('quantity');
    qty.value = parseInt(qty.value) + 1;
}

// Decrease Quantity
function decreaseQuantity() {
    let qty = document.getElementById('quantity');
    if (qty.value > 1) {
        qty.value = parseInt(qty.value) - 1;
    }
}

// Add to Cart Function
function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let quantity = parseInt(document.getElementById('quantity').value);

    let newProduct = {
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: quantity
    };

    let existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push(newProduct);
    }
     
    let alluser = JSON.parse(localStorage.getItem("users"))
  let user =   alluser.find(user => user.isLogin == true )
  if (user){
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");

  } else {
    alert("please loggin or create Account before buy")
  }
    
}

