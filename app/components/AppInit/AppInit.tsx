'use client'
import { useUserData } from "@/app/lib/store/authStore"
import { useEffect } from "react";
import { checkSession } from "@/app/lib/Apis/clientApis";
import { useRef } from "react";
type AppInitProps = {
    children: React.ReactNode
}

export default  function AppInit({children}: AppInitProps){
    const {setAuthenticatedPerson} = useUserData();
    const hasRun = useRef(false);

    useEffect(() =>{
        async function getAuth() {
            if(hasRun.current){
                return;
            }
            hasRun.current = true;
            const response = await checkSession();

            setAuthenticatedPerson(response ? true : false)
        }
        getAuth();
    }, [setAuthenticatedPerson]);


    return <>{children}</>;
}