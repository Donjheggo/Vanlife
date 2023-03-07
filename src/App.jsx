import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import MainLayout from './components/MainLayout'
import AdminLayout from './components/admin/AdminLayout'
import AdminVanLayout from './components/admin/AdminVanLayout'

import About from './pages/About'
import Vans from './pages/vans/Vans'
import Home from './pages/Home'
import VanDetails from './pages/vans/VanDetails'

import Dashboard from './pages/admin/Dashboard'
import AdminVans from "./pages/admin/AdminVans"
import Reviews from "./pages/admin/Reviews"
import Income from "./pages/admin/Income"

import AdminVanDetails from "./pages/admin/AdminVanDetails"
import Pricing from './pages/admin/Pricing'
import Photos from './pages/admin/Photos'

import './server/server'

const App = () => {
  return (
    <div className='main'>
      <BrowserRouter>
          <Routes>

            <Route path="/" element={<MainLayout/>}>
              
              <Route index element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="vans" element={<Vans />}/>
              <Route path="vans/:id" element={<VanDetails />}/>
    
              <Route path="admin" element={<AdminLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="income" element={<Income/>} />
                <Route path="vans" element={<AdminVans/>}/>

                <Route path="vans/:id" element={<AdminVanLayout/>} >
                  <Route index element={<AdminVanDetails/>}/>
                  <Route path="pricing" element={<Pricing/>}/>
                  <Route path="photos" element={<Photos/>}/>
                </Route>

                <Route path="reviews" element={<Reviews/>}/>
              </Route>

            </Route>

          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App