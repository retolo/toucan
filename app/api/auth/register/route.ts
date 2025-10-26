import { NextRequest, NextResponse} from "next/server";
import { api, ApiError} from "../../api";



export async function POST(request: NextRequest) {
    const body = await request.json();
    try{
        

        const {data} = await api.post('/register', body);

        

        return NextResponse.json(data);



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