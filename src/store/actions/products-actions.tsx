import axiosInstance from "../../axios/axiosInstance";
import { actions } from "../action-types/products-action-types";

export const getAllProducts = () => (dispatch: any) => {
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

export const getSingleProduct = (productId:any) => (dispatch: any) => {
    dispatch({
        type: actions.FETCH_SINGLE_PRODUCT_LOADING,
    });   
    axiosInstance.get(`/fws/products/api/v1/get-single-product?productId=${productId}`)
        .then((res) => {
            dispatch({
                type: actions.FETCH_SINGLE_PRODUCT_SUCCESS,
                payload: res.data.result,
            });
        })
        .catch((err : any)  => {
            dispatch({
                type: actions.FETCH_SINGLE_PRODUCT_FAILED,
                payload: err?.response.data.result,
            });
        });
};

export const getAllUserProducts = () => (dispatch: any) => {
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
        .catch((err : any)  => {
            dispatch({
                type: actions.FETCH_USER_PRODUCTS_FAILED,
                payload: err?.response.data.result,
            });
        });
};

export const getSingleUserProduct = (userProductId:any) => (dispatch: any) => {
    dispatch({
        type: actions.FETCH_SINGLE_USER_PRODUCT_LOADING,
    });   
    axiosInstance.get(`/fws/products/api/v1/get-single/user-product?userProductId=${userProductId}`)
        .then((res) => {
            dispatch({
                type: actions.FETCH_SINGLE_USER_PRODUCT_SUCCESS,
                payload: res.data.result,
            });
        })
        .catch((err : any)  => {
            dispatch({
                type: actions.FETCH_SINGLE_USER_PRODUCT_FAILED,
                payload: err?.response.data.result,
            });
        });
};