import Menu from "./component/Menu"
import Header from "./component/Header"
import { useMenu } from "./hooks/useMenu"
import { useState } from "react"
import TShirts from './component/particle/builder/TShirts'
import tShirts from './utils/tShirts.json'

function App() {

  const { isMenuOpen } = useMenu()
  const [isTShirtMale, setIsTShirtMale] = useState(false)
  const [tShirtColor, setTShirtColor] = useState(2)
  const [tShirtSize, setTShirtSize] = useState(0)

  return (

    <>
      <Header />

      <main className='
      bg-zinc-400
      dark:bg-zinc-900
      pt-17 w-screen h-screen
      sm:pl-30 sm:pt-0
      '>

        {isMenuOpen && <Menu />}

        {!isMenuOpen &&

          <div>

            <TShirts
              isTShirtMale={isTShirtMale}
              tShirtColor={tShirts.color[tShirtColor].hex}
              className='relative w-full grid justify-around' />

          </div>

        }

      </main>
    </>
  )
}

export default App
