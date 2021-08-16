// JavaScript 陣列處理方法 [filter(), find(), forEach(), map(), every(), some(), reduce()] https://wcc723.github.io/javascript/2017/06/29/es6-native-array/

// ------------------for / filter------------------
const aArray = [1, 2, 3, 4, 5]

// 透過for 回傳沒有3的陣列
const bArray = []
for (let i = 0; i < aArray.length; i++) {
  // if continue代表符合條件的話就跳過，不執行一次，接著再繼續執行
  if (aArray[i] === 3) continue

  // 把aArray從後面push進bArray
  bArray.push(aArray[i])
}

// 透過filter回傳沒有3的陣列
const cArray = aArray.filter(function (value) {
  return value !== 3
})

//filter 改成箭頭函式，箭頭函式不用function也不用return
const dArray = aArray.filter((value) => value !== 3)
// ------------------for / filter------------------

// ------------------for迴圈 / map------------------
// for 迴圈的寫法
let weekDayDisplay = ''

for (let i = 0; i < weekList.length; i++) {
  weekDayDisplay += `<th> ${weekList[i]} </th>`
}
title.innerHTML = `<tr> ${weekDayDisplay} </tr>`

// map + 箭頭函式的寫法（箭頭函式不用return）
const weekListMap = weekList.map((v) => `<th> ${v} </th>`).join('')
title.innerHTML = `<tr> ${weekListMap} </tr>`
// ------------------for迴圈 / map------------------
