//1. 오늘만 보기, 내일만 보기, 함께 보기 버튼에 따라 레이아웃을 달리 합니다

leftSection = document.querySelector(".main_left");
rightSection = document.querySelector(".main_right");
todayBtn = document.querySelector(".nav_todayOnly");
tmrBtn = document.querySelector(".nav_tmrOnly");
allBtn = document.querySelector(".nav_all");

todayBtn.addEventListener("click", () => {
  // rightSection 없어지게
  rightSection.style.width = "0%";

  // leftSection 넓어지게
  leftSection.style.width = "100%";
});

tmrBtn.addEventListener("click", () => {
  //leftSection 없어지게
  leftSection.style.width = "0%";

  // rightSection 넓어지게
  rightSection.style.width = "100%";
});

allBtn.addEventListener("click", () => {
  leftSection.style.width = "50%";
  rightSection.style.width = "50%";
});
