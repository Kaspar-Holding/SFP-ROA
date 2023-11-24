import DashboardLayout from '../../../hocs/DashboardLayout'
import Layout from '../../../hocs/Layout'
import React from 'react'

const ROA = () => {
    return (
        <Layout
            title={"Record of Advice"}
            content={"Record of Advice"}
        >
            <DashboardLayout
                appTitle={'ROA'}
                app={'roa'}
            >
                <div className='row'>
                    <div className='col-lg-6'>
                    </div>
                </div>
            </DashboardLayout>
        </Layout>
    )
}

export default ROA