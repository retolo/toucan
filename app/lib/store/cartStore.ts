import {create} from 'zustand'
import { persist } from "zustand/middleware";
import { CartItem } from '@/app/types/type';




interface CartItemProps{
    items: CartItem[] 
    setItemCart: (item: CartItem) => void
    deleteItem: (item: CartItem) => void
}




const useCartItem = create<CartItemProps>()(
    persist(
        (set, get) =>({
            items: [],
            setItemCart: (item: CartItem ) =>{
                const currentItems = get().items;
                
                const newItems = {id: item.id, img: item.img, price: item.price, name: item.name, sizes: item.sizes, info: item.info};


                set(() => ({
                    
                    items: [...currentItems, newItems]
                }))
            },
            deleteItem: (item: CartItem) =>{
                const currentItems = get().items;
                
                const filterItems = currentItems.filter(cartItem => cartItem.id !== item.id);


                set(() => ({
                    items: [...filterItems]
                }))

            }
            
        }),
        {
            name: 'cart-items',
            partialize: (state) => ({items: state.items})
        }
    )
)


export default useCartItem;