import React from 'react'
import CompleteDocumentLayout from '../../../../../hocs/Compliance/CompleteDocumentLayout'
import Layout from '../../../../../hocs/Layout'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Complete = () => {
    const router = useRouter()

    const [Loaded, setLoaded] = useState(false)
    
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)

    const dId = router?.query?.dId
    return (
        <div>
            <Layout
                title={"ROA Complete Form"}
                content={"ROA Complete Form"}
            >
                <CompleteDocumentLayout
                    appTitle={'Edit Compliance Review'}
                    app={'compliance'}
                    dId={dId}
                ></CompleteDocumentLayout>
            </Layout>

        </div>
    )
}

export default Complete