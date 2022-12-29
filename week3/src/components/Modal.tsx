import React from "react";
import ModalPortal from "./ModalPortal";
import styled from "styled-components";

export interface ModalInfo {
  isShown: boolean;
  isCorrect: boolean;
  handleModal: () => void;
  handleNextStep: () => void;
}

const Modal = ({
  isShown,
  isCorrect,
  handleModal,
  handleNextStep,
}: ModalInfo) => {
  if (isShown)
    return (
      <ModalPortal>
        <ModalFrame correct={isCorrect} onClick={handleNextStep}>
          {isCorrect ? "정답입니다 🎉" : "땡! 다시 해보세요 🥲"}
          <CloseBtn onClick={handleModal}>🆇</CloseBtn>
        </ModalFrame>
      </ModalPortal>
    );
};

const ModalFrame = styled.div<{ correct: boolean }>`
  width: 30rem;
  height: 20rem;

  border-radius: 1rem;

  background-color: #fff;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 3rem;
  font-weight: 700;

  text-align: center;
  line-height: 20rem;

  // vibration 적용하면 모달의 위치가 갑자기 이상한 곳으로 바뀌는 이슈. . .
  @keyframes vibration {
    from {
      transform: translate(-50%, -50%) rotate(-1deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(1deg);
    }
  }

  animation: ${(props) => (props.correct ? "none" : "vibration .1s infinite")};
`;

const CloseBtn = styled.button`
  border: none;

  margin: 0;
  padding: 0;

  position: absolute;

  right: 3%;

  font-size: 3rem;

  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export default Modal;
