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


const Questions = () => {
    
    const user = useSelector(state=>state.auth.user)

    const router = useRouter()

    const [DocumentInitalData, setDocumentInitalData] = useState({
        clientName: "",
        advisor: "",
        businessUnit: "",
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
    
    const [Questions, setQuestions] = useState([])

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

    const getQuestions = async() => {

        try {
            const response = await axios.get(
                `/api/compliance/questions/list/`,
                config
            )
            
            setQuestions(response?.data?.data)
            // console.log(response?.data)
            
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

    const deleteQuestionBtn = (e, id) => {
        e.preventDefault()
        deleteQuestion(id)
    }

    const deleteQuestion = async (id) => {
        const Body = JSON.stringify({
            id: id
        })

        try {
            const response = await axios.post(
                `/api/compliance/questions/delete/`,
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

            getQuestions()
            
        } catch (error) {
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: "Error",
                html: `${error?.response?.data?.error}`,
                showConfirmButton: !1,
                timer: 5000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
            
        }
    }

    useEffect(() => {
        if (user?.is_superuser) {
            getQuestions()
        } else{
            router.push('/apps/compliance')
        }
    }, [])
   
    

    return (
        <Layout
            title={"ARC Questions"}
            content={"ARC Questions"}
        >
            <DashboardLayout
                appTitle={'Compliance'}
                app={'compliance'}
                dId={undefined}
            >
                <div className='col-lg-9'>
                    <div className='compliance-inital-card'>
                        <div className='position-relative'>
                            <div className='position-absolute top-0 start-50 translate-middle'>
                                <p className='compliance-inital-card-header'>ARC Questions</p>
                            </div>
                        </div>
                        <div className='compliance-inital-content'>
                            <button type="button" onClick={()=>{router.push('/apps/compliance/questions/create')}} className="btn btn-sfp">Create a New Question</button>
                            <hr/>
                            {
                                Questions.length >= 0 ?
                                <table className="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Question</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Max Score</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Questions.map(
                                                (row, key) => 
                                                {
                                                    return(
                                                        <tr scope="row" key={key}>
                                                            <td scope="row">
                                                                {
                                                                    key + 1
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    row?.question
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    row?.category
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    row?.max_score
                                                                }
                                                            </td>
                                                            <td>
                                                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                                    <button 
                                                                        type="button" 
                                                                        className="btn btn-secondary"
                                                                        onClick={()=> {
                                                                            router.push({
                                                                                pathname: "/apps/compliance/questions/edit",
                                                                                query: { qId: row?.id }
                                                                            })
                                                                        }}
                                                                    >
                                                                        <i className='bi pe-none me-2 fa-solid fa-pen-to-square' />
                                                                        Edit
                                                                    </button>
                                                                    <button 
                                                                        type="button" 
                                                                        className="btn btn-danger"
                                                                        onClick={(e)=>{deleteQuestionBtn(e, row?.id)}}
                                                                    >
                                                                        <i className='bi pe-none me-2 fa-solid fa-trash' />
                                                                        Delete
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            )
                                        }
                                    </tbody>
                                </table>
                                : 
                                <>
                                    <p>No questions found</p>
                                </>
                            }
                        </div>
                    </div>
                </div>
                
            </DashboardLayout>
        </Layout>
    )
}

export default Questions