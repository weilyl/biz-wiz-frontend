import axios from 'axios';
import { getAPost } from '../../../fork-the-biz-wiz/controllers/Posts';
import {apiURL, token} from './config';

//business publis post on their page
export const publishPost = (post) => {
    console.log('Post Text ', post)
    return axios
        .post(`${apiURL}business/create-post`, post, {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("res: ", res.data)
            if (res.data.post_id) {
                return getAPost(res.data.post_id)
            }
        })
}

//get or view a specific post from a business
export const getPost = (postId) => {
    return axios
        .get(`${apiURL}business/posts/post/:${postId}`,{
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("res: ", res)
            if (res.data) {
                return res.data   
            }
        })
}

//get all of the posts from a business
export const getBusinessPosts = (id) =>{
    console.log('Getting Business Posts');
    // let posts = [];
    return axios
        .get(`${apiURL}business/home/posts/:${id}/all`, posts,{
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("res: ", res)
            if (res.data) {
                return res.data
            }
        })
    // return posts
}

//business updates a post
export const updatePost = (postId) => {
    return axios
        .patch(`${apiURL}business/posts/post/${1}/edit`,{
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("res: ", res)
            if (res.data) {
                return getAPost(1)
            }
        })
}

//get all comments on a post
export const getComments = (postId) => {
    console.log('Getting Comments from post: ', postId);
    return axios
        .get(`${apiURL}business/home/posts/:${id}/all`,{
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("res: ", res)
            if (res.data) {
                return res.data
            }
        })
}