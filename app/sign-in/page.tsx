import Link from 'next/link';
import css from './SignIn.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login Page'
}
function SignIn(){
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
                    <button className={css.buttonSign} type="submit">Вхід</button>
                    <ul className={css.listProp}>
                        <li><Link href={'/sign-up'}>Зареєструватися</Link></li>
                        <li>Забув пароль?</li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default SignIn;