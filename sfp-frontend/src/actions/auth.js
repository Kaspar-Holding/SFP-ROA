import axios from "axios"
import {
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    RESET_REGISTER_SUCCESS,
    LOGGED_IN_FAILED,
    LOGGED_IN_SUCCESS,
    REMOVE_AUTH_LOADING,
    SET_AUTH_LOADING,
    LOGGED_OUT_SUCCESS,
    LOGGED_OUT_FAILED,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILED,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAILED,
    REFRESH_SUCCESS,
    REFRESH_FAILED,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAILED,
    PASSWORD_RESET_REQUEST_SUCCESS,
    PASSWORD_RESET_REQUEST_FAILED
} from "./types"
import Swal from "sweetalert2"
import { useRouter } from "next/router"

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export const resetPasswordConfirm = (uid, token, new_password, re_new_password) => async dispatch => {

    const Body = JSON.stringify({
        uid,
        token,
        new_password,
        re_new_password
    })


    dispatch({
        type: SET_AUTH_LOADING
    })

    try {
        const apiResponse = await axios.post('/api/account/password/confirm', Body, config)

        if (apiResponse.status === 204) {
            dispatch({
                type: PASSWORD_RESET_CONFIRM_SUCCESS
            })
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: "Success",
                html: `Password successfully reset`,
                showConfirmButton: !1,
                timer: 10000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        } else {
            dispatch({
                type: PASSWORD_RESET_CONFIRM_FAILED
            })
        }
    } catch (error) {
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAILED
        })
    }


    dispatch({
        type: REMOVE_AUTH_LOADING
    })
}

export const resetPasswordRequest = (email) => async dispatch => {

    const Body = JSON.stringify({ email: email })


    dispatch({
        type: SET_AUTH_LOADING
    })

    try {
        const apiResponse = await axios.post('/api/account/password/reset', Body, config)

        if (apiResponse.status === 200) {
            dispatch({
                type: PASSWORD_RESET_REQUEST_SUCCESS
            })

            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: "Success",
                html: `Reset email was sent`,
                showConfirmButton: !1,
                timer: 10000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })

        } else {
            dispatch({
                type: PASSWORD_RESET_REQUEST_FAILED
            })
        }
    } catch (error) {
        dispatch({
            type: PASSWORD_RESET_REQUEST_FAILED
        })

        Swal.fire({
            position: "bottom-end",
            type: "error",
            title: "Error",
            html: `${error?.response?.data['error']}`,
            showConfirmButton: !1,
            timer: 10000,
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1,
        })
    }


    dispatch({
        type: REMOVE_AUTH_LOADING
    })
}

export const refreshUser = () => async dispatch => {
    try {
        const apiResponse = await axios.get('/api/account/refresh/', config)

        if (apiResponse.status === 200) {
            dispatch({
                type: REFRESH_SUCCESS
            })
            dispatch(verifyUser())
        } else {
            dispatch({
                type: REFRESH_FAILED
            })
            dispatch(loadUser())
        }
    } catch (error) {
        dispatch({
            type: REFRESH_FAILED
        })
    }
}

export const verifyUser = () => async dispatch => {
    try {
        const apiResponse = await axios.get('/api/account/verify/', config)

        if (apiResponse.status === 200) {
            dispatch({
                type: AUTHENTICATED_SUCCESS,
                payload: apiResponse?.data
            })
            dispatch(loadUser())
        } else {
            dispatch({
                type: AUTHENTICATED_FAILED
            })
        }
    } catch (error) {
        dispatch({
            type: AUTHENTICATED_FAILED
        })
    }
}

export const loadUser = () => async dispatch => {
    try {
        const apiResponse = await axios.get('/api/account/user', config)

        if (apiResponse.status === 200) {
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: apiResponse?.data
            })
        } else {
            dispatch({
                type: LOAD_USER_FAILED
            })
        }
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAILED
        })
    }
}

export const register = (
    first_name,
    last_name,
    email,
    password,
    re_password
) => async dispatch => {

    const Body = JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        re_password
    })

    dispatch({
        type: SET_AUTH_LOADING
    })

    try {
        const response = await axios.post('/api/account/register', Body, config)

        if (response.status === 201) {
            dispatch({
                type: REGISTER_SUCCESS
            })
        } else {
            dispatch({
                type: REGISTER_FAILED
            })
        }
    } catch (error) {
        dispatch({
            type: REGISTER_FAILED
        })
    }


    dispatch({
        type: REMOVE_AUTH_LOADING
    })

}

export const reset_register_success = () => dispatch => {
    dispatch({
        type: RESET_REGISTER_SUCCESS
    })
}

export const login = (
    email,
    password
) => async dispatch => {

    const Body = JSON.stringify({
        email,
        password
    })

    dispatch({
        type: SET_AUTH_LOADING
    })

    try {
        const response = await axios.post('/api/account/login', Body, config)

        if (response.status === 200) {
            dispatch({
                type: LOGGED_IN_SUCCESS
            })
            dispatch(loadUser())
        } else {
            dispatch({
                type: LOGGED_IN_FAILED
            })
            Swal.fire({
                position: "bottom-end",
                type: "error",
                title: "Error",
                html: `User not found`,
                showConfirmButton: !1,
                timer: 10000,
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: !1,
            })
        }
    } catch (error) {
        dispatch({
            type: LOGGED_IN_FAILED
        })
        Swal.fire({
            position: "bottom-end",
            type: "error",
            title: error?.response?.status === 500 ? "Server is down" : `${error?.response?.statusText}`,
            html: error?.response?.data?.error?.detail ? `${error?.response?.data?.error?.detail}` : `${error?.response?.data?.error}`,
            showConfirmButton: !1,
            timer: 10000,
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1,
        })
    }


    dispatch({
        type: REMOVE_AUTH_LOADING
    })

}

export const logout = () => async dispatch => {

    dispatch({
        type: SET_AUTH_LOADING
    })

    try {
        const response = await axios.post('/api/account/logout', config)
        if (response.status === 200) {
            dispatch({
                type: LOGGED_OUT_SUCCESS
            })
        } else {
            dispatch({
                type: LOGGED_OUT_FAILED
            })
        }
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGGED_OUT_FAILED
        })
    }


    dispatch({
        type: REMOVE_AUTH_LOADING
    })

}