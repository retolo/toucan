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
    const response = await nextServer.post('/register', data)



    return response.data;
        
}


export const loginUser = async (data: LoginUser) =>{
    const response = await nextServer.post('/login', data);

    return response.data;
}

export const logoutUser = async () =>{
    const response = await nextServer.post('/logout');
    return response;
}

export const checkSession = async () =>{
    const response = await nextServer.get('/checkSession')


    return response.data;
}


export const getOauthUrl = async () =>{
    const response = await nextServer.get('/generateOauthUrl');
    return response;
}



export const confirmOauth = async (code: string) =>{
    const response = await nextServer.post('/confirmOauth', {code}, {headers:{'Content-type': 'application/json'}});
    return response;
}