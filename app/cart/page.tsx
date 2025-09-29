'use client'
import css from './Cart.module.css'

function Profile(){
    
    return(
        <div className={css.container}>
            <div className={css.blockCart}>
                <h2 className={css.header}>Корзина</h2>
                <ul className={css.listCart}>
                    <li></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Profile;