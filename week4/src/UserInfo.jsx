import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";

export default function UserInfo() {
  const { username } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [profileImg, setProfileImg] = useState();
  const [followingNum, setFollowingNum] = useState();
  const [followerNum, setFollowerNum] = useState();
  const [repoNum, setRepoNum] = useState();

  // const getUser = async (username) => {
  //   //로딩화면 뜨도록
  //   setLoading(true);

  //   const response = await axios.get(
  //     `https://api.github.com/users/${username}`
  //   );

  //   const mswResponse = await axios.get("api/user");

  //   //axios.get 완료되면 로딩화면 끄기
  //   setLoading(false);

  //   setProfileImg(response.data.avatar_url);
  //   setFollowingNum(response.data.following);
  //   setFollowerNum(response.data.followers);
  //   setRepoNum(response.data.public_repos);

  // };

  async function getMSWUser() {
    const mswResponse = await axios.get("/api/user");

    // setProfileImg(mswResponse.data.avatar_url);
    // setFollowingNum(mswResponse.data.following);
    // setFollowerNum(mswResponse.data.followers);
    // setRepoNum(mswResponse.data.public_repos);

    setProfileImg(mswResponse.data.avatar_url);
    setFollowingNum(mswResponse.data.following);
    setFollowerNum(mswResponse.data.followers);
    setRepoNum(mswResponse.data.repos);
  }

  // useEffect(() => {
  //   getUser(username);
  // }, [username]);

  useEffect(() => {
    getMSWUser();
  });

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

  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 1200px;
  height: 650px;
  border-radius: 20px;

  background-color: #fff;
`;

const ProfilePic = styled.img`
  width: 300px;
  height: 300px;

  margin: 30px;
`;

const ProfileInfo = styled.div`
  width: 1200px;

  display: flex;
  justify-content: space-evenly;
`;

const ProfileDetailInfo = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(0, 70, 22, 0.5);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ProfileDetailCargory = styled.div`
  font-size: 50px;
`;

const ProfileDetailNum = styled.div`
  font-size: 50px;
  color: #fff;
`;

const DeleteBtn = styled.input`
  height: 60px;
  width: 60px;

  display: inline;
  background-color: transparent;
  border: none;

  align-self: flex-end;

  margin-right: 20px;

  font-size: 50px;

  cursor: pointer;
`;
