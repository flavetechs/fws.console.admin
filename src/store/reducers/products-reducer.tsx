import { actions } from "../action-types/products-action-types";
import { IProductState } from "../Models/ProductState";
import { _state } from "../states/products.state";

export const productReducer = (state : IProductState = _state, { type, payload }: any) => {
    switch (type) {
        case actions.FETCH_PRODUCTS_LOADING:
            return {
              ...state,
              loading: true,
              message: "",
              isSuccessful: false,
            };
          case actions.FETCH_PRODUCTS_SUCCESS:
            return {
              ...state,
              loading: false,
              products: payload,
            };
          case actions.FETCH_PRODUCTS_FAILED:
            return {
              ...state,
              loading: false,
              message: payload,
              isSuccessful: false,
            };
           
            case actions.FETCH_USER_PRODUCTS_LOADING:
            return {
              ...state,
              loading: true,
              message: "",
              isSuccessful: false,
            };
          case actions.FETCH_USER_PRODUCTS_SUCCESS:
            return {
              ...state,
              loading: false,
              userProducts: payload,
            };
          case actions.FETCH_USER_PRODUCTS_FAILED:
            return {
              ...state,
              loading: false,
              message: payload,
              isSuccessful: false,
            };
          
            default:
                return state
    }}