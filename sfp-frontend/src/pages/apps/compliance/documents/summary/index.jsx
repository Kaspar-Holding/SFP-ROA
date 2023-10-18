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
import Loader from '@/hocs/Loader'
const SummaryDocument = () => {
    const router = useRouter()
    
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)

    const user = useSelector(state=>state.auth.user)
    const [Loaded, setLoaded] = useState(false)
    
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
        
        setLoaded(true)
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
        
        setLoaded(false)
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
    
    if (typeof window != 'undefined' && !isAuthenticated) {
        router.push('/auth/login')
    }

    if (user?.userType === 6) {
        router.push('/')
    }
    
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
                {
                    Loaded ?
                    <Loader />
                    :
                    <>
                        <div className='gatekeeping-inital-card'>
                            <div className='container'>
                                <h6 className='gatekeeping-header'>Document Summary</h6>
                                <hr/>
                                <br/>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className="card">
                                            <div className="card-header d-flex justify-content-between align-items-center p-3"
                                                style={{borderTop: "4px solid #007A8D"}}>
                                                <h5 className="mb-0">Comments</h5>
                                            </div>
                                            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "200px", overflowY: 'auto'}}>
                                                {
                                                    Comments.length > 0?
                                                        Comments.map(
                                                            (comment, i) => {
                                                                return(
                                                                    <>
                                                                        {
                                                                            comment?.type === 2 ?
                                                                            <>                                                                            
                                                                                <div className="d-flex justify-content-between">
                                                                                    <p className="small mb-1 text-muted">{Moment(comment?.created_at).format('hh:mmA, DD MMM YY')}</p>
                                                                                    <p className="small mb-1">{comment?.commenting_user}</p>
                                                                                </div>
                                                                                <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                                                                                    <div>
                                                                                        <div dangerouslySetInnerHTML={{__html: comment?.comment}} className="small p-2 me-3 mb-3 text-white rounded-3" style={{backgroundColor: '#007A8D'}}>
                                                                                        </div>
                                                                                    </div>
                                                                                    
                                                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                                                    alt="avatar 1" style={{width: "45px",height: "100%"}} />
                                                                                </div>
                                                                            </>
                                                                            :comment?.type === 3 ?
                                                                            <>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <p className="small mb-1">{comment?.commenting_user}</p>
                                                                                    <p className="small mb-1 text-muted">{Moment(comment?.created_at).format('hh:mmA, DD MMM YY')}</p>
                                                                                </div>
                                                                                <div className="d-flex flex-row justify-content-start">
                                                                                    {
                                                                                        comment?.type === 1 ?
                                                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                                                                                        alt="avatar 1" style={{width: "45px",height: "100%"}} />
                                                                                        : 
                                                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                                                        alt="avatar 1" style={{width: "45px",height: "100%"}} />
                                                                                    }
                                                                                    <div>
                                                                                        <p className="small p-2 ms-3 mb-3 rounded-3" style={{backgroundColor: "#F6E4FF"}}>
                                                                                            {comment?.comment}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </>
                                                                            :
                                                                            <>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <p className="small mb-1">{comment?.commenting_user}</p>
                                                                                    <p className="small mb-1 text-muted">{Moment(comment?.created_at).format('hh:mmA, DD MMM YY')}</p>
                                                                                </div>
                                                                                <div className="d-flex flex-row justify-content-start">
                                                                                    {
                                                                                        comment?.type === 1 ?
                                                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                                                                                        alt="avatar 1" style={{width: "45px",height: "100%"}} />
                                                                                        : 
                                                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                                                        alt="avatar 1" style={{width: "45px",height: "100%"}} />
                                                                                    }
                                                                                    <div>
                                                                                        <p className="small p-2 ms-3 mb-3 rounded-3" style={{backgroundColor: "#f5f6f7"}}>
                                                                                            {comment?.comment}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </>

                                                                        }
                                                                    </>
                                                                )
                                                            }
                                                        )
                                                    :
                                                    <>
                                                        <div className="d-flex justify-content-between">
                                                            <p className="small mb-1">No Comments</p>
                                                        </div>
                                                    </>
                                                }

                                                

                                            </div>
                                            <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                                                <div className="input-group mb-0">
                                                    <input 
                                                        type="text" 
                                                        onKeyDown={
                                                            (e)=>{
                                                                if (e.key === 'Enter') {
                                                                    DocumentInitalData?.status == 3 ? addComment(e, dId, 2) : addComment(e, dId, 1)
                                                                }
                                                            }
                                                        } value={Comment} onChange={(e)=>{setComment(e.target.value)}} 
                                                        className="form-control" placeholder="Type message"
                                                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                    <button className="btn btn-sfp" type="button" onClick={(e)=>{DocumentInitalData?.status == 3 ? addComment(e, dId, 2) : addComment(e, dId, 1)}} id="button-addon2" style={{paddingTop: ".55rem"}}>
                                                        Post Comment
                                                    </button>
                                                </div>
                                            </div>
                                            {/* {
                                                DocumentInitalData?.status >= 2 || (user?.userType === 1 && !Summary?.arc_status) || (user?.userType === 1 && DocumentInitalData?.starting_point == 1)?
                                                :<></>
                                            } */}
                                        </div>
                                    
                                    
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="card">
                                            <div className="card-header d-flex justify-content-between align-items-center p-3"
                                                style={{borderTop: "4px solid #007A8D"}}>
                                                <h5 className="mb-0">Email Response</h5>
                                            </div>
                                            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "280px", overflowY: 'auto'}}>
                                                <div dangerouslySetInnerHTML={{__html: MissingDocuments}}></div>
                                            </div>
                                        </div>
                                        {/* <div className="form-floating">
                                            <textarea                                                
                                                className="form-control" 
                                                value={
                                                    `Dear Advisor\n\nThank you for submitting the case ${DocumentInitalData?.policy_number} for compliance review. ${MissingDocuments}\n\nPlease provide these outstanding requirements:
                                                    \nOnce you have met these requirements, please upload the updated documents to Sanfin and resubmit the case for a second review by completing the task: "Gatekeeper Requires More Compliance Documents"/ "ARC Requires More Compliance Documents" on Sanfin. Please notify me once you have done this.
                                                    \nLet me know if you have any other questions.
                                                    \nKind Regards
                                                    `
                                                    } 
                                                placeholder="Leave a comment here" id="summaryComment" style={{height: "300px"}}></textarea>
                                            <label for="summaryComment">Email Response</label>
                                        </div> */}
                                    </div>
                                </div>
                                <br/>
                                <div className='row row-cols-2'>
                                    {
                                        DocumentInitalData?.starting_point == 2 ?
                                        <div className="col">
                                            <button 
                                                className="btn btn-primary compliance-inital-card-button-text btn-sfp" 
                                                onClick={()=>{
                                                    // router.push(`/apps/compliance/documents/complete/${dId}`)
                                                    user?.userType == 1 && Summary?.arc_status && (DocumentInitalData?.status == 3 || DocumentInitalData?.status == 5|| DocumentInitalData?.status == 7) ?
                                                    router.push({
                                                        pathname: "/apps/compliance/documents/view/gatekeeping",
                                                        query: {dId : dId}
                                                    })
                                                    :
                                                    DocumentInitalData?.status != 0 || DocumentInitalData?.status != 2 || DocumentInitalData?.status == 7 || (user?.userType == 1 && Summary?.arc_status) ?
                                                    router.push({
                                                        pathname: "/apps/compliance/documents/gatekeeping",
                                                        query: {dId : dId}
                                                    })
                                                    :
                                                    router.push({
                                                        pathname: "/apps/compliance/documents/view/gatekeeping",
                                                        query: {dId : dId}
                                                    })
                                                }}
                                            >
                                                Back to Gatekeeping Questions
                                                <i className='bi pe-none mx-2 me-2 fa-solid fa-check'/>
                                            </button>
                                        </div>
                                        : <></>
                                    }
                                    <div className="col">
                                    {
                                        (DocumentInitalData?.status >= 3 && DocumentInitalData?.status != 7) || Summary?.arc_status ?
                                            <button 
                                                className="btn btn-primary compliance-inital-card-button-text btn-sfp" 
                                                onClick={()=>{
                                                    // router.push(`/apps/compliance/documents/complete/${dId}`)
                                                    user?.is_superuser || user?.userType === 2?
                                                    router.push({
                                                        pathname: "/apps/compliance/documents/view/arc",
                                                        query: {dId : dId}
                                                    }) :
                                                    DocumentInitalData?.status == 0 || DocumentInitalData?.status >= 2 ?
                                                    router.push({
                                                        pathname: "/apps/compliance/documents/arc",
                                                        query: {dId : dId}
                                                    })
                                                    :
                                                    router.push({
                                                        pathname: "/apps/compliance/documents/view/arc",
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
                                    <div className={(DocumentInitalData?.status == 0 && DocumentInitalData?.picked_up === user?.id) || DocumentInitalData?.status == 3 ? 'row row-cols-5' : 'row'}>
                                        {
                                            DocumentInitalData?.starting_point == 2 ?
                                            <div className={(DocumentInitalData?.status == 0 && DocumentInitalData?.picked_up === user?.id) || DocumentInitalData?.status == 3 || DocumentInitalData?.status == 5 ? 'col' : 'col-lg-3'}>
                                                <p className='calculated_score'>
                                                    Calculated Score {DocumentInitalData?.status == 3 || DocumentInitalData?.status == 5 ? "(GK)" : "(Gatekeeping)"}
                                                </p>
                                                <div className='row'>
                                                    <div className='col-lg-4'>
                                                        <button type="button" className={Summary?.score < 80 ? "btn btn-primary btn-lg btn-summary-danger" : "btn btn-primary btn-lg btn-summary-1"}>
                                                            <Image src={graphImage} width={30} height={30} />
                                                        </button>
                                                    </div>
                                                    <div className={Summary?.score < 80 ? "col-lg-6 compliance-score-div-danger text-center" : "col-lg-6 compliance-score-div text-center"}>
                                                        <span className={Summary?.score < 80 ? 'compliance-score-danger' : "compliance-score"}>
                                                            {Summary?.score} 
                                                        </span>
                                                    </div>

                                                </div>
                                            </div>
                                            : <></>
                                        }
                                        {
                                            Summary?.arc_status || DocumentInitalData?.starting_point == 1 ? 
                                            <div className={(DocumentInitalData?.status == 0 && DocumentInitalData?.picked_up === user?.id) || DocumentInitalData?.status == 3 || DocumentInitalData?.status == 5 ? 'col' : 'col-lg-3'}>
                                                <p className='calculated_score'>
                                                    Calculated Score (ARC)
                                                </p>
                                                <div className='row'>
                                                    <div className='col-lg-4'>
                                                        <button type="button" className={Summary?.arc_score < 60 ? "btn btn-primary btn-lg btn-summary-danger" : Summary?.arc_score >= 60 && Summary?.arc_score <= 70 ? "btn btn-primary btn-lg btn-summary-warning" : "btn btn-primary btn-lg btn-summary-1"}>
                                                            <Image src={graphImage} width={30} height={30} />
                                                        </button>
                                                    </div>
                                                    <div className={Summary?.arc_score < 60 ? "col-lg-6 compliance-score-div-danger text-center" : Summary?.arc_score >= 60 && Summary?.arc_score <= 70 ? "col-lg-6 compliance-score-div-warning text-center"  : "col-lg-6 compliance-score-div text-center"}>
                                                        <span className={Summary?.arc_score < 60 ? 'compliance-score-danger' : Summary?.arc_score >= 60 && Summary?.arc_score <= 70 ? "compliance-score-danger" : "compliance-score"}>
                                                            {Summary?.arc_score} 
                                                        </span>
                                                    </div>

                                                </div>
                                            </div>
                                            : <></>
                                        }
                                        {
                                            !user?.is_superuser ? 
                                                user?.userType === 1 ?
                                                    DocumentInitalData?.status != 1  ? 
                                                        <div className={(DocumentInitalData?.status == 0 && DocumentInitalData?.picked_up === user?.id) || DocumentInitalData?.status == 3 || DocumentInitalData?.status == 5 ? 'col' : 'col-lg-3'}>
                                                            <button type="button" onClick={(e)=>{updateDocumentStatus(e, dId, 1)}} className="btn btn-primary btn-lg btn-summary-2">
                                                                {Summary?.arc_status ? "Approved" : "Approve"}
                                                            </button>
                                                        </div>
                                                    :<></>
                                                : user?.userType === 2 ?
                                                    DocumentInitalData?.status != 1 && !DocumentInitalData?.arc_status ? 
                                                        <div className={DocumentInitalData?.status == 3 || DocumentInitalData?.status == 5 ? 'col' : 'col-lg-3'}>
                                                            <button type="button" onClick={(e)=>{updateDocumentStatus(e, dId, 1)}} className="btn btn-primary btn-lg btn-summary-2">
                                                                {Summary?.arc_status ? "Approved" : "Approve"}
                                                            </button>
                                                        </div>
                                                    : <></>
                                                : <></>
                                            : <></>
                                        }
                                        {
                                            !user?.is_superuser ?
                                                user?.userType === 1 ?
                                                (DocumentInitalData?.status != 1) ? 
                                                <div className={(DocumentInitalData?.status == 0 && DocumentInitalData?.picked_up === user?.id) || DocumentInitalData?.status == 3 || DocumentInitalData?.status == 5 ? 'col' : 'col-lg-3'}>
                                                            <button type="button" onClick={(e)=>{updateDocumentStatus(e, dId, 2)}} className="btn btn-primary btn-lg btn-summary-3">
                                                                {Summary?.arc_status ? "Not Approved" : "Not Approve"}
                                                            </button>
                                                        </div>
                                                    : <></>
                                                : 
                                                user?.userType === 2 ?
                                                    (DocumentInitalData?.status != 1) && !DocumentInitalData?.arc_status  ? 
                                                        <div className={(DocumentInitalData?.status == 0 && DocumentInitalData?.picked_up === user?.id) || DocumentInitalData?.status == 3 || DocumentInitalData?.status == 5 ? 'col' : 'col-lg-3'}>
                                                            <button type="button" onClick={(e)=>{updateDocumentStatus(e, dId, 2)}} className="btn btn-primary btn-lg btn-summary-3">
                                                                {Summary?.arc_status ? "Not Approved" : "Not Approve"}
                                                            </button>
                                                        </div>
                                                    : <></>
                                                : <></>
                                            : <></>
                                        }
                                        {
                                            !user?.is_superuser ? 
                                                (user?.userType === 1 && ((DocumentInitalData?.status == 0 && DocumentInitalData?.picked_up === user?.id) || DocumentInitalData?.status == 3 || DocumentInitalData?.status == 5)) ? 
                                                <div className={(DocumentInitalData?.status == 0 && DocumentInitalData?.picked_up === user?.id) || DocumentInitalData?.status == 3 || DocumentInitalData?.status == 5 ? 'col' : 'col-lg-3'}>
                                                    <button type="button" onClick={(e)=>{updateDocumentStatus(e, dId, 4)}} className="btn btn-primary btn-lg btn-summary-4">
                                                        {Summary?.arc_status ? "Partially Approved" : "Partially Approve"}
                                                    </button>
                                                </div>
                                                : <></>
                                            : <></>
                                        }
                                        {
                                            !user?.is_superuser ? 
                                                user?.userType === 2 ?
                                                    ((DocumentInitalData?.status != 1 && DocumentInitalData?.status != 3 && DocumentInitalData?.status != 5) || (user?.userType !== 2 && !DocumentInitalData?.arc_status)) ? 
                                                    <div className='col-lg-3'>
                                                        <button type="button" onClick={(e)=>{updateDocumentStatus(e, dId, 3)}} className="btn btn-primary btn-lg btn-summary-5">
                                                            Refer
                                                        </button>
                                                    </div>
                                                    : <></>
                                                : <></>
                                            : <></>
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                }

            </CompleteDocumentLayout>
        </Layout>
    )
}

export default SummaryDocument