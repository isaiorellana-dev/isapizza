import cart from "@img/shopping-cart.png"
import "@styles/components/Header.scss"

function Header() {
  return (
    <header>
      <p>IsaPizza</p>
      <div><img src={cart}></img></div>
    </header>
  )
}

export default Header;