import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'moment'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import { logout } from '../../actions/auth'
import Swal from 'sweetalert2'
import { API_URL } from '../../config'
const ROASidebar = ({ appTitle }) => {

    const router = useRouter()

    const fId = router?.query?.slug || router?.query?.fId

    const user = useSelector(state => state.auth.user)

    const dispatch = useDispatch()

    const downloadDisclosureForm = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const Body = JSON.stringify({
            fId: fId
        })

        try {
            const response = await axios.post(
                `/api/roa/print`,
                Body,
                config
            )

            const url = `${API_URL}/${response?.data?.data?.file}`
            window.open(url, '_blank').focus()


        } catch (error) {

        }
    }

    const downloadClient = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const Body = JSON.stringify({
            "fId": fId,
            "dra_status": false,
            "advisorId": FormData?.advisor_id,
        })

        try {
            const response = await axios.post(
                `/api/roa/print/client`,
                Body,
                config
            )

            router.push({ pathname: '/apps/pdf', query: { pdf: response?.data?.data?.file } })
            // const url = `${API_URL}/${response?.data?.data?.file}`
            // window.open(url, '_blank').focus()


        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Error",
                html: `${error?.response?.data?.error?.message}`,
                showConfirmButton: !1,
                timer: 10000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        }

    }

    const updateFormStatus = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const Body = JSON.stringify(fId)

        try {
            const response = await axios.post(
                `/api/roa/status`,
                Body,
                config
            )

            Swal.fire({
                position: "bottom-end",
                type: "success",
                title: "Update",
                html: `${response?.data?.success}`,
                showConfirmButton: !1,
                timer: 10000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
            LoadData(fId)
            if (router.pathname != "/apps/roa/documents/edit") {
                router.push({ pathname: '/apps/roa/documents/edit', query: { fId: fId } })
            } else {
                router.push({ pathname: '/apps/roa/documents/edit/record', query: { fId: fId } })
            }


        } catch (error) {

        }

    }

    const logOutBtn = (e) => {
        e.preventDefault()
        if (dispatch && dispatch != null && dispatch != undefined) {
            dispatch(
                logout()
            )
        }
    }

    const [CurrentDate, setCurrentDate] = useState(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A'))

    const [FormData, setFormData] = useState({})

    const LoadData = async (documentId) => {

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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

            setFormData(response?.data?.data?.data)

        } catch (error) {

        }
    }


    useEffect(() => {

        if (fId) {
            LoadData(fId)
        }

        const interval = setInterval(() => {
            setCurrentDate(Moment(new Date()).format('DD MMMM, YYYY | hh:mm A'))
        }, 6000
        )
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 py-5" style={ { height: '85vh', backgroundColor: 'white' } }>
                <div className='text-center'>
                    <nav className='text-center' aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link href="/">Apps</Link></li>
                            <li className="breadcrumb-item"><Link href="/apps/roa">ROA</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Edit Form</li>
                        </ol>
                    </nav>

                    <p className='sidebar-welcome'>
                        { appTitle }
                    </p>
                    <p className='sidebar-user'>
                        { user?.full_name }
                    </p>
                    <p className='sidebar-date'>
                        { CurrentDate }
                    </p>
                </div>
                <hr />
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
                                        { FormData?.client_name }
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
                                        { FormData?.client_id_number }
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
                                        { FormData?.client_contact }
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
                                        { FormData?.client_email }
                                    </span>
                                </div>
                            </div>

                            <br />
                            <div className="container sidebar-footer">
                                <div className="py-1 d-grid gap-2">
                                    <button
                                        type="button"
                                        onClick={
                                            (e) => {
                                                router.pathname === `/apps/roa/documents/edit` ?
                                                    router.push({ pathname: "/apps/roa/documents/edit/record", query: { fId: fId } })
                                                    :
                                                    router.push({ pathname: "/apps/roa/documents/edit", query: { fId: fId } })
                                            }
                                        }
                                        className={
                                            router.pathname === `/apps/roa/documents/edit` ?
                                                user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-sm btn-primary w-100 btn-sfp w-100'
                                                    : user?.email?.includes('fs4p') ? 'btn btn-sm btn-primary w-100 btn-fs4p w-100'
                                                        : user?.email?.includes('sanlam') ? 'btn btn-sm btn-primary w-100 btn-sanlam w-100' :
                                                            "btn btn-sm btn-outline-primary btn-outline-sfp w-100"
                                                :
                                                "btn btn-sm btn-outline-primary btn-outline-sfp w-100"
                                        }>
                                        {
                                            router.pathname === `/apps/roa/documents/edit` ?
                                                "Record of Advice Form"
                                                :
                                                "Disclosures Document"
                                        }
                                    </button>
                                </div>
                            </div>
                            {
                                FormData?.status == 1 ?
                                    <div className='row'>
                                        <div className="py-1 container sidebar-footer">
                                            <div className="d-grid gap-2">
                                                <button onClick={ (e) => { updateFormStatus(e) } } className="btn btn-primary" type="button">
                                                    <i className='bi pe-none me-2 fa-solid fa-clipboard'></i>
                                                    Mark Incomplete
                                                </button>
                                            </div>
                                        </div>
                                        <div className="py-1 container sidebar-footer">
                                            <div className="d-grid gap-2">
                                                <button onClick={ (e) => { downloadDisclosureForm(e) } } className={
                                                    user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-primary btn-sfp'
                                                        : user?.email?.includes('fs4p') ? 'btn btn-primary btn-fs4p'
                                                            : user?.email?.includes('sanlam') ? 'btn btn-primary btn-sanlam'
                                                                : 'btn btn-primary btn-sfp'
                                                } type="button">
                                                    <i className='bi pe-none me-2 fa-solid fa-clipboard'></i>
                                                    Disclosure Document PDF
                                                </button>
                                            </div>
                                        </div>
                                        <div className="py-1 container sidebar-footer">
                                            <div className="d-grid gap-2">
                                                <button onClick={ (e) => { downloadClient(e) } } className={
                                                    user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-primary btn-sfp'
                                                        : user?.email?.includes('fs4p') ? 'btn btn-primary btn-fs4p'
                                                            : user?.email?.includes('sanlam') ? 'btn btn-primary btn-sanlam'
                                                                : 'btn btn-primary btn-sfp'
                                                } type="button">
                                                    <i className='bi pe-none me-2 fa-solid fa-clipboard'></i>
                                                    Print for Client
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="container sidebar-footer">
                                        <div className="d-grid gap-2">
                                            <button onClick={ (e) => { updateFormStatus(e) } } className="btn btn-primary" type="button">
                                                <i className='bi pe-none me-2 fa-solid fa-clipboard'></i>
                                                Mark Complete
                                            </button>
                                        </div>
                                    </div>
                            }


                        </div>
                        :
                        <>

                        </>
                }
                <hr />
            </div>
            <div className='position-relative'>
                <div className='position-absolute bottom-0 start-0 w-100'>
                    <div className='d-flex align-items-end flex-column px-auto'>
                        <div className="container sidebar-footer">
                            <div className="d-grid gap-2">
                                <button onClick={ (e) => { logOutBtn(e) } } className={
                                    user?.email?.includes('sfp') || user?.email?.includes('succession') ? 'btn btn-primary btn-sfp'
                                        : user?.email?.includes('fs4p') ? 'btn btn-primary btn-fs4p'
                                            : user?.email?.includes('sanlam') ? 'btn btn-primary btn-sanlam'
                                                : 'btn btn-primary btn-sfp'
                                } type="button">
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