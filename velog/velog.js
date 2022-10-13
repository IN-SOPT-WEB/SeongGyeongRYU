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
const modal = document.querySelector(".card_modal");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log(modal);
    modal.classList.add("showshow");
    // modal.classList.add("show");
    //  이거 왜 안먹지
  });
});
