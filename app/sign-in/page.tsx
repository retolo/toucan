'use client'
import Link from 'next/link';
import css from './SignIn.module.css'
import { useRouter } from 'next/navigation';
import { User } from '../lib/store/authStore';
import { useUserData } from '../lib/store/authStore';
import { Slide, ToastContainer, toast } from 'react-toastify';

function SignIn(){
    const router = useRouter();
    const {users, clearUserData, setUserData} = useUserData()
    // eslint-disable-next-line prefer-const
    let userDataArr = [];
   
    const handleLogin = (formData: FormData) =>{
         const values = Object.fromEntries(formData) as unknown as User;
         let userData;
         const isEmail = users.some((user) => user.email === values.email);
         for(let i = 0; i < users.length; i++){
            if(users[i].email === values.email){
                userData = users[i];
                break;
            }
         }
         for(let i = 0; i < users.length; i++){
            if(users[i].email === values.email && users[i].isAuthenticated === false){
                users[i].isAuthenticated = true;
                userDataArr.push((users[i]))
            }
            else{
                userDataArr.push((users[i]))
            }
         }
         console.log(userDataArr);
        if(isEmail === false){
            toast('Ви не зареєстровані', {
                position: 'top-center',
                theme: 'light',
                closeOnClick: true,
                autoClose: 3000,
                draggable: true,
                progress: undefined,
                transition: Slide,
                hideProgressBar: false,
                
            })

            
        }
        else if(userData?.email === values.email && userData.password !== values.password){
            toast('Неправильна пошта або пароль', {
                position: 'top-center',
                theme: 'light',
                closeOnClick: true,
                autoClose: 3000,
                draggable: true,
                progress: undefined,
                transition: Slide,
                hideProgressBar: false,
                
            })
            
                
        }
        else{
                toast('Успішний вхід', {
                position: 'top-center',
                theme: 'light',
                closeOnClick: true,
                autoClose: 3000,
                draggable: true,
                progress: undefined,
                transition: Slide,
                hideProgressBar: false,
                
            })
            router.push('/profile')
        }
        

    }

    
    return(
        <div className={css.blockForm}>
            <div className={css.block}>
                <form action={handleLogin}  className={css.formWrapper}>
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
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
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