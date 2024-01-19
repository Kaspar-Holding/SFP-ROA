import React, { useState, useEffect } from 'react'
import Loader from '../../../../hocs/Loader'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
// import Filters from './Filters'
import Moment from 'moment'
import dynamic from 'next/dynamic'
import Layout from '../../../../hocs/Layout'
import DashboardLayout from '../../../../hocs/DashboardLayout'
import { API_URL } from '../../../../config'

const BulkUserUpdate = () => {
    const router = useRouter()
    const user = useSelector(state => state.auth.user)
    const [file, setFile] = useState({
        usersCsvFile: ""
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
                    usersCsvFile: base64String
                }
            )
        }

        reader.readAsDataURL(file)
    }
    const [DownloadingLink, setDownloadingLink] = useState("")
    const [Completed, setCompleted] = useState(true)
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (file?.usersCsvFile != "") {
            setCompleted(false)
            const Body = JSON.stringify(file)
            setCreateLogs("")
            setUpdateLogs("")
            setNotExistingLogs("")
            setResponse(null)
            try {
                const response = await fetch(`/api/users/bulk/update`, {
                    method: 'POST',
                    body: Body,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                });

                if (!response.ok || !response.body) {
                    throw response.statusText;
                }

                // Here we start prepping for the streaming response
                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                const loopRunner = true;

                let incompleteChunk = "";
                while (loopRunner) {
                    // Here we start reading the stream, until its done.
                    try {
                        const { value, done } = await reader.read();
                        if (done) {
                            break;
                        }
                        let decodedChunk = decoder.decode(value, { stream: true });

                        if (!decodedChunk.endsWith('\n\n')) {
                            incompleteChunk += decodedChunk;
                            continue;
                        }

                        if (incompleteChunk) {
                            if (!decodedChunk.startsWith('data:')) {
                                decodedChunk = incompleteChunk + decodedChunk;
                            }
                            incompleteChunk = '';
                        }
                        const lines = decodedChunk.split('\n\n');
                        for (const line of lines) {
                            if (line.startsWith('data:')) {

                                const responseData = line.slice(5); // Remove 'data:' prefix
                                if (responseData.trim() === '[DONE]') {
                                    continue
                                    // const data = JSON.parse(jsonData);
                                }
                                const JSONResponse = JSON.parse(responseData)
                                setResponse(JSONResponse)
                                setCreateLogs((value) => value + JSONResponse?.logs['create_log'])
                                setUpdateLogs((value) => value + JSONResponse?.logs['update_log'])
                                setNotExistingLogs((value) => value + JSONResponse?.logs['not_existing_log'])
                                setDownloadingLink(JSONResponse?.downloading_link)
                            }
                        }





                        // Process the chunk...

                    } catch (error) {
                        console.error('Error reading stream:', error);
                    }

                }
                setCompleted(true)
                Swal.fire({
                    title: 'Success!',
                    text: 'Bulk Update Completed',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })

            } catch (error) {
                console.log(error.response)
            }
        }
    }
    return (
        <Layout
            title={ "Bulk User Management" }
            content={ "Bulk User Management" }
        >
            <DashboardLayout
                appTitle={ 'Bulk User Update' }
                app={ 'users' }
            >
                <div className='col-lg-9 bulkupdate'>
                    <div className='users-edit-card '>
                        <div className='inital-card-header text-center'>
                            <b>Bulk User Update</b>
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
                        { DownloadingLink && (
                            <div className='col-12'>
                                <a className='btn btn-primary w-100' href={ `${API_URL}/${DownloadingLink}` } target='_blank' type='button'>Download New Users Link</a>
                            </div>
                        ) }
                        <div className='row'>
                            {
                                CreateLogs != "" ?
                                    <div className='col'>
                                        <div className='log'>
                                            <div className='text-center'>
                                                <h3>Created Users Profiles</h3>
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
                                                <h3>Updated Users Profiles</h3>
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
                                                <h3>Not Existing Users</h3>
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
                                        <input disabled={ Columns?.length > 0 } className='form-control form-control-lg' type='file' accept='.csv' id='file' name='file' onChange={ handleFileChange } />
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

export default BulkUserUpdate