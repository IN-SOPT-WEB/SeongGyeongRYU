import mark from "../img/마크.jpeg";
import renjun from "../img/런쥔.jpeg";
import jeno from "../img/제노.jpeg";
import jaemin from "../img/재민.jpeg";
import haechan from "../img/해찬.jpeg";
import chenle from "../img/천러.JPG";
import jisung from "../img/지성.jpeg";

const quizList = [
  { src: mark, ans: "마크" },
  { src: renjun, ans: "런쥔" },
  { src: jeno, ans: "제노" },
  { src: haechan, ans: "해찬" },
  { src: jaemin, ans: "재민" },
  { src: chenle, ans: "천러" },
  { src: jisung, ans: "지성" },
];

const optionList = quizList.map((option) => {
  return option.ans;
});

export { quizList, optionList };
