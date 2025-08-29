import css from './SignIn.module.css'
function SignIn(){
    return(
        <div className={css.blockForm}>
            <div className={css.block}>
                <form className={css.formWrapper}>
                    <label className={css.labelInput}>
                        Email
                        <input className={css.inputs} name='email' type="email"/>
                    </label>
                    
                    <label className={css.labelInput}>
                        Password
                        <input className={css.inputs} name='password' type="password"/>
                    </label>
                    <button type="submit">Вхід</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;