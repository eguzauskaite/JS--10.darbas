// 
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".Square");
var colorDisplay = document.getElementById("displayColor");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColorButton = document.getElementById("newColor");
var easyModeButton = document.getElementById("easyMode");
var hardModeButton = document.getElementById("hardMode");

init();

function init() {
    setupModeButtons(); 
    setupSquares();
    reset();
}

function setupModeButtons() {
    easyModeButton.addEventListener("click", function() {
        hardModeButton.classList.remove("selected");
        easyModeButton.classList.add("selected");
        numSquares = 3;
        reset();
        //change colors to 3
	colors = generateRandomColors(numSquares);
	//reset winning color
	// pickedColor = randomColorG();
	//change display to show new picked color
	// colorDisplay.textContent = pickedColor;
	//loop through 3 squares and reset colors while displaying none for squares without new reset colors
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
    });

    hardModeButton.addEventListener("click", function() {
        easyModeButton.classList.remove("selected");
        hardModeButton.classList.add("selected");
        numSquares = 6;
        reset();
    });
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                newColorButton.textContent = "Play Again";
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = "" + pickedColor;
    newColorButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
        }
    
    h1.style.backgroundColor = "#4c8dbe";
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
     return "rgb(" + r + ", " + g + ", " + b + ")";
    // var rgb = `rgb(${r}, ${g}, ${b})`
    // return rgb
}

function pickColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
   
} 
newColorButton.addEventListener("click", function() {
    reset();
});