import { actions } from "../action-types/smservice-action-types";
import { ISmserviceState } from "../Models/SmserviceState";
import { _state } from "../states/smservice.state";

export const smserviceReducer = (state : ISmserviceState = _state, { type, payload }: any) => {
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
                  isSuccessful: true,
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
                      createSuccessful: false,
                      message: "",
                    };
                  case actions.CREATE_SMS_SUCCESS:
                    return {
                      ...state,
                      createSuccessful:true,
                      loading: false,
                      message: payload,
                    };
                  case actions.CREATE_SMS_FAILED:
                    return {
                      ...state,
                      createSuccessful: false,
                      loading: false,
                      message: payload,
                    };
              
                  case actions.UPDATE_SMS_LOADING:
                    return {
                      ...state,
                      loading: true,
                      createSuccessful: false,
                      message: "",
                    };
                  case actions.UPDATE_SMS_SUCCESS:
                    return {
                      ...state,
                      loading: false,
                      createSuccessful:true,
                      message: payload,
                    };
                  case actions.UPDATE_SMS_FAILED:
                    return {
                      ...state,
                      loading: false,
                      message: payload,
                      createSuccessful: false,
                    };

                    case actions.EXPORT_PINS_LOADING:
                      return {
                        ...state,
                        loading: true,
                        isSuccessful: false,
                      
                      };
                    case actions.EXPORT_PINS_SUCCESS:
                      return {
                        ...state,
                        loading: false,
                        exportPinsCode: payload,
                        isSuccessful: true,
                      };
                    case actions.EXPORT_PINS_FAILED:
                      return {
                        ...state,
                        loading: false,
                        isSuccessful: false,
                      };
  

                    case actions.VALIDATE_BASE_URL_SUFFIX_LOADING:
                      return {
                        ...state,
                        loading: false,
                        validationSuccessful: false,
                      };

                    case actions.VALIDATE_BASE_URL_SUFFIX_SUCCESS:
                      return {
                        ...state,
                        loading: false,
                        baseUrlSuffixValidation: payload,
                        validationSuccessful: false,
                      };

                      case actions.VALIDATE_BASE_URL_SUFFIX_FAILED:
                      return {
                        ...state,
                        loading: false,
                        baseUrlSuffixValidation: payload,
                        validationSuccessful: true,
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
                        case actions.RESET_CREATE_SUCCESSFUL:
                        return {
                          ...state,
                          createSuccessful:false,
                        };
              
                default:
                    return state
        }}