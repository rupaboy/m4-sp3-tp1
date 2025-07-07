import Menu from "./component/Menu"
import Header from "./component/Header"
import { useMenu } from "./hooks/useMenu"
import { useCart } from './hooks/useCart'
import Builder from "./component/Builder"
import Cart from './component/Cart'

function App() {

  const { isMenuOpen, toggleMenu } = useMenu()
  const { isCartOpen, toggleCart } = useCart()


  return (

    <div className="select-none">
      <Header />

      <main className={`
      ${isMenuOpen ? '' : 'sm:pt-10 pt-28'}
      bg-zinc-400
      dark:bg-zinc-900
      grid justify-center
      w-screen sm:pl-30
      ${isCartOpen ? 'h-screen overflow-scroll': 'h-screen items-center' }
      `}>

        {isMenuOpen && !isCartOpen && <Menu />}
        {isMenuOpen && <Menu />}

       <Builder isMenuOpen={isMenuOpen} isCartOpen={isCartOpen} />

        {isCartOpen && <Cart />}        

      </main>

    </div>
  )
}

export default App
