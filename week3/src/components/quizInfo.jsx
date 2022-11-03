import mark from "../img/마크.jpeg";
import renjun from "../img/런쥔.jpeg";
import jeno from "../img/제노.jpeg";
import jaemin from "../img/재민.jpeg";
import haechan from "../img/해찬.jpeg";
import chenle from "../img/천러.JPG";
import jisung from "../img/지성.jpeg";

const quizList = [
  { src: mark, ans: "마크", option: ["마크", "재민", "천러", "런쥔", "지성"] },
  {
    src: renjun,
    ans: "런쥔",
    option: ["런쥔", "제노", "천러", "해찬", "지성"],
  },
  { src: jeno, ans: "제노", option: ["제노", "재민", "마크", "런쥔", "지성"] },
  {
    src: haechan,
    ans: "해찬",
    option: ["천러", "해찬", "천러", "런쥔", "마크"],
  },
  {
    src: jaemin,
    ans: "재민",
    option: ["제노", "재민", "해찬", "마크", "지성"],
  },
  {
    src: chenle,
    ans: "천러",
    option: ["천러", "재민", "마크", "제노", "지성"],
  },
  {
    src: jisung,
    ans: "지성",
    option: ["제노", "재민", "천러", "런쥔", "지성"],
  },
];

const optionList = quizList.map((option) => {
  return option.ans;
});

export { quizList, optionList };
