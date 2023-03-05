import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './server/server'

const App = () => {
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar/>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App