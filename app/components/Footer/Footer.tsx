import Image from "next/image";
import css from './Footer.module.css'
function Footer(){
    return (
        <footer>
            <div className={css.blockFooter}>
                <ul className={css.listSocialMeadia}>
                    <li><a href="https://t.me/toucandunstore"><Image src={'/telegram-icon.jpg'} alt="telegram-icon" width={35} height={35}/></a></li>
                    <li><a href="https://www.tiktok.com/@toucandun"><Image src={'/tiktok-icon.jpg'} alt="tiktok-icon" width={35} height={35}/></a></li>
                    <li><a href="https://www.instagram.com/toucandun.stor3/"><Image src={'/instagram-icon.jpg'} alt="instagram" width={35} height={35}/></a></li>
                </ul>
                <p></p>
            </div>
        </footer>
    )
}


export default Footer;