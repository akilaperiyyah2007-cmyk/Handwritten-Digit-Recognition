let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!drawing) return;
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(e.offsetX, e.offsetY, 8, 0, Math.PI * 2);
  ctx.fill();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("resultBox").style.display = "none";
}

function predict() {
  let data = canvas.toDataURL();

  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ image: data })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("result").innerText = data.digit;
    document.getElementById("confidence").innerText = data.confidence.toFixed(2);
    document.getElementById("resultBox").style.display = "block";
  })
  .catch(() => {
    alert("Backend not running! Start app.py first.");
  });
}
