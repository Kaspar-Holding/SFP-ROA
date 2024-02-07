import { useRouter } from 'next/router'
import DashboardLayout from '../../../../hocs/DashboardLayout'
import Layout from '../../../../hocs/Layout'
import Loader from '../../../../hocs/Loader'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios'
import Moment from 'moment'
import dynamic from 'next/dynamic'

const ImportData = () => {
    const router = useRouter()
    const user = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const Date_Var = new Date()
    const currentYear = Date_Var.getFullYear()

    return (
        <Layout
            title={ "Import - Advice Monitoring" }
            content={ "Import - Advice Monitoring" }
        >
            <DashboardLayout
                appTitle={ 'Import Advice Monitoring Data' }
                app={ 'compliance' }
            >
                <div className='col-lg-9'>
                    <div className='row'>
                        <div className='col-lg-12 compliance-list-records'>
                            <h1 className='app-dashboard-header text-center'>Import Data</h1>

                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </Layout>
    )
}

export default ImportData