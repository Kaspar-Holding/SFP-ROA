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

const ROAProducts = () => {
    const router = useRouter()
    const user = useSelector(state => state.auth.user)
    const [file, setFile] = useState({
        productsCsvFile: ""
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
                    productsCsvFile: base64String
                }
            )
        }

        reader.readAsDataURL(file)
    }


    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (file?.productsCsvFile != "") {
            // setCompleted(false)
            const Body = JSON.stringify(file)
            setCreateLogs("")
            setUpdateLogs("")
            setNotExistingLogs("")
            setResponse(null)
            try {
                const response = await axios.post('/api/roa/products/update_v2', Body, config)

                // if (!response.ok || !response.body) {
                //     throw response.statusText;
                // }

                // // Here we start prepping for the streaming response
                // const reader = response.body.getReader();
                // const decoder = new TextDecoder();
                // const loopRunner = true;

                // let incompleteChunk = "";
                // while (loopRunner) {
                //     // Here we start reading the stream, until its done.
                //     try {
                //         const { value, done } = await reader.read();
                //         if (done) {
                //             break;
                //         }
                //         let decodedChunk = decoder.decode(value, { stream: true });

                //         if (!decodedChunk.endsWith('\n\n')) {
                //             incompleteChunk += decodedChunk;
                //             continue;
                //         }

                //         if (incompleteChunk) {
                //             if (!decodedChunk.startsWith('data:')) {
                //                 decodedChunk = incompleteChunk + decodedChunk;
                //             }
                //             incompleteChunk = '';
                //         }
                //         const lines = decodedChunk.split('\n\n');
                //         for (const line of lines) {
                //             if (line.startsWith('data:')) {

                //                 const responseData = line.slice(5); // Remove 'data:' prefix
                //                 if (responseData.trim() === '[DONE]') {
                //                     continue
                //                     // const data = JSON.parse(jsonData);
                //                 }
                //                 const JSONResponse = JSON.parse(responseData)
                //                 setResponse(JSONResponse)
                //                 setCreateLogs((value) => value + JSONResponse?.logs['create_log'])
                //                 setUpdateLogs((value) => value + JSONResponse?.logs['update_log'])
                //             }
                //         }





                //         // Process the chunk...

                //     } catch (error) {
                //         console.error('Error reading stream:', error);
                //     }

                // }
                // setCompleted(true)
                Swal.fire({
                    title: 'Success!',
                    text: response?.data?.message,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })

            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <Layout
            title={ "Disclousre Products Management" }
            content={ "Disclousre Products Management" }
        >
            <DashboardLayout
                appTitle={ 'Disclousre Products' }
                app={ 'roa' }
            >
                <div className='col-lg-9 bulkupdate'>
                    <div className='users-edit-card '>
                        <div className='inital-card-header text-center'>
                            <b>Bulk Product Update</b>
                        </div>
                        <hr />

                        <form onSubmit={ handleSubmit } className='container text-center'>
                            <div className='form-group'>
                                <input disabled={ Columns?.length > 0 } className='form-control form-control-lg' type='file' accept='.xls' id='file' name='file' onChange={ handleFileChange } />
                            </div>
                            <br />
                            <button className='btn btn-primary' type='submit'>Submit</button>
                        </form>

                    </div>
                </div>
            </DashboardLayout>
        </Layout>
    )
}

export default ROAProducts