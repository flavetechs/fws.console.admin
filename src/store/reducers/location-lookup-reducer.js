import { actions } from "../action-types/location-lookup-action-types";
import { _state } from "../states/location-lookup-state";

export const locationLookupReducer = (state = _state, { type, payload }) => {
  switch (type) {

    case actions.GET_SINGLE_ITEM: {
      const selectedItem = state.countryList.find(d => d.countryId === payload);
      if (selectedItem) {
        return {
          ...state,
          selectedItem
        }
      }
    }
    case actions.PUSH_ITEM_ID:
      var arrayToFilter = [...state.selectedIds, payload]
      return {
        ...state,
        selectedIds: [...new Set(arrayToFilter)],
      };
    case actions.REMOVE_ITEM_ID:
      var filteredIds = filterSelectedIds(state.selectedIds, payload)
      return {
        ...state,
        selectedIds: filteredIds
      }
    case actions.RETURN_ITEM_LIST:
      return {
        ...state,
        countryList: payload,
      };


    //FETCH
    case actions.FETCH_COUNTRY_LOOKUP_LOADING:
      return {
        ...state,
        loading: true,
        message: '',
        isSuccessful: false
      };
    case actions.FETCH_COUNTRY_LOOKUP_SUCCESS:
      return {
        ...state,
        loading: false,
        countryList: payload,
        isSuccessful: true,
      };
    case actions.FETCH_COUNTRY_LOOKUP_FAILED:
      return {
        ...state,
        loading: false,
        message: payload,
        isSuccessful: false,
      };

    case actions.FETCH_STATE_LOOKUP_LOADING:
      return {
        ...state,
        loading: true,
        message: '',
        isSuccessful: false
      };
    case actions.FETCH_STATE_LOOKUP_SUCCESS:
      return {
        ...state,
        loading: false,
        stateList: payload,
        isSuccessful: true,
      };
    case actions.FETCH_STATE_LOOKUP_FAILED:
      return {
        ...state,
        loading: false,
        isSuccessful: false,
        message: payload
      };

    case actions.FETCH_CITY_LOOKUP_LOADING:
      return {
        ...state,
        loading: true,
        message: '',
        isSuccessful: false
      };
    case actions.FETCH_CITY_LOOKUP_SUCCESS:
      return {
        ...state,
        loading: false,
        cityList: payload,
        isSuccessful: true,
      };
    case actions.FETCH_CITY_LOOKUP_FAILED:
      return {
        ...state,
        loading: false,
        isSuccessful: false,
        message: payload
      };

    case actions.CREATE_COUNTRY_LOOKUP_LOADING:
      return {
        ...state,
        loading: true,
        isSuccessful: false,
        message: ''
      };
    case actions.CREATE_COUNTRY_LOOKUP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
        isSuccessful: true,
      };
    case actions.CREATE_COUNTRY_LOOKUP_FAILED:
      return {
        ...state,
        loading: false,
        message: payload,
        isSuccessful: false,
      };


    case actions.CREATE_STATE_LOOKUP_LOADING:
      return {
        ...state,
        loading: true,
        isSuccessful: false,
        message: ''
      };
    case actions.CREATE_STATE_LOOKUP_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        loading: false,
        message: payload
      };
    case actions.CREATE_STATE_LOOKUP_FAILED:
      return {
        ...state,
        isSuccessful: false,
        loading: false,
        message: ''
      };

    case actions.CREATE_CITY_LOOKUP_LOADING:
      return {
        ...state,
        loading: true,
        isSuccessful: false,
        message: ''
      };
    case actions.CREATE_CITY_LOOKUP_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        loading: false,
        message: payload
      };
    case actions.CREATE_CITY_LOOKUP_FAILED:
      return {
        ...state,
        isSuccessful: false,
        loading: false,
        message: ''
      };

    case actions.UPDATE_COUNTRY_LOOKUP_LOADING:
      return {
        ...state,
        loading: true,
        isSuccessful: false,
        message: ''
      };
    case actions.UPDATE_COUNTRY_LOOKUP_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        loading: false,
        message: payload
      };
    case actions.UPDATE_COUNTRY_LOOKUP_FAILED:
      return {
        ...state,
        loading: false,
        message: '',
        isSuccessful: false
      };

    case actions.UPDATE_STATE_LOOKUP_LOADING:
      return {
        ...state,
        loading: true,
        isSuccessful: false,
        message: ''
      };
    case actions.UPDATE_STATE_LOOKUP_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        loading: false,
        message: payload
      };
    case actions.UPDATE_STATE_LOOKUP_FAILED:
      return {
        ...state,
        loading: false,
        message: '',
        isSuccessful: false
      };

    case actions.UPDATE_CITY_LOOKUP_LOADING:
      return {
        ...state,
        loading: true,
        isSuccessful: false,
        message: ''
      };
    case actions.UPDATE_CITY_LOOKUP_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        loading: false,
        message: payload
      };
    case actions.UPDATE_CITY_LOOKUP_FAILED:
      return {
        ...state,
        loading: false,
        message: '',
        isSuccessful: false
      };

    case actions.DELETE_COUNTRY_LOOKUP_LOADING:
      return {
        ...state,
        loading: true,
        isSuccessful: false,
        message: ''
      };
    case actions.DELETE_COUNTRY_LOOKUP_SUCCESS:
      return {
        ...state,
        selectedIds: [],
        message: payload,
        isSuccessful: true,
      };
    case actions.DELETE_COUNTRY_LOOKUP_FAILED:
      return {
        ...state,
        loading: false,
        message: payload,
        isSuccessful: false
      };
    // case actions.DELETE_COUNTRY_LOOKUP_LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //     isSuccessful: false,
    //     message: ''
    //   };
    // case actions.DELETE_COUNTRY_LOOKUP_SUCCESS:
    //   return {
    //     ...state,
    //     selectedIds: [],
    //     message: payload,
    //     isSuccessful: true,
    //   };
    // case actions.DELETE_COUNTRY_LOOKUP_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     message: payload,
    //     isSuccessful: false
    //   };

    case actions.DELETE_STATE_LOOKUP_LOADING:
      return {
        ...state,
        loading: true,
        isSuccessful: false,
        message: ''
      };
    case actions.DELETE_STATE_LOOKUP_SUCCESS:
      return {
        ...state,
        selectedIds: [],
        message: payload,
        isSuccessful: true,
      };
    case actions.DELETE_STATE_LOOKUP_FAILED:
      return {
        ...state,
        loading: false,
        message: payload,
        isSuccessful: false
      };

    case actions.DELETE_CITY_LOOKUP_LOADING:
      return {
        ...state,
        loading: true,
        isSuccessful: false,
        message: ''
      };
    case actions.DELETE_CITY_LOOKUP_SUCCESS:
      return {
        ...state,
        selectedIds: [],
        message: payload,
        isSuccessful: true,
      };
    case actions.DELETE_CITY_LOOKUP_FAILED:
      return {
        ...state,
        loading: false,
        message: payload,
        isSuccessful: false
      };

    // case actions.FETCH_SINGLE_STAFF_LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case actions.FETCH_SINGLE_STAFF_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     selectedItem: payload,
    //     submitSuccessful: false,
    //   };
    // case actions.FETCH_SINGLE_STAFF_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     selectedItem: null,
    //   };


    // REDUCERS

    default:
      return state;
  }
}
function filterSelectedIds(arr, value) {
  return arr.filter(function (ele) {
    return ele !== value;
  });
}
