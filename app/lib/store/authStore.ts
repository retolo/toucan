import { persist } from "zustand/middleware";
import { create } from "zustand";
import { User } from "@/app/types/type";






type isAuthenticatedStore = {
    users: User[]
    isAuthenticated: boolean
    setUserData: (userDataEmail: string, userDataPassword: string) => void;
    setAuthenticatedPerson: (authPerson: boolean) => void
    
    
}


export const useUserData = create<isAuthenticatedStore>()(
    persist(
        (set, get) => ({
            users: [],
            isAuthenticated: false,
            setUserData: (userDataEmail: string, userDataPassword: string) =>{
                const currentUsers = get().users;
                const newUser = {email: userDataEmail, password: userDataPassword};


                set(() => ({
                    users: [...currentUsers, newUser],
                    
                }));
            },
            setAuthenticatedPerson: (authPerson: boolean) =>{
                set(() =>({
                    isAuthenticated: authPerson,
                }))
            }
        }),
        {
            name: 'user-data',
            partialize: (state) => ({users: state.users})
        }
    )
)