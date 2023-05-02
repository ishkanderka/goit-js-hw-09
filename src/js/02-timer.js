import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const value = document.querySelectorAll('.value');
const [daysValue, hoursValue, minutesValue, secondsValue] = value;
startBtn.disabled = true;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
    }
    if (selectedDates[0] >= new Date()) {
      startBtn.disabled = false;
    }

    startBtn.addEventListener('click', () => {
      intervalId = setInterval(() => {
        const currentTime = Date.now();
        const neededTime = selectedDates[0] - currentTime;
        if (neededTime < 0) {
          clearInterval(intervalId);
          return;
        }
        const time = convertMs(neededTime);
        updateDate(time);
      }, 1000);
    });
  },
};

flatpickr(datePicker, options);

function updateDate({ days, hours, minutes, seconds }) {
  daysValue.textContent = `${days}`;
  hoursValue.textContent = `${hours}`;
  minutesValue.textContent = `${minutes}`;
  secondsValue.textContent = `${seconds}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
