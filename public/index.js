// ------------------計數器 - 1------------------
// js是物件導向程式語言，有兩大物件，window & document，window 物件包含網址列，操控上一頁下一頁等，document指的是中間顯示文件的內容。
// https://developer.mozilla.org/zh-TW/docs/Web/API/Window

const count = document.getElementById('count')

// 讓畫面上的數字改變
// count.textContent = 999

// 以上兩行可以合併為以下一行
// document.getElementById('count').textContent = 999

// addEventListener 加掛事件監聽器的函式
// 第一個傳入的參數是要觸發的事件類型（click），第二個傳入的參數是函式 function ，觸發的事件內容為文字改變 count.textContent += 1
count.addEventListener('click', function () {
  // 以下這樣寫會變成往後加1  01111...，因為抓到的資料類型是字串，+符號會優先處理字串，例如'123'+1 會出現'1231'；但'123'-1 會出現'122'
  //count.textContent += 1

  // 把字串轉為數字：加上Number()
  count.textContent = Number(count.textContent) + 1

  // 也可以用+把字串轉為數字 例如：
  // count.innerHTML = +count.innerHTML + 1
})
// ------------------計數器 - 1------------------

// ------------------會員驗證------------------
// const name = document.querySelector('#name')
// const address = document.querySelector('#address')
// const account = document.querySelector('#account')
// const password = document.querySelector('#password')
// const passwordCheck = document.querySelector('#passwordCheck')
// const send = document.querySelector('#send')
// const message = document.querySelector('#message')

// send.addEventListener('click', function () {
//   if (!name.value) {
//     alert('沒填姓名')
//   }
//   if (password.value !== passwordCheck.value) {
//     alert('密碼錯誤')
//   }
// })
// ------------------會員驗證------------------

// ------------------擲骰子------------------
const userDice = document.querySelector('#userDice')
const computerDice = document.querySelector('#computerDice')
const userPoint = document.querySelector('#userPoint')
const computerPoint = document.querySelector('#computerPoint')
const send = document.querySelector('#send')
const outcome = document.querySelector('#outcome')

// 按下send會觸發的動作
send.addEventListener('click', function () {
  const point = ['1 點', '2 點', '3 點', '4 點', '5 點', '6 點']
  // 使用者擲出的骰子數隨機1-6
  const userRandom = Math.floor(Math.random() * (6 - 1 + 1)) + 1

  // 電腦擲出的骰子數隨機1-6
  const computerRandom = Math.floor(Math.random() * (6 - 1 + 1)) + 1

  // 使用者骰子結果
  userPoint.innerHTML = `你的點數：${point[userRandom - 1]}`
  // 電腦骰子結果
  computerPoint.innerHTML = `你的點數：${point[computerRandom - 1]}`

  // 把使用者擲出的骰子從數字變為英文，後續fontawesome骰子的icon要用
  let userDiceOutcome = ''

  // switch 可以改用下面的陣列
  // switch (userRandom) {
  //   case 1:
  //     userDiceOutcome = 'one'
  //     break
  //   case 2:
  //     userDiceOutcome = 'two'
  //     break
  //   case 3:
  //     userDiceOutcome = 'three'
  //     break
  //   case 4:
  //     userDiceOutcome = 'four'
  //     break
  //   case 5:
  //     userDiceOutcome = 'five'
  //     break
  //   case 6:
  //     userDiceOutcome = 'six'
  //     break
  // }

  // 用陣列對應不同的圖示字串
  userDiceOutcome = ['one', 'two', 'three', 'four', 'five', 'six']

  // 使用者擲出的骰子變成英文之後讓骰子上的數字變成上面取的隨機數
  userDice.innerHTML = `<i class="fas fa-dice-${
    // -1是因為前面的userRandom是1-6的隨機數，陣列索引第0個是'one'，所以要-1才會隨機數1對應到'one'
    userDiceOutcome[userRandom - 1]
  }"></i>`

  // 把電腦擲出的骰子從數字變為英文，後續fontawesome骰子的icon要用
  let computerDiceOutcome = ''

  // switch 可以改用下面的陣列
  // switch (computerRandom) {
  //   case 1:
  //     computerDiceOutcome = 'one'
  //     break
  //   case 2:
  //     computerDiceOutcome = 'two'
  //     break
  //   case 3:
  //     computerDiceOutcome = 'three'
  //     break
  //   case 4:
  //     computerDiceOutcome = 'four'
  //     break
  //   case 5:
  //     computerDiceOutcome = 'five'
  //     break
  //   case 6:
  //     computerDiceOutcome = 'six'
  //     break
  // }

  // 用陣列對應不同的圖示字串
  computerDiceOutcome = ['one', 'two', 'three', 'four', 'five', 'six']

  // 電腦擲出的骰子變成英文之後讓骰子上的數字變成上面取的隨機數
  computerDice.innerHTML = `<i class="fas fa-dice-${
    // -1是因為前面的computerRandom是1-6的隨機數，陣列索引第0個是'one'，所以要-1才會隨機數1對應到'one'
    computerDiceOutcome[computerRandom - 1]
  }"></i>`

  if (userRandom > computerRandom) {
    outcome.innerHTML = '你贏了'
  } else if (userRandom == computerRandom) {
    outcome.innerHTML = '平手，再骰一次'
  } else {
    outcome.innerHTML = '電腦贏了'
  }
})
// ------------------擲骰子------------------

// ------------------生日下拉選單------------------
const year = document.querySelector('#year')
const month = document.querySelector('#month')
const date = document.querySelector('#date')
const sendDate = document.querySelector('#sendDate')
const message = document.querySelector('#message')

let selectedYear = 0
let selectedMonth = 0
let selectedDate = 0

function createOption(min, max) {
  let options = '<option value="0">- 請選擇 -</option>'
  for (let i = min; i < max + 1; i++) {
    options += `<option value="${i}" id="">${i}</option>`
  }
  return options
}

// switch (month.value) {
//   case '2':
//     date.innerHTML = createOption(1, 28)
//     break
// }

year.innerHTML = createOption(1911, 2020)
month.innerHTML = createOption(1, 12)
// date.innerHTML = createOption(1, 31)

year.addEventListener('change', function () {
  selectedYear = year.value
})

month.addEventListener('change', function () {
  selectedMonth = month.value

  if (selectedYear !== '0' && selectedMonth !== '0') {
    // 選了年和月之後才能開放選日期
    date.disabled = false

    // 要得到某年的某個月有幾天，可以用new Date(y, m, 0).getDate()，例如 2019 年的 9 月就是使用new Date(2019, 9, 0).getDate()
    const maxDate = new Date(selectedYear, selectedMonth, 0).getDate()

    date.innerHTML = createOption(1, maxDate)
  }
})

date.addEventListener('change', function () {
  selectedDate = date.value
})

// 檢查是否滿18歲
sendDate.addEventListener('click', function () {
  // 取得目前時間
  const now = new Date()

  const nowY = now.getFullYear()
  const nowM = now.getMonth() + 1 //回傳為0-11，所以要+1
  const nowD = now.getDate()

  // 第一步判斷年份，如果大於18就直接判斷已滿18歲
  if (nowY - selectedYear > 18) {
    message.innerHTML = '已滿18歲'

    // 第二步年份如果相等，再判斷月份，如果大於18就直接判斷已滿18歲
  } else if (nowY - selectedYear === 18 && selectedMonth < nowM) {
    message.innerHTML = '已滿18歲'

    // 第三部如果年份和月份都相等，再判斷日期，大於等於18再判斷已滿18歲
  } else if (
    nowY - selectedYear === 18 &&
    nowM == selectedMonth &&
    selectedDate <= nowD
  ) {
    message.innerHTML = '已滿18歲'

    // 其餘即為未滿18歲
  } else {
    message.innerHTML = '未滿18歲'
  }
})

// 以下為一個一個寫，但可以像上面一樣寫成一個函式直接呼叫
// // 選擇年
// // 選取到的值
// // 設定為0是因為後續要傳到資料庫的話就不會有值，如果設為1，可能資料庫的人會不知道為什麼是1，初始預設值的概念。
// let selectedYear = 0

// // 其他準備被選的值
// let yearOptions = '<option value="0">- 請選擇（年）-</option>'

// // 產生選項
// for (let i = 1911; i < 2021; i++) {
//   // 字串在迴圈裡+=也可以疊加，會變成
//   // <option value="${1911}" id="">${1911}</option>
//   // <option value="${1912}" id="">${1912}</option>
//   // <option value="${1913}" id="">${1913}</option>
//   // ...一直到
//   // <option value="${2020}" id="">${2020}</option>

//   yearOptions += `<option value="${i}" id="">${i}</option>`
// }

// year.innerHTML = yearOptions

// year.addEventListener('change', function () {
//   selectedYear = year.value
// })

// // 選擇月
// let selectedMonth = 0

// let monthOptions = '<option value="0">- 請選擇（月）-</option>'

// for (let i = 1; i < 13; i++) {
//   monthOptions += `<option value="${i}">${i}</option>`
// }

// month.innerHTML = monthOptions

// month.addEventListener('change', function () {
//   selectedMonth = month.value
// })

// //選擇日
// let selectedDate = 0

// let dateOptions = '<option value="0">- 請選擇（日）-</option>'

// for (let i = 1; i < 32; i++) {
//   dateOptions += `<option value="${i}">${i}</option>`
// }

// date.innerHTML = dateOptions

// date.addEventListener('change', function () {
//   selectedDate = date.value
// })
// ------------------生日下拉選單------------------

// ------------------猜拳------------------
const scissors = document.querySelector('#scissors')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')

const userHand = document.querySelector('#userHand')
const computerHandIcon = document.querySelector('#computerHandIcon')
const computerHand = document.querySelector('#computerHand')
const outcomeHand = document.querySelector('#outcomeHand')

// 剪刀1 石頭2 布3

// 統一寫一個判斷勝負的函式
const play = (userNumber) => {
  // 先宣告中文對應
  const title = ['剪刀', '石頭', '布']

  // 使用者出拳
  // const userNumber = 1
  userHand.innerHTML = `你的出拳：${title[userNumber - 1]}`

  // 電腦出拳 1-3隨機數，並對應到icon
  const computerNumber = Math.floor(Math.random() * 3) + 1
  const computerHandOutcome = ['scissors', 'rock', 'paper']
  computerHandIcon.innerHTML = `<i class="fas fa-hand-${
    computerHandOutcome[computerNumber - 1]
  }"></i>`
  computerHand.innerHTML = `電腦的出拳：${title[computerNumber - 1]}`

  // 判斷輸贏，距離是1的時候小的輸（使用者-電腦=-1時，使用者輸），
  // if (computerNumber === 1) {
  //   outcomeHand.innerHTML = '平手，再猜一次'
  // }
  // if (computerNumber === 2) {
  //   outcomeHand.innerHTML = '電腦贏了'
  // }
  // if (computerNumber === 3) {
  //   outcomeHand.innerHTML = '你贏了'
  // }
}

scissors.addEventListener('click', function () {
  play(1)
})
rock.addEventListener('click', function () {
  play(2)
})
paper.addEventListener('click', function () {
  play(3)
})
// ------------------猜拳------------------
