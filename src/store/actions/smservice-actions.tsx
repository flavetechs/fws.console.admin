import axiosInstance from "../../axios/axiosInstance";
import { actions } from "../action-types/smservice-action-types";
import { errorModal, successModal } from "./alert-actions";
import { getAllUserProducts } from "./products-actions";

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
        .catch((err :any) => {
            dispatch({
                type: actions.FETCH_SMS_FAILED,
                payload: err?.response.data.result,
            });
        });
};


export const createSms = (formData: any) => (dispatch: any) => {
    dispatch({
        type: actions.CREATE_SMS_LOADING
    });
                
    axiosInstance.post('/fws/sms/api/v1/create-sms',  formData)
        .then((res) => {
            dispatch({
                type: actions.CREATE_SMS_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            successModal(res.data.message.friendlyMessage)
            getAllSms()(dispatch);
        }).catch((err :any) => {
            dispatch({
                type: actions.CREATE_SMS_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
           errorModal(err?.response.data.message.friendlyMessage)
        });
}

export const updateSms = (formData: any) => (dispatch: any) => {
    dispatch({
        type: actions.UPDATE_SMS_LOADING
    });
                
    axiosInstance.post('/fws/sms/api/v1/update-sms',  formData)
        .then((res) => {
            dispatch({
                type: actions.UPDATE_SMS_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            successModal(res.data.message.friendlyMessage)
            getAllSms()(dispatch);
        }).catch((err : any)  => {
            dispatch({
                type: actions.UPDATE_SMS_FAILED,
                payload: err?.response.data.message.friendlyMessage
            });
            errorModal(err.response.data.message.friendlyMessage)
        });
}

export const exportPins = (numberOfPins: number,clientId :string) => (dispatch: any) => {
    dispatch({
        type: actions.EXPORT_PINS_LOADING
    });
 const payload={
    numberOfPins,
    clientId
 }

 
    axiosInstance.post('fws/sms/api/v1/export-pins',  payload)
        .then((res) => {
            dispatch({
                type: actions.EXPORT_PINS_SUCCESS,
                payload: res.data.result
            });
         
        }).catch((err :any) => {
            dispatch({
                type: actions.EXPORT_PINS_FAILED,
                payload: err?.response.data.result
            });
          
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
        }).catch((err :any) => {
            dispatch({
                type: actions.FETCH_COUNTRY_FAILED,
                payload: err?.response.data.result
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

        }).catch((err :any) => {
            dispatch({
                type: actions.FETCH_STATE_FAILED,
                payload: err?.response.data.result
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

        }).catch((err :any) => {
            dispatch({
                type: actions.VALIDATE_BASE_URL_SUFFIX_FAILED,
                payload: err?.response.data.result
            });
})
}

export const resetCreateSuccessful = () => (dispatch: any) => {
    dispatch({
        type: actions.RESET_CREATE_SUCCESSFUL,
    });

}