'use client'
import css from './Cart.module.css'
import useCartItem from '../../lib/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Cart(){

    useEffect(() =>{
        AOS.init({
            duration: 800,
            offset: 100,
            once: true,
        })
    })
    const {t} = useTranslation();
    const {items, deleteItem} = useCartItem();
    const router = useRouter();
    return(
        <div className={css.container}>
            <button aria-label='Button to previous page'  data-aos="fade-right" onClick={() => router.back()} className={css.backButton} name="back button" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </button>
            <div className={css.blockCart} data-aos="fade-up">
                <div className={css.wrapper}>
                    <div className={css.blockHeaders}>
                        <h2 className={css.header}>{t('cart')}</h2>
                        <Link href={`/orders`}><h2 className={css.header}>{t('yourOrders')}</h2></Link>
                    </div>
                    
                    <ul className={css.listCart}>
                        
                        {items.map((item) =>(
                        
                                 <li key={item.idCartItem}>
                                <Link href={`/card/${item.id}`}>
                                    <Image src={item.img} width={150} height={150} alt={item.name}/>
                                </Link>    
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{item.sizes[0]}</p>
                                    <button aria-label='Delete item button' name='delete-button' className={css.deleteButton} onClick={() => deleteItem(item)} type='button'>{t('deleteCartItem')}</button>
                                
                            </li>
                            
                            
                        ))}
                        
                    </ul>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Cart;