'use client'
import css from './Error.module.css'

function Error(){
    return(
        <>
            <div className={css.blockError}>
                <ul className={css.errorList}>
                    <li className={css.mainError}>Щось пішло не так..</li>
                    <li className={css.secondError}>Спробуйте перезавантажити сайт</li>
                </ul>
                
                <p className={css.teamError}>Відділ турботи</p>
            </div>
        
        </>
    )
}

export default Error;