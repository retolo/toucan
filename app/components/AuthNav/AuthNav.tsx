'use client'
import { useUserData } from "@/app/lib/store/authStore";
import Link from "next/link";
import css from './Authnav.module.css'
import { useRouter } from "next/navigation";
function AuthNav(){
    const router = useRouter()
    const {users, clearUserData} = useUserData();
    const handleLogOut = () =>{
        clearUserData();
        router.push('/')
    }

    return(
        <>
            {users
                ? <ul className={css.listNav}>
                    <li><Link href={'/catalog'}>Каталог</Link></li>
                    <li><Link href={'/profile'}>Профіль</Link></li>
                    <li className={css.logOut} onClick={handleLogOut}>Вихід</li>
                </ul>
                : <ul className={css.listNav}>
                    <li><Link href={'/catalog'}>Каталог</Link></li>
                    <li><Link href={'/sign-in'}>Вхід</Link></li>
                    <li><Link href={'/sign-up'}>Реєстрація</Link></li>
                </ul>
            }
        </>
    )

}

export default AuthNav;