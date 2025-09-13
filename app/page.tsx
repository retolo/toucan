import Link from "next/link";
import css from './Home.module.css'
import Image from "next/image";
const items = [
    {id: '1', img: '/items/one.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE'},
    {id: '2', img: '/items/two.jpg', price: '3099 UAH', name: 'Project G/R LONDON ZIP HOODIE'},
    {id: '3', img: '/items/three.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE'},
    {id: '4', img: '/items/four.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE'},
    {id: '5', img: '/items/one.jpg', price: '3499 UAH', name: 'Project G/R CUNTIER ZIP HOODIE'},
    {id: '6', img: '/items/two.jpg', price: '3099 UAH', name: 'Project G/R LONDON ZIP HOODIE'},
]
function Home(){
  return(
    <>
      <section className={css.container}>
        <div className={css.blockHomePage}>
            <div className={css.hero}>
              <p className={css.textHero}>toucandun.stor3 - swag in every home</p>
            </div>
            
            
            <div className={css.blockItems}>
              <h2 className={css.headerItems}>Найпопулярніші товари</h2>
            <ul className={css.listItems}>
              {items.map((item) =>(
                <li className={css.blockProducts} key={item.id}>
                  <Link href={`/card/${item.id}`}>
                    <Image src={item.img} alt={item.name} width={300} height={300}/>
                  </Link>
                {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className={css.blockHelp}>
                <ul className={css.listHelp}>
              <li>
                <a href="https://t.me/toucandunstor3menegger" target="_blank">
                  Тех-підтримка
                </a>
              </li>

              <li>
                <a href="https://t.me/toucandunstor3menegger" target="_blank">
                  Менеджер
                </a>
              </li>

              <li>
                <Link href="/about">
                  Про магазин
                </Link>
              </li>
            </ul>
            </div>
        </div>
        
      </section>
    
    </>
  )
}


export default Home;