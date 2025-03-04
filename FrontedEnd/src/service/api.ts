import axios from "axios";

// const BaseURL2 = process.env.VITE_BASE_URL

const BaseURL = "http://localhost:8080"
const API_URL = '/api';


export const corsTest = () => axios.get(`${BaseURL}${API_URL}/test`);
 