import React, { useState, useEffect } from 'react'
import Loader from '../../../../../hocs/Loader'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
// import Filters from './Filters'
import Select from 'react-select'
import Moment from 'moment'
import dynamic from 'next/dynamic'
import Layout from '../../../../../hocs/Layout'
import DashboardLayout from '../../../../../hocs/DashboardLayout'
import { API_URL } from '../../../../../config'

const AddROAProduct = () => {
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
    const [Advisors, setAdvisors] = useState([])

    const LoadAdvisors = async () => {
        try {
            const response = await axios.get('/api/account/agents', config)

            setAdvisors(response?.data?.data?.advisors)

        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Error",
                html: `An error has occured.`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

        }
    }
    const [AdvisorId, setAdvisorId] = useState(0)
    const onSelectChange = (e) => {
        if (e.name === "advisor") {
            LoadAdvisorProducts(e.id)
            setAdvisorId(e.id)
        }
    }
    const [AdvisorProducts, setAdvisorProducts] = useState([])
    const LoadAdvisorProducts = async (uId) => {
        // setLoaded(true)
        const Body = JSON.stringify({ advisorId: uId })

        try {
            const response = await axios.post('/api/roa/advisor/products', Body, config)
            setAdvisorProducts(response?.data)
        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Error",
                html: `An error has occured.`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

        }
        // setLoaded(false)
    }
    const [ProductData, setProductData] = useState({
        product: "",
        subcode: ""
    })
    const { product, subcode } = ProductData
    const onChange = (e) => {
        setProductData({ ...ProductData, [e.target.name]: e.target.value })
    }
    const addProduct = async (e) => {
        e.preventDefault()
        if (AdvisorId != 0 && product != "" && subcode != "") {

            const Body = JSON.stringify({ advisorId: AdvisorId, product: ProductData })

            try {
                const response = await axios.post('/api/roa/advisor/products/add', Body, config)
                setProductData({
                    product: "",
                    subcode: ""
                })
                LoadAdvisorProducts(AdvisorId)
                Swal.fire({
                    position: "bottom-end",
                    type: "success",
                    title: "Success",
                    html: `Product Added/Updated.`,
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
            } catch (error) {
                console.log(error)
                Swal.fire({
                    position: "bottom-end",
                    type: "success",
                    title: "Error",
                    html: `An error has occured.`,
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })

            }
        }
    }
    const deleteProduct = async (e, product_id) => {
        e.preventDefault()
        if (AdvisorId != 0) {

            const Body = JSON.stringify({ advisorId: AdvisorId, product: product_id })

            try {
                const response = await axios.post('/api/roa/advisor/products/delete', Body, config)
                LoadAdvisorProducts(AdvisorId)
                Swal.fire({
                    position: "bottom-end",
                    type: "success",
                    title: "Success",
                    html: `Product deleted.`,
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
            } catch (error) {
                console.log(error)
                Swal.fire({
                    position: "bottom-end",
                    type: "success",
                    title: "Error",
                    html: `An error has occured.`,
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })

            }
        }
    }
    useEffect(() => {
        LoadAdvisors()
    }, [])


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
                            <b>Add Product to Advisor</b>
                        </div>
                        <hr />

                        <div className="mb-3">
                            <label className="form-label">Advisor</label>
                            <Select options={ Advisors } onChange={ (e) => { onSelectChange(e) } } className="searchSelect" placeholder="Search the advisor" />
                        </div>
                        <hr />
                        <form onSubmit={ (e) => { addProduct(e) } } className='container'>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Product</label>
                                <input type="text" className="form-control" placeholder="Product Name" name="product" value={ ProductData.product } onChange={ (e) => { onChange(e) } } />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Subcode</label>
                                <input type="text" className="form-control" placeholder="Subcode" name="subcode" value={ ProductData.subcode } onChange={ (e) => { onChange(e) } } />
                            </div>
                            <button className='btn btn-primary' type='submit'>Submit</button>
                        </form>
                        <hr />

                        <div className='app-users-list-records-table'>
                            <table className="table" >
                                <thead className='tableHead'>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Subcode</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className='tableContent'>
                                    {
                                        AdvisorProducts?.map((product, index) => {
                                            return (
                                                <tr key={ index }>
                                                    <th scope="row">{ index + 1 }</th>
                                                    <td>{ product?.product }</td>
                                                    <td>{ product?.subcode }</td>
                                                    <td>
                                                        <button
                                                            onClick={ (e) => { deleteProduct(e, product?.id) } }
                                                            className='btn btn-sm btn-sfp btn-primary mx-1'
                                                        >
                                                            <i className='fa-solid fa-trash'></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </DashboardLayout>
        </Layout>
    )
}

export default AddROAProduct