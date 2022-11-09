import React from 'react'
import './Styles/Header.css'
const Header = () => {
  return (
    <>
        <header className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className='container-fluid'>
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">KASPAR</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="#">Sign out</a>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header