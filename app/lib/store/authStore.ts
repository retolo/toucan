import { persist } from "zustand/middleware";
import { create } from "zustand";



export type User = {
    email: string
    password: string
}



type isAuthenticatedStore = {
    isAuthenticated: boolean
    user: User | null
    setUserData: (userData: User) => void;
    clearUserData: () => void
}


export const useUserData = create<isAuthenticatedStore>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            user: null,
            setUserData: (userData: User) =>{
                set(() => ({user: userData, isAuthenticated: true}))
            },
            clearUserData: () =>{
                set(() => ({user: null, isAuthenticated: false}))
            }
        }),
        {
            name: 'user-data',
            partialize: (state) => ({user: state.user})
        }
    )
)