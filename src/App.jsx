import {Product} from './Pages/Product'
import './App.css'
import {Home} from './Pages/Home'
import {Routes,Route} from 'react-router-dom'
import {ProductDetails} from './Pages/ProductDetail'

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/product/:id' element={<ProductDetails/>}></Route>
    </Routes>
    </div>
  )
}

export default App
