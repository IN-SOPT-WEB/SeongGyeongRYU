import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Outlet } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  const [inputName, setInputName] = useState();
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history") || "[]")
  );
  //history 모달창 보이는지 아닌지
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  //input에 입력된 값을 inputName으로
  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setHistory([inputName, ...history]);
    navigate(`/search/${inputName}`);
  };

  const selectHistory = (_history) => {
    navigate(`/search/${_history}`);
    setIsOpen(false);
  };

  const deleteHistory = (_history) => {
    setHistory((prev) => prev.filter((item) => item !== _history));
  };

  return (
    <div>
      <SearchWrap>
        <SearchFrame>
          <SearchFrameTitle>깃허브 프로필을 찾아봐요</SearchFrameTitle>
          <SearchSearch>
            <SearchForm onSubmit={handleSubmit}>
              <SearchFrameInput
                type="text"
                placeholder="깃허브 유저명을 입력해주세요"
                autoComplete="false"
                value={inputName}
                onChange={handleChange}
                onFocus={() => setIsOpen(true)}
                // tabIndex로 historyModal을 input과 연관된 컴포넌트로 설정하고
                // input이 onBlur 상태가 되면 Modal 끈다
                onBlur={(e) => e.relatedTarget === null && setIsOpen(false)}
              ></SearchFrameInput>
              {isOpen ? (
                <HistoryModal tabIndex={0}>
                  {history &&
                    history.map((_history) => (
                      <HistoryItemWrap>
                        <HistoryItem
                          key={_history}
                          onClick={() => selectHistory(_history)}
                        >
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
            </SearchForm>
          </SearchSearch>
        </SearchFrame>
      </SearchWrap>

      <Outlet />
    </div>
  );
}

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 30px;
`;
const SearchFrame = styled.div`
  width: 1200px;
  height: 200px;
  border-radius: 20px;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const SearchFrameTitle = styled.h1`
  font-size: 50px;
`;

const SearchForm = styled.form``;

const SearchFrameInput = styled.input`
  width: 700px;
  height: 50px;

  padding: 0;
  border-width: 0;

  position: relative;
  border: 1px solid gray;
`;

const SearchSearch = styled.div``;

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
