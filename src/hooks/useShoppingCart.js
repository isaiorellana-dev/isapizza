import { useState } from "react";

function useShoppingCart() {
  const [cart, setCart] = useState([])
  const addToCart = (newItem) => {

    if (cart.some(e => e.item === newItem)) {
      return null
    } else {
      setCart([...cart, {
        cantidad: 1,
        item: newItem
      }])
    }
  }

  const addOneMore = (item) => {

    const index = cart.findIndex(e => e === item)

    const cartFiltered = cart.fill({
      cantidad: item.cantidad + 1, item: item.item
    }, index, index + 1)
    console.log(cartFiltered)
    setCart([...cartFiltered])
  }

  const deleteOneMore = (item) => {
    const index = cart.findIndex(e => e === item)

    const cartFiltered = cart.fill({
      cantidad: item.cantidad - 1, item: item.item
    }, index, index + 1)
    setCart([...cartFiltered])
  }


  const deleteFromCart = (itemToDelete) => {
    setCart(cart.filter((items) => items.item.name !== itemToDelete.name))
  }


  return {
    cart,
    addToCart,
    addOneMore,
    deleteOneMore,
    deleteFromCart
  }
}
export default useShoppingCart;