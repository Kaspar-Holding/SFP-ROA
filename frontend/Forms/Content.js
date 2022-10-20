import React from 'react'
import {NavLink} from 'react-router-dom'
export const Content = () => {
  return (
    
    <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar" className="align-text-bottom"></span>
                This week
            </button>
            </div>
        </div>


        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col-lg-4">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Total Forms</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">0</h1>
                    </div>
                    {/* <div className="card-footer text-muted">
                        <h4 className="my-0 fw-normal">Total Forms</h4>
                    </div> */}
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Completed Forms</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">0</h1>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Incomplete Forms</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">0</h1>
                </div>
                </div>
            </div>
            
        </div>
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Create New Form</h5>
                    <p className="card-text">Start a new Insurance form.</p>
                    <NavLink to="/create_form" className="btn btn-primary">Create</NavLink>
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            </div>
        {/* <h2>Section title</h2> */}
        {/* <div className="table-responsive">
            <table className="table table-striped table-sm">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1,001</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
                </tr>
                <tr>
                <td>1,002</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>layout</td>
                </tr>
                <tr>
                <td>1,003</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>tabular</td>
                </tr>
                <tr>
                <td>1,003</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>data</td>
                </tr>
                <tr>
                <td>1,004</td>
                <td>text</td>
                <td>random</td>
                <td>layout</td>
                <td>dashboard</td>
                </tr>
                <tr>
                <td>1,005</td>
                <td>dashboard</td>
                <td>irrelevant</td>
                <td>text</td>
                <td>placeholder</td>
                </tr>
                <tr>
                <td>1,006</td>
                <td>dashboard</td>
                <td>illustrative</td>
                <td>rich</td>
                <td>data</td>
                </tr>
                <tr>
                <td>1,007</td>
                <td>placeholder</td>
                <td>tabular</td>
                <td>information</td>
                <td>irrelevant</td>
                </tr>
                <tr>
                <td>1,008</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
                </tr>
                <tr>
                <td>1,009</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>layout</td>
                </tr>
                <tr>
                <td>1,010</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>tabular</td>
                </tr>
                <tr>
                <td>1,011</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>data</td>
                </tr>
                <tr>
                <td>1,012</td>
                <td>text</td>
                <td>placeholder</td>
                <td>layout</td>
                <td>dashboard</td>
                </tr>
                <tr>
                <td>1,013</td>
                <td>dashboard</td>
                <td>irrelevant</td>
                <td>text</td>
                <td>visual</td>
                </tr>
                <tr>
                <td>1,014</td>
                <td>dashboard</td>
                <td>illustrative</td>
                <td>rich</td>
                <td>data</td>
                </tr>
                <tr>
                <td>1,015</td>
                <td>random</td>
                <td>tabular</td>
                <td>information</td>
                <td>text</td>
                </tr>
            </tbody>
            </table>
        </div> */}
    </>

  )
}
