const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //전체 HTML에서 찾는 것이 아니라 todoform에서만 찾음
// == const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li"); 
  const span = document.createElement("span");
  span.innerText = newTodo; //handleTodoSubmit에서 온 newTodo
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 비우기 전 값을 저장, input의 현재 value를 새로운 변수에 
  toDoInput.value = ""; // 빈 값을 넣음
  paintTodo(newTodo);
}

toDoForm.addEventListener("submit",handleTodoSubmit)