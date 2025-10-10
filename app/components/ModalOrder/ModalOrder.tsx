'use client'

import useOrderData from "@/app/lib/store/ordersStore"
import css from './ModalOrder.module.css'
import { OrderItems, UserOrderForm} from "@/app/types/type"


interface ModalOrderProps{
    orders: OrderItems | undefined
    sizes: string[] | undefined
    onClose: () => void
}

function ModalOrder({sizes, orders, onClose}: ModalOrderProps){

    const {setOrder} = useOrderData()



    const handelFormOrder =  (formData: FormData) =>{
        const values = Object.fromEntries(formData) as unknown as UserOrderForm
        console.log(values)
        if(values !== undefined && orders !== undefined){
            setOrder({id: orders.id, idOrder: orders.idOrder, img: orders.img, price: orders.price, name: orders.name, size: [values.size], city: values.city, warehouseId: values.warehouseId, payment: values.payment});
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

                <h3 className={css.header}>Зробити замовлення</h3>

                <div className={css.wrapper}>
                    <form action={handelFormOrder} className={css.formBlock}>
                        <label className={css.label}>
                        Вибір оплати
                        <select required name="payment" className={css.orderVariants}>
                            <option value={'При отриманні'}>При отриманні</option>
                            <option value={'Картою на сайті'}>Картою на сайті</option>
                        </select>
                        </label>

                        <label className={css.label}>
                        Вибір розміру
                        <select  required name="size"  className={css.orderVariants}>
                            {sizes && sizes.map((size) =>(
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                        </label>

                        <label className={css.label}>
                        Місто
                        <input name="city" className={css.inputsOrder} type="text" required />
                        </label>

                        <label className={css.label}>
                        Номер відділення нової пошти
                        <input name="warehouseId" className={css.inputsOrder} type="text" required />
                        </label>

                        <button className={css.addButton}  type="submit">
                        Зробити замовлення
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default ModalOrder;