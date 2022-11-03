import React from "react";
import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";
//https://www.youtube.com/watch?v=QHFkVpB1yr0

function Confetti() {
  const { width, height } = useWindowSize();
  return (
    <>
      <ReactConfetti width={width} height={height} />
    </>
  );
}
export default Confetti;
