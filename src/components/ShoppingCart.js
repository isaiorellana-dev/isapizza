import { Link } from "react-router-dom";
// import useShoppingCart from "@hooks/useShoppingCart";
import deleteImg from "@img/delete.png";
import "@styles/components/ShoppingCart.scss"
import { useContext } from "react";
import AppContext from "../context/AppContext";

function ShoppingCart() {

  const { cart, deleteFromCart, addOneMore, deleteOneMore } = useContext(AppContext)

  const handleTotal = () => {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
      const cartItem = cart[i].item.price * cart[i].cantidad
      total += cartItem
    }
    return total;

  }





  return (
    <aside>
      <Link to="/" className="close">X</Link>

      {
        cart.length === 0 ? (
          <div className="item" >

            <p>Parece que todavía no has agregado ninguna pizza al carrito :/</p>

          </div>
        ) : null
      }

      {cart.map(item => (
        <div className="item" key={item.item.name} >
          <div className="cantidad">

            <p>{item.cantidad}</p>
            {item.cantidad > 1 ? <button onClick={() => {
              deleteOneMore(item)
            }
            }>-</button> : null}
            <button onClick={() => { addOneMore(item) }} >+</button>
          </div>

          <p>{item.item.name}</p>
          <div className="price-and-delete">
            <p>{item.item.price} $</p>
            <button onClick={() => deleteFromCart(item.item)} ><img src={deleteImg} ></img></button></div>
        </div>
      ))}

      <div className="total">
        <p>Total:</p>
        <p>{`${handleTotal()} $`}</p>
      </div>
      <button className="pay">Pay</button>
    </aside>
  )
}

export default ShoppingCart;
