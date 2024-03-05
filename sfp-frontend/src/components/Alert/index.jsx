import React from 'react'
import { useSelector } from 'react-redux'

const Alert = ({ SuccessMessage }) => {
    const user = useSelector(state => state.auth.user)

    return (
        <div className="notification_container">
            <div
                className={
                    user?.email?.includes('sfp') || user?.email?.includes('succession') ? "alert alert-sfp-success fade show"
                        : user?.email?.includes('fs4p') ? "alert alert-fs4p-success fade show"
                            : user?.email?.includes('sanlam') ? "alert alert-sanlam-success fade show"
                                : "alert alert-sfp-success fade show"
                }

                role="alert"
            >
                { SuccessMessage }
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */ }
            </div>
        </div>
    )
}

export default Alert