import css from './ModalMenu.module.css'
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

type ModalMenuProps = {
    onClose: () => void;
}

function ModalMenu({onClose}: ModalMenuProps){


    const {t} = useTranslation();


    return(
        <>
        <div className={css.backDrop}>
            <div className={css.modal}>
                <svg
                onClick={onClose}
                className={css.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>

                <div className={css.linksMain}>
                    <Link onClick={onClose} href={'/catalog'}>{t('catalog')}</Link>
                    <Link onClick={onClose} href={'/cart'}>{t('cart')}</Link>
                    <Link onClick={onClose} href={'/sign-in'}>{t('login')}</Link>
                    <Link onClick={onClose} href={'/sign-up'}>{t('register')}</Link>
                </div>
                

                

                
            </div>
        </div>
        
        
        
        </>
    )
}




export default ModalMenu;