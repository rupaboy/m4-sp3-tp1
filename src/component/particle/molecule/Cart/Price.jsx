

const Price = ( {price = '0', pre = 'precio:', tailWindClassNames = ''} ) => {
  
  return (
    <div className={`${tailWindClassNames}
    font-manufacturing-consent-regular mt-2 px-2 flex gap-1
    `}>
    
        <span className="
        text-amber-950 text-2xl dark:text-zinc-100
        ">{pre}</span>
        <span className="
        text-amber-900 pt-1 text-xl dark:text-amber-400
        "> $</span>
        <span className="
        text-zinc-950 text-2xl dark:text-amber-100
        ">{price}</span>
    
    </div>
  )
}

export default Price