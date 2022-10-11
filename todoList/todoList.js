//1. 오늘만 보기, 내일만 보기, 함께 보기 버튼에 따라 레이아웃을 달리 합니다

const leftSection = document.querySelector(".main_left");
const rightSection = document.querySelector(".main_right");
const todayBtn = document.querySelector(".nav_todayOnly");
const tmrBtn = document.querySelector(".nav_tmrOnly");
const allBtn = document.querySelector(".nav_all");

todayBtn.addEventListener("click", () => {
  rightSection.style.width = "0%";
  leftSection.style.width = "100%";
});

tmrBtn.addEventListener("click", () => {
  leftSection.style.width = "0%";
  rightSection.style.width = "100%";
});

allBtn.addEventListener("click", () => {
  leftSection.style.width = "50%";
  rightSection.style.width = "50%";
});

//2. 입력을 완료하고 버튼을 누르면, 텍스와 삭제 버튼을 가진 li 를 ul 태그 안에 생성해줘요

const leftInput = document.querySelector(".main_left_input");
const rightInput = document.querySelector(".main_right_input");

const leftInputBox = document.querySelector(".main_left_inputbox");
const rightInputBox = document.querySelector(".main_right_inputbox");

const addBtn = document.querySelector(".main_right_input_btn");

leftInput.addEventListener("submit", (event) => {
  const leftTodo = document.querySelector(".main_left_todo_wrap");
  event.preventDefault();
  addToDo(leftTodo, leftInputBox);
});

// addBtn.addEventListener("click");

rightInput.addEventListener("submit", (event) => {
  const rightTodo = document.querySelector(".main_right_todo_wrap");
  event.preventDefault();
  addToDo(rightTodo, rightInputBox);
});

function addToDo(ul, inputBox) {
  const todo = inputBox.value;
  inputBox.value = "";

  const li = document.createElement("li");
  li.setAttribute("class", "main_todo");

  const h4 = document.createElement("h4");
  const btn = document.createElement("button");
  btn.innerText = "🗑";
  btn.setAttribute("class", "main_delete");
  btn.addEventListener("click", deleteTodo);

  h4.innerText = `${todo}`;
  li.appendChild(h4);
  li.appendChild(btn);

  ul.appendChild(li);
}

//3. 삭제 버튼을 누르면 해당 li 를 삭제해줘요

const deleteBtn = document.getElementsByClassName("main_delete");

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deleteTodo);
}
