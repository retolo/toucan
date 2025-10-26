import { create } from "zustand";







type isAuthenticatedStore = {

    isAuthenticated: boolean
    setAuthenticatedPerson: (authPerson: boolean) => void
    
    
}


export const useUserData = create<isAuthenticatedStore>()(

        (set) => ({

            isAuthenticated: false,
            setAuthenticatedPerson: (authPerson: boolean) =>{
                set(() =>({
                    isAuthenticated: authPerson,
                }))
            }
        }),
    
)