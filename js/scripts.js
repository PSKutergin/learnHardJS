'use strict'

// Lesson 9
function update() {
  const clock = document.getElementById('clock')
  const fullDate = document.getElementById('full-date')
  const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let monthName = monthNames[month - 1]
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let today = week[date.getDay() - 1];
  let hoursText

  if (hours === 1 || hours === 21) {
    hoursText = "час"
  } else if ((hours >= 2 && hours <= 4) || (hours >= 22 && hours <= 24)) {
    hoursText = "часа"
  } else {
    hoursText = "часов"
  }

  fullDate.textContent = `Сегодня ${today}, ${day} ${monthName} ${year} года, ${hours} ${hoursText} ${minutes} минут ${seconds} секунды`

  if (day < 10) day = '0' + day
  if (month < 10) month = '0' + month
  if (hours < 10) hours = '0' + hours
  if (minutes < 10) minutes = '0' + minutes
  if (seconds < 10) seconds = '0' + seconds

  clock.textContent = `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;
}

setInterval(update, 1000)