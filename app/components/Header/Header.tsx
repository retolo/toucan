
import Link from "next/link";
import css from './Header.module.css'
import AuthNav from "../AuthNav/AuthNav";
function Header(){
    return(
        <header >
            <div className={css.headerBlock}>
                <div className={css.container}>
                    
                    <nav  className={css.listNav}>
                        <Link href={'/'}><h1 className={css.headerMain}>TOUCANDUN.STOR3</h1></Link>
                        {/* <Link href={'/'}><Image src={'/photo_2025-07-29_20-41-30.jpg'} width={100} height={100} alt="avatar" /></Link> */}

                        <AuthNav/>
                    </nav>
                </div>
            </div>
        </header>
    )
}


export default Header;