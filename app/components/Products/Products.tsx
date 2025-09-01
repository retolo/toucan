
import css from './Products.module.css'
import Image from 'next/image'
import Link from 'next/link'
const items = [
    {id: '1', img: '/items/one.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE'},
    {id: '2', img: '/items/two.jpg', price: '3099 UAH', name: 'Project G/R LONDON ZIP HOODIE'},
    {id: '3', img: '/items/three.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE'},
    {id: '4', img: '/items/four.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE'},
    {id: '5', img: '/items/one.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE'},
    {id: '6', img: '/items/two.jpg', price: '3099 UAH', name: 'Project G/R LONDON ZIP HOODIE'},
    {id: '7', img: '/items/three.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE'},
    {id: '8', img: '/items/four.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE'}
]
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