import { useMenu } from '../../../../hooks/useMenu'

const HamburguerMenu = () => {

    const { toggleMenu } = useMenu()

    return (
        <button
            onClick={toggleMenu}
            className="
                mt-2 w-8 h-8 leading-7 rounded cursor-pointer
                dark:text-amber-200 font-black dark:bg-zinc-950
                hover:dark:bg-orange-950 hover:bg-zinc-100
                border-amber-800 dark:border-orange-300 border">

            <i className="
            text-amber-800 dark:text-orange-200
            h-[1em] bi bi-three-dots-vertical"/>

        </button>
    )
}

export default HamburguerMenu