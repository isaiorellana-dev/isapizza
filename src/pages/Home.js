import { Outlet } from "react-router-dom";


import Header from "@components/Header";
import Pizzas from "@components/Pizzas";
import ShoppingCart from "@components/ShoppingCart";
import "@styles/pages/Home.scss"

function Home() {
  return (<>
    <Header />
    <main>
      <Pizzas />
      <Outlet>
        <ShoppingCart />
      </Outlet>
    </main>
  </>)
}

export default Home;