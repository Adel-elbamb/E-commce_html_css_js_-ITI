// localStorage.setItem("products", JSON.stringify(products));


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
          id: 15,
          category: "watches",
          name: "Herschel supply",
          price: 74.16,
          image: "images/product-15.jpg",
          detail_url: "product-detail.html"
        },
        {
            id: 16,
            category: "women",
            name: "watches supply",
            price: 74.16,
            image: "images/product-16.jpg",
            detail_url: "product-detail.html"
          }
          
  ];

  localStorage.setItem("products", JSON.stringify(products));
let local_products = JSON.parse(localStorage.getItem("products")); 
console.log(local_products )
 function renderProducts() {
          const productGrid = document.getElementById("product-grid");

          local_products.forEach((product) => {
              const productHTML = `
                  <div class="col-md-3 isotope-item mt-5 ${product.category}">
                      <div class="block2">
                          <div class="block2-pic hov-img0">
                              <img src="${product.image}" alt="${product.name}">
                      <a href="product-detail.html" onclick="viewProduct(${product.id})" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
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
                      <a href="product-detail.html" onclick="viewProduct(${product.id})" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
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


// ========================================= quick view button =============================

function viewProduct(productId) {
  const selectedProduct = local_products.find(p => p.id === productId);
  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
}



