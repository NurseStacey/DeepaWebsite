import {API_URL} from '../constants/website-constants';
import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL:API_URL,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    }
})


export default AxiosInstance