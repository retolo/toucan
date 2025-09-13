import { persist } from "zustand/middleware";
import { create } from "zustand";



export type User = {
    email: string
    password: string
    isAuthenticated: boolean
}



type isAuthenticatedStore = {
    users: User[]
    // userEmail: string
    // userPassword: string
    setUserData: (userDataEmail: string, userDataPassword: string, auth: boolean) => void;
    clearUserData: () => void
}


export const useUserData = create<isAuthenticatedStore>()(
    persist(
        (set, get) => ({
            users: [],
            setUserData: (userDataEmail: string, userDataPassword: string, auth: boolean) =>{
                const currentUsers = get().users;
                const newUser = {email: userDataEmail, password: userDataPassword, isAuthenticated: auth};


                set(() => ({
                    users: [...currentUsers, newUser]
                }));
            },
            clearUserData: () =>{
                set(() => ({users: []}))
            }
        }),
        {
            name: 'user-data',
            partialize: (state) => ({users: state.users})
        }
    )
)