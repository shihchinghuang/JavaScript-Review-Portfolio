const add = document.querySelector('#add')
const input = document.querySelector('#input')
const item = document.querySelector('#item')
const check = document.querySelector('.check-icon')

add.addEventListener('click', function () {
  const itemList = []

  if (input.value.trim() == 0) {
    // 如果輸入資料是空格或沒有輸入

    swal('請輸入內容', '', 'warning') // sweet alert
  } else {
    saveTodo(input.value) //把資料存進localstorage

    itemList.unshift(input.value) // 增加輸入的東西到陣列，用unshift讓新輸入的在最上面，push會讓新輸入的在最下面
    console.log(itemList)

    for (let i = 0; i < itemList.length; i++) {
      item.innerHTML += `<li class="d-flex justify-content-between"> ${itemList[i]}
            <span class="check-icon">
                <i class="far fa-check-circle"></i>
            </span>
            <span class="edit-icon">
                <i class="far fa-edit"></i>
            </span>
            <span class="trash-icon">
                <i class="far fa-trash-alt"></i>
            </span>
        </li>`
    }

    input.value = '' // 送出之後，清空輸入欄
  }
})

// localstorage 存資料
function saveTodo(todo) {
  let todos = []

  if (localStorage.getItem('todos') == null) {
    // 如果localtorage裡面沒有todos這個陣列，todos名字是隨便取的
    todos = [] // 就建立一個空陣列
  } else {
    // 如果已經有了

    todos = JSON.parse(localStorage.getItem('todos')) // 就把拿到的東西用localstorage看得懂的方式存進去 JSON.parse()把json字串變成js的數值
  }

  todos.unshift(todo) // 加入新的資料
  localStorage.setItem('todos', JSON.stringify(todos)) // 把東西存進localstorage JSON.stringify()是將js數值變json字串
}

// localstorage 取資料
function viewTodo(todo) {
  if (localStorage.getItem('todos') !== null) {
    // 如果localtorage裡面沒有todos這個陣列

    item.innerHTML = JSON.parse(localStorage.getItem('todos'))
  }
}

// check.addEventListener('click', function () {
//   alert('d')
// })

// add.onClick = () => {
//   let getLocalStorage = localStorage.getItem('new todo')

//   if (getLocalStorage == null) {
//     listArray = []
//   } else {
//     listArray = JSON.parse(getLocalStorage)
//   }
//   listArray.push(input.value)
//   localStorage.setItem('new todo', JSON.stringify('listArray'))
// }

// check.addEventListener('click', function () {

// })
