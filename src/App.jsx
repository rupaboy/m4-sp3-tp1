import Menu from "./component/Menu"
import Header from "./component/Header"
import { useMenu } from "./hooks/useMenu"
import Builder from "./component/Builder"

function App() {

  const { isMenuOpen } = useMenu()


  return (

    <div className="w-full grid itemx-center justify-center">
      <Header />

      <main className='
      bg-zinc-400
      dark:bg-zinc-900
      pt-17 w-full
      sm:pl-30 sm:pt-0
      '>

        {isMenuOpen && <Menu />}

      { !isMenuOpen && <Builder/> }

      </main>
    </div>
  )
}

export default App
