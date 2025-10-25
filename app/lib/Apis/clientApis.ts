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
    console.log('📤 login payload:', data);
    const response = await nextServer.post('/auth/login', data);

    return response.data;
}