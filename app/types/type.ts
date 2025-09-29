export type User = {
    email: string
    password: string
}


export type CartItem = {
    id: string,
    img: string,
    price: string,
    name: string,
    sizes: string[],
    info: string[]
}