let currentRotation = 0;

function spin() {
  const wheel = document.getElementById("wheel");
  const randomDeg = Math.floor(Math.random() * 360) + 720; // at least 2 full spins
  currentRotation += randomDeg;
  wheel.style.transform = `rotate(${currentRotation}deg)`;
}