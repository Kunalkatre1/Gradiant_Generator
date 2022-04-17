let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.querySelector("body");
//Using 'input' event to take the color inputs from the user on-the-go
color1.addEventListener("input", gradiantGenerator)

color2.addEventListener("input", gradiantGenerator)

function gradiantGenerator(){
    body.style.backgroundImage = "linear-gradient(to right," + color1.value + "," + color2.value +")";
}