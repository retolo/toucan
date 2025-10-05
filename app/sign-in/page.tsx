'use client'
import Link from 'next/link';
import css from './SignIn.module.css'
import { useRouter } from 'next/navigation';
import { useUserData } from '../lib/store/authStore';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import formSchema from '../validation/formSchema';
import { initialValuesEdit } from '../types/interface';
import storageKey from '../constants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function SignIn(){

    useEffect(() =>{
        AOS.init({
            duration: 800,
            offset: 100,
            once: true
        })
    })
    const router = useRouter();
    const {users, setAuthenticatedPerson} = useUserData()

    

    const initialValues: initialValuesEdit ={
        email: '',
        password: ''
    }
    
    
    const handleLogin = (values: initialValuesEdit) =>{
        
        if(users.some((user) => user.email === values.email && user.password === values.password)){

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
            setAuthenticatedPerson(true);
            localStorage.setItem(storageKey, JSON.stringify(true))
            router.push('/')
        }else if(users.some((user) => user.email === values.email && user.password !== values.password)){
            
            toast('Не правильний пароль або пошта', {
                position: 'top-center',
                theme: 'light',
                closeOnClick: true,
                autoClose: 3000,
                draggable: true,
                progress: undefined,
                transition: Slide,
                hideProgressBar: false,
                
            })
        }else{
            toast('Ви не зареєстрованні!', {
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
         
         

    }

 
    return(
        <div className={css.blockForm}>
            <div className={css.block} data-aos='fade-up'>
                <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={handleLogin}>
                    
                        <Form  className={css.formWrapper}>
                        <fieldset className={css.fieldset}>
                                
                            <legend className={css.labelInput}>Пошта</legend>
                            <Field required className={css.inputs} name='email' type="email"/>
                            
                            
                            
                            
                            <legend className={css.labelInput}>Пароль</legend>
                            <Field required className={css.inputs} name='password' type="password"/>
                            
                            
                            <button className={css.buttonSign} type="submit">Вхід</button>
                            
                        </fieldset>
                        <ul className={css.listProp}>
                                <li><Link href={'/sign-up'}>Зареєструватися</Link></li>
                                <li>Забув пароль?</li>
                            </ul>
                        
                    </Form>
                    
                    
                </Formik>
                
                
                
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