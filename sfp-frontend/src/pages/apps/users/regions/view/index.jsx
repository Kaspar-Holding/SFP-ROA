import React, { useState, useEffect } from 'react'
import Layout from '../../../../../hocs/Layout'
import DashboardLayout from '../../../../../hocs/DashboardLayout'
import Loader from '../../../../../hocs/Loader'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
// import Filters from './Filters'
import Moment from 'moment'
import dynamic from 'next/dynamic'

const RegionsList = () => {
    const router = useRouter()
    const user = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const rId = router?.query?.rId
    const [ProfileData, setProfileData] = useState({})
    const [Regions, setRegions] = useState({})
    const [Managers, setManagers] = useState([])
    const [RegionDetails, setRegionDetails] = useState({})
    const [Loaded, setLoaded] = useState(false)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    const loadRegion = async (rId, load) => {
        load ? setLoaded(true) : ""
        try {
            const Body = JSON.stringify(rId)
            const response = await axios.post(
                '/api/users/regions/details',
                Body,
                config
            )

            setRegionDetails(response?.data?.data?.region)
            setManagers(response?.data?.data?.managers)
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

    const updateRegion = async (e, rId, manager) => {
        e.preventDefault()
        try {
            const Body = JSON.stringify({
                rId,
                manager
            })
            const response = await axios.post(
                '/api/users/regions/update',
                Body,
                config
            )
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Success",
                html: `${response?.data?.data?.message}`,
                showConfirmButton: !1,
                timer: 5000,
            })
            loadRegion(rId, false)

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
    const onChange = (e) => {
        setRegionDetails({
            ...RegionDetails,
            [e.target.name]: e.target.value
        })
    }

    const updating = (e) => {
        e.preventDefault()
        updateRegion(rId, ProfileData)
    }

    useEffect(() => {
        loadRegion(rId, true)
    }, [])
    return (
        <Layout
            title={ "Region Details" }
            content={ "Region Details" }
        >
            <DashboardLayout
                appTitle={ RegionDetails?.region ? `${RegionDetails?.region}'s \n Details` : 'View Regions' }
                app={ RegionDetails?.region ? `view users ${RegionDetails?.region}` : 'view user' }
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
                                            <h1 className='app-dashboard-header'>{ RegionDetails?.region } Details</h1>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                            <input type="text" className="form-control" value={ RegionDetails?.region } name='name' disabled />
                                        </div>
                                        <form onSubmit={ e => onSubmit(e) }>
                                            <div className="mb-3">
                                                <label htmlFor="Role" className="form-label">Manager</label>
                                                <div className="input-group">
                                                    <select className="form-select" onChange={ e => onChange(e) } value={ RegionDetails?.manager } name="manager" aria-label="Default select example">
                                                        <option value={ 0 }>Select the manager</option>
                                                        {
                                                            Managers.map(
                                                                (manager, index) => {
                                                                    return (
                                                                        <option key={ index } value={ manager?.id }>{ manager?.first_name } { manager?.last_name != "nan" ? manager?.last_name : "" }</option>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </select>
                                                    <button class="input-group-text" onClick={ (e) => { updateRegion(e, rId, RegionDetails?.manager) } } type="button"><i class="fa-solid fa-check-to-slot"></i></button>
                                                </div>
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

export default RegionsList