import { actions } from "../action-types/products-action-types";
import { _state } from "../states/products.state";

export const productReducer = (state = _state, { type, payload }) => {
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