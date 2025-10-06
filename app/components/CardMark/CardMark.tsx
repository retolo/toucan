/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import css from './CardMark.module.css'
import 'swiper/css';
import { Navigation, Thumbs} from 'swiper/modules';
import { SwiperSlide, Swiper as Slide } from "swiper/react";
import { itemsMark } from "@/app/db/db";
import { CardMarkProps, ItemProps } from "@/app/types/interface";
import { CartItem, OrderItem } from "@/app/types/type";
import Modal from "../Modal/Modal";
import ModalOrder from "../ModalOrder/ModalOrder";
import storageKey from "@/app/constants";

function CardMark({id}: CardMarkProps){
    const [item, setItem] = useState<ItemProps | undefined>(undefined)
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenOrder, setIsOpenOrder] = useState<boolean>(false);
    const [itemCart, setItemCartOne] = useState<CartItem | undefined>(undefined)
    const [itemOrder, setItemOrder] = useState<OrderItem | undefined>(undefined)

    
    const getAuth = localStorage.getItem(storageKey);
    const idOrder = crypto.randomUUID();

   useEffect(() =>{
    const findItem = itemsMark.find((item) => item.id === id);
    setItem(findItem) 
   }, [id])

   const handleAddItemCart = (item: CartItem) =>{
    
    if(getAuth && JSON.parse(getAuth) === false){
        console.log('Спочатку потрібно увійти в аккаунт!')
        
    }else{
        setItemCartOne(item)
        setIsOpen(true)
        console.log(item)
        
    }
   }

   const handleAddItemOrder = (order: OrderItem) =>{
    
    if(getAuth && JSON.parse(getAuth) === false){
        console.log('Спочатку потрібно увійти в аккаунт!')
        
    }else{
        setItemOrder(order)
        setIsOpenOrder(true);
        console.log(item)
        
    }
   }

   const handleClose = () =>{
    setIsOpen(false);
   }
   const handelOpenOrderModal = () =>{
        setIsOpenOrder(true);
   }

   const handelCloseOrder = () =>{
        setIsOpenOrder(false);
   }

   



        return(
        <>
            <div className={css.container}>
                <div className={css.blockRes}>
                    <div className={css.gallery}>
                </div>    

                    <div>
                        <div className="swiper">
                           <Slide
                                spaceBetween={10}
                                navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                }}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Navigation, Thumbs]}
                                className={css.mainSwiper}
                            >
                                <SwiperSlide >
                                    {item !== undefined &&
                                        <Image src={item.img} alt={item.name} width={500} height={500} />
                                    }
                                    ...
                                </SwiperSlide>
                                <SwiperSlide >
                                    {item !== undefined &&
                                        <Image src={item.img} alt={item.name} width={500} height={500} />
                                    }
                                    ...
                                </SwiperSlide>
                            </Slide>
                        </div>
                    </div>

                    <div className={css.blockInfoItem}>
                        {item !== undefined &&
                            <>
                            <h1 className={css.itemName}>{item.name}</h1>
                            <div className={css.blockInfo}>
                                <p className={css.sizesText}>Розміри: </p>
                                
                                <ul className={css.listItemProps}>
                               {item !== undefined && item.sizes.map((size) =>(
                                
                                <li className={css.listItem} key={size}>{size}</li>
                               ))}
                            </ul>
                            </div>
                            
                            <p className={css.price}>{item.price}</p>
                            <ul className={css.buttonsList}>
                                <li><button onClick={() => handleAddItemOrder({id: item.id, idOrder: idOrder, name: item.name, price: item.price, size: item.sizes[0], img: item.img})} className={css.orderButton} type="button">Замовити</button></li>
                                <li>
                                    <button onClick={() => handleAddItemCart(item)} className={css.orderButton} type="button">
                                        Додати в корзину
                                    </button>
                                     
                                </li>
                            </ul>

                            <a className={css.descrItemLink} target="_blank" href="https://t.me/toucandunstor3menegger">Заміри речей зможете дізнатися у менеджера</a>

                            <div className={css.dropdown}>
                                <p className={css.textPulse}>Особливості речі</p>
                                <div className={css.dropdownContent}>
                                    <ul>
                                        {item !== undefined && item.info.map((value) =>(
                                            <li className={css.descrItemList} key={value}>{value}</li>
                                        ))         
                                        } 
                                    </ul>
                                </div>
                            </div>
                            </>
                        }
                    </div>
                </div>
            </div>


            {isOpen &&
                <Modal onClose={handleClose} item={itemCart !== undefined ? itemCart: undefined}/>
            }
            {isOpenOrder &&
                <ModalOrder sizes={itemCart !== undefined ? itemCart.sizes: undefined} onClose={handelCloseOrder} order={itemOrder !== undefined ? itemOrder: undefined}/>
            }
        </>
    )
}

export default CardMark;