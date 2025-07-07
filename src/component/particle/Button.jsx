import React from 'react'

const Button = ( {
    action,
    buttonText = 'buttonText',
    ratio = 'w-40',
    title = 'buttonTitle' } ) => {

    return (
        <button
        title={title}
        onClick={action}
        className={`${ratio}
        mt-2 h-8 leading-7 rounded cursor-pointer
        hover:dark:bg-orange-950 hover:bg-zinc-300
        border-amber-800 dark:border-orange-300 border
        dark:text-amber-200 font-black dark:bg-zinc-950`}>
            {buttonText}
        </button>
    )
}

export default Button