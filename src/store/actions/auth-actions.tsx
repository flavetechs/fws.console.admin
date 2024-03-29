import axiosInstance from "../../axios/axiosInstance";
import { actions } from "../action-types/auth-action-types"

export const loginUser = ({ userName, password }: any) => (dispatch : any) => {

    dispatch({
        type: actions.LOGIN_USER_LOADING
    });

    const payload = {
        userName,
        password
    }

    axiosInstance.post('fws/user/api/v1/login', payload)
        .then((res) => {
            dispatch({
                type: actions.LOGIN_USER_SUCCESS,
                payload: res.data.result
            });
            
        }).catch((err : any) => {
            dispatch({
                type: actions.LOGIN_USER_FAILED,
                payload: err?.response.data.message?.friendlyMessage
            })
        })
}

export const loginOutUser = () => {
    return {
        type: actions.LOG_OUT_USER
    }
}

export const registerUser = ({  email , password  } : any) => (dispatch : any) => {

    dispatch({
        type: actions.REGISTER_USER_LOADING
    });

    const payload = {
        email,
        password
    }

    axiosInstance.post('/fws/user/api/v1/register', payload)
        .then((res) => {
            dispatch({
                type: actions.REGISTER_USER_SUCCESS,
                payload: res.data.result
            });
            
        }).catch((err : any)  => {
            dispatch({
                type: actions.REGISTER_USER_FAILED,
                payload: err?.response.data.message?.friendlyMessage
            })
        })
}


export const generatePasswordResetLink = ({ resetOption, resetOptionValue, userType }: any) => (dispatch : any) => {

    dispatch({
        type: actions.GENERATE_PASSWORD_RESET_LINK_LOADING
    });

    const payload = {
        resetOption,
        resetOptionValue,
        userType
    }

    axiosInstance.post('/user/api/v1/generate/reset-link', payload)
        .then((res) => {
            dispatch({
                type: actions.GENERATE_PASSWORD_RESET_LINK_SUCCESS,
                payload: res.data.result
            });
        }).catch((err : any)  => {
            dispatch({
                type: actions.GENERATE_PASSWORD_RESET_LINK_FAILED,
                payload: err?.response.data?.result
            })
        })
}

export const ResetPassword = ({ userId, password, resetToken } : any) => (dispatch : any) => {

    dispatch({
        type: actions.RESET_PASSWORD_LOADING
    });

    const payload = {
        userId,
        password,
        resetToken
    }

    axiosInstance.post('/user/api/v1/reset/password', payload)
        .then((res) => {
            dispatch({
                type: actions.RESET_PASSWORD_LOADING,
                payload: res.data.result
            });
        }).catch((err : any)  => {
            dispatch({
                type: actions.RESET_PASSWORD_FAILED,
                payload: err?.response.data?.result
            })
        })
}

export const changeMyPassword = ({ userId, oldPassword, newPassword }: any) => (dispatch : any) => {
    dispatch({
        type: actions.LOGIN_USER_LOADING
    });

    const payload = {
        userId,
        oldPassword,
        newPassword
    }

    axiosInstance.post('user/api/v1/first-time/change-password', payload)
        .then((res) => {
            dispatch({
                type: actions.LOGIN_USER_SUCCESS,
                payload: res.data.result
            });
        }).catch((err : any)  => {
            dispatch({
                type: actions.LOGIN_USER_FAILED,
                payload: err?.response.data.message?.friendlyMessage
            })
        })
}
