// import { verifyUser, refreshUser } from '@/actions/auth'
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const InsightsLayout = ({children}) => {
    const router = useRouter()
    
    return (
        <>
            <Navbar />
            <div className=''>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2'>
                            <button type="button" onClick={(e)=>{router.push('/apps/insights')}} className={router.pathname === "/apps/insights" ? "btn btn-primary w-100 btn-sfp" : "btn btn-outline-primary btn-outline-sfp w-100"}>Commission</button>
                        </div>
                        <div className='col-2'>
                            <button type="button" onClick={(e)=>{router.push('/apps/insights/investment')}} className={router.pathname === "/apps/insights/investment" ? "btn btn-primary w-100 btn-sfp" : "btn btn-outline-primary btn-outline-sfp w-100"}>Investment</button>
                        </div>
                        <div className='col-2'>
                            <button type="button" onClick={(e)=>{router.push('/apps/insights/non_sanlam_cases')}} className={router.pathname === "/apps/insights/non_sanlam_cases" ? "btn btn-primary w-100 btn-sfp" : "btn btn-outline-primary btn-outline-sfp w-100"}>Non Sanlam Cases</button>
                        </div>
                        <div className='col-2'>
                            <button type="button" onClick={(e)=>{router.push('/apps/insights/monitoring')}} className={router.pathname === "/apps/insights/monitoring" ? "btn btn-primary w-100 btn-sfp" : "btn btn-outline-primary btn-outline-sfp w-100"}>Monitoring</button>
                        </div>
                        <div className='col-2'>
                            <button type="button" onClick={(e)=>{router.push('/apps/insights/gatekeeping')}} className={router.pathname === "/apps/insights/gatekeeping" ? "btn btn-primary w-100 btn-sfp" : "btn btn-outline-primary btn-outline-sfp w-100"}>Gatekeeping Summary</button>
                        </div>
                        <div className='col-2'>
                            <button type="button" onClick={(e)=>{router.push('/apps/insights/advisor_dashboard')}} className={router.pathname === "/apps/insights/advisor_dashboard" ? "btn btn-primary w-100 btn-sfp" : "btn btn-outline-primary btn-outline-sfp w-100"}>Advisor Dashboard</button>
                        </div>
                    </div>
                </div>
                <br/>
                {children}
            </div>
        </>
    )
}
export default InsightsLayout