import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Vans from './pages/Vans'
import Home from './pages/Home'
import VanDetails from './pages/VanDetails'

import './server/server'

const App = () => {
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/vans" element={<Vans />}/>
            <Route path="/vans/:id" element={<VanDetails />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App