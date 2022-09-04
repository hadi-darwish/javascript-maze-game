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
  //adding a spot to print condition of winning or losing
  var statusPos = document.getElementsByTagName("h2");
  statusPos[0].insertAdjacentHTML("afterend", '<h3 id="win_lose"></h3>');
  updateScore(score);

  //this will track the mouse to execute the function start
  begin.onmouseover = function () {
    start(out);
  };

  //this will reset the score
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
  //this will prevent the player from cheat
  //by having a listener on the out side of game div
  //and if it catch a mouseover it execute lose function
  window.addEventListener("mouseover", function (e) {
    if (!document.getElementById("game").contains(e.target)) {
      if (playing == true) {
        lose(out);
      }
    }
  });
}

//function of wining in the game that adds the score and reset the status
function win() {
  playing = false;
  score += 5;
  updateScore(score);
  updateStatus(true);
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
  updateStatus(false);
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

//function to print the Status of player "You Win" , "You Lose"
function updateStatus(status) {
  var statusText = document.getElementById("win_lose");
  statusText.style.textAlign = "center";
  if (status == true) {
    statusText.innerHTML = "You Win";
    statusText.style.color = "green";
  } else {
    statusText.innerHTML = "You Lose";
    statusText.style.color = "red";
  }
}
