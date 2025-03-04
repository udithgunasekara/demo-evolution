import axios from "axios";
import { Post } from "../types";

const BaseURL = import.meta.env.VITE_BASE_URL;

const API_URL = '/api';
const POST_URL = '/post';
const COMMENT_URL = '/comment'


export const createComment = () => axios.post(`${BaseURL}${COMMENT_URL}`)

export const createPost = (postData: Post) => {
      return axios.post(`${BaseURL}${POST_URL}`, postData);};

export const getAllPosts = () => {
      return axios.get(`${BaseURL}${POST_URL}`); };


export const corsTest = () => axios.get(`${BaseURL}${API_URL}/test`);
 