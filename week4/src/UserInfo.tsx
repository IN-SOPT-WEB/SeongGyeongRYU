import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";
import { iUserInfo } from "./types/index";

export default function UserInfo() {
  const { username } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(true);

  const [userGithubInfo, setUserGithubInfo] = useState<iUserInfo>();

  const getUser = async (username: string | undefined) => {
    setLoading(true);
    const response: iUserInfo = await axios.get(
      `https://api.github.com/users/${username}`
    );
    setLoading(false);

    setUserGithubInfo(response);
  };

  useEffect(() => {
    getUser(username);
  }, [username]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ResultFrame>
          <DeleteBtn
            type="button"
            onClick={() => navigate(-1)}
            value="❎"
          ></DeleteBtn>
          <ProfilePic src={userGithubInfo?.avatar_url}></ProfilePic>
          <ProfileInfo>
            <ProfileDetailInfo>
              <ProfileDetailCargory>following </ProfileDetailCargory>
              <ProfileDetailNum>{userGithubInfo?.following}</ProfileDetailNum>
            </ProfileDetailInfo>

            <ProfileDetailInfo>
              <ProfileDetailCargory>follower </ProfileDetailCargory>
              <ProfileDetailNum>{userGithubInfo?.followers}</ProfileDetailNum>
            </ProfileDetailInfo>

            <ProfileDetailInfo>
              <ProfileDetailCargory>repo</ProfileDetailCargory>
              <ProfileDetailNum>
                {userGithubInfo?.public_repos}
              </ProfileDetailNum>
            </ProfileDetailInfo>
          </ProfileInfo>
        </ResultFrame>
      )}
    </>
  );
}

const ResultFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 1200px;
  height: 480px;

  margin: 20px 0px;
  border-radius: 20px;

  background-color: #fff;
`;

const ProfilePic = styled.img`
  width: 250px;
  height: 250px;

  margin: 20px;
`;

const ProfileInfo = styled.div`
  width: 1200px;

  display: flex;
  justify-content: space-evenly;
`;

const ProfileDetailInfo = styled.div`
  width: 170px;
  height: 170px;
  background-color: rgba(0, 70, 22, 0.5);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ProfileDetailCargory = styled.div`
  font-size: 40px;
`;

const ProfileDetailNum = styled.div`
  font-size: 40px;
  color: #fff;
`;

const DeleteBtn = styled.input`
  height: 60px;
  width: 60px;

  background-color: transparent;
  border: none;

  position: absolute;

  right: 20px;
  top: 20px;

  margin-right: 20px;

  font-size: 50px;

  cursor: pointer;
`;
