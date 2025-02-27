// Change name and logout of user
let loginButton = document.getElementById("loginButton");
let logoutButton = document.getElementById("logoutButton");
let userName = document.getElementById("userName");

var users = JSON.parse(localStorage.getItem("users")) || [];
var loggedInUser = users.find(user => user.isLogin === true);

if (loggedInUser) {
    loginButton.style.display = "none"; // Hide login button
    logoutButton.style.display = "block"; // Show logout button
    userName.innerHTML = `${loggedInUser.name}`; // Display user's name
}

function logout(event) {
    event.preventDefault(); // Prevent default anchor behavior
    if (loggedInUser) {
        loggedInUser.isLogin = false;
        localStorage.setItem("users", JSON.stringify(users));
        logoutButton.style.display = "none";
        loginButton.style.display = "block"; // Show login button
        userName.innerHTML = ""; // Clear user's name
        alert("Logged out successfully!");
        window.location.reload(); // Refresh the page
    }
}

logoutButton.addEventListener("click", logout);

// =======================================slider ========================================

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to show a specific slide
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Show the current slide
    slides[index].classList.add('active');

    // Move the slides container
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}


function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}


function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}


setInterval(nextSlide, 4000);


showSlide(currentSlide);

// =====================================products ======================================================

// Static product data
const products = [
    {
      id: 1,
      category: "women",
      name: "Esprit Ruffle Shirt",
      price: 16.64,
      image: "images/product-01.jpg",
      detail_url: "product-detail.html"
    },
    {
      id: 2,
      category: "women",
      name: "Herschel supply",
      price: 35.31,
      image: "images/product-02.jpg",
      detail_url: "product-detail.html"
    },
    {
      id: 3,
      category: "men",
      name: "Only Check Trouser",
      price: 25.50,
      image: "images/product-03.jpg",
      detail_url: "product-detail.html"
    },
    {
      id: 4,
      category: "women",
      name: "Classic Trench Coat",
      price: 75.00,
      image: "images/product-04.jpg",
      detail_url: "product-detail.html"
    },
    {
      id: 5,
      category: "women",
      name: "Front Pocket Jumper",
      price: 34.75,
      image: "images/product-05.jpg",
      detail_url: "product-detail.html"
    },
    {
      id: 6,
      category: "watches",
      name: "Vintage Inspired Classic",
      price: 93.20,
      image: "images/product-06.jpg",
      detail_url: "product-detail.html"
    },
    {
      id: 7,
      category: "women",
      name: "Shirt in Stretch Cotton",
      price: 52.66,
      image: "images/product-07.jpg",
      detail_url: "product-detail.html"
    },
    {
      id: 8,
      category: "women",
      name: "Pieces Metallic Printed",
      price: 18.96,
      image: "images/product-08.jpg",
      detail_url: "product-detail.html"
    },
    {
      id: 9,
      category: "shoes",
      name: "Converse All Star Hi Plimsolls",
      price: 75.00,
      image: "images/product-09.jpg",
      detail_url: "product-detail.html"
    },
    {
      id: 10,
      category: "women",
      name: "Femme T-Shirt In Stripe",
      price: 25.85,
      image: "images/product-10.jpg",
      detail_url: "product-detail.html"
    },
    {
      id: 11,
      category: "men",
      name: "Herschel supply",
      price: 63.16,
      image: "images/product-11.jpg",
      detail_url: "product-detail.html"
    }, 
     {
        id: 12,
        category: "men",
        name: "Herschel supply",
        price: 63.16,
        image: "images/product-12.jpg",
        detail_url: "product-detail.html"
      }
      , 
     {
        id: 13,
        category: "women",
        name: "Herschel supply",
        price: 63.16,
        image: "images/product-13.jpg",
        detail_url: "product-detail.html"
      }

      , 
      {
         id: 14,
         category: "women",
         name: "Herschel supply",
         price: 74.16,
         image: "images/product-14.jpg",
         detail_url: "product-detail.html"
       }
       , 
       {
          id: 14,
          category: "watches",
          name: "Herschel supply",
          price: 74.16,
          image: "images/product-15.jpg",
          detail_url: "product-detail.html"
        },
        {
            id: 15,
            category: "women",
            name: "watches supply",
            price: 74.16,
            image: "images/product-16.jpg",
            detail_url: "product-detail.html"
          }
          
  ];

  localStorage.setItem("products", JSON.stringify(products));
  let local_products = JSON.parse(localStorage.getItem("products")); 
//   console.log(local_products)
        // Render products in the HTML
   function renderProducts() {
            const productGrid = document.getElementById("product-grid");

            local_products.forEach((product) => {
                const productHTML = `
                    <div class="col-md-3 isotope-item mt-5 ${product.category}">
                        <div class="block2">
                            <div class="block2-pic hov-img0">
                                <img src="${product.image}" alt="${product.name}">
                                <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
                                    Quick View
                                </a>
                            </div>
                            <div class="block2-txt">
                                <a href="product-detail.html">
                                    ${product.name}
                                </a>
                                <span class="stext-105">
                                    $${product.price.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                `;
                
                productGrid.innerHTML += productHTML;
            });
        }
        if (local_products.length > 0) {
            renderProducts();
        }
        

// ===============================filter_poduct=========================
function filter_product(x) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; 

    local_products.forEach((product) => {
        if (x === "all" || product.category === x) {
            const productHTML = `
                <div class="col-md-3 isotope-item mt-5 ${product.category}">
                    <div class="block2">
                        <div class="block2-pic hov-img0">
                            <img src="${product.image}" alt="${product.name}">
                            <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
                                Quick View
                            </a>
                        </div>
                        <div class="block2-txt">
                            <a href="product-detail.html">
                                ${product.name}
                            </a>
                            <span class="stext-105">
                                $${product.price.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
            `;
            productGrid.innerHTML += productHTML;
        }
    });
}


























    // ====================scroll up and down ===============
    // const backToTop = document.getElementById("backToTop");

    // window.onscroll = function () {
    //     if (document.documentElement.scrollTop > 300) {
    //         backToTop.classList.remove("d-none");
    //     } else {
    //         backToTop.classList.add("d-none");
    //     }
    // };

    // backToTop.addEventListener("click", function () {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // });