import Menu from "./component/Menu"
import Header from "./component/Header"
import { useMenu } from "./hooks/useMenu"
import Mshirt from "./component/particle/builder/Mshirt"
import Fshirt from "./component/particle/builder/Fshirt"

function App() {

  const { isMenuOpen } = useMenu()

  return (

    <>
      <Header />

      <main className='
      bg-zinc-400
      dark:bg-zinc-900
      pt-17 w-screen h-screen
      sm:pl-30 sm:pt-0
      '>

        { isMenuOpen && <Menu />}

      <Fshirt></Fshirt>
      </main>
    </>
  )
}

export default App
