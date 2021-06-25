console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been submitted!");
}

const handleMouseOver = () => {
    alert("Good job mousing over the cat!");
}


let form = document.querySelector('form#contact');
let cat = document.querySelector("#cat");

form.addEventListener('submit', handleSubmit);
cat.addEventListener("mouseover", handleMouseOver)