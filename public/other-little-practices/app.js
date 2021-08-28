// ------------------日曆------------------
const yearAndMoth = document.querySelector("#yearAndMoth");
const title = document.querySelector("#title");
const data = document.querySelector("#data");

// new Date() 為產生物件的本地日期與時間
const now = new Date();

// 要得到今天的西元年使用Date物件的getFullYear()，要得到月份使用getMonth()(注意回傳為 0~11)
const nowY = now.getFullYear();
const nowM = now.getMonth() + 1; // 回傳為0-11，所以要+1

yearAndMoth.innerHTML = `${nowY} 年 ${nowM} 月`;

const weekList = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];

// for 迴圈的寫法
let weekDayDisplay = "";

for (let i = 0; i < weekList.length; i++) {
  weekDayDisplay += `<th class="border border-dark"> ${weekList[i]} </th>`;
}
title.innerHTML = `<tr class="border border-dark"> ${weekDayDisplay} </tr>`;

// map + 箭頭函式的寫法（箭頭函式不用return）
const weekListMap = weekList
  .map((v) => `<th class="border border-dark"> ${v} </th>`)
  .join("");
title.innerHTML = `<tr class="border border-dark"> ${weekListMap} </tr>`;

// 要得到某年的某個月有幾天，可以用new Date(y, m, 0).getDate()，例如 2009 年的 9 月就是使用new Date(2009, 9, 0).getDate()
// 注意，是指上個月的最後一天是幾號
const days = new Date(nowY, nowM, 0).getDate();

// 這個月的第一天是星期幾，getDay() 括號中寫日期，可以得到 0-6 的值，代表是星期幾，其中 0 代表星期日。最後一個 1 代表1 號。
const firstDay = new Date(nowY, nowM - 1, 1).getDay();

// 本月所有日期先用空陣列
const daysDataArray = [];

// 補前面的空白
for (let i = 0; i < firstDay; i++) {
  daysDataArray.push("");
}

// 加入本月所有的日期資料，用 1~31 補，如果沒有 i+1 ，會變成 0~30
for (let i = 0; i < days; i++) {
  daysDataArray.push(i + 1);
}

// 呈現
let daysDisplay = "";

for (let i = 0; i < daysDataArray.length; i++) {
  daysDisplay += `<td class="border border-dark">${daysDataArray[i]}</td>`;

  // 每七個換一行
  if ((i + 1) % 7 === 0) {
    daysDisplay += `</tr><tr>`;
  }
}

data.innerHTML = `<tr class="border border-dark">${daysDisplay}</tr>`;

// ------------------日曆------------------

// ------------------選單控制------------------
// dataSet可以輔助使用

// 注意 js 命名不能用「-」，要選一個的話用 querySelector，選多個用 querySelectorAll，會是一個陣列。
const menuItems = document.querySelectorAll(".menu-item");

// addEventListener 只能一個一個加，不能一次加多個，所以要用 for 迴圈
for (let i = 0; i < menuItems.length; i++) {
  //js 滑鼠事件 https://www.w3schools.com/js/js_htmldom_events.asp
  // 常見的滑鼠事件包含 mouseover / mouseout，相當於 css 裡的 hover

  menuItems[i].addEventListener("mouseenter", function (event) {
    // classList https://developer.mozilla.org/zh-TW/docs/Web/API/Element/classList
    // classList.add 代表多加了一個class名稱（記得在 css 要設定該 class 的樣式）
    this.classList.add("enter");

    console.log(event.target.innerText);
    console.log(this.innerText);
    // event.target = this，用 this 就可以不用加參數
    // 加掛 innerText 可以獲得裡面的字
    // mouseover 印出的是 <a href="">關於我們</a>
    // mouseenter 印出的是 <li class="menu-item"><a href="">關於我們</a></li>

    // 嘗試用 if 來加icon
    // if (this.innerText === '首頁') {
    //   this.addEventListener('mouseenter', function () {
    //     this.innerHTML = `<a href=""><i class="fa fa-home" aria-hidden="true"></i>首頁</a>`
    //   })
    //   this.addEventListener('mouseleave', function () {
    //     this.innerHTML = `<a href="">首頁</a>`
    //   })
    // }
  });

  menuItems[i].addEventListener("mouseleave", function (event) {
    event.target.classList.remove("enter");
  });
}
// ------------------選單控制------------------

// ------------------csv 資料以表格呈現------------------
// 學生資料 row data：
// 只有重音符號可以換行
const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85
"黃中花",90,65,77
"王中頭",80,75,60
"李兩百",100,60,85`;

const dataTable = document.querySelector("#dataTable");

// 把raw data變成陣列，用\n換行分割，一行為一個值
const rawDataArray = rawData.split("\n");
// 現在rawDataArray[0]="學生姓名","國文","數學","英文"
// 現在rawDataArray[1]="陳小花",90,65,77
// 現在rawDataArray[2]=""張大頭",80,75,60
// 現在rawDataArray[3]=""李一百",100,60,85

// 把 rawDataArray[0]再用,分割變成陣列，一項為一個值
const headingsArray = rawDataArray[0].replaceAll('"', "").split(",");
// headings[0]="學生姓名"
// headings[1]="國文"
// headings[2]="數學"
// headings[3]="英文"

// 處理表頭的呈現，和日曆大同小異
let headingsDisplay = "";

for (let i = 0; i < headingsArray.length; i++) {
  headingsDisplay += `<th class="border border-dark"> ${headingsArray[i]} </th>`;
}

dataTable.innerHTML = `<thead>
<tr> ${headingsDisplay} </tr>
</thead>`;

// 處理表格row的呈現
let bodyDisplay = "";
// 從1開始是因為0是表頭
for (let i = 1; i < rawDataArray.length; i++) {
  const rows = rawDataArray[i].replaceAll('"', "").split(",");
  // rows = ["陳小花", "90", "65", "77"]
  // rows = ["張大頭", "80", "75", "60"]
  // rows = ["李一百", "100", "60", "85"]

  bodyDisplay += `<tr>`;

  for (let j = 0; j < rows.length; j++) {
    bodyDisplay += `<td class="border border-dark"> ${rows[j]} </td>`;
  }

  bodyDisplay += `</tr>`;
}

dataTable.innerHTML += `<tbody>
 ${bodyDisplay}
</tbody>`;

// ------------------csv 資料以表格呈現------------------
