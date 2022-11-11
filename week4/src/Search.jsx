import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Outlet, useParams } from "react-router-dom";

export default function Search() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history") || "[]")
  );
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { username } = useParams();

  const searchUsers = (username) => {
    navigate(`/search/${username}`);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);

    navigate(`/search/${input}`);
    setHistory([input, ...history]);

    if (username === "") {
    } else {
      if (!history.includes(username)) {
        setHistory((prev) => [...prev, username]);
      }
    }
  };

  const selectHistory = (_history) => {
    navigate(`/search/${_history}`);
    setIsOpen(false);
  };

  const deleteHistory = (idx) => {
    setHistory((prev) => prev.filter((item) => item !== idx));
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
              value={input}
              onChange={handleChange}
              onFocus={() => setIsOpen(true)}
              onBlur={(e) => e.relatedTarget === null && setIsOpen(false)}
            ></SearchFrameInput>
            {isOpen ? (
              <HistoryModal tabIndex={0}>
                {history &&
                  history.map((_history) => (
                    <>
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
                    </>
                  ))}
              </HistoryModal>
            ) : null}
          </SearchForm>
        </SearchSearch>
      </SearchFrame>

      <Outlet />
    </div>
  );
}

const SearchFrame = styled.div`
  width: 1200px;
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

  position: relative;
  border: 1px solid gray;
`;

const SearchSearch = styled.div``;

const HistoryModal = styled.div`
  z-index: 1;

  position: absolute;
`;

const HistoryItem = styled.div`
  display: flex;
  width: 100%;

  background-color: tomato;
`;

const DeleteButton = styled.button``;
