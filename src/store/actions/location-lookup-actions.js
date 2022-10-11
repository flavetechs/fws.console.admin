import axiosInstance from "../../axios/axiosInstance";
import { actions } from "../action-types/location-lookup-action-types";

export const getCountryLookupList = () => (dispatch) => {
    dispatch({
        type: actions.FETCH_COUNTRY_LOOKUP_LOADING
    });

    axiosInstance.get('/fws/lookups/api/v1/get-all/country-lookup')
        .then((res) => {
            dispatch({
                type: actions.FETCH_COUNTRY_LOOKUP_SUCCESS,
                payload: res.data.result
            });
        }).catch((err) => {
            dispatch({
                type: actions.FETCH_COUNTRY_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            })
        })
}

export const getStateLookupList = (countryId) => (dispatch) => {
    dispatch({
        type: actions.FETCH_STATE_LOOKUP_LOADING
    });
    axiosInstance.get(`/fws/lookups/api/v1/get-all/state-lookup?countryId=${countryId}`)
        .then((res) => {
            dispatch({
                type: actions.FETCH_STATE_LOOKUP_SUCCESS,
                payload: res.data.result
            });
        }).catch((err) => {
            dispatch({
                type: actions.FETCH_STATE_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            })
        })
}

export const getCityLookupList = (stateId) => (dispatch) => {
    dispatch({
        type: actions.FETCH_CITY_LOOKUP_LOADING
    });
    axiosInstance.get(`/fws/lookups/api/v1/get-all/city-lookup?stateId=${stateId}`)
        .then((res) => {
            dispatch({
                type: actions.FETCH_CITY_LOOKUP_SUCCESS,
                payload: res.data.result
            });
        }).catch((err) => {
            dispatch({
                type: actions.FETCH_CITY_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            })
        })
}

export const createCountry = (form) => (dispatch) => {
    dispatch({
        type: actions.CREATE_COUNTRY_LOOKUP_LOADING
    });
    axiosInstance.post('/fws/lookups/api/v1/create/country-lookup', form)
        .then((res) => {
            dispatch({
                type: actions.CREATE_COUNTRY_LOOKUP_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            getCountryLookupList()(dispatch)
            // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
        }).catch((err) => {
            dispatch({
                type: actions.CREATE_COUNTRY_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}

export const createState = (values) => (dispatch) => {
    dispatch({
        type: actions.CREATE_STATE_LOOKUP_LOADING
    });

    axiosInstance.post('/fws/lookups/api/v1/create/state-lookup', values)
        .then((res) => {
            console.log('res', res);
            dispatch({
                type: actions.CREATE_STATE_LOOKUP_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
        }).catch((err) => {
            console.log('err', err);
            dispatch({
                type: actions.CREATE_STATE_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}


// export const createState = (values) => (dispatch) => {
//     dispatch({
//         type: actions.CREATE_STATE_LOOKUP_LOADING
//     }); 
//     axiosInstance.post('/fws/lookups/api/v1/create/state-lookup', values)
//         .then((res) => {
//             console.log('res', res);
//             dispatch({
//                 type: actions.CREATE_STATE_LOOKUP_SUCCESS,
//                 payload: res.data.message.friendlyMessage
//             });
//             // getCountryLookupList()(dispatch)
//             // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
//         }).catch((err) => {
//             console.log('err', err);
//             dispatch({
//                 type: actions.CREATE_STATE_LOOKUP_FAILED,
//                 payload: err.response.data.message.friendlyMessage
//             });
//             // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
//         });
// }

export const createCity = (form) => (dispatch) => {
    dispatch({
        type: actions.CREATE_CITY_LOOKUP_LOADING
    });
    axiosInstance.post('fws/lookups/api/v1/create/city-lookup', form)
        .then((res) => {
            dispatch({
                type: actions.CREATE_CITY_LOOKUP_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            getCountryLookupList()(dispatch)
            // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
        }).catch((err) => {
            dispatch({
                type: actions.CREATE_CITY_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}


export const updateCountry = (country) => (dispatch) => {
    dispatch({
        type: actions.UPDATE_COUNTRY_LOOKUP_LOADING
    });

    axiosInstance.post('fws/lookups/api/v1/update/country-lookup', country)
        .then((res) => {
            dispatch({
                type: actions.UPDATE_COUNTRY_LOOKUP_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
        }).catch((err) => {
            dispatch({
                type: actions.UPDATE_COUNTRY_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}

export const updateState = (states) => (dispatch) => {
    dispatch({
        type: actions.UPDATE_STATE_LOOKUP_LOADING
    });

    axiosInstance.post('fws/lookups/api/v1/update/state-lookup', states)
        .then((res) => {
            dispatch({
                type: actions.UPDATE_STATE_LOOKUP_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
        }).catch((err) => {
            dispatch({
                type: actions.UPDATE_STATE_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}

export const updateCity = (city) => (dispatch) => {
    dispatch({
        type: actions.UPDATE_CITY_LOOKUP_LOADING
    });

    axiosInstance.post('fws/lookups/api/v1/update/city-lookup', city)
        .then((res) => {
            dispatch({
                type: actions.UPDATE_CITY_LOOKUP_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
        }).catch((err) => {
            dispatch({
                type: actions.UPDATE_CITY_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}





export const deleteCountryItem = (countryId) => (dispatch) => {
    dispatch({
        type: actions.DELETE_COUNTRY_LOOKUP_LOADING
    });
    const payload = {
        items: countryId
    }

    axiosInstance.post('/fws/lookups/api/v1/delete/country-lookup', payload)
        .then((res) => {
            dispatch({
                type: actions.DELETE_COUNTRY_LOOKUP_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            getCountryLookupList()(dispatch);
            // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
        }).catch((err) => {
            dispatch({
                type: actions.DELETE_COUNTRY_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}

export const deleteStateItem = (stateId) => (dispatch) => {
    dispatch({
        type: actions.DELETE_STATE_LOOKUP_LOADING
    });
    const payload = {
        items: stateId
    }

    axiosInstance.post('/fws/lookups/api/v1/delete/state-lookup', payload)
        .then((res) => {
            dispatch({
                type: actions.DELETE_STATE_LOOKUP_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            getCountryLookupList()(dispatch);
            // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
        }).catch((err) => {
            dispatch({
                type: actions.DELETE_STATE_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}

export const deleteCityItem = (cityId) => (dispatch) => {
    dispatch({
        type: actions.DELETE_CITY_LOOKUP_LOADING
    });
    const payload = {
        items: cityId
    }
    axiosInstance.post('/fws/lookups/api/v1/delete/city-lookup', payload)
        .then((res) => {
            dispatch({
                type: actions.DELETE_CITY_LOOKUP_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            getCountryLookupList()(dispatch);
            // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
        }).catch((err) => {
            dispatch({
                type: actions.DELETE_CITY_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}

