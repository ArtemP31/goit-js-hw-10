import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const selector = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

buttonEl.addEventListener('click', startTimer);

buttonEl.disabled = true;
let intervalId = null;
let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
      return iziToast.error({
        position: 'topRight',

        message: 'Please choose a date in the future',
      });
    }
    userSelectedDate = selectedDates[0];
    buttonEl.disabled = false;
  },
};

flatpickr(selector, options);



function startTimer(){
  selector.disabled = true;
  buttonEl.disabled = true;

  intervalId = setInterval(upTimer, 1000);
  return;
}

function upTimer(){
  const curentTime = userSelectedDate - new Date();
  if (curentTime <= 0) {
    selector.disabled = false;
    clearInterval(intervalId);
    return;
  }


  dataDays.textContent = String(convertMs(curentTime).days).padStart(2, 0);
  dataHours.textContent = String(convertMs(curentTime).hours).padStart(2, 0);
  dataMinutes.textContent = String(convertMs(curentTime).minutes).padStart(2, 0);
  dataSeconds.textContent = String(convertMs(curentTime).seconds).padStart(2, 0);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


