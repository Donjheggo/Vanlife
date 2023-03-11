import React from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

import MainLayout from './components/MainLayout'
import HostLayout from './components/host/HostLayout'
import NotFound from './components/NotFound'
import AuthRequired from './components/AuthRequired'

import Login, {loginAction} from './pages/Login'
import About from './pages/About'
import Vans, { vansLoader } from './pages/vans/Vans'
import Home from './pages/Home'
import VanDetails, {vanDetailLoader} from './pages/vans/VanDetails'

import Dashboard from './pages/host/Dashboard'
import HostVans, {vansHostLoader} from "./pages/host/HostVans"
import Reviews from "./pages/host/Reviews"
import Income from "./pages/host/Income"

import HostVanDetails from "./pages/host/HostVanDetails"
import HostVanInfo from "./pages/host/HostVanInfo"
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'

import './server/server'

const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
                    
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>} action={loginAction}/>
        <Route path="about" element={<About/>}/>
        <Route path="vans" element={<Vans />} errorElement={<NotFound/>} loader={vansLoader}/>
        <Route path="vans/:id" element={<VanDetails />} errorElement={<h1>There was an error from the server</h1>} loader={vanDetailLoader}/>

        <Route element={<AuthRequired/>}>
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>} />
            <Route path="vans" element={<HostVans/>} errorElement={<h1>There was an error from the server</h1>} loader={vansHostLoader}/>
            <Route path="reviews" element={<Reviews/>}/>

            <Route path="vans/:id" element={<HostVanDetails/>} errorElement={<h1>There was an error from the server</h1>}>
              <Route index element={<HostVanInfo/>}/>
              <Route path="pricing" element={<HostVanPricing/>}/>
              <Route path="photos" element={<HostVanPhotos/>}/>
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