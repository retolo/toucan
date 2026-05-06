'use client'
import Link from "next/link";
import css from './Header.module.css'
import AuthNav from "../AuthNav/AuthNav";
import ModalMenu from "../ModalMenu/ModalMenu";
import { useState } from "react";
function Header(){


    const [isOpen, setIsOpen] = useState<boolean>(false);
    

    const handleClose = () =>{
        setIsOpen(false)
    }
    return(

        <>
            <header id="main">
                <div className={css.headerBlock}>
                    <div className={css.container}>
                        
                        <nav  className={css.listNav}>
                            <Link href={'/'}><h1 className={css.headerMain}>TOUCANDUN.STOR3</h1></Link>
                            <svg onClick={() => setIsOpen(true)} xmlns="http://www.w3.org/2000/svg" className={css.burgerMenuIcon} width="22" height="22" fill="currentColor"  viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            <AuthNav/>
                        </nav>
                    </div>
                </div>
            </header>



            {isOpen && <ModalMenu onClose={handleClose}/>}
        </>




    )
}


export default Header;