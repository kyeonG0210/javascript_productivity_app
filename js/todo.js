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
  // console.log(typeof li.id); //string
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id를 int로 변환(toDo.id가 int이므로))
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li"); 
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; 
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
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
  // **중요** forEach는 array의 각 item에 대해 function을 실행하게 해줌
}