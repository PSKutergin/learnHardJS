'use strict'

// Lesson 5
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let today = week[new Date().getDay() - 1];

for (let i = 0; i < week.length; i++) {
  let div = document.createElement('div');
  div.innerHTML = week[i];

  if (week[i] === today) {
    div.style.fontWeight = "bold"
  } else if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
    div.style.fontStyle = "italic"
  }
  document.body.insertAdjacentElement('beforebegin', div);
}