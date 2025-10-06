'use client'
import Image from 'next/image';
import { CartItem } from '@/app/types/type';
import css from './Modal.module.css'
import useCartItem from '@/app/lib/store/cartStore';
import { useState } from 'react';
interface ModalProps{
    item: CartItem | undefined
    onClose: () => void
}
function Modal({item, onClose}: ModalProps){
    const [selectedSize, setSelectedSize] = useState(item?.sizes[0] ?? "");

    const {setItemCart} = useCartItem();
    const handelCloseAdd = (item: CartItem | undefined) =>{
        if(item !== undefined)
            setItemCart({id: item.id, img: item.img, price: item.price, name: item.name, sizes: [selectedSize], info: item.info});
        onClose();
    }
    return(
        <div className={css.backDrop}>
            <div className={css.modal}>
                <svg onClick={onClose} className={css.icon} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <h3 className={css.header}>Додати в корзину</h3>
                <div className={css.mainContent}>   
                    
                    <ul className={css.modalList}>
                        {item !== undefined &&
                            <li key={item.id}>
                                
                                <Image src={item.img} alt={item.name} width={150} height={150}/>
                                

                                <p>{item.name}</p>
                                <select onChange={(e) => setSelectedSize(e.target.value)} className={css.sizes}>
                                    <option value={item.sizes[0]}>{item.sizes[0]}</option>
                                    <option value={item.sizes[1]}>{item.sizes[1]}</option>
                                    <option value={item.sizes[2]}>{item.sizes[2]}</option>
                                </select>
                                <p>{item.price}</p>
                                
                            </li>
                        }

                        
                    </ul>
                    
                    
                </div>
                <button className={css.addButton} onClick={() => handelCloseAdd(item)} type='button'>Додати в корзину</button>
                

            </div>
        </div>
    )
}


export default Modal;