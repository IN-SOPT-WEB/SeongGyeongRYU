import React from "react";
import ModalPortal from "./ModalPortal";
import styled from "styled-components";
import Confetti from "./Confetti";
//https://www.youtube.com/watch?v=QHFkVpB1yr0

const Modal = ({ isShown, isCorrect, handleModal }) => {
  if (isShown)
    return (
      <ModalPortal>
        <Confetti isCorrect={isCorrect}></Confetti>
        <ModalContainer>
          {isCorrect ? "정답입니다 🎉" : "땡! 다시 해보세요 🥲"}
          <CloseBtn onClick={handleModal}>🆇</CloseBtn>
        </ModalContainer>
      </ModalPortal>
    );
};

const ModalContainer = styled.div`
  width: 300px;
  height: 200px;

  border-radius: 10px;

  background-color: #fff;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 30px;
  font-weight: 700;

  text-align: center;
  line-height: 200px;
`;

const CloseBtn = styled.button`
  border: none;

  margin: 0;
  padding: 0;

  position: absolute;

  right: 3%;

  font-size: 30px;

  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export default Modal;
