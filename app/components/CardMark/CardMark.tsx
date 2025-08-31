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
    sizes: string[]
}
const items = [
    {id: '1', imgFront: '/items/one-rb.png', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE', sizes: ['S', 'M', 'L']},
    {id: '2', imgFront: '/items/two.jpg', price: '3099 UAH', name: 'Project G/R LONDON ZIP HOODIE', sizes: ['S', 'M', 'L']},
    {id: '3', imgFront: '/items/three.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE', sizes: ['S', 'M', 'L']},
    {id: '4', imgFront: '/items/four.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE', sizes: ['S', 'M', 'L']}
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
                    
                        <div className={css.thumbsWrapper}>
                            <Slide
                                direction='vertical'
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={2}
                                watchSlidesProgress
                                modules={[Thumbs]}
                                className={css.thumbs}
                            >
                                
                            
                                
                                <SwiperSlide >
                                    {item !== undefined &&
                                        <Image src={item.imgFront} alt={item.name} width={80} height={80} />
                                    }
                                    
                                </SwiperSlide>
                                <SwiperSlide >
                                    {item !== undefined &&
                                        <Image src={item.imgFront} alt={item.name} width={80} height={80} />
                                    }
                                    
                                </SwiperSlide>
                                
                            </Slide>
                        </div>
                    </div>    

                    <div>
                        <div className="swiper">
                            
                           <Slide
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Navigation, Thumbs]}
                                className={css.mainSwiper}

                            >
                                
                            
                                
                                <SwiperSlide >
                                    {item !== undefined &&
                                        <Image src={item.imgFront} alt={item.name} width={500} height={500} />
                                    }
                                    
                                </SwiperSlide>
                                <SwiperSlide >
                                    {item !== undefined &&
                                        <Image src={item.imgFront} alt={item.name} width={500} height={500} />
                                    }
                                    
                                </SwiperSlide>
                                
                            </Slide>
                            

                            
                            

                            
                        </div>
                        
                        
                    </div>
                    <div className={css.blockInfoItem}>
                        {item !== undefined &&
                            <>
                            <h1>{item.name}</h1>
                            <div className={css.blockInfo}>
                                <p>Розміри: </p>
                                <ul className={css.listItemProps}>
                               {item !== undefined && item.sizes.map((size) =>(
                                
                                <li key={size}>{size}</li>
                               ))}
                            </ul>
                            </div>
                            
                            <p className={css.price}>{item.price}</p>
                            <a target="_blank" href="https://t.me/toucandunstor3menegger"><button className={css.orderButton} type="button">Замовити</button></a>
                            </>
                            
                            
                        
                        }
                        
                        
                    </div>
                </div>
            </div>
        
        </>
    )


}

export default CardMark;