import DashboardLayout from '@/hocs/DashboardLayout'
import DocumentLayout from '@/hocs/Compliance/CreateDocumentLayout'
import Layout from '@/hocs/Layout'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import AsyncSelect from 'react-select'
import Select from 'react-select'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import CompleteDocumentLayout from '@/hocs/Compliance/CompleteDocumentLayout'


const EditDocument = () => {
    
    const router = useRouter()

    const dId = router?.query?.dId

    const [DocumentInitalData, setDocumentInitalData] = useState({
        clientName: "",
        advisor: "",
        businessUnit: "",
        otherBusinessUnit: "",
        region: "",
        bac: "",
        IdNumber: "",
        categorisation: "",
        advisorEmail: "",
        supervisor: "",
        policy_number: "",
        supplier: "",
        product: "",
        businessType: "",
    })
    
    const [InitalData, setInitalData] = useState({})

    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    }

    const onChange = (e) => {
        setDocumentInitalData({
            ...DocumentInitalData,
            [e.target.name] : e.target.value
        })
    }

    const onSelectChange = (e) => {
        setDocumentInitalData({
            ...DocumentInitalData,
            [e.name] : e.id
        })
    }

    const createInitialDocumentBtn = (e) => {
        e.preventDefault()
        // createInitialDocument(DocumentInitalData?.id)
        // router.push(`/apps/compliance/documents/complete/${dId}`)
        router.push({
            pathname: "/apps/compliance/documents/gatekeeping",
            query: {dId : dId}
        })
    }
    
    const createInitialDocument = async() => {
        const Body = JSON.stringify(DocumentInitalData)

        try {
            const response = await axios.post(
                `/api/compliance/create/`,
                Body,
                config
            )


            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Success",
                html: `${response?.data?.success}`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

            // router.push(`/apps/compliance/documents/complete/${response?.data?.data?.id}`)
            router.push({
                pathname: "/apps/compliance/documents/gatekeeping",
                query: {dId : response?.data?.data?.id}
            })
        } catch (error) {
            console.log(error?.response?.data)
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

    const [options, setoptions] = useState([
        { name: "advisor", id:"1", value: 'armughan', label: 'Armughan' },
        { name: "advisor", id:"2", value: 'ali', label: 'Ali' },
        { name: "advisor", id:"3", value: 'areeb', label: 'Areeb' }
    ])

    const [businessUnit, setBuisnessUnit] = useState([
        { value: '1', label: 'Succession Finance Planning', id:"1" ,name: "businessUnit" },
        { value: '2', label: 'Financial Solutions 4 Professionals', id:"2" ,name: "businessUnit" },
        { value: '3', label: 'Affiliated Finance Planning', id:"3" ,name: "businessUnit" }
    ])
    
    const LoadData = async (documentId) => {

        const Body = JSON.stringify({
            dId: documentId
        })

        try {
            const response = await axios.post(
                `/api/compliance/load/`,
                Body,
                config
            )

            setDocumentInitalData(response?.data?.data)


        } catch (error) {
            
        }
    }

    useEffect(() => {
        LoadData(dId)
    }, [])
    

    return (
        <Layout
            title={"Edit Compliance"}
            content={"Edit Compliance"}
        >
            <CompleteDocumentLayout
                appTitle={'Edit Compliance Review'}
                app={'compliance'}
                dId={dId}
            >
                
                <div className='compliance-inital-card'>
                    <div className='position-relative'>
                        <div className='position-absolute top-0 start-50 translate-middle'>
                            <p className='compliance-inital-card-header'>Initial Information</p>
                        </div>
                    </div>
                    <div className='compliance-inital-content'>
                        <form onSubmit={(e)=>{createInitialDocumentBtn(e)}}>
                            <div className='row'>
                                <div className='col-lg-2'>   
                                </div>                     
                                <div className='col-lg-4 col-md-6 col-sm-12'>                        
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Client Name</label>
                                        <input required onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.clientName} name="clientName" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Advisor</label>
                                        <input disabled onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.advisor_name} name="advisor" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                        {/* <Select defaultInputValue={options[DocumentInitalData?.advisor]} options={options} onChange={(e)=>{onSelectChange(e)}} className="searchSelect" placeholder="Search the advisor"/> */}
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Business Unit</label>
                                        {/* <Select options={businessUnit} onChange={(e)=>{onSelectChange(e)}} className="searchSelect" placeholder="Business Unit"/> */}
                                        <select disabled className="form-select" name="businessUnit" value={DocumentInitalData?.businessUnit} aria-label="Default select example">
                                            <option value="1">SFP</option>
                                            <option value="2">FS4P</option>
                                            <option value="3">AFP</option>
                                        </select>                                
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Region</label>
                                        <input disabled required onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.region} name="region" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">BAC</label>
                                        <input disabled onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.bac_name} name="bac_name" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                        
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">ID Number</label>
                                        <input disabled required onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.IdNumber} name="IdNumber" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>                     
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Categorisation</label>
                                        <input required onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.categorisation} name="categorisation" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Advisor Email</label>
                                        <input disabled required onChange={(e)=>{onChange(e)}} type="email" value={DocumentInitalData?.advisorEmail} name="advisorEmail" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Supervision</label>
                                        <input disabled required onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.supervisor} name="supervisor" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Policy Number</label>
                                        <input required onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.policy_number} name="policy_number" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Supplier</label>
                                        <input required onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.supplier} name="supplier" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Product</label>
                                        <input required onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.product} name="product" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                </div>
                                <div className='col-lg-2'>   
                                </div>         
                                <div className='col-lg-2'>   
                                </div>         
                                <div className='col-lg-8 col-md-12 col-sm-12'> 
                                <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Type of Business</label>
                                        <select required className="form-select" name="businessType" value={DocumentInitalData?.businessType} onChange={(e)=>{onChange(e)}} aria-label="Default select example">
                                            <option value={0}>Select Business Type</option>
                                            <option value="1">Business Assurance</option>
                                            <option value="2">Comm release</option>
                                            <option value="3">Employee Benefits</option>
                                            <option value="4">Funeral</option>
                                            <option value="5">GAP Cover</option>
                                            <option value="6">Recurring - Investment</option>
                                            <option value="7">Lumpsum - Investment</option>
                                            <option value="8">Investment- Both</option>
                                            <option value="9">Medical Aid</option>
                                            <option value="10">Other</option>
                                            <option value="11">Will</option>
                                            <option value="12">Risk</option>
                                            <option value="13">ST Re-issued/instated</option>
                                            <option value="14">Short Term Commercial</option>
                                            <option value="15">Short Term Personal</option>
                                        </select>
                                    </div>
                                    {
                                        DocumentInitalData?.businessType == 10 ?
                                        <div>
                                            <input required onChange={(e)=>{onChange(e)}} placeholder='Specify the other business type' type="text" value={DocumentInitalData?.otherBusinessType} name="otherBusinessType" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                            <br/>
                                        </div>
                                        : <></>
                                    }
                                </div>         
                                <div className='col-lg-2'>   
                                </div>         
                            </div>
                            <div className="d-grid col-4 mx-auto">
                                <button className="btn btn-primary compliance-inital-card-button-text btn-sfp" type="submit">Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </CompleteDocumentLayout>
        </Layout>
    )
}

export default EditDocument