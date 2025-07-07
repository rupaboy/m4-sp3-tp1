Trabajo Práctico para la 3ra Sprint de la diplomatura fullStrack con React JS en el Nodo Tecnológico (Reversionado del compositor de Pizzas)
_______________________________________________________
Live Preview:
https://lucky-kataifi-c34058.netlify.app/
_______________________________________________________

/ROOT/
main.jsx contiene Providers de tema, estado de Menú y estado del Carrito.
App.jsx maneja visibilidad de componentes según sus estados.

/HOOKS/
useCart.jsx usar CartContext
useMenu.jsx usar MenuContext
useTheme.jsx usar ThemeContext

/CONTEXT/
CartContext.jsx Provee:
- cartItems (items en el carritos)
- totalItems (cantidad total de items en carro: items x cantidad )
- totalCart (precio total del carro)
- addToCart (compara y agrega al carrito si corresponde)
- incrementQty (aumenta cantidad de un item)
- decrementQty (reduce cantidad de un item)
- removeFromCart (quita un item)
- clearCart (quita todos los items)
- isCartOpen (estado del Carro)
- toggleCart (función palanca cambio de estado del carro)

MenuContext.jsx Provee:
- isMenuOpen (estado del Menu)
- toggleMenu (función palanca cambio de estado del menu)

ThemeContext.jsx Provee:
- isDark (booleano: estado del tema oscuro)
- toggleTheme (función palanca cambio de estado del tema).

/COMPONENT/
Builder.jsx (Vista con menues y Preview usando particle TShirts)
Cart.jsx (Vista de iteración de elementos del carrito usando particle TShirts)
Header.jsx (Vista de barra fixed, incluye molecules Logo y HamburguerMenu)
Menu.jsx (vista de botones en el Menu, actualmente ThemesButton y CartButton)

/PARTICLE/
Button.jsx (Componente modular que admite action, buttonText, ratio y title )
CartButton.jsx (dispara toggleCart)
ThemesButton.jsx (dispara toggleTheme)

/PARTICLE/BUILDER/
TShirts.jsx (Vista que parsea UniqueId para renderizar una camiseta. Trabaja con isTShirtStampInversed, isTShirtMale, tShirtSize, tShirtColor y tShirtStamp, todos estados heredados por props desde Builder.jsx)

/PARTICLE/MOLECULE/CART/
Price.jsx (Vista de Precio con fuente de GoogleFonts, variación de Logo.jsx. Admite price, pre y tailWindClassNames)

/PARTICLE/MOLECULE/HEADER/
HamburguerMenu.jsx (trabaja con el hook useMenu())
Logo.jsx (admite brandName y tailWindClassNames)

/UTILS/
basePrice.js (Ajustado al talle M) con valor 10000.
buildUniqueId.js (Si se altera el órden de partes, las vistas deberían romperse)
tShirts.json (Objeto con modelos, talles, factores de precio según talle, etc)
