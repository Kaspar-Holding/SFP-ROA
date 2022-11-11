import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAILED,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAILED,
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
        console.log(response)
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
            console.log(response)
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

export const LogOut = () => async dispatch => {
    dispatch({
        type: LOGOUT
    })
}