'use client'
import Link from 'next/link';
import css from './Orders.module.css'
import Image from 'next/image';
import useOrderData from '../lib/store/ordersStore';
import { useTranslation } from 'react-i18next';

function Orders(){
    const {t} = useTranslation();
    const {orders} = useOrderData();
        return(
            <div className={css.container}>
                <div className={css.blockCart}>
                    <div className={css.wrapper}>
                        
                        
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