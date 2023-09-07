'use strict'

// Lesson 5
let arr = [
  '7364637',
  '294834',
  '3207552',
  '4304380',
  '194313',
  '2095587',
  '0358023',
]

arr.forEach((e) => {
  if (+e[0] === 2 || +e[0] === 4) {
    console.log(e)
  }
})

for (let i = 2; i <= 100; i++) {
  let count = 0
  for (let j = 2; j <= i && count < 2; j++) {
    if (i % j === 0) {
      count++
    }
  }
  if (count < 2) {
    console.log(i)
  }
}
