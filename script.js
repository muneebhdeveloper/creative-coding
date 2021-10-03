const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let circleRadius = 20;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

canvas.addEventListener("resive", function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

canvas.addEventListener("wheel", function (event) {
  if (event.deltaY === 100) {
    circleRadius = circleRadius - 10;
  } else {
    circleRadius = circleRadius + 10;
  }
  console.log(event);
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  drawCircle(mouse.x, mouse.y);
});

function drawCircle(x, y) {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(x, y, circleRadius, 0, Math.PI * 2);
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle(mouse.x, mouse.y);
  requestAnimationFrame(animate);
}

animate();
