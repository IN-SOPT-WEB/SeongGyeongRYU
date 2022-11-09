import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function UserInfo() {
  const { username } = useParams();
  const [profileImg, setProfileImg] = useState();
  const [followingNum, setFollowingNum] = useState();
  const [followerNum, setFollowerNum] = useState();
  const [repoNum, setRepoNum] = useState();

  const getUser = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    setProfileImg(response.data.avatar_url);
    setFollowingNum(response.data.following);
    setFollowerNum(response.data.followers);
    setRepoNum(response.data.public_repos);
  };

  useEffect(() => {
    getUser(username);
  }, []);

  return <></>;
}
