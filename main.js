const form = document.querySelector("#todo-form");
const todo_inp = document.querySelector("#todo");
const hour_inp = document.querySelector("#hour");
const min_inp = document.querySelector("#minute");
const tod_inp = document.querySelector("#tod");
const todosEl = document.querySelector(".todos");
const todos = [];
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  if (!todo_inp.value || !hour_inp.value || !min_inp.value) {
    return;
  }
  if (hour_inp.value < 10) {
    hour_inp.value = "0" + hour_inp.value;
  }
  if (min_inp.value < 10) {
    min_inp.value = "0" + min_inp.value;
  }
  const todo = {
    todo: todo_inp.value,
    time: `${hour_inp.value}:${min_inp.value} ${tod_inp.value}`,
  };
  addTodo(todos, todo);
  todo_inp.value = "";
  hour_inp.value = "";
  min_inp.value = "";
  todo_inp.focus();
  createTodoEl(todo);
}
function addTodo(arr, obj) {
  arr.push(obj);
  console.log(arr);
}
function createTodoEl(todo) {
  const todoEl = document.createElement("p");
  const timeEl = document.createElement("span");
  const checkBtn = document.createElement("button");
  const xBtn = document.createElement("button");
  todoEl.classList.add("todo");
  timeEl.classList.add("time");
  checkBtn.classList.add("todo-check");
  xBtn.classList.add("todo-x");
  checkBtn.addEventListener("click", checkTodo);
  xBtn.addEventListener("click", deleteTodo);
  checkBtn.innerHTML = "&check;";
  xBtn.innerHTML = "&times;";

  const todoText = document.createTextNode(todo.todo);
  const timeText = document.createTextNode(todo.time);
  timeEl.appendChild(timeText);
  todoEl.appendChild(timeEl);
  todoEl.appendChild(todoText);
  todoEl.appendChild(checkBtn);
  todoEl.appendChild(xBtn);
  todosEl.appendChild(todoEl);
}
function deleteTodo(e) {
  e.target.parentNode.remove();
}
function checkTodo(e) {
  console.log(123);
  e.target.parentNode.style.textDecoration = "line-through";
}
