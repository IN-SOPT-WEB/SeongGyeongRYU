import axios from "axios";

const token = process.env.REACT_APP_TOKEN;

export const client = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    "Content-type": "application/json",
    Authorizaiton: `Bearer ${token}`,
  },
});
