const cars = {
"amg-gt": {
name: "Mercedes AMG GT",
price: "$185 000",
desc: "Спортивний суперкар з V8 бітурбо двигуном.",
img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8"
},

"s-class": {
name: "Mercedes S-Class",
price: "$142 000",
desc: "Максимальний комфорт і технології майбутнього.",
img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
},

"g-class": {
name: "Mercedes G-Class",
price: "$220 000",
desc: "Легендарний позашляховик з культовим дизайном.",
img: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9"
},

"gle-coupe": {
name: "Mercedes GLE Coupe",
price: "$98 000",
desc: "Спортивний SUV з преміальним комфортом.",
img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6"
}
};

const id = new URLSearchParams(location.search).get("id");
const car = cars[id];

if (car) {
document.getElementById("car").innerHTML = `
<img src="${car.img}">
<h1>${car.name}</h1>
<h2>${car.price}</h2>
<p>${car.desc}</p>
<button onclick="document.getElementById('payment').style.display='flex'">
Купити
</button>
`;
}
