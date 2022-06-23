import { useContext, useEffect, useState } from 'react'
import useShoppingCart from "@hooks/useShoppingCart.js"
import "@styles/components/Pizzas.scss"
import AppContext from '../context/AppContext'

function Pizzas() {
  const [pizzas, setPizzas] = useState([])

  const { addToCart, cart } = useContext(AppContext)
  // console.log(cart)

  const handleAddToCart = (item) => {
    addToCart(item)
  }

  useEffect(() => {
    async function getPizzas() {
      const res = await fetch("https://pizza-and-desserts.p.rapidapi.com/pizzas", {
        headers: {
          'X-RapidAPI-Key': 'd5c41cee41mshf3f8fd1320673d0p182a1ejsn3f871e17379c',
          'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
        }
      })
      const data = await res.json()
      setPizzas(data)
    }
    getPizzas()
  }, [])


  return (
    <div className='pizzas-container'>
      {pizzas.map(pizza => (
        <div key={pizza.name} className="pizza" >
          <img src={pizza.img} ></img>
          <p className='name'>{pizza.name}</p>
          <p className='description'>{pizza.description}</p>
          <p className='price'>{pizza.price} $</p>
          <button onClick={() => { handleAddToCart(pizza) }}>{cart.includes(pizza) ? "✓" : "+"}</button>
        </div>
      ))}
    </div>
  )
}

export default Pizzas;