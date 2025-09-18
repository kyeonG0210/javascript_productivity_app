const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); // # == id

const HIDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 표기
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 기본 동작(페이지 새로고침) 막음
  loginForm.classList.add(HIDDEN_CLASSNAME); 
  const username = loginInput.value; //input에서 가져옴
  localStorage.setItem(USERNAME_KEY, username); //Key: "저장 될 아이템의 이름", Value: username 변수
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //localStorage에서 가져옴

if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername); 
}
