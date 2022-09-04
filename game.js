//a global variable to track the score
var score = 0;
//a global variable to track playing status true for playing false for not playing
var playing = true;
//a global variable to track state of game true for win or neutral false for losing
var state = true;

// This will make this js code load and run after the html page is fully loaded

window.onload = (event) => {
  var begin = document.getElementById("start");
  var out = document.querySelectorAll(".boundary");
  updateScore(score);

  begin.onmouseover = function () {
    start(out);
  };

  begin.onclick = function () {
    location.reload();
  };
};

//function that starts the recoding of game
function start(out) {
  var finish = document.getElementById("end");
  playing = true;
  if (state == false) {
    state = true;
    for (let index = 0; index < out.length; index++) {
      const element = out[index];
      element.style = null;
    }
  }

  for (let index = 0; index < out.length; index++) {
    const element = out[index];
    element.onmouseover = function () {
      if (playing == true) {
        lose(out);
      }
    };
  }

  finish.onmouseover = function () {
    if (state == true && playing == true) {
      win();
    }
  };
}

//function of wining in the game that adds the score and reset the status
function win() {
  playing = false;
  score += 5;
  updateScore(score);
  return;
}
//function of wining in the game that adds the score and reset the status
//And it change the style of borders
function lose(out) {
  playing = false;
  state = false;
  for (let index = 0; index < out.length; index++) {
    const element = out[index];
    element.style.backgroundColor = "red";
  }
  score -= 10;
  updateScore(score);
  return;
}

//function to print the score on the screen
function updateScore(score) {
  var array = document.getElementsByClassName("example");
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    element.innerHTML =
      '<p style="margin:0% 45%; font-weight:bolder; font-size:25px">' +
      score +
      "</p>";
  }
}
