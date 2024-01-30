import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
// import Filters from './Filters'
import Moment from 'moment'
import Layout from '../../../../../hocs/Layout'
import DashboardLayout from '../../../../../hocs/DashboardLayout'

const BulkEventUpdate = () => {
    const router = useRouter()
    const user = useSelector(state => state.auth.user)
    const [file, setFile] = useState({
        eventFile: ""
    })
    const [Columns, setColumns] = useState([])

    const [response, setResponse] = useState(null)
    const [UpdateLogs, setUpdateLogs] = useState("")
    const [CreateLogs, setCreateLogs] = useState("")
    const [NotExistingLogs, setNotExistingLogs] = useState("")
    const handleFileChange = (event) => {
        const file = event.target.files[0]
        const reader = new FileReader()

        reader.onload = () => {
            const base64String = reader.result
            setFile(
                {
                    eventFile: base64String
                }
            )
        }

        reader.readAsDataURL(file)
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const [Completed, setCompleted] = useState(true)
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (file?.eventFile != "") {
            const Body = JSON.stringify(file)
            try {
                const response = await axios.post(
                    `/api/notifications/events/create`,
                    Body,
                    config
                )


                Swal.fire({
                    title: 'Success!',
                    text: 'Bulk Event Update Completed',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })


            } catch (error) {
                console.log(error)
                let errors = error?.response?.data?.error?.errors
                Swal.fire({
                    position: "bottom-end",
                    type: "success",
                    title: "Error",
                    html: Object.entries(errors).map(([key, value]) => `${(key[0].toUpperCase() + key.slice(1)).replace('_', ' ')}: ${value}`),
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
            }
        }
    }
    console.log(file)
    return (
        <Layout
            title={ "Bulk Event Management" }
            content={ "Bulk Event Management" }
        >
            <DashboardLayout
                appTitle={ 'Bulk Event Update' }
                app={ 'notifications' }
            >
                <div className='col-lg-9 bulkupdate'>
                    <div className='users-edit-card '>
                        <div className='inital-card-header text-center'>
                            <b>Bulk Event Update</b>
                        </div>
                        <hr />

                        { response && (

                            <div className='row app-users-dashboard-kpi'>
                                <div className='col p-0 m-0'>
                                    <div className="card kpi-users-card-1">
                                        <div className="card-body">
                                            <h1 className='kpi-users-number'>
                                                {
                                                    response?.total ? response?.total : 0
                                                }
                                            </h1>
                                            <p className='kpi-users-title'>
                                                Total
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col p-0 m-0'>
                                    <div className="card kpi-users-card-2">
                                        <div className="card-body">
                                            <h1 className='kpi-users-number'>
                                                {
                                                    response?.updated ? response?.updated : 0
                                                }
                                            </h1>
                                            <p className='kpi-users-title'>
                                                Updated
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col p-0 m-0'>
                                    <div className="card kpi-users-card-3">
                                        <div className="card-body">
                                            <h1 className='kpi-users-number'>
                                                {
                                                    response?.created ? response?.created : 0
                                                }
                                            </h1>
                                            <p className='kpi-users-title'>
                                                Created
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col p-0 m-0'>
                                    <div className="card kpi-users-card-4">
                                        <div className="card-body">
                                            <h1 className='kpi-users-number'>
                                                {
                                                    response?.not_existing ? response?.not_existing : 0
                                                }
                                            </h1>
                                            <p className='kpi-users-title'>
                                                Not Found
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }
                        <div className='row'>
                            {
                                CreateLogs != "" ?
                                    <div className='col'>
                                        <div className='log'>
                                            <div className='text-center'>
                                                <h3>Created Events Profiles</h3>
                                            </div>
                                            { CreateLogs && (

                                                <div className='row'>
                                                    <div dangerouslySetInnerHTML={ { __html: CreateLogs } }></div>
                                                </div>
                                            ) }
                                        </div>
                                    </div>
                                    : <></>
                            }
                            {
                                UpdateLogs != "" ?
                                    <div className='col'>
                                        <div className='log'>
                                            <div className='text-center'>
                                                <h3>Updated Events Profiles</h3>
                                            </div>
                                            { UpdateLogs && (

                                                <div className='row'>
                                                    <div dangerouslySetInnerHTML={ { __html: UpdateLogs } }></div>
                                                </div>
                                            ) }
                                        </div>
                                    </div>
                                    : <></>
                            }
                            {
                                NotExistingLogs != "" ?
                                    <div className='col'>
                                        <div className='log'>
                                            <div className='text-center'>
                                                <h3>Not Existing Events</h3>
                                            </div>
                                            { NotExistingLogs && (

                                                <div className='row'>
                                                    <div dangerouslySetInnerHTML={ { __html: NotExistingLogs } }></div>
                                                </div>
                                            ) }
                                        </div>
                                    </div>
                                    : <></>

                            }
                        </div>

                        {
                            Completed ?
                                <form onSubmit={ handleSubmit } className='container text-center'>
                                    <div className='form-group'>
                                        <input disabled={ Columns?.length > 0 } className='form-control form-control-lg' type='file' accept='.ics' id='file' name='file' onChange={ handleFileChange } />
                                    </div>
                                    <br />
                                    <button className='btn btn-primary' type='submit'>Submit</button>
                                </form>
                                : <></>
                        }

                    </div>
                </div>
            </DashboardLayout>
        </Layout>
    )
}

export default BulkEventUpdate