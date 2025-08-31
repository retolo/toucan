import Link from 'next/link';
import css from './SignUp.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Register',
    description: 'Register Page'
}
function SignUp(){
    return(
        <div className={css.blockForm}>
            <div className={css.block}>
                <form className={css.formWrapper}>
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
            </div>
        </div>
    )
}

export default SignUp;