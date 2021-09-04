const result = document.querySelector("#result");
const input = document.querySelector("#input");
// empty array put fetched data
const listItem = [];

// fetch api
async function getData() {
  // res = response the fetched data
  const res = await fetch("https://randomuser.me/api/?results=50");

  // await res.json(): get all data as object
  // {results}: all data results
  const { results } = await res.json();
  console.log(results);
  //  clear reults
  result.innerHTML = "";

  results.forEach((user) => {
    let li = document.createElement("li");
    listItem.push(li);
    li.innerHTML = `
    <img src="${user.picture.thumbnail}" alt="">
                <div>
                    <h5>${user.name.last} ${user.name.first}</h5>
                    <small><i class="fas fa-map-marker-alt"></i>${user.location.country}</small>
                </div>
                `;
    result.appendChild(li);
  });
}
getData();

// filter data
input.addEventListener("input", search);

function search(e) {
  console.log(e.target.value);
  listItem.forEach((item) => {
    if (item.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
