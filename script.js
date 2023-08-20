var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

const generateButton = document.getElementById("generateButton");

function setGradient() {
body.style.background =
"linear-gradient(to right, "
+ color1.value
+ ", "
+ color2.value
+ ")";

css.textContent = body.style.background + ";";
}

//color1.addEventListener("input", setGradient);

//color2.addEventListener("input", setGradient);

generateButton.addEventListener("click", function() {
    setGradient(); // Chame a função setGradient() quando o botão for clicado
  });