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
