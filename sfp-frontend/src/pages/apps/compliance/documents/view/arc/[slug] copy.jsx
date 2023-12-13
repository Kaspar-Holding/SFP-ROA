import DashboardLayout from '../../../../../../hocs/DashboardLayout'
import CompleteDocumentLayout from '../../../../../../hocs/Compliance/CompleteDocumentLayout'
import Layout from '../../../../../../hocs/Layout'
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

    const [Answers, setAnswers] = useState({})

    const onAnswerChanged = (e) => {
        setAnswers({
            ...Answers,
            [e.target.name] : e.target.value
        })
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

    const [Categories, setCategories] = useState([])
    const [Questions, setQuestions] = useState([])

    const getCategories = async() => {

        try {
            const response = await axios.get(
                `/api/compliance/questions/category`,
                config
            )
            setCategories(response?.data?.data?.data)
            getQuestions()
            // console.log(response?.data)
            
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

    const getQuestions = async() => {

        try {
            const response = await axios.get(
                `/api/compliance/questions/list`,
                config
            )
            setQuestions(response?.data?.data)
            // console.log(response?.data)
            
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
    

    useEffect(() => {
        getCategories()

        if (dId) {
            LoadData(dId)
        }

    }, [])

    console.log(Answers)
    

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
                            Categories ?
                                Categories.map(
                                    (row, key) => {
                                        return(
                                            <>
                                                <div className='accordion' key={key} id={`${String(row?.title).replaceAll(" ","-").replaceAll("/","-")}`}>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse_${String(row?.title).replaceAll(" ","-").replaceAll("/","-")}`} aria-expanded="true" aria-controls={`collapse${String(row?.title).replaceAll(" ","-").replaceAll("/","-")}`}>
                                                                <strong>
                                                                    {row?.title}
                                                                </strong>
                                                            </button>
                                                        </h2>
                                                        <div id={`collapse_${String(row?.title).replaceAll(" ","-").replaceAll("/","-")}`} className="accordion-collapse collapsed" data-bs-parent={`#${String(row?.title).replaceAll(" ","-").replaceAll("/","-")}`}>
                                                            <div className="accordion-body">
                                                                {
                                                                    Questions.map(
                                                                        (question, question_key) => {
                                                                            return (
                                                                                <>
                                                                                    {
                                                                                        question?.category === row?.title 
                                                                                        ?
                                                                                        <>
                                                                                            <strong className="form-label">{question?.question}</strong>
                                                                                            <select className="form-select" name={question?.id} onChange={(e)=>{onAnswerChanged(e)}} aria-label="Default select example">
                                                                                                <option value="0" selected>Select</option>
                                                                                                <option value={question?.max_score}>Approved</option>
                                                                                                <option value="2">Partial Approved</option>
                                                                                                <option value="2">Not Approved</option>
                                                                                            </select>
                                                                                            <br/>
                                                                                        </>
                                                                                        : 
                                                                                        <>
                                                                                        </>
                                                                                    }
                                                                                </>
                                                                            )
                                                                        }
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                            </>
                                        )
                                    }
                                )
                            :<></>
                        }
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