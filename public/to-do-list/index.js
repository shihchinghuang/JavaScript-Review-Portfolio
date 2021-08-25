// 0823 待辦
// select 要選兩次才會觸發篩選
// select 的排版，或是換成按鈕看看
// 研究編輯，或把編輯 icon 拿掉
// sweet alert 微調

const add = document.querySelector("#add");
const input = document.querySelector("#input");
const todo = document.querySelector("#todo");
const filter = document.querySelector(".filter");

// 載入畫面游標停在 input（也可以在html input 加 autofocus）：
// <input autofocus type="text" id="input" placeholder="Add your new todo here...">
// window.onload() 是網頁載完後執行的杜做
window.onload = function () {
  input.focus();
};

// 頁面 load 進來就會取得上次存在 localstorage 的資料
document.addEventListener("DOMContentLoaded", getLocalTodos);

add.addEventListener("click", addTodo);
// add.addEventListener("keypress", addTodo);
todo.addEventListener("click", deleteCheckTodo);
filter.addEventListener("click", filterTodo);

// if (e.key === "Enter") {
//   addTodo();
// }

//-----新增待辦事項-----
function addTodo(e) {
  // 防止表單被送出
  e.preventDefault();

  if (input.value.trim() == 0) {
    // 如果輸入資料是空格或沒有輸入

    swal("請輸入內容", "", "warning"); // sweet alert
  } else {
    // 製造以下東西
    // <div class="item">
    //   <li></li>
    //   <i class="check-icon far fa-check-circle"></i>
    //   <i class="edit-icon far fa-edit"></i>
    //   <i class="trash-icon far fa-trash-alt"></i>
    // </div>

    // 製造 <div class="item"></div>
    const item = document.createElement("div");
    item.classList.add("item", "mb-2");

    // 製造 <li></li>
    const newTodo = document.createElement("li");
    newTodo.innerText = `${input.value}`;
    item.appendChild(newTodo);

    // 製造打勾
    const checkIcon = document.createElement("i");
    checkIcon.innerHTML = "";
    checkIcon.classList.add("check-icon", "far", "fa-check-circle");
    newTodo.appendChild(checkIcon);

    // 製造編輯
    const editIcon = document.createElement("i");
    editIcon.innerHTML = "";
    editIcon.classList.add("edit-icon", "far", "fa-edit");
    newTodo.appendChild(editIcon);

    // 製造刪除
    const trashIcon = document.createElement("i");
    trashIcon.innerHTML = "";
    trashIcon.classList.add("trash-icon", "far", "fa-trash-alt");
    newTodo.appendChild(trashIcon);

    // console.log(item)
    // 整個完成
    todo.appendChild(item);

    // 輸入之後存進 localstorage
    saveLocalTodos(input.value);
    // 清空輸入框
    input.value = "";
  }
}

//-----刪除 / 勾選完成的待辦事項-----
function deleteCheckTodo(e) {
  // 先測一下按到哪裡
  // console.log(e.target.parentElement.parentElement)
  const click = e.target;

  //-----刪除待辦事項-----
  // 第0個class是trash-icon的話
  if (click.classList[0] === "trash-icon") {
    const todoItem = click.parentElement.parentElement;

    // 做刪除的動畫（但是是 transform 不是 animation）
    todoItem.classList.add("fall");

    // todoItem.remove() 用remove無法搭配動畫

    // 加掛事件監聽器在 transition結束之後，所以是transition「end」觸發函式
    todoItem.addEventListener("transitionend", function () {
      // console.log('deleted')
      todoItem.remove();
    });

    // 按刪除後從 localstorage 也刪除
    removeLocalTodos(todo);
  }

  //-----完成待辦事項後勾選-----
  if (click.classList[0] === "check-icon") {
    const todoItem = click.parentElement.parentElement;
    todoItem.classList.toggle("checked");
  }
}

//-----篩選已完成 / 未完成的待辦事項-----
function filterTodo(e) {
  const todos = todo.childNodes;
  console.log("select");

  todos.forEach(function (t) {
    // value 指的是 html 中 <option value="all">All</option> 的 value
    switch (e.target.value) {
      case "all":
        t.style.display = "flex";
        break;
      case "completed":
        if (t.classList.contains("checked")) {
          t.style.display = "flex";
          console.log("check");
        } else {
          t.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!t.classList.contains("checked")) {
          t.style.display = "flex";
          console.log("not");
        } else {
          t.style.display = "none";
        }
        break;
    }
  });
}

//-----將資料存進 localstorage-----
function saveLocalTodos(t) {
  // 檢查localtorage裡面有沒有todos，todos名字是隨便取的
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = []; // 沒有的話就給空陣列
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    // 有的話就把拿到的陣列從 localstorage 取出，JSON.parse() 把json 字串變成 js 的數值
  }
  todos.push(t); // 加入新的資料（新的在最後面，如果新的要在最前面，用push）
  localStorage.setItem("todos", JSON.stringify(todos));
  // 把東西存進 localstorage，JSON.stringify() 是將 js 數值變 json 字串
}

//-----從 localstorage 取出資料-----
function getLocalTodos() {
  // 檢查localtorage裡面有沒有todos，todos名字是隨便取的
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = []; // 沒有的話就給空陣列
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    // 有的話就把拿到的陣列從 localstorage 取出，JSON.parse() 把json 字串變成 js 的數值
  }

  todos.forEach(function (t) {
    // ---把上面新增待辦事項的部分複製過來---

    // 製造 <div class="item"></div>
    const item = document.createElement("div");
    item.classList.add("item", "mb-2");

    // 製造 <li></li>
    const newTodo = document.createElement("li");
    // newTodo.innerText = `${input.value}` 這行不用了，改成下一行
    newTodo.innerText = t;
    item.appendChild(newTodo);

    // 製造打勾
    const checkIcon = document.createElement("i");
    checkIcon.innerHTML = "";
    checkIcon.classList.add("check-icon", "far", "fa-check-circle");
    newTodo.appendChild(checkIcon);

    // 製造編輯
    const editIcon = document.createElement("i");
    editIcon.innerHTML = "";
    editIcon.classList.add("edit-icon", "far", "fa-edit");
    newTodo.appendChild(editIcon);

    // 製造刪除
    const trashIcon = document.createElement("i");
    trashIcon.innerHTML = "";
    trashIcon.classList.add("trash-icon", "far", "fa-trash-alt");
    newTodo.appendChild(trashIcon);

    // console.log(item)
    // 整個完成
    todo.appendChild(item);

    // 輸入之後存進 localstorage
    // saveLocalTodos(input.value)
  });
}

//-----從 localstorage 刪除資料-----
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  // 找到第零個的文字
  // console.log(todo.children[0].innerText)
  const todoIndex = todo.children[0].innerText;
  // 找到某文字在第幾個
  // console.log(todos.indexOf('ddd'))
  // todos.indexOf(todoIndex) 指你想移除第幾個，後面的 1 是指你想移除幾個
  todos.splice(todos.indexOf(todoIndex), 1);

  // 以上事情的簡化版，要從一個陣列中移除東西
  // const todos = ['amy', 'betty', 'cindy']
  // console.log(todos.indexOf('amy')) //找出 amy 在陣列中是第幾個，會印出 0
  // const amyIndex = todos.indexOf('amy')
  // todos.splice(amyIndex, 1) // 從陣列中刪除 amyIndex，而且只刪 1 個
  // console.log(todos) // 會印出 ['betty', 'cindy']

  // 再存回 localstorage，讓 localstorage 裡的資料也刪除
  localStorage.setItem("todos", JSON.stringify(todos));
}
