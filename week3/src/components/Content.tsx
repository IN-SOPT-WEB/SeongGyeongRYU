import styled from "styled-components";
import React, { useState } from "react";
import { quizList } from "./QuizInfo";
import Modal from "./Modal";
import { Quiz } from "./QuizInfo";
import Confetti from "./Confetti";

interface QuizProps {
  isOver: boolean;
  isCorrect: boolean;
}

quizList.sort(() => Math.random() - 0.5);
let i = 0;

function Content() {
  const [answer, setAnswer] = useState<Quiz>(quizList[i]);
  const [stage, setStage] = useState<number>(1);

  const [isOver, setIsOver] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const [isShown, setIsShown] = useState(false);

  function checkAnswer(chosen: string) {
    if (chosen === answer.ans) {
      i++;
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  function handleReload() {
    window.location.reload();
  }

  function handleModal() {
    setIsShown((prevIsShown) => !prevIsShown);
  }

  function handleNextStep() {
    if (isCorrect) {
      setAnswer(quizList[i]);

      if (stage !== quizList.length) {
        setStage(stage + 1);
      } else {
        setIsOver(true);
      }
    }
  }

  function Quiz({ isOver, isCorrect }: QuizProps) {
    if (isOver)
      return (
        <>
          <Confetti></Confetti>
          <EndGame>끝!</EndGame>
        </>
      );
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
              handleNextStep={() => handleNextStep()}
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
  max-width: 62rem;

  margin: 0 auto;
  padding: 0;
`;

const ScoreBoard = styled.nav`
  width: 100%;
  height: 7vh;
  background-color: #79f116;

  font-size: 2.5rem;
  text-align: center;
  line-height: 7vh;
`;

const QuizWrap = styled.article`
  width: 100%;
  height: 74vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuizImg = styled.img`
  width: 32rem;
  height: 42rem;

  margin: 1rem;
`;

const QuizAnsOption = styled.section`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
`;

const OptionButton = styled.button`
  width: 10rem;
  height: 4.5rem;

  margin: 1.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 2rem;
  border: none;
  background-color: rgb(200, 241, 22);

  font-size: 1.8rem;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    background-color: rgba(255, 241, 50);
  }
`;

const RestartButton = styled.button`
  width: 100%;
  height: 7vh;
  background-color: rgb(121, 241, 22);

  font-size: 2.5rem;
  text-align: center;
  line-height: 7vh;

  border: none;

  &:hover {
    background-color: rgba(121, 241, 22, 0.6);
    cursor: pointer;
  }
`;

const EndGame = styled.div`
  max-width: 62rem;
  height: 74vh;

  font-size: 10rem;
  text-align: center;
  line-height: 70vh;
`;

export default Content;
