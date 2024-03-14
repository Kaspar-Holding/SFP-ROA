import React from 'react'
import { useSelector } from 'react-redux'

const DangerAlert = ({ SuccessMessage }) => {
    const user = useSelector(state => state.auth.user)

    return (
        <div className="notification_container">
            <div
                className="alert alert-danger fade show"

                role="alert"
            >
                { SuccessMessage }
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */ }
            </div>
        </div>
    )
}

export default DangerAlert