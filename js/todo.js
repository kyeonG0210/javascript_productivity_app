const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// 시작 시 localstorage의 old toDos
let toDos = []; //const -> let으로 변경, 업데이트 가능하게 함

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
  // JSON.stringify takes an JS object and turns it into string
}

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
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit",handleTodoSubmit)

// function sayHello(item){
//   console.log("This is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  // JSON.parse takes a string and turns it into JS object
  // parsedToDos.forEach(sayHello); //function 사용
  toDos = parsedToDos; //toDos에 parsedToDos를 넣어줌
  parsedToDos.forEach(paintTodo); //arrow function
  // forEach는 array의 각 item에 대해 function을 실행하게 해줌
}