// 1. E-Commerce Product Filter
// Using the same https://fakestoreapi.com/products/
// Task:
// Fetch all products
// Filter products whose:
// price > 100
// category = "electronics"
// Print:
// title
// price
// Expected Concept:
// fetch()
// filter()
// forEach()

async function filterProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      const products = await response.json();
      
      products
        .filter(p => p.price > 100 && p.category === "electronics")
        .forEach(p => console.log(`Title: ${p.title} | Price: $${p.price}`));
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  }
  filterProducts();
  
// 2. Online Shopping Cart Total
// Create an array:
// let cart = [
//   {product:"Shoes", price:2000, qty:2},
//   {product:"Watch", price:1500, qty:1},
//   {product:"Bag", price:1000, qty:3}
// ]
// Calculate:
// Total bill amount
// Expected Output:
// 8500
// Use:
// reduce()

let cart = [
    {product:"Shoes", price:2000, qty:2},
    {product:"Watch", price:1500, qty:1},
    {product:"Bag", price:1000, qty:3}
  ];
  
  let totalBill = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  console.log(totalBill); 
  
// 3. Employee Salary Dashboard
// Filter employees whose salary is greater than 40000.
// let employees = [
//   {name:"John", salary:25000},
//   {name:"Sam", salary:50000},
//   {name:"Ravi", salary:45000},
//   {name:"Kumar", salary:30000}
// ]
// Output:
// Sam
// Ravi
// Use:
// filter()
// map()

let employees = [
  {name:"John", salary:25000},
  {name:"Sam", salary:50000},
  {name:"Ravi", salary:45000},
  {name:"Kumar", salary:30000}
];

employees
  .filter(emp => emp.salary > 40000)
  .map(emp => emp.name)
  .forEach(name => console.log(name)); 

// 4. Food Delivery App
// Find first restaurant rating greater than 4.5
// let hotels = [
//   {hotel:"A2B", rating:4.1},
//   {hotel:"KFC", rating:4.7},
//   {hotel:"Dominos", rating:4.3}
// ]
// Use:
// find()

let hotels = [
  {hotel:"A2B", rating:4.1},
  {hotel:"KFC", rating:4.7},
  {hotel:"Dominos", rating:4.3}
];

let topHotel = hotels.find(h => h.rating > 4.5);
console.log(topHotel); 

// 5. Student Pass/Fail System
// Check all students passed or not.
// let marks = [45,67,89,90,34]
// Condition:
// pass mark = 35
// Use:
// every()

let marks = [45, 67, 89, 90, 34];
let passMark = 35;

let isAllPassed = marks.every(mark => mark >= passMark);
console.log(isAllPassed ? "All Passed" : "Someone Failed"); 

// 6. OTP Verification System
// Check whether entered OTP exists.
// let otpList = [1234,4567,7890,9876]
// Use:
// includes()

let otpList = [1234, 4567, 7890, 9876];
let enteredOtp = 4567;

let isVerified = otpList.includes(enteredOtp);
console.log(isVerified ? "OTP Verified" : "Invalid OTP"); 


// 7. Movie Booking Timer
// Create countdown from 10 to 0 using:
// setInterval()
// clearInterval()
// Expected Output:
// 10
// 9
// 8
// ...
// 0
// Booking Closed
let countdown = 10;

const timer = setInterval(() => {
  console.log(countdown);
  if (countdown === 0) {
    clearInterval(timer);
    console.log("Booking Closed");
  }
  countdown--;
}, 1000);

// 8. Instagram Like Counter
// Every second increase likes count.
// Likes : 1
// Likes : 2
// Likes : 3
// Stop after 10 likes.
// Use:
// setInterval()
// clearInterval()
let likes = 0;

const likeTimer = setInterval(() => {
  likes++;
  console.log(`Likes : ${likes}`);
  if (likes === 10) {
    clearInterval(likeTimer);
  }
}, 1000);

// 9. Login Authentication
// Check:
// username
// password
// let username = "admin"
// let password = "12345"
// Condition:
// both correct → Login Success
// otherwise → Invalid Credentials
// Use:
// if else
// logical operator
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login Success");
} else {
  console.log("Invalid Credentials");
}

// 10. Weather App Simulation
// Create Promise manually.
// Condition:
// If internet = true → resolve("Weather Data")
// else reject("No Internet")
// Use:
// Promise
// resolve
// reject
// then
// catch
// Mini Project Level Tasks
let internet = true;

const checkWeather = new Promise((resolve, reject) => {
  if (internet) resolve("Weather Data");
  else reject("No Internet");
});

checkWeather
  .then(data => console.log("Success:", data))
  .catch(err => console.log("Error:", err));

// 11. Amazon Product Search
// Task:
// Search products containing word "shirt"
// Use:
// filter()
// includes()
let items = ["Formal Shirt", "Blue Jeans", "T-shirt", "Black Shoes"];
let searchWord = "shirt";

let searchResults = items.filter(item => item.toLowerCase().includes(searchWord));
console.log(searchResults); 

// 12. YouTube Video Duration
// Task:
// Calculate total watch time.
// let videos = [10,20,30,40]
// Use:
// reduce()
let videos = [10, 20, 30, 40];

let totalWatchTime = videos.reduce((acc, curr) => acc + curr, 0);
console.log(totalWatchTime);

// 13. Swiggy Order Status
// Task:
// Use switch statement.
// Placed
// Preparing
// Out for Delivery
// Delivered
// Print suitable message.

let status = "Preparing";

switch (status) {
  case "Placed": console.log("Order confirmed!"); break;
  case "Preparing": console.log("Kitchen is cooking your meal!"); break;
  case "Out for Delivery": console.log("Valet is heading your way!"); break;
  case "Delivered": console.log("Enjoy your food!"); break;
  default: console.log("Status unknown.");
}
//14. WhatsApp Chat Analyze
// Task:
// Count total messages.
// let chats = ["hi","hello","where","ok","bye"]
// Use:
// length
// loop

let chats = ["hi", "hello", "where", "ok", "bye"];

for (let i = 0; i < chats.length; i++) {
  // Loop execution handles processing
}
console.log(`Total messages: ${chats.length}`);

// 15. Netflix Age Restriction
// Task:
// If age >= 18:
// show movie
// Else:
// access denied
// Use:
// ternary operator
// age >= 18 ? "watch movie" : "access denied"
// Advanced Real-Time Tasks

let age = 20;
let access = age >= 18 ? "watch movie" : "access denied";

console.log(access); 

// 16. Flipkart Product Sorting
// Task:
// Sort products by prices low to high.
// let prices = [1200,450,9999,2500,700]
// Use:
// sort((a,b)=>a-b)
let prices = [1200, 450, 9999, 2500, 700];

prices.sort((a, b) => a - b);
console.log(prices); 

// 17. Employee Attendance
// Task:
// Convert:
// ["present","absent","present"]
// Into object count:
// {
//  present:2,
//  absent:1
// }
// Use:
// reduce()
let attendance = ["present", "absent", "present"];

let counts = attendance.reduce((acc, status) => {
  acc[status] = (acc[status] || 0) + 1;
  return acc;
}, {});

console.log(counts); 

// 18. Banking System
// Task:
// Create:
// deposit()
// withdraw()
// checkBalance()
// Using functions.
let balance = 1000;

const checkBalance = () => console.log(`Balance: $${balance}`);
const deposit = (amount) => { balance += amount; checkBalance(); };
const withdraw = (amount) => { 
  if (amount > balance) console.log("Insufficient funds");
  else { balance -= amount; checkBalance(); }
};

deposit(500);  
withdraw(200); 

// 19. Zomato Rating Checker
// Task:
// Check any hotel rating below 3.
// Use:
// some()
let zomatoHotels = [
  {hotel: "Diner A", rating: 4.2},
  {hotel: "Diner B", rating: 2.8},
  {hotel: "Diner C", rating: 4.5}
];

let hasLowRating = zomatoHotels.some(h => h.rating < 3);
console.log(hasLowRating ? "Alert: Low ratings found" : "All clean");

