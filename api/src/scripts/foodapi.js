// These functions are working, but it's hard-coded. 
// Need to use a more dynamic fn... Look at the chapter.

// const createString = (name, ethnicity, type) => {
//     return `
//     <li>
//         <h1>${name}</h1>
//         <p>${ethnicity}</p>
//         <p>${type}</p>
//     </li>
//     `
// };

// NEW TRY
const foodFactory = (food) => {
    return `
    <li>
        <h1>${food.name}</h1>
        <p>${food.ethnicity}</p>
        <p>${food.type}</p>
    </li>
    `
};

// const addStringToDom = (name, ethnicity, type) => {
//     container.innerHTML += createString(name, ethnicity, type);
// }

const container = document.querySelector(".foodList");

// NEW TRY
const addFoodToDom = (food) => {
    container.innerHTML += foodFactory(food);
}

// NEW TRY
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food);
            addFoodToDom(foodAsHTML);
        })
    })

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })



// addStringToDom("Linguine", "italian", "pasta");
// addStringToDom("Massaman curry", "thai", "curry");
// addStringToDom("Green curry", "thai", "curry");
// addStringToDom("Ravioli Funghi", "italian", "pasta");
// addStringToDom("Tuscan Soup", "italian", "vegetarian");