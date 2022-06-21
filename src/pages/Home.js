import Header from "@components/Header";
import Pizzas from "@components/Pizzas";
import "@styles/pages/Home.scss"

function Home() {
  return (<>
    <Header />
    <main>
      <Pizzas />
    </main>
  </>)
}

export default Home;