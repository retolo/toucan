
import Link from "next/link";
import css from './Header.module.css'
// import AuthNav from "../AuthNav/AuthNav";
import dynamic from "next/dynamic";

// ⬇️ импортим клиентский компонент без SSR
const AuthNav = dynamic(() => import("../AuthNav/AuthNav"), { ssr: false });

function Header(){
    return(
        <header id="main">
            <div className={css.headerBlock}>
                <div className={css.container}>
                    
                    <nav  className={css.listNav}>
                        <Link href={'/'}><h1 className={css.headerMain}>TOUCANDUN.STOR3</h1></Link>
                        <AuthNav/>
                    </nav>
                </div>
            </div>
        </header>
    )
}


export default Header;