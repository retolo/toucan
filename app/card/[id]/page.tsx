import Card from "../page";
type Props = {
    params: Promise<{id: string}>
}



async function CardId({params}: Props){
    const {id} = await params
    return(
        <Card id={id}/>
    )
    
}

export default CardId;