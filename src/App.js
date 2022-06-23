import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='cart' element={<ShoppingCart />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;