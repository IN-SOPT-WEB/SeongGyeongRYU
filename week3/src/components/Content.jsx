import styled from "styled-components";
import React, { useState } from "react";
import { quizArr, optionList } from "./quizInfo";

quizArr.sort(() => Math.random() - 0.5);
optionList.sort(() => Math.random() - 0.5);

function Content() {
  const [stage, setStage] = useState(1);
  const [isOver, setIsOver] = useState(0);
  const [isCorrect, setIsCorrect] = useState(0);

  function checkAnswer(answer) {
    if (answer === quizArr[stage - 1].ans) setStage(stage + 1);
    else {
      console.log("다시 시도하세요!");
    }
  }

  return (
    <div>
      <ContentWrap>
        <ScoreBoard>Stage {stage}</ScoreBoard>
        <QuizImg src={quizArr[stage - 1].src} />
        <QuizAnsOption>
          {optionList.map((option) => {
            return (
              <OptionButton key={option} onClick={() => checkAnswer(option)}>
                {option}
              </OptionButton>
            );
          })}
        </QuizAnsOption>
      </ContentWrap>
    </div>
  );
}

const ContentWrap = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScoreBoard = styled.nav`
  width: 100vw;
  height: 8vh;
  background-color: #79f116;

  font-size: 25px;
  text-align: center;
  line-height: 8vh;
`;

const QuizImg = styled.img`
  width: 320px;
  height: 420px;

  margin: 15px;
`;

const QuizAnsOption = styled.div`
  width: 50vw;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const OptionButton = styled.button`
  width: 120px;
  height: 45px;

  margin: 10px;
  border-radius: 20px;
  border: none;
  background-color: rgb(121, 241, 22);

  font-size: 18px;
  font-weight: 500;

  &:hover {
    background-color: rgba(121, 241, 22, 0.5);
    cursor: pointer;
  }
`;

export default Content;
