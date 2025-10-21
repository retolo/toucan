import css from './About.module.css'

function About(){
    return(
        <div className={css.container}>
            <div className={css.centerWrapper}>
                <div className={css.wrapper}>   
                    <h1>Про магазин</h1>
                    <p className={css.text}>
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Quas obcaecati exercitationem voluptatem illo magni,
                        reprehenderit consequuntur nemo magnam nesciunt incidunt.
                    </p>
                </div>
            
            
            <div className={css.wrapperLink}>
                <h3 className={css.headers}>Додаткові ресурси</h3>
                <ul className={css.list}>
                    <li><a aria-label='Reviews telegram chanell' target='_blank' href='https://t.me/toucandunstor3reviews'>Відгуки</a></li>
                    <li><a aria-label='Catalog telegram chanell' target='_blank' href='https://t.me/toucandun_catalog'>Каталог</a></li>
                </ul>
                
                
            </div>
            
            </div>
        </div>
    )
}


export default About;