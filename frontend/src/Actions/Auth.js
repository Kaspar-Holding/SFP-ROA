import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAILED,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAILED,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAILED,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAILED,
    LOGOUT
} from './Types'

import axios from 'axios'

export const LoadUser = () => async dispatch => {
    if (localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`,
                'Accept' : 'application/json'
            }
        }
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/users/me/`, config)
    
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: response.data
            })
        } catch (error){
            dispatch({
                type: USER_LOADED_FAILED
            })
        }
    } else {
        dispatch({
            type: USER_LOADED_FAILED
        })
    }
}

export const LoginUser = (FormData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify(FormData)

    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/jwt/create/`, body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })

        dispatch(LoadUser())
    } catch (error){

        dispatch({
            type: LOGIN_FAILED
        })
    }
}

export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                // 'Accept' : 'application/json',
            }
        }
        const body = JSON.stringify({'token': localStorage.getItem('access')})
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/jwt/verify/`, body, config)
            // console.log(response)
            dispatch({
                type: AUTHENTICATED_SUCCESS
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: AUTHENTICATED_FAILED
            })
        }
    }else {
        // console.log("HI")
        dispatch({
            type: AUTHENTICATED_FAILED
        })
    }
}

export const resetPassword = (FormData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify(FormData)
    
    var status
    var data
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/users/reset_password/`, body, config)
        console.log(response)
        dispatch({
            type: PASSWORD_RESET_SUCCESS,
            payload: response.data
        })
        status = response.status
    } catch (error){

        dispatch({
            type: PASSWORD_RESET_FAILED
        })
        status = error.response.status
        data = error.response.data
    }
    return {
        "status" : status,
        "data" : data 
    }
}

export const resetPasswordConfirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({
        "uid":uid, 
        "token":token,
        "new_password":new_password, 
        "re_new_password":re_new_password
    })
    var status
    var data
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/users/reset_password_confirm/`, body, config)
        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS,
            payload: response.data
        })
        status = response.status
    } catch (error){
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAILED
        })
        status = error.response.status
        data = error.response.data
    }
    return {
        "status" : status,
        "data" : data 
    }
}

export const LogOut = () => async dispatch => {
    dispatch({
        type: LOGOUT
    })
}