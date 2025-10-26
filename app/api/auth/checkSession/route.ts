import { NextResponse } from "next/server";
import { ApiError, api } from "../../api";
import { cookies } from "next/headers";


export async function GET() {

    try {

        const cookieStore = await cookies();

        const {data} = await api.get('/check-session', {
            headers:{
                Cookie: cookieStore.toString()
            }
        });

        return NextResponse.json(data);
        
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