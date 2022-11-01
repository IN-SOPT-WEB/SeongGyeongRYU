import React, { useEffect } from "react";
import ModalPortal from "./ModalPortal";
import styled from "styled-components";

const Modal = () => {
  return (
    <ModalPortal>
      <Background>
        <ModalContainer></ModalContainer>
      </Background>
    </ModalPortal>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
`;

const ModalContainer = styled.div``;
