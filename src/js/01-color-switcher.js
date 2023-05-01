const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

startBtn.disabled = false;

function onStartBtnClick() {
  timerId = setInterval(() => {
    return (body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    )
      .toString(16)
      .padStart(6, 0)}`);
  }, 1000);
  startBtn.disabled = true;
}
function onStopBtnClick() {
  clearInterval(timerId);
  body.style.backgroundColor = 'transparent';
  startBtn.disabled = false;
}

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);
