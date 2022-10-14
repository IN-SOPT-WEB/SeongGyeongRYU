const dropDownSection = document.querySelector(".nav_period");
const dropDownBtn = document.querySelector(".nav_period_btn");
const dropDownMenu = document.querySelector(".nav_period_dropdown");

const options = document.querySelectorAll(".nav_period_dropdown_option");
console.log(options);

dropDownBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("show");
});

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
