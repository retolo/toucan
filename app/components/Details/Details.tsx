import css from './Details.module.css'
import { useTranslation } from 'next-i18next';


type detailsProps = {
    onClose: () => void
    payment: string
    city: string
    wareHouse: string
} 


function Details({onClose, payment, city, wareHouse}: detailsProps){

    const {t} = useTranslation()

    return(
        <>
        <div className={css.backDrop}>
            <div className={css.modal}>
                <svg
                    onClick={onClose}
                    className={css.icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>



                <h2 className={css.headingDetails}>{t('detailsOfOrder')}</h2>

                <div className={css.wrapperBlockInfoOrder}>
                    <div className={css.blockInfoOrder}>
                    <p className={css.detailsText}>{t('city')}: {city}</p>
                    <p className={css.detailsText}>{t('warehouseId')}: {wareHouse}</p>
                    <p className={css.detailsText}>{t('paymentMethod')}: {payment}</p>

                    <p className={css.detailsText}>{t('orderTime')}</p>

                </div>
                </div>
                
            </div>


            
        </div>
        
        
        </>
    )
}



export default Details;