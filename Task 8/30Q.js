// Task 30: Complete Admin Dashboard (Interview Level)
// Build a report:
// ==============================

// TOTAL PRODUCTS :
// TOTAL CATE/GORIES :
// TOTAL PRICE :
// AVERAGE PRICE :

// HIGHEST PRICE PRODUCT :
// LOWEST PRICE PRODUCT :

// BEST RATED PRODUCT :
// LOWEST RATED PRODUCT :

// PRODUCTS ABOVE $100 :
// PRODUCTS BELOW $50 :

// CATEGORY COUNTS :


fetch("https://fakestoreapi.com/products")
  .then(response => response.json())

  .then(products => {

    products.forEach(product => {
      console.log(product.title);
    });

    let titles = products.map(product => product.title);

    let productsAbove100 = products.filter(
      product => product.price > 100
    );

    let productsBelow50 = products.filter(
      product => product.price < 50
    );

    let firstElectronicProduct = products.find(
      product => product.category === "electronics"
    );

    let totalPrice = products.reduce(
      (sum, product) => sum + product.price,
      0
    );

    let averagePrice = (
      totalPrice / products.length
    ).toFixed(2);


    let hasProductAbove500 = products.some(
      product => product.price > 500
    );

    let allProductsAboveRating3 = products.every(
      product => product.rating.rate > 3
    );

    let highestPriceProduct = [...products]
      .sort((a, b) => b.price - a.price)[0];

    let lowestPriceProduct = [...products]
      .sort((a, b) => a.price - b.price)[0];

    let bestRatedProduct = [...products]
      .sort((a, b) => b.rating.rate - a.rating.rate)[0];

    let lowestRatedProduct = [...products]
      .sort((a, b) => a.rating.rate - b.rating.rate)[0];

    let shirtProducts = products.filter(product =>
      product.title.toLowerCase().includes("shirt")
    );

    let totalCategories = new Set(
      products.map(product => product.category)
    ).size;

    let categoryCounts = products.reduce((acc, product) => {

      acc[product.category] =
        (acc[product.category] || 0) + 1;

      return acc;

    }, {});

    console.log("==============================");

    console.log("TOTAL PRODUCTS :", products.length);

    console.log("TOTAL CATEGORIES :", totalCategories);

    console.log("TOTAL PRICE :", totalPrice.toFixed(2));

    console.log("AVERAGE PRICE :", averagePrice);

    console.log("");

    console.log(
      "HIGHEST PRICE PRODUCT :",
      highestPriceProduct.title
    );

    console.log(
      "LOWEST PRICE PRODUCT :",
      lowestPriceProduct.title
    );

    console.log("");

    console.log(
      "BEST RATED PRODUCT :",
      bestRatedProduct.title
    );

    console.log(
      "LOWEST RATED PRODUCT :",
      lowestRatedProduct.title
    );

    console.log("");

    console.log(
      "PRODUCTS ABOVE $100 :",
      productsAbove100.length
    );

    console.log(
      "PRODUCTS BELOW $50 :",
      productsBelow50.length
    );

    console.log("");

    console.log("CATEGORY COUNTS :");

    for (let category in categoryCounts) {
      console.log(
        category,
        ":",
        categoryCounts[category]
      );
    }

    console.log("");

    console.log(
      "FIRST ELECTRONIC PRODUCT :",
      firstElectronicProduct.title
    );

    console.log(
      "SHIRT PRODUCTS FOUND :",
      shirtProducts.length
    );

    console.log(
      "ANY PRODUCT ABOVE $500 :",
      hasProductAbove500
    );

    console.log(
      "ALL PRODUCTS ABOVE RATING 3 :",
      allProductsAboveRating3
    );

    console.log("==============================");
  })

  .catch(error => {
    console.log("Error :", error);
  })

  .finally(() => {
    console.log("Dashboard Loaded Successfully");
  });