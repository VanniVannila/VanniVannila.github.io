let sekunden = 50000000;

const timerElement = document.getElementById("timer");

const interval = setInterval(() => {
  timerElement.textContent = sekunden + " sek";
  sekunden--;

  if (sekunden < 0) {
    clearInterval(interval);
    timerElement.textContent = "Deine Erlösung steht vor der Tür!";
  }
}, 1000);

