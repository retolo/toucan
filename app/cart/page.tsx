'use client'
import css from './Cart.module.css'
import useCartItem from '../lib/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function Cart(){
    const {t} = useTranslation();
    const {items, deleteItem} = useCartItem();
    
    return(
        <div className={css.container}>
            <div className={css.blockCart}>
                <div className={css.wrapper}>
                    <div className={css.blockHeaders}>
                        <h2 className={css.header}>{t('cart')}</h2>
                        <Link href={`/orders`}><h2 className={css.header}>{t('yourOrders')}</h2></Link>
                    </div>
                    
                    <ul className={css.listCart}>
                        
                        {items.map((item) =>(
                        
                                 <li key={item.id}>
                                <Link href={`/card/${item.id}`}>
                                    <Image src={item.img} width={150} height={150} alt={item.name}/>
                                </Link>    
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{item.sizes[0]}</p>
                                    <button className={css.deleteButton} onClick={() => deleteItem(item)} type='button'>{t('deleteCartItem')}</button>
                                
                            </li>
                            
                            
                        ))}
                        
                    </ul>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Cart;