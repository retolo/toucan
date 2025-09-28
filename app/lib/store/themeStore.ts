import {create} from 'zustand'
import { persist } from "zustand/middleware";



interface Theme{
    dark: boolean
    light: boolean
    setThemeDark: () => void
    setThemeLight: () => void

}



const useThemeData = create<Theme>()(
    persist(
        (set) => ({
            light: true,
            dark: false,
            setThemeDark: () => set({dark: true, light: false}),
            setThemeLight: () => set({light: true, dark: false}),
            
        }),
        {
            name: 'theme-choose',
            partialize: (state) => ({light: state.light, dark: state.dark})
        }
    )
)



export default useThemeData