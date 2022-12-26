import { iUserInfo } from "../types";
import { client } from "./customApi";

export const getUserInfo = async (username: string) => {
  try {
    //구조 분해 할당
    const { data } = await client.get<iUserInfo>(username);
    return data;
  } catch (error) {
    console.log(error);
  }
};
