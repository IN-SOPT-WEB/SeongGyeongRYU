const dropDownSection = document.querySelector(".nav_period");
const dropDownBtn = document.querySelector(".nav_period_btn");
const dropDownMenu = document.querySelector(".nav_period_dropdown");

const options = document.querySelectorAll(".nav_period_dropdown_option");
console.log(options);

dropDownBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("show");
});

// 이게 왜 안되는 지 생각하는 중입니다..
// dropDownBtn.addEventListener("blur", () => {
//   dropDownMenu.classList.remove("show");
// });

options.forEach((option) => {
  option.addEventListener("click", (event) => {
    // dropDownBtn.firstChild.data = event.currentTarget.innerText;
    dropDownBtn.firstChild.data = event.currentTarget.textContent.trim();
    event.currentTarget.classList.add("selected");
    dropDownMenu.classList.remove("show");

    for (let opt of options) {
      if (opt !== event.currentTarget) {
        opt.classList.remove("selected");
      }
    }
  });
});

//카드 클릭하면 모달
const cards = document.querySelectorAll(".card");
const cardSection = document.querySelector(".card_section");
const body = document.querySelector("body");

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    const modal = event.currentTarget.cloneNode(true);
    const modalWrap = document.createElement("div");
    modalWrap.setAttribute("class", "modal_wrap");
    body.appendChild(modalWrap);

    modal.setAttribute("class", "card_modal");
    modalWrap.appendChild(modal);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "card_modal_delete_btn");
    deleteBtn.innerText = "❌";
    modalWrap.appendChild(deleteBtn);

    // 페이지 스크롤 막기
    body.classList.add("scrollLock");

    deleteBtn.addEventListener("click", () => {
      modalWrap.remove();
      body.classList.remove("scrollLock");
    });
  });
});

// 슬라이더 버튼 클릭하면 샥 넘어가게
const sliderWrap = document.querySelector(".slider_card_wrap");
const sliderLeftBtn = document.querySelector(".slider_left_btn");
const sliderRightBtn = document.querySelector(".slider_right_btn");
let currentNum = 1;
let position = 0;

sliderLeftBtn.addEventListener("click", () => {
  if (currentNum <= 1) return;
  position += 1056;
  sliderWrap.style.transform = `translateX(${position}px)`;
  currentNum -= 1;
});

sliderRightBtn.addEventListener("click", () => {
  if (currentNum >= 3) return;
  position -= 1056;
  sliderWrap.style.transform = `translateX(${position}px)`;
  currentNum += 1;
});
