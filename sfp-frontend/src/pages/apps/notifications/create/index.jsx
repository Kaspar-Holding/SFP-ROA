// import DashboardLayout from '@/hocs/DashboardLayout'
// import DocumentLayout from '@/hocs/Compliance/CreateDocumentLayout'
import Layout from '../../../../hocs/Layout'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Select from 'react-select'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import CreateDocumentLayout from '../../../../hocs/Compliance/CreateDocumentLayout'
import Loader from '../../../../hocs/Loader'
import DashboardLayout from '../../../../hocs/DashboardLayout'
import dynamic from "next/dynamic";

import 'react-quill/dist/quill.snow.css'; // Import Quill styles
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


const CreateDocument = () => {

    const router = useRouter()

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction


            ['clean']
        ],
        clipboard: {
            matchVisual: true, // Enable pasting styles from external sources
        },

    };

    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'list', 'bullet', 'indent',
        'blockquote', 'code-block',
        'align',
        'link', 'image', 'video',
        'font', // Add the 'font' format
    ]

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const [Loaded, setLoaded] = useState(false)
    const [NotificationData, setNotificationData] = useState({
        title: "",
        message: "",
        notificationType: 1,
        userType: 'all',
    })

    const [InitalData, setInitalData] = useState({})

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const onChange = (e) => {
        setNotificationData({
            ...NotificationData,
            [e.target.name]: e.target.value
        })
    }

    const onSelectChange = (e) => {
        setNotificationData({
            ...NotificationData,
            [e.name]: e.id
        })
    }

    const createInitialDocumentBtn = (e) => {
        e.preventDefault()
        createInitialDocument(NotificationData?.id)
    }

    const createInitialDocument = async () => {
        const Body = JSON.stringify(NotificationData)

        if (NotificationData?.businessType == 0) {
            alert("Please select the business type first")
        } else {

            try {
                const response = await axios.post(
                    `/api/notifications/create/`,
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


            } catch (error) {
                // console.log(error?.response?.data?.error)
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

    const NotificationTypes = [
        { name: "notificationType", value: '1', id: '1', label: 'Admin' },
        { name: "notificationType", value: '2', id: '2', label: 'Announcement' },
    ]

    const UserTypes = [
        { name: "userType", value: 'all', id: 'all', label: 'All' },
        { name: "userType", value: '0', id: '0', label: 'Admins' },
        { name: "userType", value: '1', id: '1', label: 'ARCs' },
        { name: "userType", value: '2', id: '2', label: 'GKs' },
        { name: "userType", value: '3', id: '3', label: 'Managers' },
        { name: "userType", value: '5', id: '5', label: 'BACs' },
        { name: "userType", value: '6', id: '6', label: 'Advisors' },
    ]


    const user = useSelector(state => state.auth.user)

    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }


    if (user?.userType === 6) {
        router.push('/')
    }




    return (
        <Layout
            title={ "Create Notification" }
            content={ "Create Notification" }
        >
            <DashboardLayout
                appTitle={ 'Create new Notification' }
                app={ 'notifications' }
                dId={ undefined }
            >

                <div className='col-lg-9 compliance-inital-card'>
                    <div className='position-relative'>
                        <div className='position-absolute top-0 start-50 translate-middle'>
                            <p className='compliance-inital-card-header'>Notification Information</p>
                        </div>
                    </div>
                    <div className='compliance-inital-content'>
                        {
                            Loaded ?
                                user?.email?.includes('sfp') || user?.email?.includes('succession') ? <Loader color='sfp-color' />
                                    : user?.email?.includes('fs4p') ? <Loader color='fs4p-color' />
                                        : user?.email?.includes('sanlam') ? <Loader color='sfp-sanlam' />
                                            : <Loader color='sfp-color' />
                                :
                                <form onSubmit={ (e) => { createInitialDocumentBtn(e) } }>
                                    <div className='row'>
                                        <div className='col-lg-2'>
                                        </div>
                                        <div className='col-lg-8 col-md-6 col-sm-12'>
                                            <div className="mb-3">
                                                <label for="basic-url" className="form-label compliance-inital-card-text">Notification Title</label>
                                                <input required onChange={ (e) => { onChange(e) } } type="text" value={ NotificationData?.title } name="title" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                            </div>
                                            <div className="mb-3">
                                                <label for="basic-url" className="form-label compliance-inital-card-text">Type</label>
                                                {
                                                    <Select options={ NotificationTypes } onChange={ (e) => { onSelectChange(e) } } className="searchSelect" placeholder="Search the Type" />
                                                }
                                            </div>
                                            <div className="mb-3">
                                                <label for="basic-url" className="form-label compliance-inital-card-text">Users</label>
                                                {
                                                    <Select options={ UserTypes } onChange={ (e) => { onSelectChange(e) } } className="searchSelect" placeholder="Search the User Type" />
                                                }
                                            </div>

                                            <div className="mb-3">
                                                <label for="basic-url" className="form-label compliance-inital-card-text">Message</label>
                                                <ReactQuill
                                                    theme="snow" // Specify the theme ('snow' or 'bubble')
                                                    value={ NotificationData?.message }
                                                    onChange={ (value) => { setNotificationData({ ...NotificationData, ['message']: value }) } }
                                                    modules={ modules }
                                                    formats={ formats }
                                                    style={ {
                                                        height: '300px', // Set the desired height here
                                                    } }
                                                    placeholder={ `Notification Content.` }
                                                />
                                                <br />
                                                <br />

                                            </div>
                                        </div>
                                        <div className='col-lg-2'>
                                        </div>
                                        <div className='col-lg-2'>
                                        </div>

                                    </div>
                                    <br />
                                    <div className="d-grid col-4 mx-auto">
                                        <button className="btn btn-primary compliance-inital-card-button-text btn-sfp" type="submit">Send</button>
                                    </div>
                                </form>
                        }
                    </div>
                </div>
            </DashboardLayout>
        </Layout>
    )
}

export default CreateDocument