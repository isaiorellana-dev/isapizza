import { Link } from "react-router-dom";
import useShoppingCart from "@hooks/useShoppingCart";
import deleteImg from "@img/delete.png";
import "@styles/components/ShoppingCart.scss"
import { useContext } from "react";
import AppContext from "../context/AppContext";

function ShoppingCart() {

  const { cart, deleteFromCart } = useContext(AppContext)

  const handleTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
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
        <div className="item" key={item.name} >
          <input type="number" defaultValue="1"></input>
          <p>{item.name}</p>
          <div className="price-and-delete"><p>{item.price} $</p>
            <button onClick={() => deleteFromCart(item)} ><img src={deleteImg} ></img></button></div>
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