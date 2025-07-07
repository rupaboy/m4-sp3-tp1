import { useCart } from '../../hooks/useCart'
import { useMenu } from '../../hooks/useMenu'

const CartButton = () => {

const { toggleCart, isCartOpen } = useCart()
const { toggleMenu, isMenuOpen } = useMenu()

const buttonBehaviour = () => {

    if (isMenuOpen) {
                        
                        if (!isCartOpen) {
                            toggleMenu(),
                            toggleCart()
                        } else {
                            toggleMenu()
                        }
                         /*console.log('El Carrito está cerrado e ingreso desde el menu')*/
                        
                    } else {
                        toggleMenu()
                        /*console.log('El Carrito está abierto e ingreso desde el menu')*/
                    }

    }

    return (
        <>
            <button
                onClick={buttonBehaviour}
                className="
                hover:dark:bg-orange-950 hover:bg-zinc-100 cursor-pointer
                font-black mt-2 px-2 h-8 w-40 leading-7 rounded border
              bg-zinc-300 dark:bg-zinc-950
              border-amber-800 dark:border-orange-300
              text-amber-800 dark:text-orange-200">

                Carrito

            </button>
        </>
    )
}




export default CartButton