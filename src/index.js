const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startFn() {
  startButton.removeEventListener('click', startFn);
  stopButton.addEventListener('click', stopFn);
  idSetInterval = setInterval(changeColor, 1000);
  function stopFn() {
    clearInterval(idSetInterval);
    startButton.addEventListener('click', startFn);
  }
  function changeColor() {
    let color = colors[randomIntegerFromInterval(0, 5)];
    document.body.style.background = color;
  }
}

startButton.addEventListener('click', startFn);
