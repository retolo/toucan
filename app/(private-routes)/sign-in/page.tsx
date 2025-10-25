'use client'
import Link from 'next/link';
import css from './SignIn.module.css'
import { useRouter } from 'next/navigation';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import formSchema from '../../validation/formSchema';
import { initialValuesEdit } from '../../types/interface';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/app/lib/Apis/clientApis';
import { useTranslation } from 'react-i18next';
import { AxiosError } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';

function SignIn(){
    const {t} = useTranslation();
    useEffect(() =>{
        AOS.init({
            duration: 800,
            offset: 100,
            once: true
        })
    }, [])
    const router = useRouter();

    

    const initialValues: initialValuesEdit ={
        email: '',
        password: '',
        showPassword: false,
    }
 



    const handleLoginUser = async (values: initialValuesEdit) =>{
        try {
            const response = await loginUser({email: values.email, password: values.password});
            console.log(response);
            if(response){
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
             router.push('/');
            }else{
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
            }
        } catch (error) {
            const err = error as ApiError;
                    toast(err.name, {
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
                <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={handleLoginUser}>
                    {({values, setFieldValue}) =>(
                        <Form  className={css.formWrapper}>

                            <div className={css.inputWrapper}>

                                <Field placeholder=' ' required className={css.inputs} name='email' type="email"/>

                                <label className={css.labelInput}>{t('email')}</label>

                            </div>

                            <div className={css.inputWrapper}>

                                <Field placeholder=' ' id='password' required className={css.inputs} name='password' type={values.showPassword ? 'text' : 'password'}/>
                                
                                <label className={css.labelInput}>{t('password')}</label>

                            </div>
                            <Field name="showPassword" id="showPassword" type="checkbox" className={css.togglePsd} onClick={() => setFieldValue('showPassword', !values.showPassword)}/>
    
    

                                

                            <button aria-label='Press to login' name='login-button' className={css.buttonSign} type="submit">{t('login')}</button>
                                       
                        <ul className={css.listProp}>

                            <li><Link href={'/sign-up'}>{t('register')}</Link></li>

                            <li>{t("forgotPassword")}</li>

                        </ul>
                        <ul className={css.scoialList}>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className={css.googleIcon} viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className={css.facebookIcon} viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className={css.githubIcon} viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </li>
                        </ul>
                        
                    </Form>
                    )}

                        
                    
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