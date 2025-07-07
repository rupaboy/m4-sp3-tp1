import { useTheme } from "../../hooks/useTheme"
import { useMenu } from '../../hooks/useMenu'

const ThemesButton = () => {

    const { toggleTheme, isDark } = useTheme() //Consume función palanca de cambio de tema

    const { toggleMenu } = useMenu()

    return (
        <>
            <button
            onClick={ () => {
                toggleTheme();
                toggleMenu();
            }}
            className="
            
            cursor-pointer
        hover:dark:bg-orange-950 hover:bg-zinc-100
        
         font-black
            
            mt-2 px-2 h-8 w-40 leading-7 rounded border
            bg-zinc-300 dark:bg-zinc-950
            border-amber-800 dark:border-orange-300
            text-amber-800 dark:text-orange-200">

                {isDark ? 'Tema Claro' : 'Tema Oscuro'}

            </button>
        </>
    )
}

export default ThemesButton