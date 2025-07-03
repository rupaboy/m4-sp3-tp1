import { createContext } from 'react'
import { useState } from "react"

const MenuContext = createContext()

export const MenuProvider = ({ children }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }
 

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>

            {children}

        </MenuContext.Provider>
    );
};

export default MenuContext