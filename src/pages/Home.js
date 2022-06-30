import { Outlet } from "react-router-dom";
import Footer from "@components/Footer";

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
    <Footer />
  </>)
}

export default Home;