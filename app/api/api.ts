import axios from "axios";
import { AxiosError } from "axios";

export type ApiError = AxiosError<{error: string}>

export const api = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true,
    
})