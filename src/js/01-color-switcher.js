const startBtn = document.querySelector('button[data-start="start"]');
const stopBtn = document.querySelector('button[data-stop="stop"]');

function onStartBtnClick() {
  console.log('click', onStartBtnClick);
}
startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);
