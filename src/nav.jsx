import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Link } from 'react-router-dom'

export default function NAV1() {
    return (
        <>
<nav className="navbar navbar-expand-lg nav3">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <a className=" besho1" href="#">BESHOLETSHO</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <form className="d-flex" role="search">
      <Link className="mohyee1" type="submit" to={'/koko'}> Categories</Link>
        <Link className="mohyee1" type="submit" to={'/c11'}>Products</Link>
        <Link className="mohyee1" type="submit" to={'/add'}> Add Product</Link>
      </form>
    </div>
  </div>
</nav>

        </>
    )
}



