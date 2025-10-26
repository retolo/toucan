'use client'
import { useUserData } from "@/app/lib/store/authStore"
import { useEffect } from "react";
import { checkSession } from "@/app/lib/Apis/clientApis";
type AppInitProps = {
    children: React.ReactNode
}

export default  function AppInit({children}: AppInitProps){
    const {setAuthenticatedPerson} = useUserData();

    useEffect(() =>{
        async function getAuth() {
            const response = await checkSession();

            setAuthenticatedPerson(response ? true : false)
        }
        getAuth();
    }, [setAuthenticatedPerson]);


    return children;
}