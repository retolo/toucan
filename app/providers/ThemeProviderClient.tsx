'use client'
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

type ThemeProviderClientProps = {
    children: React.ReactNode;
}

function ThemeProviderClient({children}: ThemeProviderClientProps){
    const [mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true)
    }, [])

    if(!mounted){
        return <div style={{ visibility: 'hidden' }}>{children}</div>;
    }


    return (
        <ThemeProvider
            attribute={'class'}
            enableSystem
            defaultTheme="system"
            disableTransitionOnChange
        
        >
            {children}


        </ThemeProvider>
    )
}

export default ThemeProviderClient;