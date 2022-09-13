const hourhand = document.querySelector('.hour');
const minutehand = document.querySelector('.minute');
const secondhand = document.querySelector('.second');

function setClock(){
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (currentDate.getMinutes() + secondsRatio) / 60 
  const hoursRatio = (currentDate.getHours() + minutesRatio) / 12;

  setRotation(secondhand, secondsRatio);
  setRotation(minutehand, minutesRatio);
  setRotation(hourhand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();
setInterval(setClock, 1000);
