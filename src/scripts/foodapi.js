// Need to use a more dynamic fn... Look at the chapter...

// NEW TRY
const foodFactory = (food) => {
    return `
    <li>
        <h1>${food.name}</h1>
        <p>${food.ethnicity}</p>
        <p>${food.category}</p>
    </li>
    `
};

const container = document.querySelector(".foodList");

// NEW TRY
const addFoodToDom = (food) => {
    container.innerHTML += food;
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



