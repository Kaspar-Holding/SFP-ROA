import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import Loader from '../../Loader/Loader'
import Pagination from '../../Pagination/Pagination'
import { Helmet } from 'react-helmet'

const Users = ({ isAuthenticated, user }) => {
    const [UsersData, setUsersData] = useState([])
    const [TotalUsers, setTotalUsers] = useState(0)
    const [PageLimit, setPageLimit] = useState(0)
    const [SearchQuery, setSearchQuery] = useState("")
    const [OrderBy, setOrderBy] = useState("first_name")
    const [userStats, setUserStats] = useState([]);
    const [responseError, setResponseError] = useState("");
    const [LoaderVisibility, setLoaderVisibility] = useState("none")
    const [dataVisibility, setDataVisibility] = useState("block")
    const loadUsers = async (page_number, orderBy, searchQuery) => {
        setLoaderVisibility("block")
        setDataVisibility("none")
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }
        const Body = JSON.stringify({
            "page_number": page_number,
            "order_by": orderBy,
            "search_query": searchQuery
        })
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/all_users/`, Body, config)
            setUsersData(response.data['results'])
            setTotalUsers(response.data['total_records'])
            setPageLimit(response.data['pagelimit'])
            //   console.log('Users', JSON.stringify(response.data.Data))
        } catch (error) {
            console.log('first', error.response.statusText)
            setResponseError(error.response.statusText)
        }

        setLoaderVisibility("none")
        setDataVisibility("block")
    }
    const onloadUsers = async (page_number, orderBy, searchQuery) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }
        const Body = JSON.stringify({
            "page_number": page_number,
            "order_by": orderBy,
            "search_query": searchQuery
        })
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/all_users/`, Body, config)
            setUsersData(response.data['results'])
            setTotalUsers(response.data['total_records'])
            setPageLimit(response.data['pagelimit'])
            //   console.log('Users', JSON.stringify(response.data.Data))
        } catch (error) {
            console.log('first', error.response.statusText)
            setResponseError(error.response.statusText)
        }

    }
    const loadUserStats = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users_stats/`, config)
            setUserStats(response.data)
            //   console.log('Users', JSON.stringify(response.data.Data))
        } catch (error) {
            console.log('first', error.response.statusText)
            setResponseError(error.response.statusText)
        }
    }
    const DeleteUser = async (id) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }
        const Body = JSON.stringify({
            "id": id
        })
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/deleteUser/`, Body, config)
            loadUsers(1, OrderBy, SearchQuery)
            //   console.log('Users', JSON.stringify(response.data.Data))
        } catch (error) {
            console.log('first', error.response.statusText)
            setResponseError(error.response.statusText)
        }
    }
    const onSearchQueryChange = (e) => {
        e.preventDefault()
        setTotalUsers(0)
        loadUsers(1, OrderBy, SearchQuery)
    }

    const onFilterChange = (e) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
        setTotalUsers(0)
        onloadUsers(1, OrderBy, SearchQuery)
    }
    const onDeleteButtonClick = (e, id) => {
        e.preventDefault()
        setTotalUsers(0)
        DeleteUser(id)
    }
    useEffect(() => {
        loadUsers(1, OrderBy, SearchQuery)
        loadUserStats()
    }, [])
    return (
        <div className=''>
            <Helmet>
                <title>Users Dashboard</title>
            </Helmet>
            <div style={ { display: LoaderVisibility } }>
                user?.email?.includes('sfp') || user?.email?.includes('succession') ? <Loader color='sfp-color' />
                : user?.email?.includes('fs4p') ? <Loader color='fs4p-color' />
                : user?.email?.includes('sanlam') ? <Loader color='sfp-sanlam' />
                : <Loader color='sfp-color' />
            </div>
            <div className="updated-app-dashboard  users position-absolute my-5 start-50 translate-middle" style={ { display: dataVisibility } }>
                <div className="row">
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="card rounded-5 kpi">
                                    <div className="card-body">
                                        <h5 className="card-title text-center updated-header">{ userStats['admin_users'] }</h5>
                                        <p className="card-text updated-subtitle">Total Users</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="card rounded-5 kpi">
                                    <div className="card-body">
                                        <h5 className="card-title text-center updated-header">{ userStats['agent_users'] }</h5>
                                        <p className="card-text updated-subtitle">Total Agents</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="card rounded-5 kpi">
                                    <div className="card-body">
                                        <h5 className="card-title text-center updated-header">{ userStats['active_users'] }</h5>
                                        <p className="card-text updated-subtitle">Active Accounts</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="card rounded-5 kpi">
                                    <div className="card-body">
                                        <h5 className="card-title text-center updated-header">{ userStats['inactive_users'] }</h5>
                                        <p className="card-text updated-subtitle">Inactive Accounts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-6 col-sm-12'>
                        <div className="card card1 rounded-5">
                            <div className="card-body">
                                <h5 className="card-title text-center updated-header">Welcome, { user ? user.first_name : "User" }</h5>
                                <p className="card-text updated-subtitle">User Management</p>
                                <hr />
                                <div className="d-grid gap-1">
                                    <NavLink
                                        to="/newuser"
                                        className={
                                            user['email'].includes('sfp') || user['email'].includes('succession') ? "btn btn-lg btn-primary sfp"
                                                : user['email'].includes('fs4p') ? "btn btn-lg btn-primary fs4p"
                                                    : user['email'].includes('sanlam') ? "bt btn-lgn btn-primary sanlam"
                                                        : "btn btn-lg btn-primary "
                                        }
                                    >
                                        Create New User
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-lg-12'>
                        <div className="card rounded-5 py-1">
                            <br />
                            <div className="row">
                                <div className='col-lg-3 col-md-6 col-sm-6'>
                                    <h5>Search User(s)</h5>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-6'>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="defaultFormControlInput"
                                        placeholder="Name / Email"
                                        onChange={ (e) => { onFilterChange(e) } }
                                        aria-describedby="defaultFormControlHelp"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='table-responsive scroll'>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Role</th>
                                                <th scope="col">Active</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                UsersData.map((key, i) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">{ i + 1 }</th>
                                                            <td>{ key['first_name'] + " " + key['last_name'] }</td>
                                                            <td>{ key['email'] }</td>
                                                            <td>{ key['is_superuser'] === true ? "Admin" : "Agent" }</td>
                                                            <td>{ key['is_active'] === 1 ? "Active" : "Inactive" }</td>
                                                            <td>
                                                                <div className='col-6'>
                                                                    <div className='row'>
                                                                        <div className='col-6'>
                                                                            {
                                                                                user['id'] === key['id'] ?
                                                                                    <button type="button" className="btn btn-sm btn-primary">Can't edit</button> :
                                                                                    <NavLink
                                                                                        type="button"
                                                                                        to={ { pathname: "/userdetails" } }
                                                                                        state={ { userID: key['id'] } }
                                                                                        className={
                                                                                            user['email'].includes('sfp') || user['email'].includes('succession') ? "btn btn-sm sfp-primary"
                                                                                                : user['email'].includes('fs4p') ? "btn btn-sm fs4p-primary"
                                                                                                    : user['email'].includes('sanlam') ? "btn btn-sm sanlam-primary"
                                                                                                        : "btn btn-sm btn-primary"
                                                                                        }
                                                                                    >
                                                                                        Edit
                                                                                    </NavLink>
                                                                            }
                                                                        </div>
                                                                        <div className='col-6'>
                                                                            {
                                                                                user['id'] === key['id'] ?
                                                                                    <button type="button" className="btn btn-sm btn-danger">Can't Delete</button> :
                                                                                    <button type="button" onClick={ (e) => { onDeleteButtonClick(e, key.id) } } state={ { userID: key['id'] } } className="btn btn-sm btn-danger">Delete</button>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <NavLink type="button" to={{pathname:"/userdetails"}} state={{userID : key['id']}} className="btn btn-sm btn-primary">Edit</NavLink> */ }
                                                            </td>
                                                        </tr>)
                                                })
                                            }
                                            {/* <tr>
                                                <th scope="row">1</th>
                                                <td>{data[0]['name']}</td>
                                                <td>{data[0]['email']}</td>
                                                <td>{data[0]['role'] === true ? "Admin" : "Agent"}</td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                    <br />
                                    <div className='d-flex justify-content-center'>
                                        {
                                            TotalUsers > 0 ?
                                                <Pagination totalRecords={ TotalUsers } pageLimit={ PageLimit } paginationSearchQuery={ SearchQuery } paginationOrderBy={ OrderBy } onPageChanged={ onloadUsers } />
                                                : <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
})

export default connect(mapStateToProps)(Users)