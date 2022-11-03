import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { quizList } from "./QuizInfo";
import Modal from "./Modal";

quizList.sort(() => Math.random() - 0.5);
let i = 0;

function Content() {
  //답
  const [answer, setAnswer] = useState(quizList[i]);

  //단계
  const [stage, setStage] = useState(1);

  //끝났음,
  const [isOver, setIsOver] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  //모달
  const [isShown, setIsShown] = useState(false);

  function checkAnswer(chosen) {
    //맞았을 떄
    if (chosen === answer.ans) {
      setIsCorrect(true);

      setAnswer(quizList[i]);
      answer.option.sort(() => Math.random() - 0.5);

      i++;

      if (stage !== quizList.length) {
        setStage(stage + 1);
      } else {
        setIsOver(true);
      }
    } else {
      setIsCorrect(false);
    }
  }

  function handleReload() {
    window.location.reload();
  }

  function handleModal() {
    setIsShown(!isShown);
  }

  function Quiz({ isOver, isCorrect }) {
    if (isOver) return <EndGame>끝!</EndGame>;
    return (
      <div>
        <QuizWrap>
          <QuizImg src={answer.src} />
          <QuizAnsOption>
            {answer.option.map((opt) => {
              return (
                <OptionButton
                  key={opt}
                  onClick={() => {
                    checkAnswer(opt);
                    handleModal();
                  }}
                >
                  {opt}
                </OptionButton>
              );
            })}
          </QuizAnsOption>
          {isShown && (
            <Modal
              isShown={isShown}
              isCorrect={isCorrect}
              handleModal={() => handleModal()}
            />
          )}
        </QuizWrap>
      </div>
    );
  }

  return (
    <div>
      <ContentWrap>
        <ScoreBoard>Stage {stage}</ScoreBoard>
        <Quiz isOver={isOver} isCorrect={isCorrect}></Quiz>
        <RestartButton onClick={() => handleReload()}>Restart!</RestartButton>
      </ContentWrap>
    </div>
  );
}

const ContentWrap = styled.div`
  max-width: 620px;

  margin: 0 auto;
  padding: 0;
`;

const ScoreBoard = styled.nav`
  width: 100%;
  height: 7vh;
  background-color: #79f116;

  font-size: 25px;
  text-align: center;
  line-height: 7vh;
`;

const QuizWrap = styled.div`
  width: 100%;
  height: 74vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuizImg = styled.img`
  width: 320px;
  height: 420px;

  margin: 10px;
`;

const QuizAnsOption = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
`;

const OptionButton = styled.button`
  width: 100px;
  height: 45px;

  margin: 15px 5px 5px 5px;
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
  width: 100%;
  height: 7vh;
  background-color: rgb(121, 241, 22);

  font-size: 25px;
  text-align: center;
  line-height: 7vh;

  border: none;

  &:hover {
    background-color: rgba(121, 241, 22, 0.6);
    cursor: pointer;
  }
`;

const EndGame = styled.div`
  max-width: 620px;
  height: 74vh;

  font-size: 100px;
  text-align: center;
  line-height: 70vh;
`;

export default Content;
