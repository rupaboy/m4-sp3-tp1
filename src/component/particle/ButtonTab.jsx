import React from 'react'

const Button = ( {action, buttonText = 'buttonText', width = 'w-70'} ) => {
    return (
        <button
        onClick={action}
        className={`${width}
        mt-2 h-8 leading-7 rounded
        border-amber-800 dark:border-orange-300 border
        dark:text-amber-200 font-black dark:bg-zinc-950`}>
            {buttonText}
        </button>
    )
}

export default Button