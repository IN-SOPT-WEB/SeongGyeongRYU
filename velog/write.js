//1.input 에 텍스트를 입력하고 엔터를 누르면, 태그가 추가(CREATE)된다

const tagForm = document.querySelector(".tag_form");
const tagInput = document.querySelector(".tag_input");

let tags = [];

//태그를 화면에 보여주는 함수
function paintTag(newTagObj) {
  const tagContent = newTagObj.text;
  tagContent.id = newTagObj.id;

  const tag = document.createElement("div");
  tag.setAttribute("class", "tag");

  tag.innerText = tagContent;
  tag.addEventListener("click", deleteTag);

  tagForm.insertBefore(tag, tagInput);
}

//태그를 추거하고 저장해서 화면에 보여주는 함수
function addTag(event) {
  event.preventDefault();
  const newTag = tagInput.value;
  tagInput.value = "";

  const newTagObj = {
    text: newTag,
    id: Date.now(), //랜덤 아이디 부여
  };

  tags.push(newTagObj);
  paintTag(newTagObj);
}

tagForm.addEventListener("submit", addTag);

//2. 태그 클릭하면 삭제 되게하기

function deleteTag(event) {
  const targetTag = event.target;
  targetTag.remove();
}
