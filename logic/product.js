// Fetch products from Fake Store API
async function fetchProducts() {
    try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Display products on the page
function displayProducts(products) {
    const productsContainer = document.getElementById("products-container");

    products.forEach(product => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card product-card h-100">
                    <img src="${product.images[0]}" class="card-img-top product-image p-3" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Price: $${product.price}</strong></p>
                        <p class="card-text"><small class="text-muted">Category: ${product.category.name}</small></p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += productCard;
    });
}

// Fetch and display products when the page loads
fetchProducts();

// ==========================slides========================
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  
  if (index >= totalSlides) currentIndex = 0;
  if (index < 0) currentIndex = totalSlides - 1;
  
  slides.style.transform = `translateX(${-currentIndex * 500}px)`;
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);
