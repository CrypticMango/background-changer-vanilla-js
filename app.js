const change = document.getElementById("color-button");
const colorText = document.getElementById("color-text");
const body = document.body;

function changeBackground() {
	const color1 = randomRgb();
	const color2 = randomRgb();
	const color3 = randomRgb();

	const colorString = `rgb(${color1}, ${color2}, ${color3})`;

	colorText.innerHTML = colorString;

	body.style.background = colorString;

	console.log(colorString);
}

function randomRgb() {
	return Math.floor(Math.random() * 256);
}

console.log(colorText);
console.log(change);