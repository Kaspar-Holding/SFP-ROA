import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'moment'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import { logout } from '../../../actions/auth'
const CompleteDocumentSidebar = ({appTitle}) => {
    
    const router = useRouter()

    const dId = router?.query?.slug || router?.query?.dId

    const user = useSelector(state=>state.auth.user)

    const dispatch = useDispatch()  

    const logOutBtn = (e) => {
        e.preventDefault()
        if (dispatch && dispatch != null && dispatch != undefined) {
            dispatch(
                logout()
            )
        }
    }

    const [CurrentDate, setCurrentDate] = useState(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A') )

    const [DocumentInitalData, setDocumentInitalData] = useState({})

    const LoadData = async (documentId) => {
        
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        }

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

        if (dId) {
            LoadData(dId)
        }

        const interval = setInterval(() => {
                setCurrentDate(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A') )
            }, 6000
        )
		return () => {
			clearInterval(interval);
		}
    }, [])
    
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 py-5" style={{height: '85vh', backgroundColor: 'white'}}>
                <div className='text-center'>    
                    <nav className='text-center' aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link href="/">Apps</Link></li>
                            <li className="breadcrumb-item"><Link href="/apps/compliance">Compliance</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Review Document</li>
                        </ol>
                    </nav> 
                
                    <p className='sidebar-welcome'>
                       {appTitle}
                    </p>
                    <p className='sidebar-user'>
                        {user ? `${user?.first_name} ${user?.last_name}` : ""}
                    </p>
                    <p className='sidebar-date'>
                        {CurrentDate}
                    </p>
                </div>
                <hr/>
                {
                    dId ?
                    <div >
                        <div className="row">
                            <div className='col-lg-5'>
                                <h6 className='text'>
                                    Client Name
                                </h6>
                            </div>
                            <div className='col-lg-6'>
                                <span className=''>
                                    {DocumentInitalData?.clientName}
                                </span>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <h6 className='text'>
                                    Policy No#
                                </h6>
                            </div>
                            <div className='col-lg-6'>
                                <span className=''>
                                    {DocumentInitalData?.policy_number}
                                </span>
                            </div>
                        </div>
                        <p className='value mx-3 my-0 py-0'>
                            <div className='row'>
                                <div className='col-lg-5 my-0 py-0'>
                                    <h6 className='text'>
                                        Product
                                    </h6>
                                </div>
                                <div className='col-lg-7 my-0 py-0'>
                                    <span className='value'>
                                        {DocumentInitalData?.product}
                                    </span>
                                </div>
                                <div className='col-lg-5 my-0 py-0'>
                                    <h6 className='text'>
                                        BAC
                                    </h6>
                                </div>
                                <div className='col-lg-7 my-0 py-0'>
                                    <span className='value'>
                                        {DocumentInitalData?.bac_name}
                                    </span>
                                </div>
                                <div className='col-lg-5 my-0 py-0'>
                                    <h6 className='text'>
                                        ID Number
                                    </h6>
                                </div>
                                <div className='col-lg-7 my-0 py-0'>
                                    <span className='value'>
                                        {DocumentInitalData?.IdNumber}
                                    </span>
                                </div>
                                <div className='col-lg-5'>
                                    <h6 className='text'>
                                        Region
                                    </h6>
                                </div>
                                <div className='col-lg-7'>
                                    <span className='value'>
                                        {DocumentInitalData?.region}
                                    </span>
                                </div>
                            </div>
                        </p>
                        
                        <div className="row">
                            <div className='col-lg-5'>
                                <h6 className='text'>
                                    Advisor
                                </h6>
                            </div>
                            <div className='col-lg-6'>
                                <span className=''>
                                    {DocumentInitalData?.advisor_name}
                                </span>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className='col-lg-5'>
                                <h6 className='text'>
                                    Supplier
                                </h6>
                            </div>
                            <div className='col-lg-6'>
                                <span className=''>
                                    {DocumentInitalData?.supplier}
                                </span>
                            </div>
                        </div>
                        <h6 className='text'>
                            Business Type
                        </h6>
                        <span className='value mx-3'>
                            {
                                DocumentInitalData?.businessType == 1 ? "Business Assurance" :
                                DocumentInitalData?.businessType == 2 ? "Comm release" :
                                DocumentInitalData?.businessType == 3 ? "Employee Benefits" :
                                DocumentInitalData?.businessType == 4 ? "Funeral" :
                                DocumentInitalData?.businessType == 5 ? "GAP Cover" :
                                DocumentInitalData?.businessType == 6 ? "Recurring - Investment" :
                                DocumentInitalData?.businessType == 7 ? "Lumpsum - Investment" :
                                DocumentInitalData?.businessType == 8 ? "Investment- Both" :
                                DocumentInitalData?.businessType == 9 ? "Medical Aid" :
                                DocumentInitalData?.businessType == 10 ? "Other (Text box to specify)" :
                                DocumentInitalData?.businessType == 11 ? "Will" :
                                DocumentInitalData?.businessType == 12 ? "Risk" :
                                DocumentInitalData?.businessType == 13 ? "ST Re-issued/instated" :
                                DocumentInitalData?.businessType == 14 ? "Short Term Commercial" :
                                DocumentInitalData?.businessType == 15 ? "Short Term Personal" : "" 
                            }
                        </span>
                        <br/>
                        
                        
                    </div>
                    :
                    <>
                        
                    </>
                }
                <hr/>
            </div>
            <div className='position-relative'>
                <div className='position-absolute bottom-0 start-0 w-100'>
                    <div className='d-flex align-items-end flex-column px-auto'>
                        <div className="container sidebar-footer">
                            <div className="d-grid gap-2">
                                <button onClick={(e)=>{logOutBtn(e)}} className="btn btn-primary btn-sfp" type="button">
                                    <i className='bi pe-none me-2 fa-solid fa-arrow-right-from-bracket'></i>
                                    Logout
                                </button>
                            </div>
                            <div className="d-flex justify-content-center">
                                © SFP by KCS 2023
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
        
    )
}

export default CompleteDocumentSidebar