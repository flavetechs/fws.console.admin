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

                    case actions.FETCH_COUNTRY_LOADING:
                      return {
                        ...state,
                        loading: true,
                      };
                
                    case actions.FETCH_COUNTRY_SUCCESS:
                      return {
                        ...state,
                        loading: false,
                        countries: payload,
                      };
                    case actions.FETCH_COUNTRY_FAILED:
                      return {
                        ...state,
                        loading: false,
                        countries: [],
                      };
                
                    case actions.FETCH_STATE_LOADING:
                      return {
                        ...state,
                        loading: true,
                      };
                    case actions.FETCH_STATE_SUCCESS:
                      return {
                        ...state,
                        loading: false,
                        states: payload,
                      };
                
                    case actions.FETCH_STATE_FAILED:
                      return {
                        ...state,
                        loading: false,
                        states: [],
                      };
                
                    case actions.FETCH_CITY_LOADING:
                      return {
                        ...state,
                        loading: true,
                      };
                    case actions.FETCH_CITY_SUCCESS:
                      return {
                        ...state,
                        loading: false,
                        cities: payload,
                      };
                
                    case actions.FETCH_CITY_FAILED:
                      return {
                        ...state,
                        loading: false,
                        cities: [],
                      };
                
                
              
                default:
                    return state
        }}