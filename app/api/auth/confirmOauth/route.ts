import { NextResponse, NextRequest} from "next/server";
import { ApiError, api } from "../../api";
import { cookies } from "next/headers";
import {parse} from 'cookie';
export async function POST(req: NextRequest) {
    const body = await req.json();
    try {

        
        const data= await api.post('/confirm-oauth', body);

        const cookieStore = await cookies();

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
                    cookieStore.set('accessToken', parsed.accessToken, options)
                }

                if(parsed.refreshToken){
                    cookieStore.set('refreshToken', parsed.refreshToken,options)
                }
            }


            return NextResponse.json(data.data);
        }

        return NextResponse.json({error: 'Unauthorized'}, {status: 401})

        
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