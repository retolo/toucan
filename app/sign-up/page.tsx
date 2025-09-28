'use client'
import Link from 'next/link';
import css from './SignUp.module.css'
import { useRouter } from 'next/navigation';
import { useUserData } from '../lib/store/authStore';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import formSchema from '../validation/formSchema';

function SignUp(){
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
            router.push('/sign-in');
        }
        
        }

    return(
        <div className={css.blockForm}>
            <div className={css.block}>
                <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={handleRegister}>
                    <Form  className={css.formWrapper}>
                        <fieldset>

                            <legend>Email</legend>
                            <Field required className={css.inputs} name='email' type="email"/>
                            
                            
                            
                            <legend>Password</legend>
                            <Field required className={css.inputs} name='password' type="password"/>
                            
                            <button className={css.buttonSign} type="submit">Реєстрація</button>
                            <Link className={css.textLog} href={'/sign-in'}>Увійти</Link>

                        </fieldset>
                    </Form>
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