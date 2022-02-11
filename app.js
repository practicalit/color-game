/**
 * This is an adjusted game taken from
 * https://www.freecodecamp.org/news/learn-how-to-manipulate-the-dom-by-building-a-simple-javascript-color-game-1a3aec1d109a/
 *
 * Can you see what has been updated to make it work?
 * 
 * What would happen when you refresh the page all the time? Can you see as to
 * why it is changing colors all the time?
 * 
 * Note that all the buttons are implemented yet.
 */

let numSquares = 8;
let colors = [];
let pickedColor;
let score = 0;
let squares = document.querySelectorAll(".square");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let scoreBoard = document.querySelector(".right");
let container = document.querySelector('#container');
let addSquareBtn = document.querySelector('.add-square');

/**
 * Handler for each square.
 * 
 * @param none
 * @returns void
 */
function squareHandler() {
  //if the user selected the right colour....
  let clickedColor = this.style.backgroundColor;
  //check if the selected colour matches the default colour...
  if (pickedColor === clickedColor) {
    changeColors(pickedColor);
    score += 5;
    scoreBoard.innerHTML = score;
  } else {
      //is there a better way to do assign the color than hardcoding it?
    this.style.backgroundColor = "#232323";
    messageDisplay.innerHTML = "Wrong Choice!";
    score -= 1;
    scoreBoard.innerHTML = score;
  }
}

//here we are using hardcoded 6 do you think making it Array(numSquares).keys() is a good idea?
//what does Array(6).keys() does?
for (const i of Array(numSquares).keys()) {
  colors.push(randomColors());
}
populateBackgroundColors(); //what is the purpose of this function?

/*
Question #1.
pickedColor is always the 4th element from the array here. 
We want to make the random color from arrays. 
Please make the pickedColor to be randomly selected color out of the six 
than being 3 all the time.
*/
pickedColor = colors[3];
for (i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", squareHandler);
}

addSquareBtn.addEventListener('click', function(){
  addSquare();
});

/*
Question #2
Based on your understanding, please comment the functions below. The first 
function is commented for you as an example. Follow the footstep and comment
the functions.
*/

/**
 * Changes the background color of all the squares with the given color.
 * @param {string} color 
 * @return void
 */
function changeColors(color) {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    messageDisplay.innerHTML = "You are good at guessing!";
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColors() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

//muluadam - to add random colors in the colors array
//simon - to iterate through squares and assigns background colors from colors array
//elleni - iterate the colors from the colors array to background of the squares. 
function populateBackgroundColors() {
    for (i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
    }
}

/**
 * Event handler for the add square button.
 * 
 * @param none
 * @returns void
 */
function addSquare() {
  let newDiv = document.createElement('div');
  newDiv.className = "square";
  newDiv.style.backgroundColor = randomColors();
  newDiv.addEventListener("click", squareHandler);
  container.appendChild(newDiv);

  squares = document.querySelectorAll(".square");
}
