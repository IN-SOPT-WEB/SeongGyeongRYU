import mark from "../img/마크.jpeg";
import renjun from "../img/런쥔.jpeg";
import jeno from "../img/제노.jpeg";
import jaemin from "../img/재민.jpeg";
import haechan from "../img/해찬.jpeg";
import chenle from "../img/천러.JPG";
import jisung from "../img/지성.jpeg";

export interface Quiz {
  src: string;
  ans: string;
  option: string[];
}

const quizList: Quiz[] = [
  { src: mark, ans: "마크", option: ["재민", "천러", "런쥔", "마크", "지성"] },
  {
    src: renjun,
    ans: "런쥔",
    option: ["제노", "런쥔", "천러", "해찬", "지성"],
  },
  { src: jeno, ans: "제노", option: ["제노", "재민", "마크", "런쥔", "지성"] },
  {
    src: haechan,
    ans: "해찬",
    option: ["천러", "제노", "해찬", "마크", "런쥔"],
  },
  {
    src: jaemin,
    ans: "재민",
    option: ["제노", "해찬", "마크", "재민", "지성"],
  },
  {
    src: chenle,
    ans: "천러",
    option: ["재민", "마크", "천러", "제노", "지성"],
  },
  {
    src: jisung,
    ans: "지성",
    option: ["제노", "재민", "천러", "런쥔", "지성"],
  },
];

export { quizList };
