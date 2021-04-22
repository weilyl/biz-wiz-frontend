import axios from 'axios';
import {apiURL, token} from './config';

//business publis post on their page
export const publishPost = (Post) => {
    console.log('Post Text ', Post)
    axios
        .post(`${apiURL}business/create-post/:business_id`, Post, {
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

//get or view a specific post from a business
export const getPost = (postId) => {
    axios
        .get(`${apiURL}business/posts/post/:${postId}`,{
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
}

//get all of the posts from a business
export const getBusinessPosts = (id) =>{
    console.log('Getting Business Posts');
    let posts = [];
    axios
        .get(`${apiURL}business/home/posts/:${id}/all`, posts,{
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
    return posts
}

//business updates a post
export const updatePost = (postId) => {
    axios
        .patch(`${apiURL}business/posts/post/:post_id/edit`,{
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
}

//get all comments on a post
export const getComments = (postId) => {
    console.log('Getting Comments from post: ', postId);
    axios
        .get(`${apiURL}business/home/posts/:${id}/all`,{
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
}