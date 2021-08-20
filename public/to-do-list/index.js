const add = document.querySelector('#add')
const input = document.querySelector('#input')
const item = document.querySelector('#item')
const check = document.querySelector('.check-icon')

const itemList = []

add.addEventListener('click', function () {
  if (input.value.trim() == 0) {
    // 如果輸入資料是空格或沒有輸入

    swal('請輸入內容', '', 'warning') // sweet alert
  } else {
    itemList.push(input.value) // 增加輸入的東西到陣列
    console.log(itemList)

    input.value = '' // 送出之後，清空輸入欄
  }
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
})

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
