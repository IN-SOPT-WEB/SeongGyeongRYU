import img1 from "../assets/마크.jpeg";
import img2 from "../assets/런쥔.jpeg";
import img3 from "../assets/제노.jpeg";
import img4 from "../assets/해찬.jpeg";
import img5 from "../assets/재민.jpeg";
import img6 from "../assets/천러.JPG";
import img7 from "../assets/지성.jpeg";

const quizArr = [
  { src: img1, ans: "마크" },
  { src: img2, ans: "런쥔" },
  { src: img3, ans: "제노" },
  { src: img4, ans: "해찬" },
  { src: img5, ans: "재민" },
  { src: img6, ans: "천러" },
  { src: img7, ans: "지성" },
];

const optionList = quizArr.map((quiz) => {
  return quiz.ans;
});

export { quizArr, optionList };
