import React, { SetStateAction, Dispatch } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export interface iHistoryProps {
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function History({
  history,
  setHistory,
  isOpen,
  setIsOpen,
}: iHistoryProps) {
  const navigate = useNavigate();

  const selectHistory = (_history: string) => {
    navigate(`/search/${_history}`);
    setIsOpen(false);
  };

  const deleteHistory = (_history: string) => {
    setHistory((prev: Array<string>) =>
      prev.filter((item) => item !== _history)
    );

  };

  return (
    <>
      {isOpen ? (
        <HistoryModal tabIndex={0}>
          {history &&
            history.map((_history) => (
              <HistoryItemWrap key={_history}>
                <HistoryItem onClick={() => selectHistory(_history)}>
                  {_history}
                </HistoryItem>
                <DeleteButton
                  type="button"
                  onClick={() => deleteHistory(_history)}
                >
                  X
                </DeleteButton>
              </HistoryItemWrap>
            ))}
        </HistoryModal>
      ) : null}
    </>
  );
}

const HistoryItemWrap = styled.div`
  width: 700px;
  display: flex;
`;

const HistoryModal = styled.div`
  width: 650px;

  z-index: 100;

  position: absolute;
`;

const HistoryItem = styled.div`
  width: 650px;
  height: 50px;

  display: flex;
  align-items: center;

  font-size: 20px;

  background-color: rgba(0, 70, 22, 0.6);

  cursor: pointer;
`;

const DeleteButton = styled.button`
  width: 50px;
  border: none;
  padding: 0;


  width: 50px;

  height: 50px;

  font-size: 20px;
  font-weight: 700;

  background-color: rgba(0, 70, 22, 0.6);
`;
