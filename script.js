let color1 = document.querySelector('#color1'); 
let color2 = document.querySelector('#color2'); 
let h3 = document.querySelector('h3'); 
let body = document.querySelector('body'); 
let randomButton = document.querySelector('#random'); 

let rgbGenerator = () => {
	let red = Math.floor(Math.random() * 255); 
	let green = Math.floor(Math.random() * 255); 
	let blue = Math.floor(Math.random() * 255); 

	return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

let bodyStyle = () => {
	body.style.background = 
	'linear-gradient(to right, ' 
	+ color1.value 
	+ ", " 
	+ color2.value +")";

	h3.textContent = body.style.background + ';'; 
}

color1.addEventListener('input', bodyStyle); 
color2.addEventListener('input', bodyStyle);
bodyStyle(); 
console.log(rgbGenerator()); 

randomButton.addEventListener('click', () => {
	body.style.background = 
	'linear-gradient(to right, ' 
	+ rgbGenerator() 
	+ ", " 
	+ rgbGenerator() +")";

	h3.textContent = body.style.background + ';'; 
})

