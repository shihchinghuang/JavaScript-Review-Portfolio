// ------------------生日下拉選單------------------
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const date = document.querySelector("#date");
const sendDate = document.querySelector("#sendDate");
const message = document.querySelector("#message");

let selectedYear = 0;
let selectedMonth = 0;
let selectedDate = 0;

function createOption(min, max) {
  let options = '<option value="0">- 請選擇 -</option>';
  for (let i = min; i < max + 1; i++) {
    options += `<option value="${i}" id="">${i}</option>`;
  }
  return options;
}

// switch (month.value) {
//   case '2':
//     date.innerHTML = createOption(1, 28)
//     break
// }

year.innerHTML = createOption(1911, 2020);
month.innerHTML = createOption(1, 12);
// date.innerHTML = createOption(1, 31)

year.addEventListener("change", function () {
  selectedYear = year.value;
});

month.addEventListener("change", function () {
  selectedMonth = month.value;

  if (selectedYear !== "0" && selectedMonth !== "0") {
    // 選了年和月之後才能開放選日期
    date.disabled = false;

    // 要得到某年的某個月有幾天，可以用new Date(y, m, 0).getDate()，例如 2019 年的 9 月就是使用new Date(2019, 9, 0).getDate()
    const maxDate = new Date(selectedYear, selectedMonth, 0).getDate();

    date.innerHTML = createOption(1, maxDate);
  }
});

date.addEventListener("change", function () {
  selectedDate = date.value;
});

// 檢查是否滿18歲
sendDate.addEventListener("click", function () {
  // 取得目前時間
  const now = new Date();

  const nowY = now.getFullYear();
  const nowM = now.getMonth() + 1; //回傳為0-11，所以要+1
  const nowD = now.getDate();

  // 第一步判斷年份，如果大於18就直接判斷已滿18歲
  if (nowY - selectedYear > 18) {
    message.innerHTML = "已滿18歲";

    // 第二步年份如果相等，再判斷月份，如果大於18就直接判斷已滿18歲
  } else if (nowY - selectedYear === 18 && selectedMonth < nowM) {
    message.innerHTML = "已滿18歲";

    // 第三部如果年份和月份都相等，再判斷日期，大於等於18再判斷已滿18歲
  } else if (
    nowY - selectedYear === 18 &&
    nowM == selectedMonth &&
    selectedDate <= nowD
  ) {
    message.innerHTML = "已滿18歲";

    // 其餘即為未滿18歲
  } else {
    message.innerHTML = "未滿18歲";
  }
});

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

// ------------------會員驗證------------------
const name = document.querySelector("#name");
const address = document.querySelector("#address");
const account = document.querySelector("#account");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#passwordCheck");
const send = document.querySelector("#send");
const message = document.querySelector("#message");

send.addEventListener("click", function () {
  if (!name.value) {
    alert("沒填姓名");
  }
  if (password.value !== passwordCheck.value) {
    alert("密碼錯誤");
  }
});
// ------------------會員驗證------------------
