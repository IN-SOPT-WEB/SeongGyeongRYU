import React from "react";
import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";

function Confetti({ isCorrect }) {
  const { width, height } = useWindowSize();
  if (isCorrect)
    return (
      <>
        <ReactConfetti width={width} height={height} />
      </>
    );
}
export default Confetti;
