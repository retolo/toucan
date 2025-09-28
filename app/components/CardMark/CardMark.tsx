'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import css from './CardMark.module.css'
import 'swiper/css';
import { Navigation, Thumbs} from 'swiper/modules';
import { SwiperSlide, Swiper as Slide } from "swiper/react";



interface CardMarkProps{
    id: string
}
interface ItemProps{
    id: string,
    imgFront: string,
    price: string,
    name: string,
    sizes: string[],
    info: string[]
}
const items = [
    {
        id: '1', 
        imgFront: '/items/one.jpg', 
        price: '3499 UAH', 
        name: 'Project G/R CUNTIER ZIP HOODIE', 
        sizes: ['S', 'M', 'L'], 
        info: ['- НАПІВОБРАЗНИЙ КРІЙ', '- ПАРОДІЙНИЙ ГРАФІЧНИЙ ДИЗАЙН',  '- РЕТРО-ДИЗАЙН',  '- ВІНТАЖНИЙ ОДЯГ, ВИПРАНИЙ',  '- ПОШКОДЖЕНІ ДЕТАЛІ']
    },  
    {
        id: '2', 
        imgFront: '/items/two.jpg', 
        price: '3099 UAH', 
        name: 'Project G/R LONDON ZIP HOODIE', 
        sizes: ['S', 'M', 'L'],
        info: ['- НАПІВОБРАЗНИЙ КРІЙ', '- ПАРОДІЙНИЙ ГРАФІЧНИЙ ДИЗАЙН',  '- СКЛАДЕННИЙ-ДИЗАЙН',  '- ВІНТАЖНИЙ ОДЯГ, ВИПРАНИЙ',  '- ПОШКОДЖЕНІ ДЕТАЛІ']
    },
    {
        id: '3', 
        imgFront: '/items/three.jpg', 
        price: '3499 UAH', 
        name: 'Project G/R CUNTIER ZIP HOODIE', 
        sizes: ['S', 'M', 'L'],
        info: ['- НАПІВОБРАЗНИЙ КРІЙ', '- ПАРОДІЙНИЙ ГРАФІЧНИЙ ДИЗАЙН',  '- РЕТРО-ДИЗАЙН',  '- ВІНТАЖНИЙ ОДЯГ, ВИПРАНИЙ',  '- ПОШКОДЖЕНІ ДЕТАЛІ']
    },
    {
        id: '4', 
        imgFront: '/items/four.jpg', 
        price: '3499 UAH', 
        name: 'Project G/R CUNTIER ZIP HOODIE', 
        sizes: ['S', 'M', 'L'],
        info: ['- НАПІВОБРАЗНИЙ КРІЙ', '- ПАРОДІЙНИЙ ГРАФІЧНИЙ ДИЗАЙН',  '- РЕТРО-ДИЗАЙН',  '- ВІНТАЖНИЙ ОДЯГ, ВИПРАНИЙ',  '- ПОШКОДЖЕНІ ДЕТАЛІ']
    }
]





function CardMark({id}: CardMarkProps){
    const [item, setItem] = useState<ItemProps | undefined>(undefined)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)



   useEffect(() =>{
    const findItem = items.find((item) => item.id === id);
    setItem(findItem) 
   }, [id])
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
                            <a target="_blank" href="https://t.me/toucandunstor3menegger"><button className={css.orderButton} type="button">Замовити</button></a>
                            
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