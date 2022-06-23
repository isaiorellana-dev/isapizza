import { Link } from "react-router-dom";

import deleteImg from "@img/delete.png";
import "@styles/components/ShoppingCart.scss"

function ShoppingCart() {
  return (
    <aside>
      <Link to="/" className="close">X</Link>
      <div className="item">
        <input type="number" defaultValue="1"></input>
        <p>Pizza Napolitana</p>
        <div className="price-and-delete"><p>199 $</p>
          <button><img src={deleteImg} ></img></button></div>
      </div>
      <div className="item">
        <input type="number" defaultValue="1"></input>
        <p>Pizza Napolitana de 3 quesos con extra jalapeño</p>
        <div className="price-and-delete"><p>199 $</p>
          <button><img src={deleteImg} ></img></button></div>
      </div>
      <div className="item">
        <input type="number" defaultValue="1"></input>
        <p>Pizza Napolitana</p>
        <div className="price-and-delete"><p>199 $</p>
          <button><img src={deleteImg} ></img></button></div>
      </div>
      <div className="item">
        <input type="number" defaultValue="1"></input>
        <p>Pizza Napolitana</p>
        <div className="price-and-delete"><p>199 $</p>
          <button><img src={deleteImg} ></img></button></div>
      </div>
      <div className="total">
        <p>Total:</p>
        <p>699 $</p>
      </div>
      <button className="pay">Pay</button>
    </aside>
  )
}

export default ShoppingCart;