
// 20. Real API Product Table
// Task:
// Fetch API and print:
// title
// price
// image
// Inside HTML cards dynamically.
// Concepts:
// fetch()
// DOM
// map()
// template literal

let api = "https://fakestoreapi.com/products";
fetch(api)
    .then(a => a.json())
    .then(jsdata => {
        let data = jsdata.map(p => {
            return `<div class="card">
                    <h3>${p.title}</h3>
                    <p>Price: $${p.price}</p>
                    <img src="${p.image}">
                </div>`
        });
        document.getElementById("container").innerHTML = data.join("");
    })
    .catch(error => console.log(error));