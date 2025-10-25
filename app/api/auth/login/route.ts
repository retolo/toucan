import { NextRequest, NextResponse} from "next/server";
import { api, ApiError} from "../../api";
import {parse} from 'cookie';
import { cookies } from "next/headers";



export async function POST(request: NextRequest) {
    const body = await request.json();
    try {
        

        const data = await api.post('/login', body);

        const cookieStore = await cookies();

        const setCookie = data.headers['set-cookie']

        if(setCookie){
            const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie]


            for(const cookieStr of cookieArray){
                const parsed = parse(cookieStr);

                const options = {
                    expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
                    path: parsed.Path,
                    maxAge: Number(parsed['Max-Age'])
                }



                if(parsed.accessToken){
                    cookieStore.set('accessToken', parsed.accessToken, options)
                }

                if(parsed.refreshToken){
                    cookieStore.set('refreshToken', parsed.refreshToken, options)
                }
            }

            return NextResponse.json(data.data);
        }
        return NextResponse.json({error: 'Unauthorized'}, {status: 401})


    } catch (error) {
        const err = error as ApiError;
        return NextResponse.json(
            {
                error: err.response?.data.error ?? err.message,
            },
            {
                status: err.status
            }
        )
    }
    
}