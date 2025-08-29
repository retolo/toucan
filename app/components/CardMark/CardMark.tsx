'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import css from './CardMark.module.css'
interface CardMarkProps{
    id: string
}
interface ItemProps{
    id: string,
    img: string,
    price: string,
    name: string,
    sizes: string[]
}
const items = [
    {id: '1', img: '/items/one.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE', sizes: ['S', 'M', 'L']},
    {id: '2', img: '/items/two.jpg', price: '3099 UAH', name: 'Project G/R LONDON ZIP HOODIE', sizes: ['S', 'M', 'L']},
    {id: '3', img: '/items/three.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE', sizes: ['S', 'M', 'L']},
    {id: '4', img: '/items/four.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE', sizes: ['S', 'M', 'L']}
]

function CardMark({id}: CardMarkProps){
    const [item, setItem] = useState<ItemProps | undefined>(undefined)

   useEffect(() =>{
    const findItem = items.find((item) => item.id === id);
    setItem(findItem) 
   }, [id])
        return(
        <>
            <div className={css.container}>
                <div className={css.blockRes}>
                    <div>
                        {item !== undefined &&
                            <Image src={item.img} alt={item.name} width={500} height={500}/>
                        }
                        
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

    // return <p>{id}</p>
}

export default CardMark;