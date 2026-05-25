//Task 1 — Spread Operator
//Create 2 arrays:
//let frontEnd = ["HTML","CSS"]
//let backEnd = ["Node","MongoDB"]
//Using spread operator:
//Merge both arrays
//Print the merged array

let frontEnd = ["HTML", "CSS"];
let backEnd = ["Node", "MongoDB"];
let fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);
_____________________________________________________________________________________

//Task 2 — Copy Array
//Create:
//let original = [1,2,3]
//Using spread operator:
//Copy array into another variable
//Add 4 into copied array
//Print both arrays
//Check original array changed or not
let original = [1, 2, 3];
let copied = [...original];
copied.push(4);
console.log("Original:", original);
console.log("Copied:", copied);

console.log("Original changed?", original.length !== copied.length);
_____________________________________________________________________________________

//Task 3 — Object Merge
//Create 2 objects:
//let student1 = {
//  name : "Rahul"
//}

//let student2 = {
//  role : "Developer"
//}
//Using spread operator:
//Merge objects
//Print result

let student1 = {
  name: "Rahul"
};

let student2 = {
  role: "Developer"
};

let student = { ...student1, ...student2 };
console.log(student);
_____________________________________________________________________________________

//Task 4 — Rest Operator
//Create function:
//function total(a,b,...rest)
//Tasks:
//Print a
//Print b
//Print remaining values
//Print total count of remaining values
//Call function with 8 values.

function total(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("Remaining values:", rest);
    console.log("Total remaining count:", rest.length);
}

total(10, 20, 30, 40, 50, 60, 70, 80);
_____________________________________________________________________________________

//Task 5 — Array Destructuring
//Create:
//let colors = ["red","green","blue","yellow"]
//Tasks:
//Store all values into separate variables using destructuring
//Print only blue color

let colors = ["red", "green", "blue", "yellow"];

let [color1, color2, color3, color4] = colors;

console.log(color3);
_____________________________________________________________________________________

//Task 6 — Nested Array Destructuring
//Create:
//let data = [1,[2,[3,[4]]]]
//Tasks:
//Access all values using destructuring only
//Print:
//1 2 3 4

let data = [1, [2, [3, [4]]]];

let [a, [b, [c, [d]]]] = data;

console.log(a, b, c, d);
_____________________________________________________________________________________

//Task 7 — Object Destructuring
//Create:
//let mobile = {
//  brand : "Samsung",
//  price : 20000,
//  color : "black"
//}
//Tasks:
//Destructure all properties
//Print:
//Samsung black

let mobile = {
  brand: "Samsung",
  price: 20000,
  color: "black"
};

let { brand, price, color } = mobile;

console.log(brand, color);
_____________________________________________________________________________________

//Task 8 — push() & pop()
//Create:
//let numbers = [1,2,3]
//Tasks:
//Add 4,5,6 using push
//Remove last value using pop
//Print final array

let numbers = [1, 2, 3];

numbers.push(4, 5, 6);

numbers.pop();

console.log(numbers);
_____________________________________________________________________________________


//Task 9 — shift() & unshift()
//Create:
//let fruits = ["banana","orange"]
//Tasks:
//Add "apple" in first position
//Remove first value
//Print final result

let fruits = ["banana", "orange"];

fruits.unshift("apple");

fruits.shift();

console.log(fruits);
_____________________________________________________________________________________


//Task 10 — splice()
//Create:
//let arr = [1,2,30,40,5,6]
//Tasks:
//Remove 30 and 40
//Add 3 and 4
//Print final array
//Expected Output:
//[1,2,3,4,5,6]

let arr = [1, 2, 30, 40, 5, 6];

arr.splice(2, 2, 3, 4);

console.log(arr);
_____________________________________________________________________________________

//Task 11 — concat()
//Create 2 arrays:
//let a = [1,2]
//let b = [3,4]
//Tasks:
//Merge using concat
//Add extra values 5,6
//Print result

 a = [1, 2];
 b = [3, 4];

let result = a.concat(b, 5, 6);

console.log(result);
_____________________________________________________________________________________

//Task 12 — slice()
//Create:
//let marks = [10,20,30,40,50,60]
//Tasks:
//Extract only 30,40,50
//Print extracted array

let marks = [10, 20, 30, 40, 50, 60];

let extracted = marks.slice(2, 5);

console.log(extracted);
_____________________________________________________________________________________

//Task 13 — flat()
//Create:
//let nest = [1,[2,[3,[4,[5]]]]]
//Tasks:
//Convert nested array into single array
//Print result

let nest = [1, [2, [3, [4, [5]]]]];

 result = nest.flat(Infinity);

console.log(result);
_____________________________________________________________________________________

//Task 14 — fill()
//Create:
//let arr = [1,2,3,4,5]
//Tasks:
//Replace last 2 values with "done"
//Print array

 arr = [1, 2, 3, 4, 5];

arr.fill("done", 3);

console.log(arr);
_____________________________________________________________________________________

//Task 15 — includes()
//Create:
//let values = [10,20,30,40]
//Tasks:
//Check 20 exists or not
//Check 100 exists or not

let values = [10, 20, 30, 40];

console.log(values.includes(20));

console.log(values.includes(100));
_____________________________________________________________________________________

//Task 16 — indexOf()
//Create:
//let arr = [1,2,3,4,3,2]
//Tasks:
//Find first index of 3
//Find first index of 2

 arr = [1, 2, 3, 4, 3, 2];

console.log(arr.indexOf(3));

console.log(arr.indexOf(2));
_____________________________________________________________________________________

//Task 17 — lastIndexOf()
//Using same array:
//let arr = [1,2,3,4,3,2]
//Tasks:
//Find last index of 3
//Find last index of 2

 arr = [1, 2, 3, 4, 3, 2];

console.log(arr.lastIndexOf(3));

console.log(arr.lastIndexOf(2));
_____________________________________________________________________________________

//Task 18 — sort()
//Create:
//let nums = [100,2,55,1,9]
//Tasks:
//Sort array
//Observe wrong output
//Then solve using compare function

let nums = [100, 2, 55, 1, 9];

nums.sort();

console.log("Wrong Output:", nums);

nums.sort((a, b) => a - b);

console.log("Correct Output:", nums);
_____________________________________________________________________________________

//Task 19 — reverse()
//Create:
//let letters = ["a","b","c","d"]
//Tasks:
//Reverse array
//Print output

let letters = ["a", "b", "c", "d"];

letters.reverse();

console.log(letters);
_____________________________________________________________________________________

//Task 20 — Student Management
//Create student array:
//let students = ["Rahul","Ajay","Kumar"]
//Tasks:
//Add new student
//Remove one student
//Replace one student name
//Reverse student list

let students = ["Rahul", "Ajay", "Kumar"];

students.push("Ravi");

students.splice(1, 1); 

students.splice(1, 1, "Arjun"); 

students.reverse();

console.log(students);
_____________________________________________________________________________________

//Task 21 — Shopping Cart
//Create:
//let cart = ["Shoes","Watch","Phone"]
//Tasks:
//Add "Laptop"
//Remove "Watch"
//Check "Phone" exists or not
//Print total cart items

let cart = ["Shoes", "Watch", "Phone"];

cart.push("Laptop");

cart.splice(1, 1);

console.log("Phone exists:", cart.includes("Phone"));

console.log("Total items:", cart.length);

console.log(cart);
_____________________________________________________________________________________


//Task 22 — Employee Database
//Create object:
//let employee = {
//  name : "Naveen",
//  role : "Web Developer",
//  salary : "5LPA"
//}
//Tasks:
//Destructure all values
//Copy object using spread operator
//Change salary in copied object only
//Check original object changed or not

let employee = {
  name: "Naveen",
  role: "Web Developer",
  salary: "5LPA"
};

let { name, role, salary } = employee;

console.log(name, role, salary);

let copiedEmployee = { ...employee };

copiedEmployee.salary = "8LPA";

console.log("Original:", employee);
console.log("Copied:", copiedEmployee);

console.log(
  "Original changed?",
  employee.salary !== copiedEmployee.salary
);
_____________________________________________________________________________________

//Task 23 — Custom Function
//Create function:
//function company(name,...skills)
//Tasks:
//Print employee name
//Print all skills
//Print total skill count
//Example Call:
//company("Naveen","HTML","CSS","JS","React")

function company(name, ...skills) {
    console.log("Employee Name:", name);
    console.log("Skills:", skills);
    console.log("Total Skill Count:", skills.length);
}

company("Naveen", "HTML", "CSS", "JS", "React");
_____________________________________________________________________________________

//Task 24 — Array Analyzer
//Create array:
//let data = [1,2,3,4,5,6,7,8,9,10]
//Tasks:
//Extract first 5 values
//Reverse array
//Check number 7 exists or not
//Find index of 10

 data = [1,2,3,4,5,6,7,8,9,10];

let firstFive = data.slice(0, 5);

let reversed = [...data].reverse();

let hasSeven = data.includes(7);

let indexTen = data.indexOf(10);

console.log("First 5 values:", firstFive);
console.log("Reversed array:", reversed);
console.log("7 exists:", hasSeven);
console.log("Index of 10:", indexTen);
_____________________________________________________________________________________

//Task 25 — Complete Challenge
//Create:
//let users = [
//  {name:"Rahul",role:"Developer"},
//  {name:"Ajay",role:"Designer"},
//  {name:"Kumar",role:"Tester"}
//]
//Tasks:
//Add new user
//Remove last user
//Merge another array of users
//Print all user names only
//Reverse final array

let users = [
  { name: "Rahul", role: "Developer" },
  { name: "Ajay", role: "Designer" },
  { name: "Kumar", role: "Tester" }
];

users.push({ name: "Ravi", role: "Manager" });

users.pop();

let newUsers = [
  { name: "Arjun", role: "Developer" },
  { name: "Priya", role: "HR" }
];

users = users.concat(newUsers);

users.forEach(user => {
  console.log(user.name);
});

users.reverse();
console.log(users);
_____________________________________________________________________________________




