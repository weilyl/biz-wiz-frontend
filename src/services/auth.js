import axios from 'axios';
import {apiURL, token} from './config';

export const register = (userInfo) => {
    console.log('USER INFO: ', userInfo)
    axios
        .post(`${apiURL}business/register`, userInfo, {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json'//,
                //'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("res: ", res)
            if (res.data.token) {
                console.log("possible token: ", res.data.token)
                window.localStorage.setItem("token", JSON.stringify(res.data.token));
            }
        })
    return "Success"
}

export const login = (userLogin) => {
    if (!token) {
        axios
            .post(`${apiURL}login`, userLogin)
            .then((res) => {
                console.log("res: ", res)
                if (res.data.token) {
                    console.log("possible token: ", res.data.token)
                window.localStorage.setItem("token", JSON.stringify(res.data.token));
                }
            })
    }
    return "Success"
}

export const logout = () => {
    window.localStorage.setItem('token', '');
    return "Success"
}

// export default {
//     register,
//     login,
//     logout
// }