import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    "Content-type": "application/json",
  },
});
