import { useContext } from "react";
import MenuContext from '../context/MenuContext'


export const useMenu = () => {
    const context = useContext(MenuContext)
    
    if (!context) {
        throw new Error("useMenu debe ser utilizado dentro del MenuProvider");
    }

    return context;
};