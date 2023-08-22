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

setGradient()
//color1.addEventListener("input", setGradient);
//color2.addEventListener("input", setGradient);

generateButton.addEventListener("click", function() {
    setGradient();
  });

  function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const randomButton = document.getElementById("randomButton");

randomButton.addEventListener("click", function() {
    const col1 = randomColor();
    const col2 = randomColor();
    
    // Atualize os valores dos inputs com as novas cores
    color1.value = col1;
    color2.value = col2;

    // Aplique as cores ao background
    setGradient(col1, col2);
});
