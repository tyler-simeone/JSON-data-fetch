fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
    })

const createString = (name, ethnicity, type) => {
    return `
        <li>
            <h1>${name}</h1>
            <p>${ethnicity}</p>
            <p>${type}</p>
        </li>
    `
};

const container = document.querySelector(".foodList");

const addStringToDom = (name, ethnicity, type) => {
    container.innerHTML += createString(name, ethnicity, type);
}

addStringToDom("Linguine", "italian", "pasta");
addStringToDom("Massaman curry", "thai", "curry");
addStringToDom("Green curry", "thai", "curry");
addStringToDom("Ravioli Funghi", "italian", "pasta");
addStringToDom("Tuscan Soup", "italian", "vegetarian");