import mark from "../img/마크.jpeg";
import renjun from "../img/런쥔.jpeg";
import jeno from "../img/제노.jpeg";
import jaemin from "../img/재민.jpeg";
import haechan from "../img/해찬.jpeg";
import chenle from "../img/천러.JPG";
import jisung from "../img/지성.jpeg";

const quizList = [
  {
    src: mark,
    answer: "마크",
    optionList: ["마크", "재민", "천러", "런쥔", "지성"],
  },
  {
    src: renjun,
    answer: "런쥔",
    optionList: ["런쥔", "제노", "천러", "해찬", "지성"],
  },
  {
    src: jeno,
    answer: "제노",
    optionList: ["제노", "재민", "마크", "런쥔", "지성"],
  },
  {
    src: haechan,
    answer: "해찬",
    optionList: ["천러", "해찬", "천러", "런쥔", "마크"],
  },
  {
    src: jaemin,
    answer: "재민",
    optionList: ["제노", "재민", "해찬", "마크", "지성"],
  },
  {
    src: chenle,
    answer: "천러",
    optionList: ["천러", "재민", "마크", "제노", "지성"],
  },
  {
    src: jisung,
    answer: "지성",
    optionList: ["제노", "재민", "천러", "런쥔", "지성"],
  },
];

export { quizList };
