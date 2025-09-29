import {create} from 'zustand'
import { persist } from "zustand/middleware";



interface Theme{
    theme: boolean
    setTheme: (themePerson: boolean) => void


}



const useThemeData = create<Theme>()(
    persist(
        (set) => ({
            theme: true,
            setTheme: (themePerson: boolean) => set({theme: themePerson}),

            
        }),
        {
            name: 'theme-choose',
            partialize: (state) => ({theme: state.theme})
        }
    )
)



export default useThemeData