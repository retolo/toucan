'use client'

import useOrderData from "@/app/lib/store/ordersStore"
import css from './ModalOrder.module.css'
import { OrderItems, UserOrderForm} from "@/app/types/type"
import { useState } from "react"
import { useTranslation } from "next-i18next"

interface ModalOrderProps{
    orders: OrderItems | undefined
    size: string
    onClose: () => void
}

function ModalOrder({size, orders, onClose}: ModalOrderProps){
    const {t} = useTranslation();
    const {setOrder} = useOrderData()

    const [payment, setPayment] = useState<string>('');

    const handelFormOrder =  (formData: FormData) =>{
        const values = Object.fromEntries(formData) as unknown as UserOrderForm
        console.log(values)
        if(values !== undefined && orders !== undefined){
            setOrder({id: orders.id, idOrder: orders.idOrder, img: orders.img, price: orders.price, name: orders.name, size: size, city: values.city, warehouseId: values.warehouseId, payment: payment});
            onClose();
        }
    }
     return(
        <div className={css.backDrop}>
            <div className={css.modal}>
                <svg
                onClick={onClose}
                className={css.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>

                <h3 className={css.header}>{t('makeAnOrder')}</h3>

                <div className={css.wrapper}>
                    <form action={handelFormOrder} className={css.formBlock}>

                        <input placeholder={t('city')} name="city" className={css.inputsOrder} type="text" required />

                        <input placeholder={t('warehouseId')} name="warehouseId" className={css.inputsOrder} type="text" required />
                        
                        <div className={css.blockPayment}>
                            <p className={css.textPayment}>{t('paymentMethod')}: </p>
                            <ul className={css.paymentMethod}>
                                <li><button onClick={(e) => setPayment(e.currentTarget.textContent)} className={css.paymentMethodButton} type="button">{t('paymentCard')}</button></li>
                                <li><button onClick={(e) => setPayment(e.currentTarget.textContent)} className={css.paymentMethodButton} type="button">{t('paymentOnWarehouse')}</button></li>
                            </ul>
                        </div>
                        
                        

                        <button aria-label="Press to make an order" name="make-an-order-button" className={css.orderButton}  type="submit">
                        {t('makeAnOrder')}
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default ModalOrder;