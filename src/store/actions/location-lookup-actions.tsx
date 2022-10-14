import axiosInstance from "../../axios/axiosInstance"
import { actions } from "../action-types/location-lookup-action-types"

export const pushId = (itemId: any) => {
    return {
        type: actions.PUSH_ITEM_ID,
        payload: itemId
    }
}
export const removeId = (itemId: any) => {
    return {
        type: actions.REMOVE_ITEM_ID,
        payload: itemId
    }
}
export const returnList = (items: any) => (dispatch: any) => {
    dispatch({
        type: actions.RETURN_ITEM_LIST,
        payload: items
    })
}

export const fetchSingleItem = (lookupId: any) => (dispatch: any) => {
    dispatch({
        type: actions.GET_SINGLE_ITEM,
        payload: lookupId
    });

}
export const getCountryLookupList = () => (dispatch: any) => {
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

export const getStateLookupList = (countryId: any) => (dispatch: any) => {
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

export const getCityLookupList = (stateId: any) => (dispatch: any) => {
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

export const createCountry = (form: any) => (dispatch: any) => {
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

export const createState = (values: any) => (dispatch: any) => {
    dispatch({
        type: actions.CREATE_STATE_LOOKUP_LOADING
    });

    axiosInstance.post('/fws/lookups/api/v1/create/state-lookup', values)
        .then((res) => {
            dispatch({
                type: actions.CREATE_STATE_LOOKUP_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
        }).catch((err) => {
            dispatch({
                type: actions.CREATE_STATE_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}

export const createCity = (form: any) => (dispatch: any) => {
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

export const updateCountry = (country: any) => (dispatch: any) => {
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

export const updateState = (states: any) => (dispatch: any) => {
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

export const updateCity = (city: any) => (dispatch: any) => {
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

export const deleteCountryItem = (countryId: any) => (dispatch: any) => {
    dispatch({
        type: actions.DELETE_COUNTRY_LOOKUP_LOADING
    });
    const payload = {
        lookupId: countryId[0]
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

export const deleteStateItem = (stateId: any, countryIdQueryParam: any) => (dispatch: any) => {
    dispatch({
        type: actions.DELETE_STATE_LOOKUP_LOADING
    });
    const payload = {
        lookupId: stateId[0]
    }

    axiosInstance.post('/fws/lookups/api/v1/delete/state-lookup', payload)
        .then((res) => {
            dispatch({
                type: actions.DELETE_STATE_LOOKUP_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            getStateLookupList(countryIdQueryParam)(dispatch);
            // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
        }).catch((err) => {
            dispatch({
                type: actions.DELETE_STATE_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}

export const deleteCityItem = (cityId: any, stateIdQueryParam: any) => (dispatch: any) => {
    dispatch({
        type: actions.DELETE_CITY_LOOKUP_LOADING
    });
    const payload = {
        lookupId: cityId[0]
    }
    axiosInstance.post('/fws/lookups/api/v1/delete/city-lookup', payload)
        .then((res) => {
            dispatch({
                type: actions.DELETE_CITY_LOOKUP_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            getCityLookupList(stateIdQueryParam)(dispatch);
            // showSuccessToast(res.data.message.friendlyMessage)(dispatch)
        }).catch((err) => {
            dispatch({
                type: actions.DELETE_CITY_LOOKUP_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
            // showErrorToast(err.response.data.message.friendlyMessage)(dispatch)
        });
}