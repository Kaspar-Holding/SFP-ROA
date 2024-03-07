import UserPagination from '../../../../modules/UserPagination'
import React, { useState, useEffect } from 'react'
import Layout from '../../../../hocs/Layout'
import DashboardLayout from '../../../../hocs/DashboardLayout'
import Loader from '../../../../hocs/Loader'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
// import Filters from './Filters'
import Moment from 'moment'
import dynamic from 'next/dynamic'

const UsersList = () => {
    const router = useRouter()
    const user = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const uId = router?.query?.uId
    const [ProfileData, setProfileData] = useState({})
    const [Regions, setRegions] = useState([])
    const [UserDetails, setUserDetails] = useState({})
    const [Loaded, setLoaded] = useState(false)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
    const [BACs, setBACs] = useState([])
    const loadUsers = async (uId, load) => {
        load ? setLoaded(true) : ""
        try {
            const Body = JSON.stringify(uId)
            const response = await axios.post(
                '/api/users/details',
                Body,
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
        load ? setLoaded(false) : ""

    }

    const updateUser = async (uId, data) => {
        try {
            const Body = JSON.stringify({
                uId,
                data
            })
            const response = await axios.post(
                '/api/users/update',
                Body,
                config
            )
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Success",
                html: `User Updated Successfully`,
                showConfirmButton: !1,
                timer: 5000,
            })
            loadUsers(uId, false)

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

    const updateUserPassword = async (uId, data) => {
        try {
            const Body = JSON.stringify({
                uId,
                data
            })
            const response = await axios.post(
                '/api/users/update_password',
                Body,
                config
            )
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Success",
                html: `User Password Successfully`,
                showConfirmButton: !1,
                timer: 5000,
            })

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
    const onDetailsChange = (e) => {
        setUserDetails({
            ...UserDetails,
            [e.target.name]: e.target.value
        })
    }
    const onChange = (e) => {
        setProfileData({
            ...ProfileData,
            [e.target.name]: e.target.value
        })
    }

    const updating = (e) => {
        e.preventDefault()
        updateUser(uId, ProfileData)
    }

    const userStatus = (e) => {
        e.preventDefault()
        updateUser(uId, { "userType": UserDetails?.userType })
    }

    useEffect(() => {
        loadUsers(uId, true)
    }, [])


    const [PasswordForm, setPasswordForm] = useState({
        password: ""
    })
    const [ShowPassword, setShowPassword] = useState(true)

    const generateStrongPassword = (e, length) => {
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
        var password = "";
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        setPasswordForm({ ...PasswordForm, ['password']: password })
        setShowPassword(false)
        copyToClipboard(password)
        Swal.fire({
            position: "bottom-end",
            type: "error",
            title: "Success",
            html: `Password is generated and copied to clipboard`,
            showConfirmButton: !1,
            timer: 5000,
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1,
        })
    }
    function copyToClipboard(text) {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    const onPasswordUpdateClick = (e) => {
        e.preventDefault()
        updateUserPassword(uId, PasswordForm)
    }
    return (
        <Layout
            title={ "User Details" }
            content={ "User Details" }
        >
            <DashboardLayout
                appTitle={ UserDetails?.full_name ? `${UserDetails?.full_name}'s \n Details` : 'View Users' }
                app={ UserDetails?.full_name ? `view users ${UserDetails?.full_name}` : 'view user' }
            >
                {
                    Loaded ?
                        <Loader />
                        :
                        <div className='col-lg-9'>
                            <div className='row'>
                                <div className='col-lg-12 app-users-details'>
                                    <div className='row'>
                                        <div className='col-lg-12 text-center'>
                                            <h1 className='app-dashboard-header'>{ UserDetails?.full_name } Details</h1>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputID_1" className="form-label">Name</label>
                                            <input type="text" className="form-control" value={ UserDetails?.full_name } name='name' disabled />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputID_1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" value={ UserDetails?.email } name="email" id="inputID_1" aria-describedby="emailHelp" disabled />
                                        </div>
                                        <form onSubmit={ e => onSubmit(e) }>
                                            <div className="mb-3">
                                                <label htmlFor="userType" className="form-label">User Type</label>
                                                <select className="form-select" onBlur={ (e) => { userStatus(e) } } onChange={ e => onDetailsChange(e) } value={ UserDetails?.userType } name="userType" aria-label="Default select example">
                                                    <option value="0">Admin</option>
                                                    <option value="1">Gatekeeper</option>
                                                    <option value="2">ARC</option>
                                                    <option value="3">Manager</option>
                                                    <option value="5">BAC</option>
                                                    <option value="6">Advisor</option>
                                                </select>
                                            </div>
                                            {/* <div className="mb-3">
                                                <label htmlFor="Role" className="form-label">Account Status</label>
                                                <select className="form-select" onChange={ e => onChange(e) } value={ UserDetails['is_active'] } name="is_active" aria-label="Default select example">
                                                    <option value="1">Active</option>
                                                    <option value="0">Inactive</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="Role" className="form-label">Role</label>
                                                <select className="form-select" onChange={ e => onChange(e) } value={ UserDetails['is_superuser'] } name="is_superuser" aria-label="Default select example">
                                                    <option value="true">Admin</option>
                                                    <option value="false">Agent</option>
                                                </select>
                                            </div>
                                            <hr /> */}
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Update Password</label>
                                                <div className="input-group">
                                                    <input type={ ShowPassword ? "password" : "text" } minLength={ 8 } className="form-control" onChange={ e => onChange(e) } value={ PasswordForm['password'] } name="password" id="exampleInputPassword1" required />
                                                    <button class="input-group-text" onClick={ (e) => { setShowPassword(!ShowPassword) } } type="button"><i class="fa-solid fa-eye"></i></button>
                                                    <button class="input-group-text" onClick={ (e) => { generateStrongPassword(e, 12) } } type="button"><i class="fa-solid fa-check-to-slot"></i> Generate Password</button>
                                                    <button class="input-group-text" onClick={ (e) => { onPasswordUpdateClick(e) } } type="button"><i class="fa-solid fa-check"></i> Update</button>
                                                </div>
                                            </div>
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
                                                                            <select onBlur={ (e) => { updating(e) } } className="form-select" onChange={ e => onChange(e) } value={ ProfileData[item] } name="region" aria-label="Default select example">
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
                                                                                <select onBlur={ (e) => { updating(e) } } className="form-select" onChange={ e => onChange(e) } value={ ProfileData[item] } name="bac" aria-label="Default select example">
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
                                                                                        onBlur={ (e) => { updating(e) } }
                                                                                        value={ ProfileData[item]?.split('T')[0] } // Convert to YYYY-MM-DD format
                                                                                        name={ item }
                                                                                        onChange={ e => onChange(e) }
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                            : ProfileData[item] == "Yes" || ProfileData[item] == "No" ? (
                                                                                <select className="form-select" onBlur={ (e) => { updating(e) } } onChange={ e => onChange(e) } value={ ProfileData[item] } name={ item } aria-label="Default select example">
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            )
                                                                                : ProfileData[item] == "Active" ? (
                                                                                    <select className="form-select" onBlur={ (e) => { updating(e) } } onChange={ e => onChange(e) } value={ ProfileData[item] } name={ item } aria-label="Default select example">
                                                                                        <option value="Active">Active</option>
                                                                                        <option value="Inactive">Inactive</option>
                                                                                    </select>
                                                                                )
                                                                                    : (
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            onBlur={ (e) => { updating(e) } }
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
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </DashboardLayout>

        </Layout>
    )
}

export default UsersList