'use client'
import axios from "axios"
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

const apiKey = process.env.API_KEY

export const getTypeOfWarehouseRef = async (cityName: string) =>{
    const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', 
        {
            
                "apiKey": apiKey,
                "modelName": "AddressGeneral",
                "calledMethod": "searchSettlements",
                "methodProperties": {
                    "CityName": cityName,
                    "Limit": "50",
		            "Page": "1"
                }
            
        }
    )



    return response.data;
}