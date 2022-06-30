import { Link } from "react-router-dom";
import { useContext } from "react";
import cartImg from "@img/shopping-cart.png"
import AppContext from "../context/AppContext";
import "@styles/components/Header.scss"

function Header() {

  const { cart } = useContext(AppContext)


  return (
    <header>
      <p>IsaPizza</p>

      <div>
        <Link to="/cart" ><img src={cartImg}></img>
          {cart.length > 0 && <p className="cart-q" >{cart.length}</p>}

        </Link>
      </div>
    </header>
  )
}

export default Header;