let containerHeight = document.getElementById("container").offsetHeight;
let square = document.getElementById("square");

// direction means (0 = right, down and 1 = left, up)
let direction = 0;

const makeAnimation = () => {
  let leftPosition = square.offsetLeft;
  let topPosition = square.offsetTop;

  if (
    leftPosition + 100 >= screen.width ||
    topPosition + 100 >= containerHeight
  ) {
    direction = 1;
  } else if (square.offsetLeft < 0) {
    direction = 0;
  }

  if (direction === 0) {
    leftPosition = leftPosition + 10;
    topPosition = topPosition + 10;
  } else {
    leftPosition = leftPosition - 10;
    topPosition = topPosition - 10;
  }

  square.style.left = leftPosition + "px";
  square.style.top = topPosition + "px";

  setTimeout(() => {
    makeAnimation();
  }, 1000);
};

// Initialize the function
setTimeout(() => {
  makeAnimation();
  console.log("call the function");
}, 1000);
