import styled from "styled-components";
import React, { useState } from "react";
import { quizArr, optionList } from "./quizInfo";

quizArr.sort(() => Math.random() - 0.5);
optionList.sort(() => Math.random() - 0.5);

function Content() {
  const [stage, setStage] = useState(1);
  const [isOver, setIsOver] = useState(0);

  function checkAnswer(answer) {
    if (answer === quizArr[stage - 1].ans) {
      if (stage !== quizArr.length) {
        //정답! 다음 스테이지 모달뜨게
        setStage(stage + 1);
      } else {
        setIsOver(1);
      }
    } else {
      //다시 도전하세요 모달 뜨게
      console.log("다시 도전하세요!");
    }
  }

  function handleReload() {
    window.location.reload();
  }

  function Quiz() {
    if (isOver) return <EndGame>끝!</EndGame>;
    else
      return (
        <div>
          <QuizWrap>
            <QuizImg src={quizArr[stage - 1].src} />
            <QuizAnsOption>
              {optionList.map((option) => {
                return (
                  // <OptionButton key={option} onClick={checkAnswer(option)}>
                  <OptionButton
                    key={option}
                    onClick={() => checkAnswer(option)}
                  >
                    {option}
                  </OptionButton>
                );
              })}
            </QuizAnsOption>
          </QuizWrap>
        </div>
      );
  }

  return (
    <div>
      <ContentWrap>
        <ScoreBoard>Stage {stage}</ScoreBoard>
        <Quiz></Quiz>
        <RestartButton onClick={() => handleReload()}>Restart!</RestartButton>
      </ContentWrap>
    </div>
  );
}

const ContentWrap = styled.div`
  margin: 0;
  padding: 0;
`;

const ScoreBoard = styled.nav`
  width: 100vw;
  height: 8vh;
  background-color: #79f116;

  font-size: 25px;
  text-align: center;
  line-height: 8vh;
`;

const QuizWrap = styled.div`
  width: 100vw;
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuizImg = styled.img`
  width: 320px;
  height: 420px;

  margin: 15px;
`;

const QuizAnsOption = styled.div`
  display: flex;
  justify-content: center;
`;

const OptionButton = styled.button`
  width: 120px;
  height: 45px;

  margin: 10px;
  border-radius: 20px;
  border: none;
  background-color: rgb(200, 241, 22);

  font-size: 18px;
  font-weight: 500;

  &:hover {
    background-color: rgba(255, 241, 50);
    cursor: pointer;
  }
`;

const RestartButton = styled.button`
  width: 100vw;
  height: 8vh;
  background-color: rgb(121, 241, 22);

  font-size: 25px;
  text-align: center;
  line-height: 8vh;

  border: none;
  margin-top: 5px;

  &:hover {
    background-color: rgba(121, 241, 22, 0.6);
    cursor: pointer;
  }
`;

const EndGame = styled.div`
  width: 100vw;
  height: 70vh;

  font-size: 100px;
  text-align: center;
  line-height: 70vh;
`;

export default Content;
