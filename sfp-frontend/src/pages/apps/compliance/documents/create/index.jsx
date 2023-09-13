import DashboardLayout from '@/hocs/DashboardLayout'
import DocumentLayout from '@/hocs/Compliance/CreateDocumentLayout'
import Layout from '@/hocs/Layout'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Select from 'react-select'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import CreateDocumentLayout from '@/hocs/Compliance/CreateDocumentLayout'


const CreateDocument = () => {
    
    const router = useRouter()

    const [DocumentInitalData, setDocumentInitalData] = useState({
        clientName: "",
        advisor: "",
        businessUnit: "",
        otherBusinessType: "",
        region: "",
        bac: "",
        bac_name: "",
        IdNumber: "",
        categorisation: "",
        advisorEmail: "",
        supervisor: "",
        supervisor_name: "",
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

    const onSelectChange = async(e) => {
        setDocumentInitalData({
            ...DocumentInitalData,
            [e.name] : e.id
        })
        await LoadAdvisorDetail(DocumentInitalData, e.id)
    }

    const createInitialDocumentBtn = (e) => {
        e.preventDefault()
        createInitialDocument(DocumentInitalData?.id)
    }
    
    const createInitialDocument = async() => {
        const Body = JSON.stringify(DocumentInitalData)

        if (DocumentInitalData?.businessType == 0) {
            alert("Please select the business type first")
        } else {

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

    const [options, setoptions] = useState([
        { name: "advisor", id:"1", value: 'armughan', label: 'Armughan' },
        { name: "advisor", id:"2", value: 'ali', label: 'Ali' },
        { name: "advisor", id:"3", value: 'areeb', label: 'Areeb' }
    ])

    const [businessUnit, setBuisnessUnit] = useState([
        { value: 'sfp', label: 'Succession Finance Planning', id:"1" ,name: "businessUnit" },
        { value: 'fs4p', label: 'Financial Solutions 4 Professionals', id:"2" ,name: "businessUnit" },
        { value: 'afp', label: 'Affiliated Finance Planning', id:"3" ,name: "businessUnit" }
    ])

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

    const LoadAdvisorDetail = async (inputData, uId) => {

        const Body = JSON.stringify({data: inputData, advisorId: uId})

        try {
            const response = await axios.post('/api/account/agents/info', Body, config)
            
            setDocumentInitalData(response?.data?.data?.data)
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
    
    useEffect(() => {
        LoadAdvisors()
    }, [])
    


    return (
        <Layout
            title={"Create Compliance"}
            content={"Create Compliance"}
        >
            <CreateDocumentLayout
                appTitle={'Create Compliance Document'}
                app={'compliance'}
                dId={undefined}
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
                                        {/* <input onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.advisor} name="advisor" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" /> */}
                                        <Select options={Advisors} onChange={(e)=>{onSelectChange(e)}} className="searchSelect" placeholder="Search the advisor"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Business Unit</label>
                                        {/* <Select options={businessUnit} onChange={(e)=>{onSelectChange(e)}} className="searchSelect" placeholder="Business Unit"/> */}
                                        {/* <select className="form-select" name="businessUnit" value={DocumentInitalData?.businessUnit} aria-label="Default select example">
                                            <option value="1">SFP</option>
                                            <option value="2">FS4P</option>
                                            <option value="3">AFP</option>
                                        </select>                                 */}
                                        <br/>
                                        <input type="text" value={
                                                DocumentInitalData?.advisorEmail.includes('sfp') || DocumentInitalData?.advisorEmail.includes('succession') ?
                                                "Succession Finance Planning" :
                                                DocumentInitalData?.advisorEmail.includes('fs4p') ?
                                                "Financial Solutions 4 Professionals" :
                                                DocumentInitalData?.advisorEmail.includes('kaspar') ?
                                                "Succession Finance Planning" :
                                                DocumentInitalData?.advisorEmail.includes('sanlam') ?
                                                "Aligned Financial Planning" : "Select the advisor first"
                                            }
                                            name="region" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" 
                                        />                                       
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Region</label>
                                        <input disabled type="text" value={DocumentInitalData?.region} name="region" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">BAC</label>
                                        <input disabled type="text" value={DocumentInitalData?.bac_name} name="bac_name" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                        {/* <select className="form-select" name="BAC" value={DocumentInitalData?.bac} aria-label="Default select example">
                                            <option value={0}>Select Business Type</option>
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
                                        </select> */}
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">ID Number</label>
                                        <input disabled onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.IdNumber} name="IdNumber" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>                     
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Categorisation</label>
                                        <input required onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.categorisation} name="categorisation" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Advisor Email</label>
                                        <input disabled onChange={(e)=>{onChange(e)}} type="email" value={DocumentInitalData?.advisorEmail} name="advisorEmail" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label compliance-inital-card-text">Supervision</label>
                                        <input disabled onChange={(e)=>{onChange(e)}} type="text" value={DocumentInitalData?.supervisor_name} name="supervisor_name" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
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
            </CreateDocumentLayout>
        </Layout>
    )
}

export default CreateDocument