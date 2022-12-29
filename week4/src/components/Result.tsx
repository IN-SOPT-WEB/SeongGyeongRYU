import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";
import { iUserInfo } from "../types/index";
import { getUserInfo } from "../util/githubApi";

export default function Result() {
  const { username } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(true);

  const [userGithubInfo, setUserGithubInfo] = useState<iUserInfo>();

  useEffect(() => {
    if (username) {
      setLoading(true);
      const res = async () => {
        await getUserInfo(username);
      };
      setLoading(false);
      console.log(res);

      // setUserGithubInfo(res);
    }
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
            {["following", "follwer", "repo"].map((info) => (
              <ProfileDetailInfo key={info}>
                <ProfileDetailCargory>{info}</ProfileDetailCargory>
                <ProfileDetailNum>
                  {info === "following"
                    ? userGithubInfo?.following
                    : info === "follower"
                    ? userGithubInfo?.followers
                    : userGithubInfo?.public_repos}
                </ProfileDetailNum>
              </ProfileDetailInfo>
            ))}
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
