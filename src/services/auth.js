import axios from 'axios';
import {apiURL, token} from './config';

export const register = (userInfo) => {
    console.log('USER INFO: ', userInfo)
    axios
        .post(`${apiURL}business/register`, userInfo, {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log("res: ", res)
            if (res.data.token) {
                console.log("possible token: ", res.data.token)
                window.localStorage.setItem("token", res.data.token);
                window.location.assign("/");
            }
        })
}

export const login = (userLogin) => {
    // if (!token || token === '') {
        return axios
            .post(`${apiURL}business/login`, userLogin, {
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Content-Type': 'application/json'// ,
                    // 'Authorization': `Bearer ${token}`
                }
            })
            .then((res) => {
                console.log("res: ", res)
                if (res.data.token) {
                    console.log("possible token: ", res.data.token)
                    window.localStorage.setItem("token", res.data.token);
                    window.location.assign("/search");
                }
            })
    // } else {
    //     console.log("BOOYA")
    // }
}

export const logout = () => {
    window.localStorage.removeItem('token');
    window.location.assign("/")
}
