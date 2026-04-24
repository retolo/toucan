import { NextResponse, NextRequest} from "next/server";
import { api, ApiError } from "../api";
import {parse} from 'cookie';
export async function POST(req: NextRequest) {
    
    try {

        const body = await req.json();
        const data = await api.post('/confirm-oauth', body);

        const response = NextResponse.json(data.data);

        const setCookie = data.headers['set-cookie'];

        if(setCookie){
            const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];


            for (const cookieStr of cookieArray){
                const parsed = parse(cookieStr);

                const options = {
                    path: parsed.Path,
                    expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
                    maxAge: Number(parsed['Max-Age'])
                }


                if(parsed.accessToken){
                    response.cookies.set('accessToken', parsed.accessToken, options)
                }

                if(parsed.refreshToken){
                    response.cookies.set('refreshToken', parsed.refreshToken,options)
                }
            }
        } 
        return response;
    } catch (error) {
        const err = error as ApiError;


        return NextResponse.json(
            {
                error: err.response?.data ?? err.message
            },
            {
                status: err.status
            }
        )
    }
}