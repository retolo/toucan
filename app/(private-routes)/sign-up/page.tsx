'use client'
import Link from 'next/link';
import css from './SignUp.module.css'
import { useRouter } from 'next/navigation';
import { useUserData } from '@/app/lib/store/authStore';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import formSchema from '@/app/validation/formSchema';
import { validateEmail, validatePassword } from '@/app/validation/formSchema';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function SignUp(){


    const {t} = useTranslation();
    useEffect(() =>{
        AOS.init({
            duration: 800,
            offset: 100,
            once: true
        })
    })
    const router = useRouter();
    const {users, setUserData} = useUserData()

     interface initialValuesEdit{
        email: string,
        password: string
    }

    const initialValues: initialValuesEdit ={
        email: '',
        password: ''
    }
    
    const handleRegister = (values: initialValuesEdit) =>{

        if(users.some((user) => user.email === values.email)){

            toast('Ви вже зареєстрованні!', {
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
            setUserData(values.email, values.password);
            console.log(values.email, values.password)
            router.push('/sign-in');
        }
        
        }

    return(
        <div className={css.blockForm}>
            <div className={css.block} data-aos='fade-up'>
                <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={handleRegister}>
                    {({errors, touched}) =>(
                        <Form  className={css.formWrapper}>

                            <div className={css.inputWrapper}>
                                <Field placeholder=' ' required className={css.inputs} name='email' validate={validateEmail} type="email"/>
                                <label className={css.labelInput}>{t('email')}</label>
                                
                                {errors.email && touched.email && <div className={css.validation}>{errors.email}</div>}

                            </div>

                            
                            
                            
                            <div className={css.inputWrapper}>
                                <Field placeholder=' ' required className={css.inputs} name='password' validate={validatePassword} type="password"/>
                                <label className={css.labelInput}>{t('password')}</label>
                                {errors.password && touched.password && <div className={css.validation}>{errors.password}</div>}
                            </div>
                            
                            
                            

                            <button aria-label='Press to register an account' name='register-button' className={css.buttonSign} type="submit">{t('register')}</button>
                            

                        
                        <Link  className={css.textLog} href={'/sign-in'}>{t('login')}</Link>
                    </Form>
                    )}
                    
                </Formik>
                
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