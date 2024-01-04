import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'moment'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import { logout } from '../../actions/auth'
const ROASidebar = ({appTitle}) => {
    
    const router = useRouter()

    const fId = router?.query?.slug || router?.query?.fId

    const user = useSelector(state=>state.auth.user)

    const dispatch = useDispatch()  

    const downloadDisclosureForm = (e) => {
        e.preventDefault()
        
    }

    const downloadClient = (e) => {
        e.preventDefault()
        
    }

    const logOutBtn = (e) => {
        e.preventDefault()
        if (dispatch && dispatch != null && dispatch != undefined) {
            dispatch(
                logout()
            )
        }
    }

    const [CurrentDate, setCurrentDate] = useState(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A') )

    const [FormData, setFormData] = useState({})

    const LoadData = async (documentId) => {
        
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        }

        const Body = JSON.stringify({
            fId: documentId
        })

        try {
            const response = await axios.post(
                `/api/roa/form`,
                Body,
                config
            )

            setFormData(response?.data?.data)


        } catch (error) {
            
        }
    }

    useEffect(() => {

        if (fId) {
            LoadData(fId)
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
                            <li className="breadcrumb-item"><Link href="/apps/roa">ROA</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Edit Form</li>
                        </ol>
                    </nav> 
                
                    <p className='sidebar-welcome'>
                       {appTitle}
                    </p>
                    <p className='sidebar-user'>
                        {user ? `${user?.first_name} ${user?.last_name && user?.last_name != 'nan' ? user?.last_name : ""}` : ""}
                    </p>
                    <p className='sidebar-date'>
                        {CurrentDate}
                    </p>
                </div>
                <hr/>
                {
                    fId ?
                    <div >
                        <div className="row">
                            <div className='col-lg-5'>
                                <h6 className='text'>
                                    Client Name
                                </h6>
                            </div>
                            <div className='col-lg-6'>
                                <span className=''>
                                    {FormData?.client_name}
                                </span>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <h6 className='text'>
                                    Client ID
                                </h6>
                            </div>
                            <div className='col-lg-6'>
                                <span className=''>
                                    {FormData?.client_id_number}
                                </span>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <h6 className='text'>
                                    Client Phone #
                                </h6>
                            </div>
                            <div className='col-lg-6'>
                                <span className=''>
                                    {FormData?.client_contact}
                                </span>
                            </div>
                        </div>
                        
                        <div className='row'>
                            <div className='col-lg-5'>
                                <h6 className='text'>
                                    Client Email
                                </h6>
                            </div>
                            <div className='col-lg-6'>
                                <span className=''>
                                    {FormData?.client_email}
                                </span>
                            </div>
                        </div>
                        
                        <br/>
                        <div className="container sidebar-footer">
                            <div className="d-grid gap-2">
                                <button onClick={(e)=>{downloadDisclosureForm(e)}} className="btn btn-primary btn-sfp" type="button">
                                    <i className='bi pe-none me-2 fa-solid fa-clipboard'></i>
                                    Disclosure Document PDF
                                </button>
                            </div>
                        </div>
                        
                        <br/>
                        <div className="container sidebar-footer">
                            <div className="d-grid gap-2">
                                <button onClick={(e)=>{downloadClient(e)}} className="btn btn-primary btn-sfp" type="button">
                                    <i className='bi pe-none me-2 fa-solid fa-clipboard'></i>
                                    Print for Client
                                </button>
                            </div>
                        </div>
                        
                        
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

export default ROASidebar