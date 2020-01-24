// Need to use a more dynamic fn... Look at the chapter...

// NEW TRY
const foodFactory = (food) => {
    return `
    <li>
        <h1>${food.name}</h1>
        <p>${food.type}</p>
        <p>${food.ethnicity}</p>
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
/*
    This code block first obtains the data from local JSON server,
    then returns a json array with 5 objects, then loops through the
    array and for each obj obtains its .barcode and then fetches for
    more info on that food via an external API. 

    External API returns one big obj and IF statement says to add the
    properties to our DB IF they exist in the external DB. 
*/ 
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            // const foodAsHTML = foodFactory(food);
            // addFoodToDom(foodAsHTML);

            // So this conditional works for ingredients, but how do I
            // get the other four properties needed?
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(resp => resp.json())
                .then(productInfo => {
                    if (productInfo.product.ingredients_text, productInfo.product.origins, productInfo.product.nutriments.calories, productInfo.product.nutriments.fat, productInfo.product.nutriscore_data.sugars) {
                        food.ingredients = productInfo.product.ingredients_text;
                        food.origin = productInfo.product.origins;
                        food.calories = productInfo.product.nutriments.calories;
                        food.fats = productInfo.product.nutriments.fat;
                        food.sugars = productInfo.product.nutriscore_data.sugars;
                    } else {
                        food.ingredients = "no ingredients listed";
                        food.origin = "no origin listed";
                        food.calories = "no calories listed";
                        food.fats = "no fats listed";
                        food.sugars = "no sugars listed";
                    }
                    const foodAsHTML = foodFactory(food);
                    addFoodToDom(foodAsHTML);
                })
        })
    })



