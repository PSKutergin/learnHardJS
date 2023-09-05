'use strict'

// Lesson 4
const getStr = function (str) {
  if (typeof str !== 'string') {
    return 'В функцию передана не строка'
  } else {
    return str.trim().length > 30
      ? str.trim().substr(0, 30) + '...'
      : str.trim()
  }
}
