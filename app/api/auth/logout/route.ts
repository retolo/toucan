import { NextResponse } from "next/server";
import { api} from "../../api";
import { cookies } from "next/headers";
export async function POST(){

        const cookieStore = await cookies();
        await api.post('/logout', null, {
            headers:{
                Cookie: cookieStore.toString()
            }
        })

        cookieStore.delete('accessToken');
        cookieStore.delete('refreshToken');

        return NextResponse.json({message: 'Logged out successfully'})
        
        

}