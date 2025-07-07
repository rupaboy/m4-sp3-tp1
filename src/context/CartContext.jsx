import { createContext, useState, useEffect } from "react";



export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false)

  // Cargar carrito desde localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev)
  }

  const addToCart = ({ uniqueId, price }) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.uniqueId === uniqueId);
      if (exists) {
        // Incrementar cantidad si ya está
        return prev.map((item) =>
          item.uniqueId === uniqueId
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        // Si no está, agregarlo
        return [...prev, { uniqueId, qty: 1, price }];
      }
    });
  };

  const totalCart = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty, 0
  );

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.qty, 0
  );

  const removeFromCart = (uniqueId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.uniqueId !== uniqueId)
    );
  };

  const clearCart = () =>
    window.confirm("¿Seguro que quieres vaciar el carrito?")
      ? setCartItems([])
      : null;


  const incrementQty = (uniqueId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.uniqueId === uniqueId
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decrementQty = (uniqueId) => {
    setCartItems((prev) =>
      prev.flatMap((item) => {
        if (item.uniqueId === uniqueId) {
          if (item.qty > 1) {
            return { ...item, qty: item.qty - 1 };
          } else {
            // Si la cantidad llega a 0, eliminarlo
            return [];
          }
        }
        return item;
      })
    );
  };

  // Guardar en localStorage cada vez que cambia el carrito
  useEffect(() => {
    cartItems.length === 0 ? toggleCart() : {}
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalCart,
        totalItems,
        incrementQty,
        decrementQty,
        removeFromCart,
        clearCart,
        isCartOpen,
        toggleCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
