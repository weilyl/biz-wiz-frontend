import axios from "axios";
import { apiURL } from "./config";

export const register = (userInfo) => {
  // console.log("USER INFO: ", userInfo);
  return axios
    .post(`${apiURL}business/register`, userInfo, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log("res: ", res);
      if (res.data.token) {
        console.log("possible token: ", res.data.token);
        window.localStorage.setItem("token", res.data.token);
        // window.location.assign("/");
      }
    });
};

export const login = (userLogin) => {
  // if (!token || token === '') {
  return axios
    .post(`${apiURL}business/login`, userLogin, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json", // ,
        // 'Authorization': `Bearer ${token}`
      },
    })
    .then((res) => {
      console.log("res: ", res);
      if (res.data.token) {
        console.log("possible token: ", res.data.token);
        window.localStorage.setItem("token", res.data.token);
        // window.location.assign("/profile/home");
      }
    });
};

export const logout = () => {
  window.localStorage.removeItem("token");
  // window.location.assign("/");
};
