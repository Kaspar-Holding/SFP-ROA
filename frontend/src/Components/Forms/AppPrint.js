import { useRef } from 'react';
import jsPDF from 'jspdf';
import PrintForm from './PrintForm';
import RiskFactors from './PrintedComponents/RiskFactors';
import {Navigate, NavLink, useLocation} from 'react-router-dom'
function AppPrint() {
    const location = useLocation();
    const { state } = location;
	const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});

		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});
	};

	return (
		<div>
			<button className="button" onClick={handleGeneratePdf}>
				Generate PDF
			</button>
			<div ref={reportTemplateRef}>
                <p>hi</p>
                <RiskFactors data={{formId: state['formId']}}  />
				{/* <PrintForm /> */}
			</div>
		</div>
	);
}

export default AppPrint;