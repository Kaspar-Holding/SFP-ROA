import DashboardLayout from '@/hocs/DashboardLayout'
import CompleteDocumentLayout from '@/hocs/Compliance/CompleteDocumentLayout'
import Layout from '@/hocs/Layout'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Moment from 'moment'
import Image from 'next/image'
import graphImage from '@/assets/images/Graph.svg'
const SummaryDocument = () => {
    const router = useRouter()

    const dId = router?.query?.dId
    
    const [DocumentInitalData, setDocumentInitalData] = useState({})
    const [Summary, setSummary] = useState({
        score: 0
    })

    const [Comments, setComments] = useState([])
    const [MissingDocuments, setMissingDocuments] = useState("")

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

    const LoadSummary = async (documentId) => {
        
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
                `/api/compliance/summary/`,
                Body,
                config
            )

            setSummary(response?.data?.data)
            setComments(response?.data?.data?.comments)
            setMissingDocuments(response?.data?.data?.missing)


        } catch (error) {
            
        }
    }

    const [Comment, setComment] = useState("")

    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    }
    const addComment = async (e, documentId, type) => {
        e.preventDefault()

        const Body = JSON.stringify({
            document: documentId,
            comment: Comment,
            type: type
        })

        if (Comment != "") {

            try {
                const response = await axios.post(
                    `/api/compliance/comment`,
                    Body,
                    config
                )
                LoadSummary(dId)
                setComment("")
            } catch (error) {
                
            }
        }
    }

    const updateDocumentStatus = async(e, id, status) => {
        const Body = JSON.stringify({
            dId: id,
            status: status
        })

        try {
            const response = await axios.post(
                '/api/compliance/status',
                Body,
                config
            )
            if (status == 1) {
                Swal.fire({
                    position: "bottom-end",
                    type: "success",
                    title: "Success",
                    html: `Approved`,
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
                router.push(`/apps/compliance`)
            } 
            if (status == 1) {
                Swal.fire({
                    position: "bottom-end",
                    type: "success",
                    title: "Success",
                    html: `Not Approved`,
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
            } 
            if (status == 3) {
                Swal.fire({
                    position: "bottom-end",
                    type: "success",
                    title: "Success",
                    html: `Referred`,
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })
            } 
            else {
                Swal.fire({
                    position: "bottom-end",
                    type: "success",
                    title: "Success",
                    html: `Updated`,
                    showConfirmButton: !1,
                    timer: 5000,
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: !1,
                })

            }
            router.push(`/apps/compliance`)
        } catch (error) {
            
        }
    }

    useEffect(() => {

        if (dId) {
            LoadData(dId)
            LoadSummary(dId)
        }

    }, [])
    
    return (
        <Layout
            title={"Continue Compliance"}
            content={"Continue Compliance"}
        >
            <CompleteDocumentLayout
                appTitle={'Continue Compliance Review'}
                app={'compliance'}
                dId={router?.query?.dId}
            >
                <div className='gatekeeping-inital-card'>
                    <div className='container'>
                        <h6 className='gatekeeping-header'>Document Summary</h6>
                        <hr/>
                        <br/>
                        <div className='row'>
                            <div className='col-lg-5'>
                                {
                                    Comments.length > 0 ? 
                                    <div className="card" id="chat1">
                                        <div className="card-body">
                                            <div className='compliance-comments'>
                                                <div className="">
                                                    {
                                                        Comments.map(
                                                            (comment, i) => {
                                                                return(
                                                                    <>
                                                                        <div 
                                                                            key={i} 
                                                                            className={"d-flex flex-row justify-content-start mb-4"}
                                                                        >
                                                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                                                alt="avatar 1" style={{width: "45px",height: "100%"}}/>
                                                                            <div className="p-3 ms-3" style={
                                                                                comment?.type == 1 ?
                                                                                    {
                                                                                        borderRadius: "15px", 
                                                                                        backgroundColor: "rgba(57, 192, 237,.2)"
                                                                                    }
                                                                                :
                                                                                    {
                                                                                        borderRadius: "15px", 
                                                                                        backgroundColor: "rgba(57, 170, 19, 0.2)"
                                                                                    }
                                                                                }>
                                                                                <p className="small mb-0 text-muted disabled">{comment?.commenting_user}</p>
                                                                                <p className="small mb-0">{comment?.comment}.</p>
                                                                                <i className="small mb-0 text-muted">{Moment(comment?.created_at).format('hh:mm A, DD MMMM YYYY')}.</i>
                                                                                {/* <i className="small mb-0 text-muted">8:35 AM, 06 Sep 23.</i> */}
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <p>No Comments were posted</p>
                                    </div>
                                }
                            </div>
                            {
                                DocumentInitalData?.status == 0 || DocumentInitalData?.status == 3 ?
                                <div className='col-lg-3'>
                                    
                                    <div className="form-floating">
                                        <input className="form-control" onBlur={(e)=>{DocumentInitalData?.status == 3 ? addComment(e, dId, 2) : addComment(e, dId, 1)}} value={Comment} onChange={(e)=>{setComment(e.target.value)}} placeholder="Leave a comment here" id="summaryComment" style={{height: "100px"}}></input>
                                        <label for="summaryComment">Add Comment</label>
                                    </div>
                                </div>
                                : <></>
                            }
                            <div className='col-lg-4'>
                                <div className="form-floating">
                                    <textarea 
                                        className="form-control" 
                                        value={MissingDocuments} 
                                        placeholder="Leave a comment here" id="summaryComment" style={{height: "300px"}}></textarea>
                                    <label for="summaryComment">Email Response</label>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className='row row-cols-2'>
                            <div className="col">
                                <button 
                                    className="btn btn-primary compliance-inital-card-button-text btn-sfp" 
                                    onClick={()=>{
                                        router.push(`/apps/compliance/documents/complete/${dId}`)
                                        router.push({
                                            pathname: "/apps/compliance/documents/gatekeeping",
                                            query: {dId : dId}
                                        })
                                    }}
                                >
                                    Back to Gatekeeping Questions 
                                    <i className='bi pe-none mx-2 me-2 fa-solid fa-check'/>
                                </button>
                            </div>
                            <div className="col">
                            {
                                DocumentInitalData?.status >= 3 ?
                                    <button 
                                        className="btn btn-primary compliance-inital-card-button-text btn-sfp" 
                                        onClick={()=>{
                                            // router.push(`/apps/compliance/documents/complete/${dId}`)
                                            router.push({
                                                pathname: "/apps/compliance/documents/arc",
                                                query: {dId : dId}
                                            })
                                        }}
                                    >
                                        Back to ARC Questions 
                                        <i className='bi pe-none mx-2 me-2 fa-solid fa-check'/>
                                    </button>
                                : <></>
                            }
                            </div>
                        </div>
                    </div>



                </div>
                <div className='position-relative'>
                    <div className='position-absolute bottom-0 start-0 w-100'>
                        <div className="container">
                            <div className={DocumentInitalData?.status == 3 ? 'row row-cols-5' : 'row'}>
                                <div className={DocumentInitalData?.status == 3 ? 'col' : 'col-lg-3'}>
                                    <p className='calculated_score'>
                                        Calculated Score (Gatekeeping)
                                    </p>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <button type="button" className="btn btn-primary btn-lg btn-summary-1">
                                                <Image src={graphImage} width={30} height={30} />
                                            </button>
                                        </div>
                                        <div className='col-lg-6 compliance-score-div text-center'>
                                            <span className='compliance-score'>
                                                {Summary?.score} 
                                            </span>
                                        </div>

                                    </div>
                                </div>
                                {
                                    DocumentInitalData?.status >= 3 ? 
                                    <div className={DocumentInitalData?.status == 3 ? 'col' : 'col-lg-3'}>
                                        <p className='calculated_score'>
                                            Calculated Score (ARC)
                                        </p>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <button type="button" className="btn btn-primary btn-lg btn-summary-1">
                                                    <Image src={graphImage} width={30} height={30} />
                                                </button>
                                            </div>
                                            <div className='col-lg-6 compliance-score-div text-center'>
                                                <span className='compliance-score'>
                                                    {Summary?.arc_score} 
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                    : <></>
                                }
                                {
                                    DocumentInitalData?.status == 0 || DocumentInitalData?.status == 3  ? 
                                    <div className={DocumentInitalData?.status == 3 ? 'col' : 'col-lg-3'}>
                                        <button type="button" onClick={(e)=>{updateDocumentStatus(e, dId, 1)}} className="btn btn-primary btn-lg btn-summary-2">
                                            Approved
                                        </button>
                                    </div>
                                    : <></>
                                }
                                {
                                    DocumentInitalData?.status == 0 || DocumentInitalData?.status == 3  ? 
                                    <div className={DocumentInitalData?.status == 3 ? 'col' : 'col-lg-3'}>
                                        <button type="button" onClick={(e)=>{updateDocumentStatus(e, dId, 2)}} className="btn btn-primary btn-lg btn-summary-3">
                                            Not Approved
                                        </button>
                                    </div>
                                    : <></>
                                }
                                {
                                    DocumentInitalData?.status == 3 ? 
                                    <div className={DocumentInitalData?.status == 3 ? 'col' : 'col-lg-3'}>
                                        <button type="button" onClick={(e)=>{updateDocumentStatus(e, dId, 4)}} className="btn btn-primary btn-lg btn-summary-4">
                                            Partially Approved
                                        </button>
                                    </div>
                                    : <></>
                                }
                                {
                                    DocumentInitalData?.status == 0 ? 
                                    <div className='col-lg-3'>
                                        <button type="button" onClick={(e)=>{updateDocumentStatus(e, dId, 3)}} className="btn btn-primary btn-lg btn-summary-5">
                                            Referred
                                        </button>
                                    </div>
                                    : <></>
                                }
                            </div>
                        </div>
                    </div>

                </div>

            </CompleteDocumentLayout>
        </Layout>
    )
}

export default SummaryDocument