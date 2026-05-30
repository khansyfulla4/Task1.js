// Beginner Level
_____________________________________________________________________________________
// Task 1: Print All Products
// Fetch all products and print them.
// Output:
//  ...
// Price : ...

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      console.log("Title :", product.title);
      console.log("Price :", product.price);
      console.log("-------------------");
    });
  })
  .catch(error => {
    console.log("Error:", error);
  });
  _____________________________________________________________________________________
// Task 2: Print Only Product Titles
// Output:
// Product 1
// Product 2
// Product 3
// Use:
// forEach()
// or
// map()

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      console.log(product.title);
    });
  })
  .catch(error => {
    console.log("Error:", error);
  });
  _____________________________________________________________________________________
// Task 3: Print Total Products
// Output:
// Total Products : 20

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    console.log("Total Products :", products.length);
  })
  .catch(error => {
    console.log("Error:", error);
  });
  _____________________________________________________________________________________
// Task 4: Print All Categories
// Output:
// electronics
// jewelery
// men's clothing
// women's clothing

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      console.log(product.category);
    });
  })
  .catch(error => {
    console.log("Error:", error);
  });
  _____________________________________________________________________________________
// Task 5: Print Products Above $50
// Use:
// filter()
// Output:
// Product A - 109
// Product B - 250

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    let expensiveProducts = products.filter(product => product.price > 50);

    expensiveProducts.forEach(product => {
      console.log("Title :", product.title);
      console.log("Price :", product.price);
      console.log("-------------------");
    });
  })
  .catch(error => {
    console.log("Error:", error);
  });
  _____________________________________________________________________________________
// Intermediate Level
_____________________________________________________________________________________
// Task 6: Print Products Below $50
// Use:
// filter()

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    let cheapProducts = products.filter(product => product.price < 50);

    cheapProducts.forEach(product => {
      console.log("Title :", product.title);
      console.log("Price :", product.price);
      console.log("-------------------");
    });
  })
  .catch(error => {
    console.log("Error:", error);
  });   
  _____________________________________________________________________________________
// Task 7: Find First Product Above $100
// Use:
// find()
// Output:
// {
//  title:"...",
//  price:109
// }

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    let product = products.find(product => product.price > 100);

    console.log("Title :", product.title);
    console.log("Price :", product.price);
  })
  .catch(error => {
    console.log("Error:", error);
  });
  _____________________________________________________________________________________
// Task 8: Search Product
// let searchText = "shirt";
// Find matching products.
// Use:
// includes()
// filter()

let products = [
  "Shirt",
  "T-Shirt",
  "Jeans",
  "Shoes",
  "Formal Shirt"
];

let searchText = "shirt";

let result = products.filter(product =>
  product.toLowerCase().includes(searchText.toLowerCase())
);

console.log(result);
_____________________________________________________________________________________
// Task 9: Count Electronics Products
// Output:
// Electronics Count : 6

products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Fashion" },
    { name: "Mobile", category: "Electronics" },
    { name: "Shoes", category: "Fashion" },
    { name: "Headphones", category: "Electronics" }
  ];
  
  let electronicsCount = products.filter(
    product => product.category === "Electronics"
  ).length;
  
  console.log("Electronics Products Count:", electronicsCount);
  _____________________________________________________________________________________
// Task 10: Print Highest Price Product
// Use:
// sort()
// or
// reduce()

products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 25000 },
    { name: "Headphones", price: 3000 },
    { name: "Smart TV", price: 60000 }
  ];
  
  products.sort((a, b) => b.price - a.price);

  console.log(products[0]);
  _____________________________________________________________________________________
// Task 11: Print Lowest Price Product
// Use:
// sort()
// or
// reduce()

products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 25000 },
    { name: "Headphones", price: 3000 },
    { name: "Smart TV", price: 60000 }
  ];
  
  products.sort((a, b) => a.price - b.price);
  
  console.log(products[0]);
  _____________________________________________________________________________________
// Task 12: Calculate Total Price of All Products
// Use:
// reduce()
// Output:
// Total Price : XXXX

products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 25000 },
    { name: "Headphones", price: 3000 },
    { name: "Smart TV", price: 60000 }
  ];
  
  let totalPrice = products.reduce((total, product) => {
    return total + product.price;
  }, 0);
  
  console.log("Total Price:", totalPrice);
  _____________________________________________________________________________________
// Task 13: Calculate Average Product Price
// Output:
// Average Price : XXX

products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 25000 },
    { name: "Headphones", price: 3000 },
    { name: "Smart TV", price: 60000 }
  ];
  
   totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );
  
  let averagePrice = totalPrice / products.length;
  
  console.log("Average Product Price:", averagePrice);
  _____________________________________________________________________________________
// Task 14: Print Product With Highest Rating
// Output:
// Title : ...
// Rating : 4.9

 products = [
  { title: "Laptop", rating: 4.5 },
  { title: "Mobile", rating: 4.9 },
  { title: "Headphones", rating: 4.2 },
  { title: "Smart TV", rating: 4.7 }
];

products.sort((a, b) => b.rating - a.rating);

console.log("Title :", products[0].title);
console.log("Rating :", products[0].rating);
_____________________________________________________________________________________
// Task 15: Print Product With Lowest Rating
// Output:
// Title : ...
// Rating : 2.1

products = [
    { title: "Laptop", rating: 4.5 },
    { title: "Mobile", rating: 2.1 },
    { title: "Headphones", rating: 4.2 },
    { title: "Smart TV", rating: 4.7 }
  ];
  
  products.sort((a, b) => a.rating - b.rating);
  
  console.log("Title :", products[0].title);
  console.log("Rating :", products[0].rating);
  _____________________________________________________________________________________

  // Advanced Level

_____________________________________________________________________________________
// Task 16: Category Wise Product Count
// Output:
// electronics : 6
// jewelery : 4
// men's clothing : 4
// women's clothing : 6
// Use:
// reduce()

products = [
    { category: "electronics" },
    { category: "electronics" },
    { category: "electronics" },
    { category: "electronics" },
    { category: "electronics" },
    { category: "electronics" },
  
    { category: "jewelery" },
    { category: "jewelery" },
    { category: "jewelery" },
    { category: "jewelery" },
  
    { category: "men's clothing" },
    { category: "men's clothing" },
    { category: "men's clothing" },
    { category: "men's clothing" },
  
    { category: "women's clothing" },
    { category: "women's clothing" },
    { category: "women's clothing" },
    { category: "women's clothing" },
    { category: "women's clothing" },
    { category: "women's clothing" }
  ];
  
  let categoryCount = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
  
  for (let category in categoryCount) {
    console.log(category + " : " + categoryCount[category]);
  }
  _____________________________________________________________________________________
// Task 17: Create Discounted Products
// Apply 10% discount.
// Output:
// [
//  {
//   title:"...",
//   oldPrice:100,
//   newPrice:90
//  }
// ]
// Use:
// map()

products = [
    { title: "Laptop", price: 50000 },
    { title: "Mobile", price: 25000 },
    { title: "Headphones", price: 3000 }
  ];
  
  let discountedProducts = products.map(product => ({
    title: product.title,
    oldPrice: product.price,
    newPrice: product.price * 0.9
  }));
  
  console.log(discountedProducts);
  _____________________________________________________________________________________
// Task 18: Sort Products Low To High
// Use:
// sort((a,b)=>a.price-b.price)


products = [
    { title: "Laptop", price: 50000 },
    { title: "Mobile", price: 25000 },
    { title: "Headphones", price: 3000 },
    { title: "Smart TV", price: 60000 }
  ];
  
  products.sort((a, b) => a.price - b.price);
  
  console.log(products);
  _____________________________________________________________________________________
// Task 19: Sort Products High To Low
// Use:
// sort((a,b)=>b.price-a.price)

products = [
    { title: "Laptop", price: 50000 },
    { title: "Mobile", price: 25000 },
    { title: "Headphones", price: 3000 },
    { title: "Smart TV", price: 60000 }
  ];
  
  products.sort((a, b) => b.price - a.price);
  
  console.log(products)
  _____________________________________________________________________________________
// Task 20: Check Any Product Above $500
// Use:
// some()
// Output:
// true

products = [
    { title: "Laptop", price: 900 },
    { title: "Mobile", price: 450 },
    { title: "Headphones", price: 80 },
    { title: "Smart TV", price: 600 }
  ];
  
   result = products.some(product => product.price > 500);
  
  console.log(result);
  _____________________________________________________________________________________
// Task 21: Check All Products Above Rating 3
// Use:
// every()
// Output:
// true / false

products = [
    { title: "Laptop", rating: 4.5 },
    { title: "Mobile", rating: 4.2 },
    { title: "Headphones", rating: 3.8 },
    { title: "Smart TV", rating: 4.7 }
  ];
  
   result = products.every(product => product.rating > 3);
  
  console.log(result);
  _____________________________________________________________________________________
// Task 22: Print Top 5 Costliest Products
// Output:
// Product A
// Product B
// Product C
// Product D
// Product E

products = [
    { title: "Product A", price: 900 },
    { title: "Product B", price: 850 },
    { title: "Product C", price: 800 },
    { title: "Product D", price: 750 },
    { title: "Product E", price: 700 },
    { title: "Product F", price: 650 },
    { title: "Product G", price: 600 }
  ];
  
  let topProducts = products
    .sort((a, b) => b.price - a.price)
    .slice(0, 5);
  
  topProducts.forEach(product => {
    console.log(product.title);
  });
  _____________________________________________________________________________________
// Task 23: Print Top 5 Rated Products
// Sort by rating and print first 5.

products = [
    { title: "Product A", rating: 4.9 },
    { title: "Product B", rating: 4.8 },
    { title: "Product C", rating: 4.7 },
    { title: "Product D", rating: 4.6 },
    { title: "Product E", rating: 4.5 },
    { title: "Product F", rating: 4.3 },
    { title: "Product G", rating: 4.1 }
  ];
  
   topRatedProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  
  topRatedProducts.forEach(product => {
    console.log(product.title);
  });
  _____________________________________________________________________________________
// Task 24: Group Products By Category
// Output:
// {
//  electronics:[...],
//  jewelery:[...],
//  men's clothing:[...]
// }

products = [
    { title: "Laptop", category: "electronics" },
    { title: "Mobile", category: "electronics" },
    { title: "Gold Ring", category: "jewelery" },
    { title: "Necklace", category: "jewelery" },
    { title: "T-Shirt", category: "men's clothing" },
    { title: "Jeans", category: "men's clothing" }
  ];
  
  let groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
  
    acc[product.category].push(product);
  
    return acc;
  }, {});
  
  console.log(groupedProducts);
  _____________________________________________________________________________________
// Task 25: Convert Product Prices To INR
// Assume:
// 1 USD = 85 INR
// Output:
// Title : ...
// Price : ₹8500
// Real-Time Company Tasks

products = [
    { title: "Laptop", price: 100 },
    { title: "Mobile", price: 200 },
    { title: "Headphones", price: 50 }
  ];
  
  let productsInINR = products.map(product => ({
    title: product.title,
    price: `₹${product.price * 85}`
  }));
  
  productsInINR.forEach(product => {
    console.log("Title :", product.title);
    console.log("Price :", product.price);
  });
  _____________________________________________________________________________________
// Task 26: Amazon Product Filter
// Conditions:
// Price < 500
// Rating > 4
// Category = electronics
// Output matching products.

products = [
    {
      title: "Bluetooth Speaker",
      price: 450,
      rating: 4.5,
      category: "electronics"
    },
    {
      title: "Laptop",
      price: 800,
      rating: 4.7,
      category: "electronics"
    },
    {
      title: "Headphones",
      price: 300,
      rating: 4.2,
      category: "electronics"
    },
    {
      title: "Shirt",
      price: 200,
      rating: 4.8,
      category: "men's clothing"
    }
  ];
  
   result = products.filter(product =>
    product.price < 500 &&
    product.rating > 4 &&
    product.category === "electronics"
  );
  
  console.log(result);
  _____________________________________________________________________________________
// Task 27: Best Seller Product
// Find:
// Highest Rating

products = [
    { title: "Laptop", rating: 4.5 },
    { title: "Mobile", rating: 4.9 },
    { title: "Headphones", rating: 4.2 },
    { title: "Smart TV", rating: 4.7 }
  ];
  
  products.sort((a, b) => b.rating - a.rating);
  
  let bestSeller = products[0];
  
  console.log("Title :", bestSeller.title);
  console.log("Rating :", bestSeller.rating);
  _____________________________________________________________________________________  
// Task 28: Product Analytics Dashboard
// Output:
// Total Products :
// Total Categories :
// Highest Price Product :
// Lowest Price Product :
// Average Price :
// Best Rated Product :

products = [
    { title: "Laptop", price: 50000, rating: 4.5, category: "electronics" },
    { title: "Mobile", price: 25000, rating: 4.9, category: "electronics" },
    { title: "Headphones", price: 3000, rating: 4.2, category: "electronics" },
    { title: "Shirt", price: 1500, rating: 4.0, category: "men's clothing" }
  ];
  
  let totalProducts = products.length;
  
  let totalCategories = new Set(
    products.map(product => product.category)
  ).size;
  
  let highestPriceProduct = [...products].sort(
    (a, b) => b.price - a.price
  )[0];
  
  let lowestPriceProduct = [...products].sort(
    (a, b) => a.price - b.price
  )[0];
  
   averagePrice =
    products.reduce((sum, product) => sum + product.price, 0) /
    products.length;

  let bestRatedProduct = [...products].sort(
    (a, b) => b.rating - a.rating
  )[0];
  
  console.log("Total Products :", totalProducts);
  console.log("Total Categories :", totalCategories);
  console.log("Highest Price Product :", highestPriceProduct.title);
  console.log("Lowest Price Product :", lowestPriceProduct.title);
  console.log("Average Price :", averagePrice);
  console.log("Best Rated Product :", bestRatedProduct.title);
   _____________________________________________________________________________________
// Task 29: Inventory Report
// Output:
// Expensive Products :
// Affordable Products :
// Electronics :
// Jewellery :
// Mens Clothing :
// Womens Clothing :

products = [
    { title: "Laptop", price: 50000, category: "electronics" },
    { title: "Mobile", price: 25000, category: "electronics" },
    { title: "Gold Ring", price: 15000, category: "jewelery" },
    { title: "Shirt", price: 1200, category: "men's clothing" },
    { title: "Jeans", price: 1800, category: "men's clothing" },
    { title: "Dress", price: 2200, category: "women's clothing" }
  ];
  
  let expensiveProducts = products.filter(
    product => product.price > 10000
  );
  
  let affordableProducts = products.filter(
    product => product.price <= 10000
  );
  
  let electronics = products.filter(
    product => product.category === "electronics"
  ).length;
  
  let jewellery = products.filter(
    product => product.category === "jewelery"
  ).length;
  
  let mensClothing = products.filter(
    product => product.category === "men's clothing"
  ).length;
  
  let womensClothing = products.filter(
    product => product.category === "women's clothing"
  ).length;
  
  console.log("Expensive Products :", expensiveProducts.length);
  console.log("Affordable Products :", affordableProducts.length);
  console.log("Electronics :", electronics);
  console.log("Jewellery :", jewellery);
  console.log("Mens Clothing :", mensClothing);
  console.log("Womens Clothing :", womensClothing);
  _____________________________________________________________________________________