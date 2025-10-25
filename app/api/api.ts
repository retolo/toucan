import axios from "axios";
import { AxiosError } from "axios";

export type ApiError = AxiosError<{error: string}>

export const api = axios.create({
    baseURL: 'https://toucan-back-end.onrender.com',
    withCredentials: true,
    
})