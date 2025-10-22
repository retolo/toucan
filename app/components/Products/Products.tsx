'use client'
import css from './Products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { items } from "@/app/db/db";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




function Products(){

    useEffect(() =>{
        AOS.init({
            duration: 800,
            offset: 100,
            once: true
        })
    })
    
    return(
        <div className={css.container}>
            <div data-aos="fade-up"  className={css.wrapperProducts}>
                <ul className={css.listProducts}>
                    {items.map((item, i) =>(
                        <li 
                            key={item.id} 
                            className={css.blockProducts}
                            data-aos="zoom-in"
                            data-aos-delay={i * 50}
                        >
                            <Link href={`/card/${item.id}`}><Image alt={item.name} src={item.img} width={300} height={300}/></Link>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}



export default Products;