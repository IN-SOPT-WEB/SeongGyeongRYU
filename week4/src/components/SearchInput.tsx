import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import History from "./History";

export default function Search() {
  const [inputName, setInputName] = useState<string>();
  const [historyList, setHistoryList] = useState<string[]>(
    JSON.parse(localStorage.getItem("history") || "[]")
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(historyList));
  }, [historyList]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //중복처리도 같이 해주기
    if (inputName && !historyList.includes(inputName)) {
      setHistoryList([inputName, ...historyList]);
    }
    navigate(`/search/${inputName}`);
  };

  return (
    <div>
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
              onBlur={(e) => e.relatedTarget === null && setIsOpen(false)}
            ></SearchFrameInput>
            <History
              history={historyList}
              setHistory={setHistoryList}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            ></History>
          </SearchForm>
        </SearchSearch>
      </SearchFrame>

      <Outlet />
    </div>
  );
}

const SearchFrame = styled.div`
  width: 1200px;
  height: 200px;
  border-radius: 20px;

  background-color: #fff;

  margin-top: 20px;

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
