// ------------------nav漢堡選單------------------
// 動畫參考 https://www.youtube.com/watch?v=gXkqy0b4M5g
const burger = document.querySelector(".burger");
const navA = document.querySelector(".nav-a");
const navLi = document.querySelectorAll(".nav-a li");

burger.addEventListener("click", function () {
  navA.classList.toggle("nav-a-active");

  // 單個連結一個一個慢慢進場的動畫
  navLi.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLiFade 0.5s ease forwards ${index / 8 + 0.3}s`;
    }

    // index / 7 代表一個一個陸續差幾秒進場
    console.log(index / 7);
  });

  // 漢堡從三條線變叉叉的動畫
  burger.classList.toggle("burger-line-ani");
});

// ------------------nav漢堡選單------------------

// ------------------計數器 - 1------------------
// js是物件導向程式語言，有兩大物件，window & document，window 物件包含網址列，操控上一頁下一頁等，document指的是中間顯示文件的內容。
// https://developer.mozilla.org/zh-TW/docs/Web/API/Window

const count = document.getElementById("count");

// 讓畫面上的數字改變
// count.textContent = 999

// 以上兩行可以合併為以下一行
// document.getElementById('count').textContent = 999

// addEventListener 加掛事件監聽器的函式
// 第一個傳入的參數是要觸發的事件類型（click），第二個傳入的參數是函式 function ，觸發的事件內容為文字改變 count.textContent += 1
count.addEventListener("click", function () {
  // 以下這樣寫會變成往後加1  01111...，因為抓到的資料類型是字串，+符號會優先處理字串，例如'123'+1 會出現'1231'；但'123'-1 會出現'122'
  //count.textContent += 1

  // 把字串轉為數字：加上Number()
  count.textContent = Number(count.textContent) + 1;

  // 也可以用+把字串轉為數字 例如：
  // count.innerHTML = +count.innerHTML + 1
});
// ------------------計數器 - 1------------------

// ------------------擲骰子------------------
const userDice = document.querySelector("#userDice");
const computerDice = document.querySelector("#computerDice");
const userPoint = document.querySelector("#userPoint");
const computerPoint = document.querySelector("#computerPoint");
const send = document.querySelector("#send");
const outcome = document.querySelector("#outcome");

// 按下send會觸發的動作
send.addEventListener("click", function () {
  const point = ["1 點", "2 點", "3 點", "4 點", "5 點", "6 點"];
  // 使用者擲出的骰子數隨機1-6
  const userRandom = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

  // 電腦擲出的骰子數隨機1-6
  const computerRandom = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

  // 使用者骰子結果
  userPoint.innerHTML = `你的點數：${point[userRandom - 1]}`;
  // 電腦骰子結果
  computerPoint.innerHTML = `電腦的點數：${point[computerRandom - 1]}`;

  // 把使用者擲出的骰子從數字變為英文，後續fontawesome骰子的icon要用
  let userDiceOutcome = "";

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
  userDiceOutcome = ["one", "two", "three", "four", "five", "six"];

  // 使用者擲出的骰子變成英文之後讓骰子上的數字變成上面取的隨機數
  userDice.innerHTML = `<i class="fas fa-dice-${
    // -1是因為前面的userRandom是1-6的隨機數，陣列索引第0個是'one'，所以要-1才會隨機數1對應到'one'
    userDiceOutcome[userRandom - 1]
  }"></i>`;

  // 把電腦擲出的骰子從數字變為英文，後續fontawesome骰子的icon要用
  let computerDiceOutcome = "";

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
  computerDiceOutcome = ["one", "two", "three", "four", "five", "six"];

  // 電腦擲出的骰子變成英文之後讓骰子上的數字變成上面取的隨機數
  computerDice.innerHTML = `<i class="fas fa-dice-${
    // -1是因為前面的computerRandom是1-6的隨機數，陣列索引第0個是'one'，所以要-1才會隨機數1對應到'one'
    computerDiceOutcome[computerRandom - 1]
  }"></i>`;

  if (userRandom > computerRandom) {
    outcome.innerHTML = `你贏了<br>⬇⬇⬇`;
  } else if (userRandom == computerRandom) {
    outcome.innerHTML = `平手，再骰一次<br>⬇⬇⬇`;
  } else {
    outcome.innerHTML = `電腦贏了<br>⬇⬇⬇`;
  }
});
// ------------------擲骰子------------------

// ------------------猜拳------------------
const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");

const userHand = document.querySelector("#userHand");
const computerHandIcon = document.querySelector("#computerHandIcon");
const computerHand = document.querySelector("#computerHand");
const outcomeHand = document.querySelector("#outcomeHand");

// 剪刀1 石頭2 布3

// 統一寫一個判斷勝負的函式
const play = (userNumber) => {
  // 先宣告中文對應
  const title = ["剪刀", "石頭", "布"];

  // 使用者出拳
  // const userNumber = 1
  const userHandOutcome = ["scissors", "rock", "paper"];
  userHandIcon.innerHTML = `<i class="fas fa-hand-${
    userHandOutcome[userNumber - 1]
  }"></i>`;
  userHand.innerHTML = `你的出拳：${title[userNumber - 1]}`;

  // 電腦出拳 1-3隨機數，並對應到icon
  const computerNumber = Math.floor(Math.random() * 3) + 1;
  const computerHandOutcome = ["scissors", "rock", "paper"];
  computerHandIcon.innerHTML = `<i class="fas fa-hand-${
    computerHandOutcome[computerNumber - 1]
  }"></i>`;
  computerHand.innerHTML = `電腦的出拳：${title[computerNumber - 1]}`;

  // 兩者相同時平手
  if (userNumber === computerNumber) {
    outcomeHand.innerHTML = "平手，再猜一次<br>⬇⬇⬇";
  }

  // 用距離判斷輸贏
  const range = userNumber - computerNumber;

  // 使用者 - 電腦 = -2 時，使用者贏
  // 使用者 - 電腦 = 1 時，使用者贏
  if (range === -2 || range === 1) {
    outcomeHand.innerHTML = "你贏了<br>⬇⬇⬇";
  }

  // 使用者 - 電腦 = -1 時，使用者輸
  // 使用者 - 電腦 = 2 時，使用者輸
  if (range === -1 || range === 2) {
    outcomeHand.innerHTML = "電腦贏了<br>⬇⬇⬇";
  }

  // if (computerNumber === 1) {
  //   outcomeHand.innerHTML = '平手，再猜一次'
  // }
  // if (computerNumber === 2) {
  //   outcomeHand.innerHTML = '電腦贏了'
  // }
  // if (computerNumber === 3) {
  //   outcomeHand.innerHTML = '你贏了'
  // }
};

scissors.addEventListener("click", function () {
  play(1);
});
rock.addEventListener("click", function () {
  play(2);
});
paper.addEventListener("click", function () {
  play(3);
});
// ------------------猜拳------------------

// ------------------抽卡------------------
const draw = document.querySelector("#draw");
const outcomeCard = document.querySelector("#outcomeCard");

const randomCard = Math.floor(Math.random() * 100) + 1;

draw.addEventListener("click", function () {
  console.log(randomCard);

  // 1-3 五星卡；4-20 四星卡；21-100 三星卡
  if (randomCard < 4) {
    outcomeCard.innerHTML = "抽中五星卡";
  }
  if (4 <= randomCard < 21) {
    outcomeCard.innerHTML = "抽中四星卡";
  }
  if (21 <= randomCard <= 100) {
    outcomeCard.innerHTML = "抽中三星卡";
  }
});
// ------------------抽卡------------------

// ------------------終極密碼------------------
// 先產生一個 1-100 隨機亂數，使用者輸入數字之後，電腦判斷是 1-使用者輸入數字 或是 使用者輸入數字-100，每一次這樣做，直到使用者輸入數字 = 答案為止
// 例如答案是 65，使用者輸入 98，那提示文字就要出現：請輸入 1-98 的數字
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const hint = document.querySelector("#hint");
const answer = document.querySelector("#answer");

// 出現 1-100 的隨機數
const ans = Math.floor(Math.random() * 100 + 1);
answer.innerText = ans;

// 範圍 1-100
let n1 = 1;
let n2 = 100;

btn.addEventListener("click", check);
input.addEventListener("keyup", enterSend);

// 按 enter 送出
function enterSend(j) {
  if (j.keyCode === 13) {
    btn.click();
  }
}

function check() {
  console.log(`我輸入的 ${input.value}`);
  console.log(`是非數字嗎 ${isNaN(input.value)}`);
  console.log(`有填資料嗎 ${Boolean(input.value.trim() === "")}`);
  console.log(`新的最大數字 ${n2}`);
  console.log(`新的最小數字 ${n1}`);
  while (true) {
    if (
      // 表單驗證，如果輸入的值去掉空格非數字、大於最大值、小於最小值都會出現警告訊息
      isNaN(input.value) ||
      input.value.trim() === "" ||
      input.value > n2 ||
      input.value < n1
    ) {
      hint.innerText = `格式錯誤，請輸入 ${n1} - ${n2} 的數字`;
      break; // 記得要 break，否則會進入無窮迴圈
    } else if (input.value == ans) {
      // 要用兩個等於因為 input.value 是字串，只要值一樣就可以，三個等於是值和型別都一樣，或是用 parseInt() 先將 input.value 轉為數字
      hint.innerText = "恭喜答對了！";
      location.reload();
      break;
    } else if (input.value > ans) {
      // 如果使用者輸入的數字大於答案，那提示文字的最大值就要變成使用者輸入的數字
      n2 = input.value;
      // hint.innerText = `請輸入 ${n1}
    } else if (input.value < ans) {
      // 如果使用者輸入的數字小於答案，那提示文字的最小值就要變成使用者輸入的數字
      n1 = input.value;
    }
    hint.innerText = `請輸入 ${n1} - ${n2}  的數字`;
    break;
  }
  // 清空輸入的值
  input.value = "";
}

// ------------------終極密碼------------------

// ------------------陣列反轉------------------
const origin = document.querySelector("#origin");
const reverse = document.querySelector("#reverse");
const btnReverse = document.querySelector("#btnReverse");
const friends = ["Harry", "Ron", "Snap", "Abby", "Cindy"];
const reversed_friends = [];

origin.innerText = friends;

for (i = 0; i < friends.length; i++) {
  reversed_friends.unshift(friends[i]);
}

btnReverse.addEventListener("click", function () {
  reverse.innerText = reversed_friends;
});

// ------------------陣列反轉------------------

// ------------------在陣列中找出最大值------------------
const allArr = document.querySelector("#allArr");
const btnFind = document.querySelector("#btnFind");
const bigNum = document.querySelector("#bigNum");

const arr = [22, 33, 44, 55];

allArr.innerText = arr;

btnFind.addEventListener("click", findBig);

function findBig(arr) {
  // 如果陣列裡沒有值，就出現undefined
  if (arr.length == 0) {
    BigNum.innerText = "undefined";
  }
  // 先設定一個假定的最大數
  let big = -1;

  // 以下這個迴圈是，先用 arr 裡面的第 0 個 22 和 -1 比，22 比較大，所以目前 22 最大，再一個一個比，比到最後 big 就會真的是最大的那一個值
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > big) {
      big = arr[i];
    }
  }
  return big;
}
bigNum.innerText = findBig(arr);

// ------------------在陣列中找出最大值------------------

// ------------------累加數字------------------
const addInput = document.querySelector("#addInput");
const btnAdd = document.querySelector("#btnAdd");
const finalNum = document.querySelector("#finalNum");

btnAdd.addEventListener("click", addUp);

function addUpTo(n) {
  let result = 0;
  for (let i = 1; n + 1 > i > 0; i++) {
    result += i;
  }
  return result;
}
// console.log(addUpTo(4));

function addUp() {
  finalNum.innerText = addUpTo(parseInt(addInput.value));
}

// ------------------累加數字------------------

// ------------------nav出現時機------------------
const nav = document.querySelector(".nav");
const toTop = document.querySelector(".toTop");

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 400) {
    nav.style.display = "flex";
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.width = "100vw";
    toTop.style.display = "block";
    toTop.style.position = "fixed";
    toTop.style.bottom = "3rem";
    toTop.style.right = "3rem";
  } else {
    nav.style.display = "none";
    nav.style.position = "static";
    toTop.style.display = "none";
  }
});
// ------------------nav出現時機------------------
