const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  li.appendChild(btn);
  li.appendChild(span);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

function submitToDo(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", submitToDo);