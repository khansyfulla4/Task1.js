//Ask username and password using prompt().
//•	If username = "admin" and password = "1234"
//→ print "Login Success" 
//•	Else print "Invalid User" 

let username= prompt("Enter username");
let password = prompt("enter password");
if (username === "admin" && password === "1234")
{
    console.log("login sucess");

}else {
    console.log("invalid user");
}

_____________________________________________________________________________________

//2. ATM Balance System
//Create a variable balance = 5000
//•	Withdraw amount using prompt() 
//•	If amount less than balance → "Withdraw Success" 
//•	Else → "Insufficient Balance" 


let balance = 5000;
let amount = Number(prompt("Enter withdraw amount:"));

if (amount<= balance) {
    console.log("withdraw success");

} else{
    console.log("insufficient balance");
}


_____________________________________________________________________________________

//3. Traffic Signal Project
//Using switch
//•	"red" → stop 
//•	"yellow" → ready 
//•	"green" → go
let color = prompt("traffic signals");
switch(color){
    case "red": console.log("stop");
    break;
    case "yellow" : console.log("ready");
    break;
    case "green" : console.log("go");
    break;
    default : console.log("default signals");
}
_____________________________________________________________________________________

//4. Age Eligibility Checker
//Take age from user.
//•	age >= 18 → "Eligible for Vote" 
//•	Else → "Not Eligible" 

let age = prompt("Enter your age elgibility");

if(age >= 18) {
    console.log("Elgible for vote");

}else {
    console.log("Not elgible");
}
___________________________________________________________________________________________

//5. Shopping Discount System
//Take product price.
//•	Above 5000 → 20% discount 
//•	Above 3000 → 10% discount 
//•	Else → no discount 


let price = prompt("Enter product price:");

// convert to number
price = Number(price);

if (price > 5000) {
    let discount = price * 0.20;
    let finalPrice = price - discount;
    console.log("20% Discount Applied");
    console.log("Final Price: " + finalPrice);

} else if (price > 3000) {
    let discount = price * 0.10;
    let finalPrice = price - discount;
    console.log("10% Discount Applied");
    console.log("Final Price: " + finalPrice);

} else {
    console.log("No Discount");
    console.log("Final Price: " + price);
}
_____________________________________________________________________________________

//6. Password Strength Checker
//Check password length.
//•	length >= 8 → "Strong Password" 
//•	Else → "Weak Password" 

let length = prompt("Enter your password");

if (length >= 8) {
    console.log("Strong Password" );
} else {
    console.log("weak password");

}
___________________________________________________________________________________________

//7. Mobile Battery Warning
//Take battery percentage.
//•	<= 10 → "Battery Low" 
//•	<= 50 → "Battery Medium" 
//•	Else → "Battery Full" 

let battery = prompt("mobile battery");

if(battery<= 10){
    console.log("battery low");

} else if(battery<= 50) {

console.log("medium battery");
} else {
    console.log("battery full");
}

________________________________________________________________________________________________

//8. Employee Salary Bonus
//Create salary variable.
//•	salary >= 50000 → 15% bonus 
//•	salary >= 30000 → 10% bonus 
//•	Else → 5% bonus 

let salary = Number(prompt("employee salary bonus"));

if (salary >= 50000) {
   let bonus = salary * 0.15;
   let increment =  salary + bonus ;
    console.log("15% bonus applied");
    console.log("increment :" + increment );
}else if (salary >= 30000) {
    let bonus = salary * 0.10;
    let increment = salary + bonus;
    console.log("10% bonus applied");
    console.log("increment :" + increment);

}else {
    let bonus = salary * 0.05;
    let increment = salary + bonus;
    console.log("0.5 bonus applied");
    console.log("increment:" + increment);
}


_____________________________________________________________________________________

//9. Online Food Order
//Take order amount.
//•	Above 499 → "Free Delivery" 
//•	Else → "Delivery Charge Added" 

let order= Number(prompt("Enter online food order amount"));

if(order > 499) {
    console.log("Free Delivery");
}else{
    console.log("Delivery Charges Added");
}


___________________________________________________________________________________________

//10. Movie Ticket Booking
//Take age.
//•	Below 5 → Free ticket 
//•	Below 18 → Child ticket 
//•	Else → Adult ticket 

let age = Number (prompt("enter the age"));

if(age < 5){
    console.log("free tickets");

}else if (age < 18){
    console.log("child tickets");
}else{
    console.log("adult tickets");
}

___________________________________________________________________________________________

//11. Instagram Likes Counter
//Using for loop
//Print:
//Like 1
//Like 2
//Like 3
//Like 4
//Like 5

for ( let a = 1 ; a <= 5 ; a++ ) {
    console.log("Like " +  a);
}
________________________________________________________________________________________________

//12. Countdown Timer
//Using while loop
//Print:
//5
//4
//3
//2
//1
//Start

let val = 5;

while (val >= 1){
    console.log(val);
    val--;
}
console.log("start");
_____________________________________________________________________________________________

//13. OTP Verification
//Create OTP = 1234
//Take input from user.
//•	Correct → "OTP Verified" 
//•	Wrong → "Invalid OTP" 

let OTP = prompt("OTP verification");

if (OTP === "1234"){
    console.log("OTP Verified");
}else {
    console.Log("Invalid OTP");
}
___________________________________________________________________________________________

//14. E-commerce Cart Total
//Array:
//let cart = [200,500,1000,300]
//Find total cart value using loop.

let cart = [200, 500, 1000, 300];

let total = 0;

for (let i = 0; i < cart.length; i++) {
    total = total + cart[i];
}

console.log("Total Cart Value: " + total);


___________________________________________________________________________________________
//15. Student Mark Grade System
//Take mark.
//•	90+ → A Grade 
//•	70+ → B Grade 
//•	50+ → C Grade 
//•	Else → Fail 

let grade = prompt("student marks grade system");

if(grade >= 90){
    console.log("A Grade");
}else if ( Grade >= 70){
    console.log("B Grade");
}else if ( Grade >= 50){
    console.log("C Grade");
}else {
    console.log("Fail");
}
________________________________________

//16. Netflix Subscription Checker
//Boolean variable:
//let subscription = true
//•	true → "Watch Movie" 
//•	false → "Buy Subscription" 
let subscription = prompt ("Netflix Subscription");
if( subscription == "true" ){
    console.log("watch movie");
}else{
    console.log("Buy Subscription");
}

___________________________________________________________________________________________

//17. Product Stock Checker
//let stock = 0
//•	stock > 0 → "Product Available" 
//•	Else → "Out of Stock"

let stock = 0;

if (stock >= 0 ){
    console.log("Product Available");
}else {
    console.log("Out of stock");
}

_____________________________________________________________________________________

//18. Weather App Condition
//Using switch
//•	"sunny" → "Go Outside" 
//•	"rainy" → "Take Umbrella" 
//•	"cold" → "Wear Jacket" 

let weather = prompt("weather app condition");

switch(weather){
    case "sunny" : console.log( "Go Outside" );
    break;
    case "rainy" : console.log("Take Umbrella");
    break;
    default : console.log("Wear Jacket");
}
___________________________________________________________________________________________

//19. User Profile Object
//Create object:
//let user = {
 //  name : "Navi",
   //age : 20,
   //city : "Bangalore"
//}
//Print all values using for in loop.

let user = {
  name : "Navi",
   age : 20,
   city : "Bangalore"
};
for (let key in user) {
    console.log(user[key]);
}
____________________________________________________________________________________________

//20. WhatsApp Chat Array
//Array:
//let chats = ["hi","hello","where are you","ok"]
//Print each message using for of loop.
let chats = ["hi","hello","where are you","ok"];

for (let message of chats) {
    console.log(message);
}

_______________________________________________________________________________________