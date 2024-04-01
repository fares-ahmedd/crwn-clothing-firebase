import { createContext, useContext, useState } from "react";

function addCartItem(cartItem, productToAdd) {
  const existingCarItem = cartItem.find((item) => item.id === productToAdd.id);
  if (existingCarItem) {
    return cartItem.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItem, { ...productToAdd, quantity: 1 }];
}

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd));
  }
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("Cart used out side the context provider");

  return context;
}

export { CartProvider, useCart };
