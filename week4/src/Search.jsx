import { React, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Outlet } from "react-router-dom";

export default function Search() {
  const historyRef = useRef(null);

  const [username, setUsername] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history") || "[]")
  );
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const searchUsers = (username) => {
    navigate(`/search/${username}`);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (username === "") {
    } else {
      if (!history.includes(username)) {
        setHistory((prev) => [...prev, username]);
      }
      searchUsers(username);
    }
  };

  // const showHistory = (e) => {
  //   const current = historyRef.current;
  //   if (current.contains(e.target)) {
  //     setIsOpen((prev) => !prev);
  //   }
  // };

  const showHistory = () => {
    setIsOpen(true);
  };

  const selectHistory = (_history) => {
    navigate(`/search/${_history}`);
    setIsOpen(false);
    historyRef.current.value = _history;
  };

  const deleteHistory = (e) => {
    setHistory((prev) =>
      prev.filter(
        (item) => item !== e.target.parentNode.textContent.slice(0, -1)
      )
    );
    historyRef.current.value = "";
  };

  return (
    <div>
      <SearchFrame>
        <SearchFrameTitle>깃허브 프로필을 찾아봐요</SearchFrameTitle>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFrameInput
            ref={historyRef}
            type="text"
            name="text"
            placeholder="깃허브 유저명을 입력해주세요"
            autoComplete="false"
            value={username}
            onChange={handleChange}
            onFocus={() => setIsOpen(true)}
            onBlur={(e) => e.relatedTarget === null && setIsOpen(false)}
          ></SearchFrameInput>
        </SearchForm>
      </SearchFrame>
      {isOpen ? (
        <HistoryModal tabIndex={0}>
          {history &&
            history.map((_history) => (
              <HistoryItem
                key={_history}
                onClick={() => selectHistory(_history)}
              >
                {_history}
                <DeleteButton onClick={deleteHistory}>X</DeleteButton>
              </HistoryItem>
            ))}
        </HistoryModal>
      ) : null}
      <Outlet />
    </div>
  );
}

const SearchFrame = styled.div`
  width: 1200px;
  height: 200px;
  border-radius: 20px;

  background-color: #fff;

  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);

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

  border: 1px solid gray;
`;

const HistoryModal = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 1;
`;

const HistoryItem = styled.div`
  display: flex;
  width: 100%;

  background-color: tomato;
`;

const DeleteButton = styled.button``;
