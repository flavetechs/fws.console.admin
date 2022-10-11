import { actions } from "../action-types/smservice-action-types";
import { _state } from "../states/smservice.state";

export const smserviceReducer = (state = _state, { type, payload }) => {
        switch (type) {
            case actions.FETCH_SMS_LOADING:
                return {
                  ...state,
                  loading: true,
                  message: "",
                  isSuccessful: false,
                };
              case actions.FETCH_SMS_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  smservice: payload,
                };
              case actions.FETCH_SMS_FAILED:
                return {
                  ...state,
                  loading: false,
                  message: payload,
                  isSuccessful: false,
                };
                case actions.CREATE_SMS_LOADING:
                    return {
                      ...state,
                      loading: true,
                      isSuccessful: false,
                      message: "",
                    };
                  case actions.CREATE_SMS_SUCCESS:
                    return {
                      ...state,
                      isSuccessful: true,
                      loading: false,
                      message: payload,
                    };
                  case actions.CREATE_SMS_FAILED:
                    return {
                      ...state,
                      isSuccessful: false,
                      loading: false,
                      message: payload,
                    };
              
                  case actions.UPDATE_SMS_LOADING:
                    return {
                      ...state,
                      loading: true,
                      isSuccessful: false,
                      message: "",
                    };
                  case actions.UPDATE_SMS_SUCCESS:
                    return {
                      ...state,
                      loading: false,
                      message: payload,
                      isSuccessful: true,
                    };
                  case actions.UPDATE_SMS_FAILED:
                    return {
                      ...state,
                      loading: false,
                      message: payload,
                      isSuccessful: false,
                    };
              
                default:
                    return state
        }}