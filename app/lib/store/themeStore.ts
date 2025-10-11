import {create} from 'zustand'
import { persist } from "zustand/middleware";



interface Theme{
    theme: boolean
    language: string
    setTheme: (themePerson: boolean) => void
    setLanguage: (language: string) => void


}



const useThemeData = create<Theme>()(
    persist(
        (set) => ({
            theme: true,
            language: 'ua',
            setTheme: (themePerson: boolean) => set({theme: themePerson}),
            setLanguage: (language: string) => set({language: language})

            
        }),
        {
            name: 'theme-choose',
            partialize: (state) => ({theme: state.theme, language: state.language})
        }
    )
)



export default useThemeData