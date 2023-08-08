import React from 'react'
import { Helmet } from 'react-helmet'
import './styles/dashboard.css'
const Apps = () => {
    
    return (
        <div className='container py-10'>
            <Helmet>
                <title>Apps</title>
            </Helmet>
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                Toggle static offcanvas
            </button>

            <div className="offcanvas offcanvas-start offcanvas-size-xxl show" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        I will not close if you click outside of me.
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Apps