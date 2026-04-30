'use client'
import css from './Products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { items } from "@/app/db/db";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';



function Products(){
    const router = useRouter();
    useEffect(() =>{
        AOS.init({
            duration: 800,
            offset: 100,
            once: true
        })
    })
    
    return(
        <div className={css.container}>
            <button aria-label='Button to previous page'  data-aos="fade-right" onClick={() => router.back()} className={css.backButton} name="back button" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </button>
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