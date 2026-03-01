import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://equran.id/api",
})