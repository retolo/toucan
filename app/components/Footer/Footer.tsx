
import css from './Footer.module.css'
import { SiTelegram } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
function Footer(){
    return (
        <footer className={css.footer}>
            <div className={css.blockFooter}>
                <ul className={css.listSocialMeadia}>
                    <li><a aria-label="telegram icon link" href="https://t.me/toucandunstore"><SiTelegram size={30}/></a></li>
                    <li><a aria-label="tiktok icon link" href="https://www.tiktok.com/@toucandun"><FaTiktok size={30}/></a></li>
                    <li><a aria-label="instagram icon link" href="https://www.instagram.com/toucandun.stor3/"><FaInstagram size={30}/></a></li>
                    <li>TOUCANDUN.STORE &copy;</li>
                </ul>
                
            </div>
        </footer>
    )
}


export default Footer;