import { useEffect, useState } from 'react'
import "@styles/components/Pizzas.scss"

function Pizzas() {

  const [pizzas, setPizzas] = useState([])
  // console.log(pizzas[0].name)

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

  console.table(pizzas)

  return (
    <div className='pizzas-container'>
      {pizzas.map(pizza => (
        <div key={pizza.id} className="pizza" >
          <img src={pizza.img} ></img>
          <p className='name'>{pizza.name}</p>
          <p className='description'>{pizza.description}</p>
          <p className='price'>{pizza.price} $</p>
          <button>+</button>
        </div>
      ))}
    </div>
  )
}

export default Pizzas;