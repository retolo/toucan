
import Products from "../components/Products/Products";
import { Metadata } from "next";


export const metadata: Metadata ={
    title: 'Каталог',
    description: 'Каталог товарів'
}

function Catalog(){
    return(
        <>
            <Products/>
        </>
    )
}


export default Catalog;