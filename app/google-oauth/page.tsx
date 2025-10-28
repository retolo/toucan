'use client'
import { useEffect } from "react";
import { confirmOauth } from "../lib/Apis/clientApis";

export default function GoogleOAuthPage() {

  useEffect(() => {
    const handleOAuth = async () => {
      const code = new URLSearchParams(window.location.search).get('code');
      console.log(code)
      if (!code) return;


        const response = await confirmOauth(code);
        if (response) {
          window.location.href = "/";
        }

    };

    handleOAuth();
  }, []);


}
