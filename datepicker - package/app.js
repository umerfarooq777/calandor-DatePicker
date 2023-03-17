const cube = document.querySelector(".cube");
const cubeContainer = document.querySelector(".cube-container");

let currentRotationX = 0;
let currentRotationY = 0;
let currentRotationZ = 0;

// Detect swipe events
cubeContainer.addEventListener("touchstart", handleTouchStart, false);
cubeContainer.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
    } else {
      /* right swipe */
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
      currentRotationX -= 90;
      cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) rotateZ(${currentRotationZ}deg)`;
    } else {
      /* down swipe */
      currentRotationX += 90;
      cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) rotateZ(${currentRotationZ}deg)`;
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

