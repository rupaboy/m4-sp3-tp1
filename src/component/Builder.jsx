import TShirts from './particle/builder/TShirts'
import tShirts from '../utils/tShirts.json'
import priceConfig from '../utils/basePrice.json'
import Button from './particle/Button'
import { useState } from "react"
import { useCart } from '../hooks/useCart'
import { buildUniqueId } from '../utils/buildUniqueId'

const Builder = ( {isMenuOpen, isCartOpen }) => {

  const [isTShirtMale, setIsTShirtMale] = useState(true)
  const [tShirtColor, setTShirtColor] = useState(0)
  const [tShirtSize, setTShirtSize] = useState(2)
  const [tShirtStamp, setTShirtStamp] = useState(0)
  const [isTShirtStampInverted, setTShirtStampInverted] = useState(true)

  const { addToCart, toggleCart } = useCart();

  const addCurrentTShirtToCart = () => {
    const uniqueId = buildUniqueId({
      isTShirtMale,
      tShirtColor,
      tShirtSize,
      tShirtStamp,
      isTShirtStampInverted,
    })

    //Calcular precio
    const tShirtSizeObj = tShirts.size[tShirtSize];
    const priceFactor = tShirtSizeObj?.priceFactor || 1;

    const price = priceConfig.basePrice * priceFactor


    addToCart({ uniqueId, price })
    toggleCart()
  }

  const previousColor = () => {
    setTShirtColor(prev => prev === 0 ? tShirts.color.length - 1 : prev - 1);
  };

  const nextColor = () => {
    setTShirtColor(prev => prev === tShirts.color.length - 1 ? 0 : prev + 1);
  };

  //const previousSize = () => {
  //  setTShirtSize(prev => prev === 0 ? tShirts.size.length - 1 : prev - 1);
  //};

  const nextSize = () => {
    setTShirtSize(prev => prev === tShirts.size.length - 1 ? 0 : prev + 1);
  };

  const previousStamp = () => {
    setTShirtStamp(prev => prev === 0 ? tShirts.stamp.length - 1 : prev - 1);
  };

  const nextStamp = () => {
    setTShirtStamp(prev => prev === tShirts.stamp.length - 1 ? 0 : prev + 1);
  };

  const nextGender = () => {
    setIsTShirtMale(prev => !prev)
  }

  const invertStamp = () => {
    setTShirtStampInverted((prev) => !prev)
  }

  const randomize = () => {
    let randomColor = tShirtColor;
    //let randomSize = tShirtSize;
    let randomStamp = tShirtStamp;
    //let randomGender = isTShirtMale;
    let randomInverted = isTShirtStampInverted;

    // Nuevo color distinto
    while (randomColor === tShirtColor && tShirts.color.length > 1) {
      randomColor = Math.floor(Math.random() * tShirts.color.length);
    }

    // Nuevo size distinto
    //while (randomSize === tShirtSize && tShirts.size.length > 1) {
    //  randomSize = Math.floor(Math.random() * tShirts.size.length);
    //}

    // Nuevo stamp distinto
    while (randomStamp === tShirtStamp && tShirts.stamp.length > 1) {
      randomStamp = Math.floor(Math.random() * tShirts.stamp.length);
    }

    // Nuevo género distinto
    //randomGender = !isTShirtMale;

    // Nuevo invertido distinto
    randomInverted = !isTShirtStampInverted;

    // Aplicar cambios
    setTShirtColor(randomColor);
    setTShirtStamp(randomStamp);
    setTShirtStampInverted(randomInverted);
    //setTShirtSize(randomSize);
    //setIsTShirtMale(randomGender);
  };


  return (

    <div className={`${(isMenuOpen || isCartOpen ) ? 'hidden' : ''}
    min-w-90 h-full grid items-start lg:items-center justify-center px-6 pt-0 md:pt-4`}>
      <main className='flex flex-wrap items-start lg:items-center justify-center'>

        <Button
          title='Cambiar Género'
          buttonText={isTShirtMale ? 'XY' : 'XX'}
          action={nextGender}
          ratio='bg-zinc-400 dark:bg-zinc-950 h-8 w-8 mr-3' />


        <div className='flex justify-center'>

          <Button
            title='Color anterior'
            buttonText={<i className={`bi-caret-left
            text-amber-800 dark:text-orange-200 h-[1em] bi text-xl`} />}
            action={previousColor}
            ratio='bg-zinc-400 dark:bg-zinc-950 w-6 mr-1' />

          <Button
            title={`Color: ${tShirts.color[tShirtColor].name}`}
            buttonText={tShirts.color[tShirtColor].name} ratio='
            bg-zinc-400 dark:bg-zinc-950 
            h-8 w-25'
          />

          <Button
            title='Color siguiente'
            buttonText={<i className={`bi-caret-right
            text-amber-800 dark:text-orange-200 h-[1em] bi text-xl`} />}
            action={nextColor}
            ratio='bg-zinc-400 dark:bg-zinc-950 w-6 ml-1' />

        </div>

        <Button
          title='Cambiar Talle'
          buttonText={tShirts.size[tShirtSize].name}
          action={nextSize}
          ratio='bg-zinc-400 dark:bg-zinc-950 h-8 w-8 mx-3' />

        <div className='flex gap-1'>

          <Button
            title='Estampado anterior'
            buttonText={<i className={`bi-caret-left
            text-amber-800 dark:text-orange-200 h-[1em] bi text-xl`} />}
            action={previousStamp}
            ratio='bg-zinc-400 dark:bg-zinc-950 w-6' />

          <Button
            title={`Estampado: ${tShirts.stamp[tShirtStamp].name}`}
            buttonText={tShirts.stamp[tShirtStamp].name} ratio='
            bg-zinc-400 dark:bg-zinc-950 
            h-8 w-60 text-ellipsis px-2 whitespace-nowrap overflow-hidden'
            />

          <Button
            title='Estampado siguiente'
            buttonText={<i className={`bi-caret-right
            text-amber-800 dark:text-orange-200 h-[1em] bi text-xl`} />}
            action={nextStamp}
            ratio='bg-zinc-400 dark:bg-zinc-950 w-6' />

        </div>
      </main>

      <TShirts
        isTShirtMale={isTShirtMale}
        isTShirtStampInverted={isTShirtStampInverted}
        tShirtStamp={tShirts.stamp[tShirtStamp].url}
        tShirtColor={tShirts.color[tShirtColor].hex}
        tShirtSize={tShirtSize}
      />

      <main className='fixed bottom-1/16 right-1/4 z-30'>
        <div className='flex gap-1 mt-4'>

          <Button
            title='Invertir Estampado'
            buttonText={<i className={`${isTShirtStampInverted ? 'bi-toggle-off' : 'bi-toggle-on'}
              text-amber-800 dark:text-orange-200 h-[1em] bi text-2xl`} />}
            action={invertStamp}
            ratio='bg-zinc-400 dark:bg-zinc-950 w-10 h-10' />
          <Button
            title='Randomizar Diseño'
            buttonText={<i className={`bi-shuffle
              text-amber-800 dark:text-orange-200 h-[1em] bi text-2xl`} />}
            action={randomize}
            ratio='bg-zinc-400 dark:bg-zinc-950 w-10 h-10' />
          <Button
            title='Agregar al carrito'
            buttonText={<i className="text-amber-800 dark:text-orange-200 h-[1em] bi bi-cart-plus text-2xl" />}
            action={addCurrentTShirtToCart}
            ratio='bg-zinc-400 dark:bg-zinc-950 w-10 h-10' />

        </div>
      </main>


    </div>


  )
}

export default Builder