import Card from "../page";
import { items } from "@/app/db/db";




type Props = {
    params: Promise<{id: string}>
}

export  async function generateMetadata({ params }: Props){
    const {id} = await params
        for(let i = 0; i < items.length; i++){
            if(items[i].id === id){
                return{
                    title: items[i].name,
                    description: items[i].name,
                }
            }
        }
}




async function CardId({params}: Props){
    const {id} = await params;
    
    return(
        <Card id={id}/>
    )
    
}

export default CardId;