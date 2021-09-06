// JavaScript 陣列處理方法 [filter(), find(), forEach(), map(), every(), some(), reduce()] https://wcc723.github.io/javascript/2017/06/29/es6-native-array/

// ------------------for / filter------------------
const aArray = [1, 2, 3, 4, 5];

// 透過for 回傳沒有3的陣列
const bArray = [];
for (let i = 0; i < aArray.length; i++) {
  // if continue代表符合條件的話就跳過，不執行一次，接著再繼續執行
  if (aArray[i] === 3) continue;

  // 把aArray從後面push進bArray
  bArray.push(aArray[i]);
}

// 透過filter回傳沒有3的陣列
const cArray = aArray.filter(function (value) {
  return value !== 3;
});

//filter 改成箭頭函式，箭頭函式不用function也不用return
const dArray = aArray.filter((value) => value !== 3);
// ------------------for / filter------------------

// ------------------for迴圈 / map------------------
// for 迴圈的寫法
let weekDayDisplay = "";

for (let i = 0; i < weekList.length; i++) {
  weekDayDisplay += `<th> ${weekList[i]} </th>`;
}
title.innerHTML = `<tr> ${weekDayDisplay} </tr>`;

// map + 箭頭函式的寫法（箭頭函式不用return）
const weekListMap = weekList.map((v) => `<th> ${v} </th>`).join("");
title.innerHTML = `<tr> ${weekListMap} </tr>`;
// ------------------for迴圈 / map------------------

// ------------------childnode------------------
<div class="div">
  <p>123</p>
  <a href="">
    44<p>33</p>
  </a>
  <p>333</p>
</div>;

const div = document.querySelector(".div");

const divnodelist = div.childNodes;

console.log(divnodelist);
// 會印出 NodeList(3) [p, a, p]，但中間不能有斷行或空格
// ------------------childnode------------------

// ------------------promise------------------
// 關鍵字： new Promise / resolve / reject / new Error("")
function getData(name) {
  if (name == "Will") {
    return new Promise((resolve, reject) => {
      resolve({
        name: "Will",
        age: Math.floor(Math.random() * 30),
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      reject(new Error("wrong"));
    });
  }
}

function getMovie(age) {
  if (age < 12) {
    return new Promise((resolve, reject) => {
      resolve({
        text: "cartoon",
      });
    });
  } else if (age < 18) {
    return new Promise((resolve, reject) => {
      resolve({
        text: "teen",
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      reject(new Error("wrong"));
    });
  }
}

getData("Will")
  .then((obj) => {
    console.log(obj.age);
    return getMovie(obj.age);
  })
  .then((msg) => {
    console.log(msg.text);
  })
  .catch((e) => {
    console.log(e);
  });

// ------------------promise------------------

// ------------------async / await------------------
async function showMovie() {
  const obj = await getData("Will");
  const movie = await getMovie(obj.age);
  console.log(movie.text);
}
// ------------------async / await------------------
