import ThemesButton from "./particle/ThemesButton"
import CartButton from "./particle/CartButton"

const Menu = () => {

  return (
    <>
      <main className="
    h-screen w-screen py-6 px-3 flex flex-col items-center justify-center fixed z-80
    bg-zinc-300
    dark:bg-zinc-950">

        <ThemesButton />
        <CartButton />

      </main>
    </>
  )
}

export default Menu