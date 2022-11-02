import React, { useEffect } from "react";
import ModalPortal from "./ModalPortal";
import styled from "styled-components";

const Modal = ({ isShown, isCorrect, handleModalClose }) => {
  if (isShown)
    return (
      <ModalPortal>
        <ModalContainer>
          {{ isCorrect } ? "🎉정답입니다🎉" : "땡! 다시 도전해보세요🥲"}
          <CloseBtn onClick={handleModalClose}>🆇</CloseBtn>
        </ModalContainer>
      </ModalPortal>
    );
};

// const Background = styled.div`
//   width: 620px;
//   height: 74vh;
//   background-color: rgba(0, 0, 0, 0.3);

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

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
