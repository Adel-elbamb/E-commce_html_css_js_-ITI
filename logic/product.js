
let local_products = JSON.parse(localStorage.getItem("products")); 
  console.log(local_products)
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
