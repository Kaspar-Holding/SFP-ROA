import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'

const CreateNewComplianceDocument = () => {
    const location = useLocation()
    const { state } = location
    const [DocumentInitalData, setDocumentInitalData] = useState()

    const [InitalData, setInitalData] = useState({})

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    const onChange = (e) => {
        setDocumentInitalData({
            ...DocumentInitalData,
            [e.target.name]: e.target.value
        })
    }

    const completeInitialDetailsBtn = (e) => {
        e.preventDefault()
        completeInitialDetails(DocumentInitalData?.id)
    }

    const completeInitialDetails = async (id) => {
        const Body = JSON.stringify(DocumentInitalData)

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/api/compliance/document/${id}/`,
                Body,
                config
            )

            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Success",
                html: `Proceed to next level.`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

            return (
                <Navigate
                    type="button"
                    to={ { pathname: "/complete-compliance-document" } }
                    state={
                        {
                            data: DocumentInitalData
                        }
                    }
                />
            )

        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Success",
                html: `An error has occured.`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        }
    }

    useEffect(() => {
        if (state['data']) {
            setDocumentInitalData(state['data'])
        }
    }, [])


    return (
        <div className='compliance-inital-card'>
            <div className='position-relative'>
                <div className='position-absolute top-0 start-50 translate-middle'>
                    <p className='compliance-inital-card-header'>Initial Information</p>
                </div>
            </div>
            <div className='compliance-inital-content'>
                <form onSubmit={ (e) => { completeInitialDetailsBtn(e) } }>
                    <div className='row'>
                        <div className='col-lg-2'>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Client Name</label>
                                <input required onChange={ (e) => { onChange(e) } } type="text" value={ DocumentInitalData?.clientName } name="clientName" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Advisor</label>
                                <input required onChange={ (e) => { onChange(e) } } type="text" value={ DocumentInitalData?.advisor } name="advisor" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Business Unit</label>
                                <select className="form-select" name="businessUnit" value={ DocumentInitalData?.businessUnit } aria-label="Default select example">
                                    <option value="1">SFP</option>
                                    <option value="2">FS4P</option>
                                    <option value="3">AFP</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Region</label>
                                <input required onChange={ (e) => { onChange(e) } } type="text" value={ DocumentInitalData?.region } name="region" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">BAC</label>
                                <select className="form-select" name="BAC" value={ DocumentInitalData?.BAC } aria-label="Default select example">
                                    <option value={ 0 }>Select Business Type</option>
                                    <option value="1">Elrike</option>
                                    <option value="2">Prajay</option>
                                    <option value="3">Ruallen</option>
                                    <option value="4">Elrike</option>
                                    <option value="5">Chaneekah</option>
                                    <option value="6">Evelyn</option>
                                    <option value="7">Robyn</option>
                                    <option value="8">Tumiso</option>
                                    <option value="9">Gizelle</option>
                                    <option value="10">Selvie</option>
                                    <option value="11">STAFF</option>
                                    <option value="12">Megan</option>
                                    <option value="13">Nicole</option>
                                    <option value="14">Nomsa</option>
                                    <option value="15">Colett</option>
                                    <option value="16">Nicole Randall</option>
                                    <option value="17">Jental</option>
                                    <option value="18">Rajeshrie</option>
                                    <option value="19">Sadha</option>
                                    <option value="20">Tumi</option>
                                    <option value="21">Colette</option>
                                    <option value="22">Elrike / Amy-Lee</option>
                                    <option value="23">Evelyn / Azuke</option>
                                    <option value="24">Paris</option>
                                    <option value="25">EB*</option>
                                    <option value="26">St John</option>
                                </select>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">ID Number</label>
                                <input required onChange={ (e) => { onChange(e) } } type="text" value={ DocumentInitalData?.IdNumber } name="IdNumber" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Categorisation</label>
                                <input required onChange={ (e) => { onChange(e) } } type="text" value={ DocumentInitalData?.categorisation } name="categorisation" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Advisor Email</label>
                                <input required onChange={ (e) => { onChange(e) } } type="email" value={ DocumentInitalData?.advisorEmail } name="advisorEmail" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Supervision</label>
                                <input required onChange={ (e) => { onChange(e) } } type="text" value={ DocumentInitalData?.supervisor } name="supervisor" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Policy Number</label>
                                <input required onChange={ (e) => { onChange(e) } } type="text" value={ DocumentInitalData?.policy_number } name="policy_number" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Supplier</label>
                                <input required onChange={ (e) => { onChange(e) } } type="text" value={ DocumentInitalData?.supplier } name="supplier" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Product</label>
                                <input required onChange={ (e) => { onChange(e) } } type="text" value={ DocumentInitalData?.product } name="product" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                        </div>
                        <div className='col-lg-2'>
                        </div>
                        <div className='col-lg-2'>
                        </div>
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label compliance-inital-card-text">Type of Business</label>
                                <select className="form-select" name="product" value={ DocumentInitalData?.businessType } aria-label="Default select example">
                                    <option value={ 0 }>Select Business Type</option>
                                    <option value="1">Business Assurance</option>
                                    <option value="2">Comm release</option>
                                    <option value="3">Employee Benefits</option>
                                    <option value="4">Funeral</option>
                                    <option value="5">GAP Cover</option>
                                    <option value="6">Recurring - Investment</option>
                                    <option value="7">Lumpsum - Investment</option>
                                    <option value="8">Investment- Both</option>
                                    <option value="9">Medical Aid</option>
                                    <option value="10">Other (Text box to specify)</option>
                                    <option value="11">Will</option>
                                    <option value="12">Risk</option>
                                    <option value="13">ST Re-issued/instated</option>
                                    <option value="14">Short Term Commercial</option>
                                    <option value="15">Short Term Personal</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                        </div>
                    </div>
                    <div className="d-grid col-4 mx-auto">
                        <button className="btn btn-primary compliance-inital-card-button-text" type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateNewComplianceDocument