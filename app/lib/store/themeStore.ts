import {create} from 'zustand'
import { persist } from "zustand/middleware";



interface Theme{
    themeMod: boolean
    language: string
    setThemeMod: (themePerson: boolean) => void
    setLanguage: (language: string) => void


}



const useThemeData = create<Theme>()(
    persist(
        (set) => ({
            themeMod: true,
            language: 'ua',
            setThemeMod: (themePerson: boolean) => set({themeMod: themePerson}),
            setLanguage: (language: string) => set({language: language})

            
        }),
        {
            name: 'theme-choose',
            partialize: (state) => ({theme: state.themeMod, language: state.language})
        }
    )
)



export default useThemeData