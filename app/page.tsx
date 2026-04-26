'use client'
import Link from "next/link";
import css from './Home.module.css'
import Image from "next/image";
import { itemsHome } from "@/app/db/db";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Swiper, SwiperSlide} from 'swiper/react'
import { getTypeOfWarehouseRef } from "./lib/Apis/clientApis";
function Home(){

    const {t} = useTranslation();

  useEffect(() =>{
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  })



  useEffect(() =>{
    getTypeOfWarehouseRef('київ')
  }, [])
    
  return(
    <>
      <section  className={css.container}>
        <div className={css.blockHomePage}>
            <Swiper 
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}

              pagination={{
                type: 'progressbar'
              }}
              modules={[Pagination, Autoplay]}

              className="mySWiper"
            
            >

              <SwiperSlide>
                <div  className={css.hero} data-aos="fade-up">
                  <p className={css.textHero}>TOUCANDUN.STOR3 - SWAG IN EVERY HOME</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div  className={css.heroSecond} data-aos="fade-up">
                  <p className={css.textHero}>TOUCANDUN.STOR3 - SWAG IN EVERY HOME</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div  className={css.heroThird} data-aos="fade-up">
                  <p className={css.textHero}>TOUCANDUN.STOR3 - SWAG IN EVERY HOME</p>
                </div>
              </SwiperSlide>


            </Swiper>




            
            
            
            <div className={css.blockItems} data-aos="fade-up">
              <h2 className={css.headerItems}>{t('MostPopularProducts')}</h2>
              <a  className={css.linkUp}  href="#main"><button name="go-up-button" aria-label="Scroll to top" className={css.upButton} type="button">
                <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                </svg>
              </button>
              </a>
            <ul className={css.listItems}>
              {itemsHome.map((item, i) =>(
                <li  
                  className={css.blockProducts} 
                  key={item.id}
                >
                  <Link href={`/card/${item.id}`}>
                    <Image src={item.img} alt={item.name} width={300} height={300}  />
                  </Link>
                {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className={css.blockHelp}>
                <ul className={css.listHelp}>
              <li data-aos='fade-right'>
                <a aria-label="Link to telegram channel"  href="https://t.me/toucandunstor3menegger" target="_blank">
                  <button aria-label="Button to take help" name="support-button" className={css.helpButton} type="button">{t('techSupport')}</button>
                </a>
              </li>

              <li data-aos='fade-up'>
                <Link href={'/catalog'}>
                  <button aria-label="Button to chat with manager" name="manager-button" className={css.helpButton} type="button">{t('catalog')}</button>
                </Link>
              </li>

              <li data-aos='fade-left'>
                <Link  href="/about">
                  <button aria-label="Press to see about information" name="about-store-button" className={css.helpButton} type="button">{t('aboutStore')}</button>
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