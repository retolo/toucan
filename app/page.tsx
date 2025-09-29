import Link from "next/link";
import css from './Home.module.css'
import Image from "next/image";
import { itemsHome } from "@/app/db/db";

function Home(){
  return(
    <>
      <section  className={css.container}>
        <div className={css.blockHomePage}>
            <div  className={css.hero}>
              <p className={css.textHero}>TOUCANDUN.STOR3 - SWAG IN EVERY HOME</p>
            </div>
            
            
            <div className={css.blockItems}>
              <h2 className={css.headerItems}>Найпопулярніші товари</h2>
              <a className={css.linkUp} href="#main"><button className={css.upButton} type="button">
                <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                </svg>
              </button>
              </a>
            <ul className={css.listItems}>
              {itemsHome.map((item) =>(
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
                  <button className={css.helpButton} type="button">Тех-підтримка</button>
                </a>
              </li>

              <li>
                <a href="https://t.me/toucandunstor3menegger" target="_blank">
                  <button className={css.helpButton} type="button">Менеджер</button>
                </a>
              </li>

              <li>
                <Link href="/about">
                  <button className={css.helpButton} type="button">Про магазин</button>
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