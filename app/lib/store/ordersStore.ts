import {create} from 'zustand'
import { persist } from "zustand/middleware";
import { UserOrderItem } from '@/app/types/type';



interface Orders{
    orders: UserOrderItem[]
    setOrder: (order: UserOrderItem) => void
    deleteOrder: (order: UserOrderItem) => void
}




const useOrderData = create<Orders>()(
    persist(
        (set, get) =>({
            orders: [],
            setOrder: (order: UserOrderItem) =>{
                const currentOrders = get().orders;
                const newOrder = {id: order.id, idOrder: order.idOrder, img: order.img, price: order.price, name: order.name, size: order.size, city: order.city, warehouseId: order.warehouseId, payment: order.payment};

                set(() => ({
                    
                    orders: [...currentOrders, newOrder]
                }))

            },
            deleteOrder: (orderDelete: UserOrderItem) =>{
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