let randomBtn = document.querySelector(".random-btn");
let restaurants = ["Chick-Fil-A", "Buffalo Wild Wings", "IHOP", "Cheddars", "Panda Express", "Taco Bell"];

const randomRestaurant = () => {
    let randomNumber = Math.floor(Math.random() * restaurants.length);
    let newElement = document.createElement("p");

    const randomAlert = () => {
        alert(newElement.textContent);
    }

    switch(randomNumber) {
        case 0:
            newElement.textContent = `Your random restaurant recommendation is ${restaurants[0]}!`;
            randomAlert();
            break;
        case 1:
            newElement.textContent = `Your random restaurant recommendation is ${restaurants[1]}!`;
            randomAlert();
            break;
        case 2:
            newElement.textContent = `Your random restaurant recommendation is ${restaurants[2]}!`;
            randomAlert();
            break;
        case 3:
            newElement.textContent = `Your random restaurant recommendation is ${restaurants[3]}!`;
            randomAlert();
            break;
        case 4:
            newElement.textContent = `Your random restaurant recommendation is ${restaurants[4]}!`;
            randomAlert();
            break;
        case 5:
            newElement.textContent = `Your random restaurant recommendation is ${restaurants[5]}!`;
            randomAlert();
            break;
    }
}

randomBtn.addEventListener("click", randomRestaurant);