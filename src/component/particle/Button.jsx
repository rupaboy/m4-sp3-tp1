import React from 'react'

const Button = ( action = console.log('action', buttonText = 'buttonText' )) => {
    return (
        <button
        onClick={action}
        className="
        mt-2 w-8 h-8 leading-7 rounded
        border-amber-800 dark:border-orange-300 border">
            {buttonText}
        </button>
    )
}

export default Button