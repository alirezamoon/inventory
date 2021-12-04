import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Layout from './components/hoc/layout'
import ProductPage from './components/productPage'
import About from './components/about'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductPage />}>
              <Route path=":productId" element={<ProductPage />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
