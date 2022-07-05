import { useEffect, useRef, useState } from "react"

const Pizza = ({ pizza, name, img, description, price, addToCart, cart }) => {

  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    const obsever = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      console.log(isIntersecting)
      if (isIntersecting) {
        setShow(true)
        obsever.disconnect()
      }
    })
    obsever.observe(element.current)
  }, [element])




  return (
    <div className="pizza" ref={element} >
      {
        show && <>
          <img src={img} ></img>
          <p className='name'>{name}</p>
          <p className='description'>{description}</p>
          <p className='price'>{price} $</p>
          <button onClick={() => { addToCart(pizza) }}>{cart.filter(e => e.item === pizza).length > 0 ? "✓" : "+"}</button>
        </>
      }
    </div>
  );
}

export default Pizza;