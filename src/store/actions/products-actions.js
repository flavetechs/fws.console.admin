import axiosInstance from "../../axios/axiosInstance";
import { actions } from "../action-types/products-action-types";

export const getAllProducts = () => (dispatch) => {
    dispatch({
        type: actions.FETCH_PRODUCTS_LOADING,
    });   
    axiosInstance.get(`/fws/products/api/v1/get-all-products`)
        .then((res) => {
            dispatch({
                type: actions.FETCH_PRODUCTS_SUCCESS,
                payload: res.data.result,
            });
        })
        .catch((err) => {
            dispatch({
                type: actions.FETCH_PRODUCTS_FAILED,
                payload: err.response.data.result,
            });
        });
};

export const getAllUserProducts = () => (dispatch) => {
    dispatch({
        type: actions.FETCH_USER_PRODUCTS_LOADING,
    });   
    axiosInstance.get(`/fws/products/api/v1/get-user-products`)
        .then((res) => {
            dispatch({
                type: actions.FETCH_USER_PRODUCTS_SUCCESS,
                payload: res.data.result,
            });
        })
        .catch((err) => {
            dispatch({
                type: actions.FETCH_USER_PRODUCTS_FAILED,
                payload: err.response.data.result,
            });
        });
};