import React from 'react'
import { useRouter } from 'next/router'
import PDFViewr from './viewer'
import { API_URL } from '../../../config'

const PDFViewer = () => {
    const router = useRouter()
    const pdfLink = `http://localhost:8000/static/pdf/Client%20Record%20of%20Advice%20for%20Lehlohonolo%20Mononyane%20Filled%20by%20Hlonie%20Mononyane%20cc54fac7-4a39-4794-8b39-8e6554769cb4.pdf`

    return (
        <div>
            <h1>PDF Viewer</h1>
            <PDFViewer pdfUrl={ pdfLink } />
        </div>
    )
}

export default PDFViewer