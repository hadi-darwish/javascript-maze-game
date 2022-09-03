// This will make this js code load and run after the html page is fully loaded

window.onload = (event) => {
  var begin = document.getElementById("start");
  begin.onmousemove = function () {
    start();
  };
};

function start() {
  console.log("Yes!!");
}
