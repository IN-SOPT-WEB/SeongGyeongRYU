import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Outlet } from "react-router-dom";

export default function Search() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const history = [];

  const searchUsers = (username) => {
    navigate(`/search/${username}`);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "") {
    } else {
      searchUsers(username);
      setUsername("");
    }
  };

  const showHistory = () => {
    return;
  };

  return (
    <div>
      <SearchFrame>
        <SearchFrameTitle>깃허브 프로필을 찾아봐요</SearchFrameTitle>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFrameInput
            type="text"
            name="text"
            placeholder="깃허브 유저명을 입력해주세요"
            value={username}
            onChange={handleChange}
            onFocus={showHistory}
          ></SearchFrameInput>
        </SearchForm>
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

const ResultFrame = styled.div`
  width: 1200px;
  height: 600px;
  border-radius: 20px;

  margin-top: 150px;

  background-color: #fff;
`;
