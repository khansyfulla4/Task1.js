

let api = "https://fakestoreapi.com/products";

let cart = [];
let products = [];

let cartContainer = document.getElementById("cart");

let totalContainer = document.getElementById("total");

let searchInput = document.getElementById("search");

let categorySelect = document.getElementById("category");

let sortSelect = document.getElementById("sort");

let cartItemId = 1;

function displayProducts(data){
    
    let container = document.getElementById("products");

    container.innerHTML = "";

    data.forEach(product => {
        container.innerHTML +=`
                <div class="product-card">

                <img src="${product.image}" width="100">
                <h3>${product.title}</h3>
                <p>₹${product.price}</p>

                <button onclick="addToCart(${product.id})">
                    Add To Cart
                </button>

        </div>
            `;
    });
}

function showCategories(){
    let categories =
    [...new Set(
        products.map(
            product => product.category
        )
    )];
    categories.forEach(category =>{
        categorySelect.innerHTML += `
            <option value="${category}">
                ${category}
            </option>
        `
    })
}



fetch(api)
    .then(response => response.json())
    .then(data => {

        products = data;

        showCategories();

        displayProducts(products);
    });



function addToCart(id){
    let item = products.find(product =>
        product.id === id
    );
    let cartItem = {...item,
        cartId: cartItemId++
    }
    cart.push(cartItem);
    console.log(cart);

    displayCart();
}

function displayCart(){
    cartContainer.innerHTML ="";
    cart.forEach(item => {
        cartContainer.innerHTML += `
                <li>
                    ${item.title} - Rs${item.price}
                    <button onclick="removeFromCart(${item.cartId})">
                        Remove
                    </button>
                </li>
        `;
    });
    calculateTotal();
}

function calculateTotal(){
    let total = cart.reduce(
        (sum,item) =>
        sum + item.price,
        0
    );
    totalContainer.textContent = total.toFixed(2);
}


searchInput.addEventListener("keyup", () => {

    let text = searchInput.value.toLowerCase();

    let result = products.filter(product =>
        product.title.toLowerCase().includes(text)
    );
    displayProducts(result);
});


categorySelect.addEventListener(
    "change",
    filterAndSortProducts
);


sortSelect.addEventListener(
    "change",
    filterAndSortProducts
);



function filterAndSortProducts(){

    let filteredProducts;

    if(categorySelect.value === "all"){
        filteredProducts = [...products];
    }
    else{
        filteredProducts = products.filter(
            product =>
            product.category === categorySelect.value
        );

    }
    if(sortSelect.value === "low"){
        filteredProducts.sort(
            (a,b) => a.price - b.price
        );
    }
    else if(sortSelect.value === "high"){
        filteredProducts.sort(
            (a,b) => b.price - a.price
        );
    }
    displayProducts(filteredProducts);
}



function removeFromCart(cartId){
    cart = cart.filter(
        item => item.cartId !== cartId
    );
    displayCart();

}