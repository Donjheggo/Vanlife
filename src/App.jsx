import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import MainLayout from './components/MainLayout'
import AdminLayout from './components/admin/AdminLayout'
import NotFound from './components/NotFound'

import About from './pages/About'
import Vans from './pages/vans/Vans'
import Home from './pages/Home'
import VanDetails from './pages/vans/VanDetails'

import Dashboard from './pages/admin/Dashboard'
import AdminVans from "./pages/admin/AdminVans"
import Reviews from "./pages/admin/Reviews"
import Income from "./pages/admin/Income"

import AdminVanDetails from "./pages/admin/AdminVanDetails"
import AdminVanInfo from "./pages/admin/AdminVanInfo"
import AdminVanPricing from './pages/admin/AdminVanPricing'
import AdminVanPhotos from './pages/admin/AdminVanPhotos'

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
                <Route path="reviews" element={<Reviews/>}/>

                <Route path="vans/:id" element={<AdminVanDetails/>} >
                  <Route index element={<AdminVanInfo/>}/>
                  <Route path="pricing" element={<AdminVanPricing/>}/>
                  <Route path="photos" element={<AdminVanPhotos/>}/>
                </Route>

              </Route>
              <Route path="*" element={<NotFound/>}/>
            </Route>

          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App