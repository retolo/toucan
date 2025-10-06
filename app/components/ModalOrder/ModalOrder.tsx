'use client'

import useOrderData from "@/app/lib/store/ordersStore"
import css from './ModalOrder.module.css'
import { OrderItem } from "@/app/types/type"
import { useState } from "react"

interface ModalOrderProps{
    order: OrderItem | undefined
    sizes: string[] | undefined
    onClose: () => void
}

function ModalOrder({sizes, order, onClose}: ModalOrderProps){

    const {setOrder} = useOrderData()
    const idOrder = crypto.randomUUID();

    const [size, setSize] = useState<string>('')
    const handelCloseAdd = (order: OrderItem | undefined) =>{
            if(order !== undefined)
                setOrder({id: order.id, idOrder: idOrder, img: order.img, price: order.price, name: order.name, size: size});
            onClose();
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

                <h3 className={css.header}>Зробити замовлення</h3>

                <div className={css.wrapper}>
                    <form className={css.formBlock}>
                        <label className={css.label}>
                        Вибір оплати
                        <select className={css.orderVariants}>
                            <option>При отриманні</option>
                            <option>Картою на сайті</option>
                        </select>
                        </label>

                        <label className={css.label}>
                        Вибір оплати
                        <select onChange={(e) => setSize(e.target.value)} className={css.orderVariants}>
                            <option value={sizes && sizes[0]}>{sizes && sizes[0]}</option>
                            <option value={sizes && sizes[1]}>{sizes && sizes[1]}</option>
                            <option value={sizes && sizes[2]}>{sizes && sizes[2]}</option>
                        </select>
                        </label>

                        <label className={css.label}>
                        Місто
                        <input className={css.inputsOrder} type="text" required />
                        </label>

                        <label className={css.label}>
                        Номер відділення нової пошти
                        <input className={css.inputsOrder} type="text" required />
                        </label>

                        <button className={css.addButton} onClick={() => handelCloseAdd(order)} type="submit">
                        Зробити замовлення
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default ModalOrder;