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
    idCartItem?: string
}



export type OrderItems = {
    id: string,
    idOrder: string,
    img: string,
    price: string,
    name: string,
    size: string[],  
}


export type UserOrderItem = {
    id: string,
    idOrder: string,
    img: string,
    price: string,
    name: string,
    size: string,
    city: string,
    warehouseId: string,
    payment: string
}

export type UserOrderForm = {
    size: string,
    city: string,
    warehouseId: string,
    payment: string
}