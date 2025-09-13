'use client'
import { useUserData } from "../lib/store/authStore";
import css from './Profile.module.css'
function Profile(){
    const {userEmail, userPassword} = useUserData();
    return(
        <div className={css.container}>
            <div className={css.blockProfile}>
                <ul className={css.listProfile}>
                    <li>Пошта: {userEmail}</li>
                    <li>Пароль: {userPassword}</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;