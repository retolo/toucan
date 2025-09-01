'use client'
import Link from 'next/link';
import css from './SignIn.module.css'
import { useRouter } from 'next/navigation';
import { User } from '../lib/store/authStore';
import { useUserData } from '../lib/store/authStore';
import { Slide, ToastContainer, toast } from 'react-toastify';

function SignIn(){
    const router = useRouter();
    const {user, setUserData} = useUserData()
    const handleLogin = (formData: FormData) =>{
        if(user === null){
            toast('Ви не зареєстровані', {
                position: 'top-center',
                theme: 'light',
                closeOnClick: true,
                autoClose: 3000,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide,
                hideProgressBar: false,
                
            })

            
        }
        else{
            const values = Object.fromEntries(formData) as unknown as User;
            setUserData(values);
             toast('Успішний вхід', {
                position: 'top-center',
                theme: 'light',
                closeOnClick: true,
                autoClose: 3000,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide,
                hideProgressBar: false,
                
            })
            router.push('/')
        }
        

    }
    return(
        <div className={css.blockForm}>
            <div className={css.block}>
                <form action={handleLogin} className={css.formWrapper}>
                    <label className={css.labelInput}>
                        Email
                        <input required className={css.inputs} name='email' type="email"/>
                    </label>
                    
                    <label className={css.labelInput}>
                        Password
                        <input required className={css.inputs} name='password' type="password"/>
                    </label>
                    <button className={css.buttonSign} type="submit">Вхід</button>
                    <ul className={css.listProp}>
                        <li><Link href={'/sign-up'}>Зареєструватися</Link></li>
                        <li>Забув пароль?</li>
                    </ul>
                </form>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Slide}
                
                />
            </div>
        </div>
    )
}

export default SignIn;