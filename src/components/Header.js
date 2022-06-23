import { Link } from "react-router-dom";
import cart from "@img/shopping-cart.png"
import "@styles/components/Header.scss"

function Header() {
  return (
    <header>
      <p>IsaPizza</p>

      <div>
        <Link to="/cart" ><img src={cart}></img></Link>
      </div>
    </header>
  )
}

export default Header;