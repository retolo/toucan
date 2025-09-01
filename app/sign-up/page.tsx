'use client'
import Link from 'next/link';
import css from './SignUp.module.css'
import { useRouter } from 'next/navigation';
import { User } from '../lib/store/authStore';
import { useUserData } from '../lib/store/authStore';
import { Slide, ToastContainer, toast } from 'react-toastify';

function SignUp(){
    const router = useRouter();
    const {user, setUserData} = useUserData()
    const handleRegister = (formData: FormData) =>{
        const values = Object.fromEntries(formData) as unknown as User;
        if(user !== null){
            toast('Ви вже зареєстровані', {
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
        }else if(user && user.email !== values.email){
            
                
        }
        else{
            
            setUserData(values);
            toast('Успішна реєстрація', {
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
            router.push('/sign-in')
        }
        
         

    }
    return(
        <div className={css.blockForm}>
            <div className={css.block}>
                <form action={handleRegister} className={css.formWrapper}>
                    <label className={css.labelInput}>
                        Email
                        <input required className={css.inputs} name='email' type="email"/>
                    </label>
                    
                    <label className={css.labelInput}>
                        Password
                        <input required className={css.inputs} name='password' type="password"/>
                    </label>
                    <button className={css.buttonSign} type="submit">Реєстрація</button>
                    <Link className={css.textLog} href={'/sign-in'}>Увійти</Link>
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

export default SignUp;