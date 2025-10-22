'use client'
import Link from 'next/link';
import css from './Orders.module.css'
import Image from 'next/image';
import useOrderData from '@/app/lib/store/ordersStore';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Orders(){
    useEffect(() =>{
        AOS.init({
            duration: 800,
            offset: 100,
            once: true,

        })
    })

    const router = useRouter();

    const {t} = useTranslation();
    const {orders} = useOrderData();
        return(
            <div className={css.container}>
                <button data-aos="fade-right" onClick={() => router.back()} className={css.backButton} name="back button" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </button>
                <div className={css.blockCart} data-aos="fade-up">
                    <div className={css.wrapper} >
                        <h2 className={css.headerOrders}>{t('yourOrders')}</h2>
                        
                        <ul className={css.listCart}>
                            
                            {orders.map((order) =>(
                            
                                     <li key={order.idOrder}>
                                    <Link href={`/card/${order.id}`}>
                                        <Image src={order.img} width={150} height={150} alt={order.name}/>
                                    </Link>    
                                        <p>{order.name}</p>
                                        <p>{order.price}</p>
                                        <p>{order.size}</p>
                                        <Link href={`/details`}><p className={css.detailsText}>{t("detailsOfOrder")}</p></Link>
                                    
                                </li>
                                
                                
                            ))}
                            
                        </ul>
                        
                    </div>
                    
                </div>
            </div>
        )
}


export default Orders;