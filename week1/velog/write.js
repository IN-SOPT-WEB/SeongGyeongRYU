//1.input 에 텍스트를 입력하고 엔터를 누르면, 태그가 추가(CREATE)된다

const tagForm = document.querySelector(".tag_form");
const tagInput = document.querySelector(".tag_input");

const TAGS_KEY = "tags";

let tags = [];

//로컬스토리지에 태그를 저장하는 함수
function saveTag() {
  localStorage.setItem(TAGS_KEY, JSON.stringify(tags));
}

const savedTags = localStorage.getItem(TAGS_KEY);

if (savedTags != null) {
  //JSON.parse : 로컬스토리지에서 가져온 배열 모양의 스트링을 진짜 배열로 만들어줌
  const parsedTags = JSON.parse(savedTags);

  //write.js를 실행할 때마다 tags가 빈 배열로 초기화되는 것을 보완해주는 역할 (이전 기록을 살려내는 역할)
  tags = parsedTags;

  //forEach : paintTag의 인자로 parsedTags의 요소를 하나씩 넘겨줌
  parsedTags.forEach(paintTag); //새로고침 할 때마다 이전에 추가한 요소를 paint해주는 역할
}

//태그를 화면에 보여주는 함수
function paintTag(newTagObj) {
  const tagContent = newTagObj.text;

  const tag = document.createElement("div");
  tag.id = newTagObj.id;
  tag.setAttribute("class", "tag");

  tag.innerText = tagContent;
  tag.addEventListener("click", deleteTag);

  tagForm.insertBefore(tag, tagInput);
}

//태그를 추가하고 저장해서 화면에 보여주는 함수
function addTag(event) {
  event.preventDefault();
  const newTag = tagInput.value;
  tagInput.value = "";

  //같은 태그를 입력했을 때는 태그가 추가되지 않도록
  for (let key of tags) {
    //객체의 value값에 접근하려면 for...of
    if (key.text === newTag) {
      return;
    }
  }

  const newTagObj = {
    text: newTag,
    id: Date.now(), //랜덤 아이디 부여
  };

  tags.push(newTagObj);
  paintTag(newTagObj);
  saveTag();
}

tagForm.addEventListener("submit", addTag);

//태그를 클릭하면 삭제하는 함수

function deleteTag(event) {
  const targetTag = event.target;
  targetTag.remove();
  //아이템 지우고 남은 애들끼리 다시 배열을 만드는 코드
  //filter 내의 함수는 무조건 true를 리턴해야함, false를 리턴하면 그 요소 빼버림
  tags = tags.filter((tag) => tag.id !== parseInt(targetTag.id));
  saveTag();
}
