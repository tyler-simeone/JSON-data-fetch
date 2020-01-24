// Need to use a more dynamic fn... Look at the chapter...

// NEW TRY
const foodFactory = (food) => {
    return `
    <li>
        <h1>${food.name}</h1>
        <p>${food.ethnicity}</p>
        <p>${food.type}</p>
        <p>${food.ingredients}</p>
        <p>${food.origin}</p>
        <p>${food.calories}</p>
        <p>${food.fats}</p>
        <p>${food.sugars}</p>
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
            // const foodAsHTML = foodFactory(food);
            // addFoodToDom(foodAsHTML);

            // So this conditional works for ingredients, but how do I
            // get the other four properties needed?
            fetch("https://world.openfoodfacts.org/api/v0/product/${food}.json")
                .then(resp => resp.json())
                .then(productInfo => {
                    if (productInfo.product.ingredients_text, productInfo.product.ingredients_text) {
                        food.ingredients = productInfo.product.ingredients_text;
                    } else {
                        food.ingredients = "no ingredients listed";
                    }
                })
        })
    })



