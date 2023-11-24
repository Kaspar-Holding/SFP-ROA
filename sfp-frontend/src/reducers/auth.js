
import { 
    LOGGED_IN_FAILED,
    LOGGED_IN_SUCCESS,
    REGISTER_FAILED, 
    REGISTER_SUCCESS, 
    RESET_REGISTER_SUCCESS,
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
    PASSWORD_RESET_REQUEST_SUCCESS,
    PASSWORD_RESET_REQUEST_FAILED,
    PASSWORD_RESET_CONFIRM_FAILED,
    PASSWORD_RESET_CONFIRM_SUCCESS
} from "../actions/types"

const initialState = {
    user: null,
    isAuthenticated: false, 
    loading: false,
    register_state: false,
    reset_email_sent: false,
    password_reset: false,
}

const authReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch(type) {
        case REGISTER_SUCCESS:
            return{
                ...state,
                register_state: true
            }
        case REGISTER_FAILED:
            return{
                ...state    
            }
        case RESET_REGISTER_SUCCESS:
            return{
                ...state,
                register_state: false 
            }
        case LOGGED_IN_SUCCESS:
            return{
                ...state,
                isAuthenticated: true
            }
        case LOGGED_IN_FAILED:
            return{
                ...state,
                isAuthenticated: false
            }
        case LOGGED_OUT_SUCCESS:
            return{
                ...state,
                isAuthenticated: false,
                user: null
            }
        case LOGGED_OUT_FAILED:
            return{
                ...state
            }
        case LOAD_USER_SUCCESS:
            return{
                ...state,
                user: payload.user
            }
        case LOAD_USER_FAILED:
            return{
                ...state,
                user: null
            }
        case AUTHENTICATED_SUCCESS:
            return{
                ...state,
                isAuthenticated: true
            }
        case AUTHENTICATED_FAILED:
            return{
                ...state,
                isAuthenticated: false,
                user: null
            }
        case REFRESH_SUCCESS:
            return{
                ...state
            }
        case REFRESH_FAILED:
            return{
                ...state,
                isAuthenticated: false,
                user: null
            }
        case PASSWORD_RESET_REQUEST_FAILED:
            return{
                ...state,
                reset_email_sent: false,
                loading: false
            }
        case PASSWORD_RESET_REQUEST_SUCCESS:
            return{
                ...state,
                reset_email_sent: true,
                loading: false
            }
        case PASSWORD_RESET_CONFIRM_FAILED:
            return{
                ...state,
                password_reset: false,
                loading: false
            }
        case PASSWORD_RESET_CONFIRM_SUCCESS:
            return{
                ...state,
                password_reset: true,
                loading: false
            }
        case SET_AUTH_LOADING:
            return{
                ...state,
                loading: true
            }
        case REMOVE_AUTH_LOADING:
            return{
                ...state,
                loading: false,
                reset_email_sent: false
            }
        default:
            return state
    }
} 

export default authReducer