import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";

export default function UserInfo() {
  const { username } = useParams();

  const [loading, setLoading] = useState<boolean>(true);

  const [profileImg, setProfileImg] = useState<string>();
  const [followingNum, setFollowingNum] = useState<number>();
  const [followerNum, setFollowerNum] = useState<number>();
  const [repoNum, setRepoNum] = useState<number>();

  const navigate = useNavigate();

  const getUser = async (username: string | undefined) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    setLoading(false);

    setProfileImg(response.data.avatar_url);
    setFollowingNum(response.data.following);
    setFollowerNum(response.data.followers);
    setRepoNum(response.data.public_repos);
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
          <ProfilePic src={profileImg}></ProfilePic>
          <ProfileInfo>
            <ProfileDetailInfo>
              <ProfileDetailCargory>following </ProfileDetailCargory>
              <ProfileDetailNum>{followingNum}</ProfileDetailNum>
            </ProfileDetailInfo>

            <ProfileDetailInfo>
              <ProfileDetailCargory>follower </ProfileDetailCargory>
              <ProfileDetailNum>{followerNum}</ProfileDetailNum>
            </ProfileDetailInfo>

            <ProfileDetailInfo>
              <ProfileDetailCargory>repo</ProfileDetailCargory>
              <ProfileDetailNum>{repoNum}</ProfileDetailNum>
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
