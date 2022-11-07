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

const input = document.querySelectorAll(".main_input");

const inputBox = document.querySelectorAll(".main_inputbox");

const addBtn = document.querySelectorAll(".main_input_btn");

for (let i = 0; i < input.length; i++) {
  console.log(inputBox[i]);
  const todo = document.querySelectorAll(".main_todo_wrap");

  input[i].addEventListener("submit", (e) => {
    e.preventDefault();
    addToDo(todo[i], inputBox[i]);
  });

  addBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    addToDo(todo[i], inputBox[i]);
  });
}

function addToDo(ul, inputContent) {
  const todo = inputContent.value;

  inputContent.value = "";

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
