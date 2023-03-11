import React from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

import MainLayout from './components/MainLayout'
import AdminLayout from './components/admin/AdminLayout'
import NotFound from './components/NotFound'
import AuthRequired from './components/AuthRequired'

import Login, {loginAction} from './pages/Login'
import About from './pages/About'
import Vans, { vansLoader } from './pages/vans/Vans'
import Home from './pages/Home'
import VanDetails, {vanDetailLoader} from './pages/vans/VanDetails'

import Dashboard from './pages/admin/Dashboard'
import AdminVans, {vansAdminLoader} from "./pages/admin/AdminVans"
import Reviews from "./pages/admin/Reviews"
import Income from "./pages/admin/Income"

import AdminVanDetails from "./pages/admin/AdminVanDetails"
import AdminVanInfo from "./pages/admin/AdminVanInfo"
import AdminVanPricing from './pages/admin/AdminVanPricing'
import AdminVanPhotos from './pages/admin/AdminVanPhotos'

import './server/server'

const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
                    
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>} action={loginAction}/>
        <Route path="about" element={<About/>}/>
        <Route path="vans" element={<Vans />} errorElement={<NotFound/>} loader={vansLoader}/>
        <Route path="vans/:id" element={<VanDetails />} errorElement={<h1>There was an error from the server</h1>} loader={vanDetailLoader}/>

        <Route element={<AuthRequired/>}>
          <Route path="admin" element={<AdminLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>} />
            <Route path="vans" element={<AdminVans/>} errorElement={<h1>There was an error from the server</h1>} loader={vansAdminLoader}/>
            <Route path="reviews" element={<Reviews/>}/>

            <Route path="vans/:id" element={<AdminVanDetails/>} errorElement={<h1>There was an error from the server</h1>}>
              <Route index element={<AdminVanInfo/>}/>
              <Route path="pricing" element={<AdminVanPricing/>}/>
              <Route path="photos" element={<AdminVanPhotos/>}/>
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Route>
))

const App = () => {
  return (
    <div className='main'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App