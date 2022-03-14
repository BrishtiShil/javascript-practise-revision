// Template string......
const str1 = "Brishti";
const str2 = "Shil";
console.log(`Hello ${str1} ${str2}`);

// spread operator......
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const numbers2 = [9, 10];
const result = numbers.push(...numbers2);
console.log(result);

// distrucharing......
let animal = {
    name: "dog",
    color: "brown",
    age: 7
};
const { ...rest } = animal;
console.log(rest);

//  optional caining......
const sum = (info) => {
    console.log(info?.name);
};
sum(animal);

// for of......
const names = [
    "hero",
    "manna vai",
    "salman sha",
    "gosheti begum",
    "mis daina",
];

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
}

// for of......
for (const element of names) {
    console.log(element);
}

// for in......
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
    console.log(property, object[property]);
}

// map......
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = number.map((x) => x * x);
console.log(result1);

// filter......
const products = [
    { id: 1, name: "appel", price: 500, color: "golden" },
    { id: 2, name: "xiaomi", price: 500, color: "black" },
    { id: 3, name: "samsung", price: 500, color: "black" },
    { id: 4, name: "samsung1", price: 500, color: "pink" },
    { id: 5, name: "lenovo", price: 500, color: "pink" },
    { id: 6, name: "xiaomi", price: 500, color: "pink" },
];
// if we get id
const result2 = products.filter((pd) => pd.id == 1);
console.log(result2);

// if we get color
const result3 = products.filter((pd) => pd.color == "black");
console.log(result3);

// if we delete one element
const result4 = products.filter((pd) => pd.id != 1);
console.log(result4);

// find......
const result5 = products.find((pd) => pd.color == "black");
console.log(result5);

// API......
const data = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => console.log(data));
};
data();

// ternary operator......
const number1 = true;
// if (number1 == false) {
//     console.log("false");
// }
// else {
//     console.log("true");
// }

console.log(number1 ? "false" : "true");