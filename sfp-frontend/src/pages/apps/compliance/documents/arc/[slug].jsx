import DashboardLayout from '../../../../../hocs/DashboardLayout'
import CompleteDocumentLayout from '../../../../../hocs/Compliance/CompleteDocumentLayout'
import Layout from '../../../../../hocs/Layout'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const CompleteDocument = () => {
    
    const router = useRouter()
        
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    }

    const dId = router?.query?.slug
    
    const user = useSelector(state=>state.auth.user)

    const [Answers, setAnswers] = useState([
        {
            user: user?.id,
            document: dId,
            question : "Appropriate FNA",
            score : 15,
            answer: 0
        },
        {
            user: user?.id,
            document: dId,
            question : "FNA outcome",
            score : 15,
            answer: 0
        },
        {
            user: user?.id,
            document: dId,
            question : "Product Suitability",
            score : 15,
            answer: 0
        },
        {
            user: user?.id,
            document: dId,
            question : "Alternative Solutions",
            score : 15,
            answer: 0
        },
        {
            user: user?.id,
            document: dId,
            question : "Material Aspects",
            score : 15,
            answer: 0
        },
        {
            user: user?.id,
            document: dId,
            question : "Special terms & loadings",
            score : 15,
            answer: 0
        },
        {
            user: user?.id,
            document: dId,
            question : "Replacement comparison",
            score : 15,
            answer: 0
        },
    ])

    const AddAnswer = (e, questionTitle, score) => {
        const current = [...Answers]
        current.push({
            user: user?.id,
            document: dId,
            question : questionTitle,
            answer: 0,
            score: score
        })
        setAnswers(current)
    }
    const RemoveAnswer = (e) => {
        const current = [...Answers]
        current.pop()
        setAnswers(current)
    }
    const on_Answer_Change = (e, i) => {
        let newAnswers = [...Answers]
        newAnswers[i][e.target.name] = e.target.value
        setAnswers(newAnswers)
    }
    
    const [DocumentInitalData, setDocumentInitalData] = useState({})

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

    // const [Categories, setCategories] = useState([])
    // const [Questions, setQuestions] = useState([])

    // const getCategories = async() => {

    //     try {
    //         const response = await axios.get(
    //             `/api/compliance/questions/category`,
    //             config
    //         )
    //         setCategories(response?.data?.data?.data)
    //         getQuestions()
    //         // console.log(response?.data)
            
    //     } catch (error) {
    //         console.log(error)
    //         Swal.fire({
    //             position: "bottom-end",
    //             type: "success",
    //             title: "Error",
    //             html: `An error has occured.`,
    //             showConfirmButton: !1,
    //             timer: 5000,
    //             confirmButtonClass: "btn btn-primary",
    //             buttonsStyling: !1,
    //         })
    //     }
    // }

    // const getQuestions = async() => {

    //     try {
    //         const response = await axios.get(
    //             `/api/compliance/questions/list`,
    //             config
    //         )
    //         setQuestions(response?.data?.data)
    //         // console.log(response?.data)
            
    //     } catch (error) {
    //         console.log(error)
    //         Swal.fire({
    //             position: "bottom-end",
    //             type: "success",
    //             title: "Error",
    //             html: `An error has occured.`,
    //             showConfirmButton: !1,
    //             timer: 5000,
    //             confirmButtonClass: "btn btn-primary",
    //             buttonsStyling: !1,
    //         })
    //     }
    // }
    

    useEffect(() => {
        // getCategories()

        if (dId) {
            LoadData(dId)
        }

    }, [])
    

    return (
        <Layout
            title={"ARC Compliance"}
            content={"ARC Compliance"}
        >
            <CompleteDocumentLayout
                appTitle={'ARC Compliance Document'}
                app={'compliance'}
                dId={router?.query?.slug}
            >
                <div className='gatekeeping-inital-card'>
                    <div className='container'>
                        <h6 className='gatekeeping-header'>ARC Questions</h6>
                        <hr/>
                        <br/>
                        {
                            Answers.map(
                                (row, key) => {
                                    return (
                                        <>
                                            <div key={key}>
                                                <label className="form-label">{row?.question}</label>
                                                <select className="form-select" name={row?.answer} onChange={(e)=>{on_Answer_Change(e, key)}} aria-label="Default select example">
                                                    <option value="0" selected>Select</option>
                                                    <option value={row?.score}>Approved</option>
                                                    <option value="1">Partial Approved</option>
                                                    <option value="2">Not Approved</option>
                                                </select>
                                                <br/>
                                            </div>
                                        </>

                                    )
                                }
                            )
                        }
                        <div className='row row-cols-4'>
                            <div className='col my-2'>
                                <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Disclosure", 5)}}>Add Disclosure</button>
                            </div>
                            <div className='col my-2'>
                                <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Personal Details", 5)}}>Add Personal Details</button>
                            </div>
                            <div className='col my-2'>
                                <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"General", 5)}}>Add General</button>
                            </div>
                            <div className='col my-2'>
                                <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Risk Classes / Client needs (Factual Questions)", 5)}}>Add Risk Classes</button>
                            </div>
                            <div className='col my-2'>
                                <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Financial Needs Analysis Summary / Cover Recommendations", 5)}}>Add FNA</button>
                            </div>
                            <div className='col my-2'>
                                <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Recommended Products (Santam/A&G/M&F)", 5)}}>Add Recommended Products</button>
                            </div>
                            <div className='col my-2'>
                                <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Replacements", 5)}}>Add Replacements</button>
                            </div>
                            <div className='col my-2'>
                                <button className='btn btn-sfp btn-primary w-100' onClick={(e)=>{AddAnswer(e,"Client Consent", 5)}}>Add Client Consent</button>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className=''>
                        <div className="d-grid col-4 mx-auto">
                            <button className="btn btn-primary compliance-inital-card-button-text btn-sfp" onClick={(e)=>{router.push(`/apps/compliance/documents/summary/${dId}`)}} type="submit">
                                Continue
                                <i className='bi pe-none mx-2 me-2 fa-solid fa-arrow-right'/>
                            </button>
                        </div>
                    </div>


                </div>

            </CompleteDocumentLayout>
        </Layout>
    )
}

export default CompleteDocument