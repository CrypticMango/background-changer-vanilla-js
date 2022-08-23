const change = document.getElementById("color-button");
const color = document.getElementById("color-text");
const body = document.body;

change.addEventListener("click", changeBackground);

function changeBackground() {
	const color1 = randomRbg();
	const color2 = randomRbg();
	const color3 = randomRbg();

	const colorString = `rgb(${color1}, ${color2}, ${color3})`;

	console.log(colorString);
}

function randomRbg() {
	return Math.floor(Math.random() * 256);
}
