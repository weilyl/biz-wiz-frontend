import axios from 'axios';
import {apiURL, token} from './config';

const register = (userInfo) => {
    axios
        .post(`${apiURL}register`, userInfo)
        .then((res) => {
            console.log("res: ", res)
            if (res.token) {
                console.log("possible token: ", res.token)
                localStorage.setItem("token", JSON.stringify(res.token));
            }
        })
    return "Success"
}

const login = (userLogin) => {
    if (!token) {
        axios
            .post(`${apiURL}login`, userLogin)
            .then((res) => {
                console.log("res: ", res)
                if (res.token) {
                    console.log("possible token: ", res.token)
                localStorage.setItem("token", JSON.stringify(res.token));
                }
            })
    }
    return "Success"
}

const logout = () => {
    localStorage.setItem('token', null);
    return "Success"
}

export default {
    register,
    login,
    logout
}