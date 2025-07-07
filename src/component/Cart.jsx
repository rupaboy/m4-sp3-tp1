import tShirts from '../utils/tShirts.json';
import { parseUniqueId } from '../utils/buildUniqueId';
import { useCart } from '../hooks/useCart';
import TShirts from './particle/builder/TShirts';
import Button from './particle/Button';
import Price from './particle/molecule/Cart/Price'

const Cart = () => {
    const {
        cartItems,
        totalCart,
        totalItems,
        incrementQty,
        decrementQty,
        removeFromCart,
        isCartOpen,
        clearCart,
        toggleCart
    } = useCart();

    return (

        <div className="flex flex-col overflow-visible h-screen w-[90vw] max-w-170 sm:px-20 px-4 gap-5">

            <header className='flex'>

                <Button
                    title='Volver'
                    buttonText={<i className={`bi-caret-left
                    text-amber-800 dark:text-orange-200 h-[1em] bi text-xl`} />}
                    action={toggleCart}
                    ratio='bg-zinc-400 dark:bg-zinc-950 h-8 w-8' />

                {cartItems.length !== 0 && (
                    <div className='flex w-full'>
                        <Price pre={`Total
                        ${totalItems > 1 ? `(${totalItems} items)` : `(${totalItems} item)`} =`
                        } price={totalCart} />

                        <Button
                            title="Pagar"
                            buttonText={<i className={
                            `bi-cart-check-fill text-amber-800 dark:text-orange-200 h-[1em] bi text-xl`} />}
                            action={() => alert('Gracias por comprar')}
                            ratio="bg-zinc-400 dark:bg-zinc-950 h-8 w-8 mr-auto"
                        />

                        <Button
                            title="Vaciar Carrito"
                            buttonText={<i className={`
                            bi-cart-x text-amber-800 dark:text-orange-200 h-[1em] bi text-xl`} />}
                            action={clearCart}
                            ratio="bg-zinc-400 dark:bg-zinc-950 h-8 w-8 ml-auto"
                        />
                    </div>
                )}

            </header>

            {cartItems.length === 0 ? (
                <p className='text-zinc-950 dark:text-zinc-300 text-center relative top-1/6'
                >El carrito está vacío</p>
            ) : (
                isCartOpen &&

                cartItems.map(({ uniqueId, qty, price }) => {
                    const parsed = parseUniqueId(uniqueId);
                    const colorObj = tShirts.color.find((color) => color.id === parsed.tShirtColor);
                    const sizeObj = tShirts.size.find((size) => size.id === parsed.tShirtSize);
                    const stampObj = tShirts.stamp.find((stamp) => stamp.id === parsed.tShirtStamp);

                    return (
                        <div
                            key={uniqueId}
                            className="w-full p-4 border grid grid-cols-[200px_1fr] items-start
                            border-amber-800"
                        >
                            <div className='scale-40 h-50 relative right-12 bottom-7'>
                                <TShirts
                                    isTShirtMale={parsed.isTShirtMale}
                                    isTShirtStampInverted={parsed.isTShirtStampInverted}
                                    tShirtStamp={stampObj?.url}
                                    tShirtColor={colorObj?.hex}
                                    tShirtSize={sizeObj?.name} // o sizeObj.name si lo usas como string
                                />
                            </div>

                            <div className=" text-zinc-950 dark:text-zinc-300">

                                <div className='scale-80
                                relative pb-2 w-40 mb-4 rounded-xl flex
                                items-center justify-center ml-auto border
                                border-amber-800'>
                                    <Price price={price} pre='c/u:' />
                                </div>

                                <div className='flex gap-1'>
                                    <p>Tema:</p>
                                    <p className='font-extrabold'>
                                        {stampObj?.name}
                                        {!parsed.isTShirtStampInverted && ' (w)'}
                                    </p>
                                </div>

                                <div className='flex gap-1'>
                                    <p>Color:</p>
                                    <p className='font-extrabold'>
                                        {colorObj?.name}
                                    </p>
                                </div>

                                <div className='flex gap-1'>
                                    <p>Sexo:</p>
                                    <p className='font-extrabold'>
                                        {parsed.isTShirtMale ? 'Masculino' : 'Femenino'}
                                    </p>
                                </div>


                                <div className='flex gap-1'>
                                    <p>Tamaño:</p>
                                    <p className='font-extrabold'>{sizeObj?.name}</p>
                                </div>

                            </div>


                            <footer className='mx-auto col-span-2 flex gap-1'>


                                <Button
                                    title='Reducir cantidad'
                                    buttonText={<i className={`bi-caret-left
                                        text-amber-800 dark:text-orange-200 h-[1em] bi text-xl`} />}
                                    action={() => decrementQty(uniqueId)}
                                    ratio='bg-zinc-400 dark:bg-zinc-950 h-8 w-8' />

                                <Button
                                    title={`Cantidad: ${qty}`}
                                    buttonText={qty}
                                    ratio='bg-zinc-400 dark:bg-zinc-950 h-8 w-8' />

                                <Button
                                    title='Reducir cantidad'
                                    buttonText={<i className={`bi-caret-right
                                        text-amber-800 dark:text-orange-200 h-[1em] bi text-xl`} />}
                                    action={() => incrementQty(uniqueId)}
                                    ratio='bg-zinc-400 dark:bg-zinc-950 h-8 w-8' />


                                <Button
                                    title='Quitar del carrito'
                                    buttonText={<i className={`bi-trash
                                        text-amber-800 dark:text-orange-200 h-[1em] bi text-xl`} />}
                                    action={() => removeFromCart(uniqueId)}
                                    ratio='bg-zinc-400 dark:bg-zinc-950 h-8 w-8' />

                                <Price price={price * qty} pre='Subtotal:' />
                            </footer>
                        </div>
                    );
                })
            )}

        </div>

    );
};

export default Cart;
