import React, { useState } from 'react'
import Layout from '../../../hocs/Layout'
import DashboardLayout from '../../../hocs/DashboardLayout'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'

const UserProfile = () => {
    const user = useSelector(state => state.auth.user)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
    const [UserData, setUserData] = useState({
        new_password: "",
        re_new_password: "",
        current_password: ""
    })
    const onChange = e => setUserData({ ...UserData, [e.target.name]: e.target.value })
    const updatePassword = async () => {
        if (UserData['current_password'] === UserData['new_password']) {
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: "Error",
                html: `New passwords can't be same as old password`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        }
        else if (UserData['new_password'] === UserData['re_new_password']) {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`
                }
            }
            const Body = JSON.stringify(UserData)
            try {
                const response = await axios.post(`/api/account/password/update`, Body, config)
                if (response.status === 204) {
                    setUserData({
                        new_password: "",
                        re_new_password: "",
                        current_password: ""
                    })
                    Swal.fire({
                        position: "bottom-end",
                        type: "error",
                        title: "Success",
                        html: `Password is changed successfully`,
                        showConfirmButton: !1,
                        timer: 5000,
                        confirmButtonClass: "btn btn-primary",
                        buttonsStyling: !1,
                    })
                }

            } catch (error) {
                if ("current_password" in error.response.data.error) {
                    Swal.fire({
                        position: "bottom-end",
                        type: "error",
                        title: "Error",
                        html: `Current Password is invalid`,
                        showConfirmButton: !1,
                        timer: 5000,
                        confirmButtonClass: "btn btn-primary",
                        buttonsStyling: !1,
                    })
                }
            }
        } else {
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: "Error",
                html: `New passwords do not match`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        }
    }
    const onSubmit = e => {
        e.preventDefault()
        updatePassword()
    }

    const [ProfileData, setProfileData] = useState({})
    const [BACs, setBACs] = useState([])
    const [Regions, setRegions] = useState([])
    const [UserDetails, setUserDetails] = useState({})
    const loadUserDetails = async () => {
        try {
            const response = await axios.get(
                '/api/account/details',
                config
            )
            setUserDetails(response?.data?.data?.user)
            setProfileData(response?.data?.data?.user?.profile)
            setBACs(response?.data?.data?.user?.bacs)
            setRegions(response?.data?.data?.user?.regions)
        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: "Error",
                html: `${error?.response?.data?.error}`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

        }
    }

    useEffect(() => {
        loadUserDetails()
    }, [])


    return (
        <div>
            <Layout
                title={ "User Profile" }
                content={ "User Profile" }
            >
                <DashboardLayout

                    appTitle={ 'User Profile' }
                    app={ 'profile' }
                >
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='col-lg-12 app-user-details'>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                        <h1 className='app-dashboard-header'>User Profile</h1>
                                    </div>
                                    <div className="">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="text" className="form-control" value={ user?.full_name } name='name' disabled />
                                    </div>
                                    <div className="">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" value={ user?.email } name="email" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
                                    </div>
                                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2  border-bottom">
                                        <h1 className="h3 app-dashboard-header">
                                            Update Password
                                        </h1>
                                    </div>
                                    <form onSubmit={ e => onSubmit(e) }>
                                        <div className="">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Current Password</label>
                                            <input type="password" className="form-control" name='current_password' value={ UserData?.current_password } onChange={ (e) => { onChange(e) } } required />
                                        </div>
                                        <div className="">
                                            <label htmlFor="exampleInputEmail1" className="form-label">New Password</label>
                                            <input type="password" className="form-control" name="new_password" value={ UserData?.new_password } onChange={ (e) => { onChange(e) } } id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                        </div>
                                        <div className="">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Confirm New Password</label>
                                            <input type="password" className="form-control" name="re_new_password" value={ UserData?.re_new_password } onChange={ (e) => { onChange(e) } } id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                        </div>
                                        <br />
                                        <button className='btn btn-primary btn-sfp col-12'>Update Password</button>
                                    </form>

                                    <div>
                                        <div className="mb-3">
                                            <label htmlFor="userType" className="form-label">User Type</label>
                                            {
                                                UserDetails?.is_superuser ?
                                                    <select disabled className="form-select" value={ 0 } name="userType" aria-label="Default select example">
                                                        <option value="0">Admin</option>
                                                    </select>
                                                    :
                                                    <select disabled className="form-select" value={ UserDetails?.userType } name="userType" aria-label="Default select example">
                                                        <option value="0">Admin</option>
                                                        <option value="1">Gatekeeper</option>
                                                        <option value="2">ARC</option>
                                                        <option value="3">Manager</option>
                                                        <option value="5">BAC</option>
                                                        <option value="6">Advisor</option>
                                                    </select>
                                            }
                                        </div>
                                        {/* <div className="mb-3">
                                                <label htmlFor="Role" className="form-label">Account Status</label>
                                                <select disabled  className="form-select" onChange={ e => onChange(e) } value={ UserDetails['is_active'] } name="is_active" aria-label="Default select example">
                                                    <option value="1">Active</option>
                                                    <option value="0">Inactive</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="Role" className="form-label">Role</label>
                                                <select disabled  className="form-select" onChange={ e => onChange(e) } value={ UserDetails['is_superuser'] } name="is_superuser" aria-label="Default select example">
                                                    <option value="true">Admin</option>
                                                    <option value="false">Agent</option>
                                                </select>
                                            </div>
                                            <hr /> */}
                                        <div className='col-lg-12 text-center'>
                                            <h1 className='app-dashboard-header'>{ UserDetails?.full_name } Profile</h1>
                                        </div>
                                        <hr />
                                        <div className='row'>

                                            { UserDetails?.profile_columns?.map((item, index) => (
                                                <div className='col-lg-3' key={ index }>
                                                    <div className="mb-3">
                                                        <label htmlFor={ `inputID_${index + 1}` } className="form-label">{ item === 'bac' ? "BAC" : item === 'region' ? "Region" : item.replace(/_/g, ' ') }</label>
                                                        {
                                                            item === 'region' ? (
                                                                <>
                                                                    <div className="mb-3">
                                                                        <select disabled className="form-select" onChange={ e => onChange(e) } value={ ProfileData[item] } name="region" aria-label="Default select example">
                                                                            <option key={ index } value={ 0 }>Select Region</option>
                                                                            {
                                                                                Regions.map((item, index) => {
                                                                                    return (
                                                                                        <option key={ index } value={ item?.id }>{ item?.region }</option>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </select>
                                                                    </div>
                                                                </>
                                                            ) :
                                                                item === 'bac' ? (
                                                                    <>
                                                                        <div className="mb-3">
                                                                            <select disabled className="form-select" onChange={ e => onChange(e) } value={ ProfileData[item] } name="bac" aria-label="Default select example">
                                                                                <option key={ index } value={ 0 }>Select BAC</option>
                                                                                {
                                                                                    BACs.map((item, index) => {
                                                                                        return (
                                                                                            <option key={ index } value={ item?.id }>{ item?.name } ({ item?.email })</option>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </select>
                                                                        </div>
                                                                    </>
                                                                ) :
                                                                    item.includes('Date') || item.includes('_On') ? (
                                                                        <div className='row'>
                                                                            <div className='col'>
                                                                                <input
                                                                                    type="date"
                                                                                    className="form-control"

                                                                                    value={ ProfileData[item]?.split('T')[0] } // Convert to YYYY-MM-DD format
                                                                                    name={ item }
                                                                                    onChange={ e => onChange(e) }
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                        : ProfileData[item] == "Yes" || ProfileData[item] == "No" ? (
                                                                            <select disabled className="form-select" onChange={ e => onChange(e) } value={ ProfileData[item] } name={ item } aria-label="Default select example">
                                                                                <option value="Yes">Yes</option>
                                                                                <option value="No">No</option>
                                                                            </select>
                                                                        )
                                                                            : ProfileData[item] == "Active" ? (
                                                                                <select disabled className="form-select" onChange={ e => onChange(e) } value={ ProfileData[item] } name={ item } aria-label="Default select example">
                                                                                    <option value="Active">Active</option>
                                                                                    <option value="Inactive">Inactive</option>
                                                                                </select>
                                                                            )
                                                                                : (
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control"

                                                                                        value={ ProfileData[item] != "nan" ? ProfileData[item] : "" }
                                                                                        name={ item }
                                                                                        onChange={ e => onChange(e) }
                                                                                    />
                                                                                )
                                                        }
                                                        {/* <input type="text" className="form-control" value={ ProfileData[item] != "nan" ? ProfileData[item] : "" } name={ item } /> */ }
                                                    </div>
                                                </div>
                                            )) }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DashboardLayout>
            </Layout>
        </div>
    )
}

export default UserProfile