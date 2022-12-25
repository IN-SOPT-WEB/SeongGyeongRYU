import { client } from "./customApi";
import { iUserInfo } from "../types/index";

export const getUserInfo = async (username: string) => {
  try {
    const response = await client.get(username);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
