import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Button } from '@chakra-ui/button'
import Home from './components/home'
import Layout from './components/hoc/layout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addProduct" element={<Home />} />
            <Route path="/about" element={<Home />} />
            {/* <Route /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
