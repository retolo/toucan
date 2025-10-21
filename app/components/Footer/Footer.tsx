import Image from "next/image";
import css from './Footer.module.css'
function Footer(){
    return (
        <footer className={css.footer}>
            <div className={css.blockFooter}>
                <ul className={css.listSocialMeadia}>
                    <li><a aria-label="telegram icon link" href="https://t.me/toucandunstore"><Image src={'/telegram-icon.jpg'} alt="telegram-icon" width={35} height={35}/></a></li>
                    <li><a aria-label="tiktok icon link" href="https://www.tiktok.com/@toucandun"><Image src={'/tiktok-icon.jpg'} alt="tiktok-icon" width={35} height={35}/></a></li>
                    <li><a aria-label="instagram icon link" href="https://www.instagram.com/toucandun.stor3/"><Image src={'/instagram-icon.jpg'} alt="instagram" width={35} height={35}/></a></li>
                    <li>TOUCANDUN.STORE &copy;</li>
                </ul>
                
            </div>
        </footer>
    )
}


export default Footer;