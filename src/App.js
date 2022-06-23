import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ShoppingCart from './components/ShoppingCart';
import AppContext from './context/AppContext';
import useShoppingCart from './hooks/useShoppingCart';

function App() {
  const initialState = useShoppingCart()
  return (
    <AppContext.Provider value={initialState} >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='cart' element={<ShoppingCart />} />
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>

  )
}

export default App;