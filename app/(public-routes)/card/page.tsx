import CardMark from "@/app/components/CardMark/CardMark";

interface CardProps{
    id: string
}
function Card({id}: CardProps){
    return(
        <CardMark id={id}/>
    )
}


export default Card;