// set variables and default values
const canvas = document.getElementById("cowField");
const context = canvas.getContext("2d");
const cow = new Image();

// starting coordinates for cow
let x = 100;
let y = 100;

// display cow image on canvas
cow.src = "./images/cow.png";
cow.onload = () => {
  context.drawImage(cow, x, y);
};

// controls to move cow around canvas
const button = document.getElementsByClassName("directionControl");
const upDirection = document.getElementById("up");
const downDirection = document.getElementById("down");
const leftDirection = document.getElementById("left");
const rightDirection = document.getElementById("right");

// attach event listener to all button controls
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", move, false);
}

function move(e) {
  e.preventDefault();

  // call function corresponding to the direction indicated on button
  if (this.id == "up") {
    up();
  } else if (this.id == "down") {
    down();
  } else if (this.id == "left") {
    left();
  } else if (this.id == "right") {
    right();
  }

  clearCanvas();
  context.drawImage(cow, x, y);
}

// up arrow
function up() {
  y -= 10;
}

// down arrow
function down() {
  y += 10;
}

// left arrow
function left() {
  x -= 10;
}

// right arrow
function right() {
  x += 10;
}

function clearCanvas() {
  canvas.width = canvas.width;
}
