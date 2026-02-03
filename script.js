

const item = document.getElementById("todo-item");
const date = document.getElementById("todo-date");
const addBtn = document.getElementById("add-btn");
const listItems = document.getElementById("list-items");
const clearBtn = document.getElementById("clear-btn");

let list = JSON.parse(localStorage.getItem("list"))  || [];

renderListHTML();


//    Set to-do list item
addBtn.addEventListener("click", () => {
  console.log(item.value, date.value)
  if(item.value !== '' && date.value !== '') {
    let itemValue = item.value;
    let dateValue = date.value;
    list.push({itemValue,dateValue});

    localStorage.setItem("list",JSON.stringify(list));

    renderListHTML();

    item.value = ``;
    date.value = ``;

    console.log(list);
  } else {
    console.log("hjjjj");
  }
});

//    Clear the entire list
clearBtn.addEventListener("click",() => {
  list = [];
  localStorage.removeItem("list");
  listItems.innerHTML = ``;
});


//    Render the list itmes into the page
function renderListHTML() {
  let todoListHTML = ``;
  list.forEach(element => {
    let html = `
    <p>
      ${element.itemValue}
    </p>
    <p>
      ${element.dateValue}
    </p>
    <button id="delete-btn" class="delete-btn">
        Delete
    </button>`;
    todoListHTML += html;
  });
  listItems.innerHTML = todoListHTML;

  document.querySelectorAll(".delete-btn").forEach((e,index) => {
      e.addEventListener("click", () => {
      list.splice(index,1);
      renderListHTML();
    });
  })
}
