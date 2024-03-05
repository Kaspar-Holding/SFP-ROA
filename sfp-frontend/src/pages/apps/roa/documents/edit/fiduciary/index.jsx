import React, { useEffect, useState, useRef } from 'react'
import Swal from 'sweetalert2'

import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Layout from '../../../../../../hocs/Layout'
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faCheck } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../../../../hocs/Loader'
import EditROALayout from '../../../../../../hocs/EditROALayout'
import { Editor } from '@tinymce/tinymce-react'
import dynamic from "next/dynamic";
import Alert from '../../../../../../components/Alert'


const Fiduciary = () => {


    const [SuccessMessage, setSuccessMessage] = useState("")
    const [SuccessMessageVisibility, setSuccessMessageVisibility] = useState(false)


    const router = useRouter()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)
    const formId = router?.query?.fId
    const [Loaded, setLoaded] = useState(false)



    const onChange = e => {
        FormStatus == 0 ? setFormData({ ...FormData, [e.target.name]: e.target.value }) : Swal.fire({ position: "bottom-end", type: "error", title: "Error", html: `Form is marked completed, can't edit now unless it is marked incomplete`, showConfirmButton: !1, timer: 3000, confirmButtonClass: "btn btn-primary", buttonsStyling: !1, })
    }
    // API Config
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }


    // 

    const [FormData, setFormData] = useState({

        advisorId: user?.id,
        formId: formId,
        fiduciaryWillInPlace: 2,
        fiduciaryWillUpdationDate: "",
        fiduciaryWillKeepingPlace: "",
        fiduciaryExecutorDetails: "",
        fiduciaryClientInstructions: "",
        fiduciaryConsequencesExplained: "",
    })



    const onSubmit = e => {
        e.preventDefault()

    }

    const compulsoryAEditorRef = useRef(null);
    const FICAEditorRef = useRef(null);
    const [FormStatus, setFormStatus] = useState(0)

    const LoadData = async (formId) => {

        setLoaded(true)
        const Body = JSON.stringify({
            fId: formId
        })
        try {
            const response = await axios.post(
                `/api/roa/form/fiduciary`,
                Body,
                config
            )
            setFormData(response?.data?.data?.fiduciary)
            setFormStatus(response?.data?.data?.form_status)

        } catch (error) {

        }
        setLoaded(false)
    }
    const updateFiduciaryForm = async () => {

        setLoaded(true)
        const Body = JSON.stringify({
            fId: formId,
            fiduciary: FormData
        })
        try {
            await axios.post(
                `/api/roa/form/fiduciary/update`,
                Body,
                config
            ).then((response) => {

                // Swal.fire({
                //     type: 'success',
                //     title: 'Success',
                //     text: 'Assurance Form Updated Successfully.',
                //     position: 'bottom-end',
                //     showConfirmButton: false,
                //     backdrop: "None",
                //     color: "#fff",
                //     background: "#00788B",
                //     timer: 5000
                // })
                setSuccessMessage("Fiduciary form is successfully updated")
                setSuccessMessageVisibility(true)
                setTimeout(() => {
                    setSuccessMessageVisibility(false)
                }, 5000)
            })

        } catch (error) {

        }
        setLoaded(false)
    }


    const onFieldBlur = (e) => {
        FormStatus == 0 ? updateFiduciaryForm() : Swal.fire({ position: "bottom-end", type: "error", title: "Error", html: `Form is marked completed, can't edit now unless it is marked incomplete`, showConfirmButton: !1, timer: 3000, confirmButtonClass: "btn btn-primary", buttonsStyling: !1, })

    }

    useEffect(() => {
        LoadData(formId)
    }, [])

    return (
        <div>
            <Layout
                title={ "Edit ROA Document" }
                content={ "Edit ROA Document" }
            >
                <EditROALayout
                    appTitle={ 'Edit ROA Document' }
                    pageTitle={ 'Edit ROA Document' }
                    appName={ 'ROA' }
                    app={ 'roa' }
                >
                    <div className='roa-edit-card'>
                        <div className='inital-card-header text-center'>
                            <b>Fiduciary</b>
                        </div>
                        <br />
                        {
                            SuccessMessageVisibility ?
                                <Alert SuccessMessage={ SuccessMessage } />
                                :
                                <></>
                        }
                        <form className='inital-card-header mx-5' onSubmit={ e => onSubmit(e) }>

                            <div style={ { fontSize: '14px' } } align="left">
                                <div className="row">
                                    <div className="col-12" style={ { paddingBottom: "0.5%" } }>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label htmlFor="address" className="col-form-label roa-label">Is there a valid Will in place?  </label>
                                            </div>
                                            <div className="col-1">
                                                <label className="radio-inline">
                                                    <input onMouseLeave={ (e) => { onFieldBlur(e) } } type="radio" className="form-check-input roa-font" name="fiduciaryWillInPlace" checked={ FormData['fiduciaryWillInPlace'] == 1 ? true : false } onChange={ e => onChange(e) } value="1" />Yes
                                                </label>
                                            </div>
                                            <div className="col-1">
                                                <label className="radio-inline">
                                                    <input onMouseLeave={ (e) => { onFieldBlur(e) } } type="radio" className="form-check-input roa-font" name="fiduciaryWillInPlace" checked={ FormData['fiduciaryWillInPlace'] == 0 ? true : false } onChange={ e => onChange(e) } value="0" />No
                                                </label>
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label htmlFor="fiduciaryWillUpdationDate" className="col-form-label roa-label">Date last updated? </label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" type="date" id="fiduciaryWillUpdationDate" onChange={ (e) => { onChange(e) } } value={ FormData['fiduciaryWillUpdationDate'] } name="fiduciaryWillUpdationDate" className="form-control" placeholder="Click to enter text" aria-describedby="" />
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label htmlFor="fiduciaryWillKeepingPlace" className="col-form-label roa-label">Where is the will kept? </label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="fiduciaryWillKeepingPlace" onChange={ (e) => { onChange(e) } } value={ FormData['fiduciaryWillKeepingPlace'] } name="fiduciaryWillKeepingPlace" className="form-control" placeholder="Click to enter text" aria-describedby="" />
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label htmlFor="fiduciaryExecutorDetails" className="col-form-label roa-label">Details of Executor?</label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="fiduciaryExecutorDetails" onChange={ (e) => { onChange(e) } } value={ FormData['fiduciaryExecutorDetails'] } name="fiduciaryExecutorDetails" className="form-control" placeholder="Click to enter text" aria-describedby="" />
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label htmlFor="fiduciaryClientInstructions" className="col-form-label roa-label">Client instruction in terms of drafting a Will? </label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="fiduciaryClientInstructions" onChange={ (e) => { onChange(e) } } value={ FormData['fiduciaryClientInstructions'] } name="fiduciaryClientInstructions" className="form-control" placeholder="Click to enter text" aria-describedby="" />
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="row g-3 align-items-center">
                                            <div className="col-4">
                                                <label htmlFor="fiduciaryConsequencesExplained" className="col-form-label roa-label">Has the consequences of not having a will being explained and discussed? </label>
                                            </div>
                                            <div className="col-6">
                                                <input onBlur={ (e) => { onFieldBlur(e) } } spellCheck="true" id="fiduciaryConsequencesExplained" onChange={ (e) => { onChange(e) } } value={ FormData['fiduciaryConsequencesExplained'] } name="fiduciaryConsequencesExplained" className="form-control" placeholder="Click to enter text" aria-describedby="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </EditROALayout >
            </Layout >
        </div >
    )
}

export default Fiduciary