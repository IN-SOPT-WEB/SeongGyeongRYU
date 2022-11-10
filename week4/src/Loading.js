import React from "react";
import styled from "styled-components";
import Spinner from "./assets/spinner.gif";

export default function Loading() {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="15%" />
      <LoadingText>로딩 중입니다. . . </LoadingText>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.div`
  text-align: center;
  font-size: 50px;
`;
