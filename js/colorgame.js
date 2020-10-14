var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	//generate all colors to the array
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//pick a random color from the array
	pickedColor = pickColor();
	//change colordisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//if color exist, set color. if not, set display to none. since we generated only 3 colors, the first 3 square will have a color but the last 3 will not.
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
}) ;

hardbtn.addEventListener("click", function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	//generate all colors to the array
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	//pick a random color from the array
	pickedColor = pickColor();
	//change colordisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//if color exist, set color. if not, set display to none. since we generated only 3 colors, the first 3 square will have a color but the last 3 will not.
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
}) ;

resetButton.addEventListener("click",function(){
	//generate all colors to the array
	colors = generateRandomColors(numSquares);
	//pick a random color from the array
	pickedColor = pickColor();
	//change colordisplay to match picked color
	colorDisplay.textContent = pickedColor;
	
	this.textContent = "New Colors";
	//Reset Display message
	messageDisplay.textContent = "";
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listerners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square 
		var clickedColor = this.style.backgroundColor;
		// compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?"
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
	//change color of each square to match given color
 	squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//create the array
	var arr = [];
	// add 'num' random colors to the array
	for(var i = 0; i < num; i++){
		//generate color and push into array
		arr.push(randomColor());
	}
	// return the array
	return arr;
}

function randomColor(){
	//generate a "red" from 0 - 255"
	var r = Math.floor(Math.random()*256);
	//generate a "green" from 0 - 255"
	var g = Math.floor(Math.random()*256);
	//generate a "blue" from 0 - 255"
	var b = Math.floor(Math.random()*256);
	// return one color
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
