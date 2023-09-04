// Lesson 2
const num = 266219

//Сумма всех цифр числа
function getNumbersMulti(num) {
  return num
    .toString()
    .split('')
    .reduce(function (a, b) {
      return +a * +b
    })
}

//Возведение в степень
const newNum = getNumbersMulti(num) ** 3

//Вывод в консоль первых двух цифр числа
console.log(newNum.toString().slice(0, 2))

// Lesson 3
function daysWeekIfElse(lang) {
  if (lang === 'ru') {
    console.log([
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    ])
  } else if (lang === 'en') {
    console.log([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ])
  }
}

const daysWeekSwitch = (lang) => {
  switch (lang) {
    case 'ru':
      console.log([
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
      ])
      break
    case 'en':
      console.log([
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ])
      break
  }
}

const daysWeekArr = (lang) =>
  ({
    en: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    ru: [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    ],
  }[lang])

let lang = 'ru'
daysWeekIfElse(lang)
daysWeekSwitch(lang)
console.log(daysWeekArr(lang))

lang = 'en'
daysWeekIfElse(lang)
daysWeekSwitch(lang)
console.log(daysWeekArr(lang))

function getMajor(namePerson) {
  namePerson === 'Артем'
    ? console.log('директор')
    : namePerson === 'Александр'
    ? console.log('преподаватель')
    : console.log('студент')
}

let namePerson = 'Артем'
getMajor(namePerson)
namePerson = 'Александр'
getMajor(namePerson)
namePerson = 'Игорь'
getMajor(namePerson)
