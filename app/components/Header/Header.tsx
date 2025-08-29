import Image from "next/image";
import Link from "next/link";
import css from './Header.module.css'

function Header(){
    return(
        <header >
            <div className={css.headerBlock}>
                <div className={css.container}>
                    <Link href={'/'}><Image src={'/photo_2025-07-29_20-41-30.jpg'} width={100} height={100} alt="avatar" /></Link>
                    <h1 >TOUCANDUN.STOR3</h1>
                    <nav >
                        <ul className={css.listNav}>
                            <li><Link href={'/sign-in'}>Вхід</Link></li>
                            <li><Link href={'/sign-up'}>Реєстрація</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}


export default Header;