import { useState } from "react";

function useShoppingCart() {
  const [cart, setCart] = useState([])

  const addToCart = (newItem) => {
    if (!cart.includes(newItem)) {
      setCart([...cart, newItem])
    }
  }

  const deleteFromCart = (item) => {
    setCart(cart.filter((items) => items.name !== item.name))
  }


  return {
    cart,
    addToCart,
    deleteFromCart
  }
}
export default useShoppingCart;