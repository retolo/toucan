'use client'
import { useEffect, useRef} from "react";
import { confirmOauth } from "../lib/Apis/clientApis";

export default function GoogleOAuthPage() {
  const hasRun = useRef(false);
  useEffect(() => {
    const handleOAuth = async () => {
      if(hasRun.current){
        return ;
      }
      hasRun.current = true;
      const code = new URLSearchParams(window.location.search).get('code');
      if (!code) return;


        const response = await confirmOauth(code);
        if (response) {
          
          window.location.href = "/";
        }

    };

    handleOAuth();
  }, []);
  return null;

}
