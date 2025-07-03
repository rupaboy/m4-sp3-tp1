import HamburguerMenu from "./particle/molecule/Header/HamburguerMenu"
import Logo from "./particle/molecule/Header/Logo"


const Header = () => {

    return (
        <>
            <div className="
            bg-zinc-300 dark:bg-zinc-950 z-10
            text-zinc-950 dark:text-zinc-400
            border-b border-amber-800 dark:border-b-orange-300
            flex min-w-screen h-20 justify-between px-6 items-center fixed
            sm:flex-col-reverse sm:h-screen sm:w-25 sm:min-h-77 sm:min-w-25 sm:border-r sm:border-b-0 sm:py-1">

                <Logo
                brandName='ShirtHappens'
                tailWindClassNames='
                font-manufacturing-consent-regular text-5xl pr-2
                sm:rotate-[-90deg] sm:mb-28 sm:mr-2'/>

                <HamburguerMenu/>

            </div>

            <hr className="text-zinc-950 bg-zinc-300 border-zinc-500 absolute h-25
                dark:bg-zinc-950 dark:text-zinc-300 dark:border-zinc-900
                sm:absolute sm:top-0 sm:left-25 sm:h-screen sm:border-r sm:w-5
                border-b w-full shadow-md" />
                
                {/* Guarda ornamental*/}
            
        </>
    )
}

export default Header