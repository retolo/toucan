
import css from './Products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { items } from "@/app/db/db";





function Products(){
    
    return(
        <div className={css.container}>
            <div >
                <ul className={css.listProducts}>
                    {items.map((item) =>(
                        <li key={item.id} className={css.blockProducts}>
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