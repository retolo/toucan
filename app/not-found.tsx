import { Metadata } from "next";
import css from './NotFound.module.css'

export const metadata:Metadata = {
    title: '404 - Page not found',
    description: 'Sorry, the page you are looking for does not exist.',
    
    
}

const NotFound = () =>{
    return(
        <div className={css.blockNotFound}>
            <ul className={css.errorList}>
                <li className={css.error}>404 - Сторінка не знайдена</li>
                <li className={css.textError}>Вибачте, сторінки, яку ви шукаєте, не існує.</li>
            </ul>
            <p className={css.teamError}>Відділ турботи</p>

        </div>
    )
}
export default NotFound;