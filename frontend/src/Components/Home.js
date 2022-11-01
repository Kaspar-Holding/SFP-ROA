import React from 'react'
import { NavLink } from 'react-router-dom'
import ScreenShot1 from '../Images/Screenshot1.png'
import ScreenShot2 from '../Images/Screenshot2.png'
import ScreenShot3 from '../Images/Screenshot3.png'

const Home = () => {
  return (
    <>
        <main>

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Succession Finance Planning</h1>
                    <p className="lead text-muted">An online solution to handle the data and forms.</p>
                    <p>
                        <NavLink to="/signin" className="btn btn-primary my-2">Login</NavLink>
                    </p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={ScreenShot1} alt="Dasboard" />

                                <div className="card-body">
                                    <p className="card-text">Dashboard to create, edit and delete form with.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <NavLink to="/signin" className="btn btn-sm btn-outline-secondary">Login</NavLink>
                                    </div>
                                    {/* <small className="text-muted">9 mins</small> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={ScreenShot2} alt="SFP Form"/>

                                <div className="card-body">
                                    <p className="card-text">Easy to create a new form to handle it later.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <NavLink to="/signin" className="btn btn-sm btn-outline-secondary">Login</NavLink>
                                    </div>
                                    {/* <small className="text-muted">9 mins</small> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={ScreenShot3} alt="User Management" />

                                <div className="card-body">
                                    <p className="card-text">User Management for the Admins.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <NavLink to="/signin" className="btn btn-sm btn-outline-secondary">Login</NavLink>
                                    </div>
                                    {/* <small className="text-muted">9 mins</small> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </>
  )
}

export default Home