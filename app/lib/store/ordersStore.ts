import {create} from 'zustand'
import { persist } from "zustand/middleware";
import { OrderItem } from '@/app/types/type';
import Orders from '@/app/orders/page';


interface Orders{
    orders: OrderItem[]
    setOrder: (order: OrderItem) => void
    deleteOrder: (order: OrderItem) => void
}




const useOrderData = create<Orders>()(
    persist(
        (set, get) =>({
            orders: [],
            setOrder: (order: OrderItem) =>{
                const currentOrders = get().orders;
                const newOrder = {id: order.id, idOrder: order.idOrder, img: order.img, price: order.price, name: order.name, size: order.size};

                set(() => ({
                    
                    orders: [...currentOrders, newOrder]
                }))

            },
            deleteOrder: (orderDelete: OrderItem) =>{
                const currentOrders = get().orders;
                const filter = currentOrders.filter((order) => order.idOrder !== orderDelete.idOrder);

                set(() => ({
                    
                    orders: [...filter]
                }))

            }
        }),
        {
            name: 'order-items',
            partialize: (state) => ({orders: state.orders})
        }
    )
)


export default useOrderData;