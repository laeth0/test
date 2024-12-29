import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CC1 from './assets/C1.jsx'
import NAV1 from './nav.jsx'
import Add1 from './AD1.jsx'
import Caty1 from './assets/Cat1.jsx'
import Product from './Product.jsx'
import Category from './Category.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <NAV1/>
    <Routes>
    <Route path='/c11' element={<CC1/>} /> 
    <Route path='/add' element={<Add1/>} /> 
    <Route path='/koko' element={<Caty1/>} /> 
    <Route path='/product/:id' element={<Product/>} /> 
    <Route path='/category/:name' element={<Category/>} /> 
    </Routes>
    </>
  )
}

export default App
