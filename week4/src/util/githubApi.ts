import { UserInfo } from "../types";
import { client } from "./customApi";

export const getUserInfo = async (username: string) => {
  try {
    //구조 분해 할당
    const { data } = await client.get<UserInfo>(username);
    return data;
  } catch (error) {
    console.error(error);
  }
};
