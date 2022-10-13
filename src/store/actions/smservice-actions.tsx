import axiosInstance from "../../axios/axiosInstance";
import { actions } from "../action-types/smservice-action-types";
import { errorModal, successModal } from "./alert-actions";

export const getAllSms = () => (dispatch: any) => {
    dispatch({
        type: actions.FETCH_SMS_LOADING,
    });   
    axiosInstance.get(`/fws/products/api/v1/get-all-products`)
        .then((res) => {
            dispatch({
                type: actions.FETCH_SMS_SUCCESS,
                payload: res.data.result,
            });
        })
        .catch((err) => {
            dispatch({
                type: actions.FETCH_SMS_FAILED,
                payload: err.response.data.result,
            });
        });
};


export const createSms = (values: any) => (dispatch: any) => {
    dispatch({
        type: actions.CREATE_SMS_LOADING
    });
                
    axiosInstance.post('/fws/sms/api/v1/create-sms',  values)
        .then((res) => {
            dispatch({
                type: actions.CREATE_SMS_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            successModal(res.data.message.friendlyMessage)
            getAllSms()(dispatch);
        }).catch((err) => {
            dispatch({
                type: actions.CREATE_SMS_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
           errorModal(err.response.data.message.friendlyMessage)
        });
}

export const updateSms = (values: any) => (dispatch: any) => {
    dispatch({
        type: actions.UPDATE_SMS_LOADING
    });
                
    axiosInstance.post('/fws/sms/api/v1/update-sms',  values)
        .then((res) => {
            dispatch({
                type: actions.UPDATE_SMS_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            //showSuccessToast(res.data.message.friendlyMessage)(dispatch)
            getAllSms()(dispatch);
        }).catch((err) => {
            dispatch({
                type: actions.UPDATE_SMS_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            //showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}

export const getCountries = () => (dispatch: any) => {
    dispatch({
        type: actions.FETCH_COUNTRY_LOADING,
    });

    axiosInstance.get(`/fws/lookups/api/v1/get/country-select`)
        .then(response => {
            dispatch({
                type: actions.FETCH_COUNTRY_SUCCESS,
                payload: response.data.result
            });
        }).catch(err => {
            dispatch({
                type: actions.FETCH_COUNTRY_FAILED,
                payload: err.response.data.result
            });
        })
}

export const getStates = (country: any) => (dispatch: any) => {
    dispatch({
        type: actions.FETCH_STATE_LOADING,
    });

    axiosInstance.get(`/fws/lookups/api/v1/get/state-select?country=${country}`)
        .then(response => {
            dispatch({
                type: actions.FETCH_STATE_SUCCESS,
                payload: response.data.result
            });

        }).catch(err => {
            dispatch({
                type: actions.FETCH_STATE_FAILED,
                payload: err.response.data.result
            });
        })
}

export const validateBaseUrlSuffix = (suffix: any) => (dispatch: any) => {
    dispatch({
        type: actions.VALIDATE_BASE_URL_SUFFIX_LOADING,
    });
const payload={
    suffix
}
    axiosInstance.post(`fws/sms/api/v1/validate-baseurl-suffix`,payload)
        .then(response => {
            dispatch({
                type: actions.VALIDATE_BASE_URL_SUFFIX_SUCCESS,
                payload: response.data.result
            });

        }).catch(err => {
            dispatch({
                type: actions.VALIDATE_BASE_URL_SUFFIX_FAILED,
                payload: err.response.data.result
            });
})
}