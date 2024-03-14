import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PDFViewer = ({ pdfUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={ { width: '100%', height: '800px' } }>
            <Worker workerUrl="/pdf.worker.min.js">
                <Viewer fileUrl={ pdfUrl } plugins={ [defaultLayoutPluginInstance] } />
            </Worker>
        </div>
    );
};

export default PDFViewer;
