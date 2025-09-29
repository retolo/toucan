'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import css from './CardMark.module.css'
import 'swiper/css';
import { Navigation, Thumbs} from 'swiper/modules';
import { SwiperSlide, Swiper as Slide } from "swiper/react";
import { itemsMark } from "@/app/db/db";
import { useUserData } from "@/app/lib/store/authStore";
import { Slide as ToastSlide, ToastContainer, toast } from 'react-toastify';
import { CardMarkProps, ItemProps } from "@/app/types/interface";
import useCartItem from "@/app/lib/store/cartStore";

function CardMark({id}: CardMarkProps){
    const [item, setItem] = useState<ItemProps | undefined>(undefined)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
    const {isAuthenticated} = useUserData();
    const {setItemCart} = useCartItem();

   useEffect(() =>{
    const findItem = itemsMark.find((item) => item.id === id);
    setItem(findItem) 
   }, [id])

   const handleAddItemCart = () =>{
    if(!isAuthenticated){
        console.log('Спочатку потрібно увійти в аккаунт!')
        
    }else{
        
    }
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
                                        <Image src={item.imgFront} alt={item.name} width={500} height={500} />
                                    }
                                    ...
                                </SwiperSlide>
                                <SwiperSlide >
                                    {item !== undefined &&
                                        <Image src={item.imgFront} alt={item.name} width={500} height={500} />
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
                                <li><a target="_blank" href="https://t.me/toucandunstor3menegger"><button className={css.orderButton} type="button">Замовити</button></a></li>
                                <li>
                                    <button onClick={handleAddItemCart} className={css.orderButton} type="button">
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
        </>
    )
}

export default CardMark;