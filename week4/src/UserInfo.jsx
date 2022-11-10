import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";

export default function UserInfo() {
  const { username } = useParams();

  const [loading, setLoading] = useState(true);

  const [profileImg, setProfileImg] = useState();
  const [followingNum, setFollowingNum] = useState();
  const [followerNum, setFollowerNum] = useState();
  const [repoNum, setRepoNum] = useState();

  const getUser = async (username) => {
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
      {loading ? <Loading /> : null}
      <ResultFrame>
        <ResultModal>
          <img src={profileImg} />
          <Following>following: {followingNum}명</Following>
          <Follower>follower: {followerNum}명</Follower>
          <RepoNum>repo: {repoNum}개</RepoNum>
        </ResultModal>
      </ResultFrame>
    </>
  );
}

const ResultFrame = styled.div`
  display: flex;
  justify-content: center;
`;

const ResultModal = styled.div`
  width: 1200px;
  height: 600px;
  border-radius: 20px;

  background-color: #fff;
`;

const Following = styled.div`
  font-size: 50px;
`;

const Follower = styled.div`
  font-size: 50px;
`;

const RepoNum = styled.div`
  font-size: 50px;
`;
