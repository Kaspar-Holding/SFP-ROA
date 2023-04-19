import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'

const Page404 = () => {
    if (true) {
        <Navigate to="/" />
    }
    console.log("hi")
    return (
        <>
            <div style={{textAlign: "center"}}>
                <div className="container-xxl container-p-y">
                    <div className="misc-wrapper">
                        <h2 className="mb-2 mx-2">Page Not Found 😢</h2>
                        <p className="mb-4 mx-2">Oops! 😖 The requested URL was not found on this server.</p>
                        <NavLink to="/" className="btn btn-primary">Back to home</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page404