'use client'
import { nextServer } from "../api"

type RegisterUser = {
    email: string
    password: string
}


type LoginUser ={
    email: string,
    password: string
}



export  const registerUser = async (data: RegisterUser) =>{
    const response = await nextServer.post('/auth/register', data)



    return response.data;
        
}


export const loginUser = async (data: LoginUser) =>{
    const response = await nextServer.post('/auth/login', data);

    return response.data;
}

export const logoutUser = async () =>{
    const response = await nextServer.post('/auth/logout');
    return response;
}

export const checkSession = async () =>{
    const response = await nextServer.get('/auth/checkSession')


    return response.data;
}