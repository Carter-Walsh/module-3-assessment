let favColor = document.querySelector("#color");
let favPlace = document.querySelector("#place");
let favRitual = document.querySelector("#ritual");

const handleFavColor = () => {
    alert("My favorite color is blue!");
}

const handleFavPlace = () => {
    alert("My favorite place is Colarado!");
}

const handleFavRitual = () => {
    alert("My favorite ritual is morning coffee!");
}

favColor.addEventListener("click", handleFavColor);
favPlace.addEventListener("click", handleFavPlace);
favRitual.addEventListener("click", handleFavRitual);