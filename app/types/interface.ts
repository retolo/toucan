export interface CardMarkProps{
    id: string
}
export interface ItemProps{
    id: string,
    img: string,
    price: string,
    name: string,
    sizes: string[],
    info: string[]
}


export interface initialValuesEdit{
    email: string,
    password: string,
    showPassword: boolean
}