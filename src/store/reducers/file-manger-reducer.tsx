import { actions } from "../action-types/file-manager-action-types"
import { IFileManagerState } from "../Models/FileManagerState"
import { _state } from "../states/file-manager-state"

export const fileManagerReducer = (state: IFileManagerState = _state, { type, payload }: any) => {
    switch (type) {

        case actions.FILE_MANAGER_LOADING:
            return {
                ...state,
                loading: true,
                isSuccessful: false,
                message: ''
            }

        case actions.FILE_MANAGER_FAILED:
            return {
                ...state,
                isSuccessful: false,
                loading: false,
                message: ''
            }

            case actions.FETCH_FOLDERS_SUCCESS:
                return {
                    ...state,
                    isSuccessful: false,
                    loading: false,
                    message: '',
                    folders:payload.data,
                    filterProps: payload,
                }

                case actions.FETCH_FILES_SUCCESS:
                    return {
                        ...state,
                        isSuccessful: false,
                        loading: false,
                        message: '',
                        files:payload.data,
                        filterProps: payload,
                    }

                    case actions.FETCH_FILE_BY_FOLDERID_SUCCESS:
                        return {
                            ...state,
                            isSuccessful: false,
                            loading: false,
                            message: '',
                            files:payload.data,
                            filterProps: payload,
                        }


                    case actions.CREATE_FOLDER_SUCCESS:
                    return {
                        ...state,
                        isSuccessful: true,
                        loading: false,
                        message: payload
                      };

                      case actions.CREATE_FILE_SUCCESS:
                        return {
                            ...state,
                            isSuccessful: true,
                            loading: false,
                            message: payload
                          };

                          case actions.UPDATE_FOLDER_SUCCESS:
                            return {
                                ...state,
                                isSuccessful: true,
                                loading: false,
                                message: payload
                              };
        
                              case actions.UPDATE_FILE_SUCCESS:
                                return {
                                    ...state,
                                    isSuccessful: true,
                                    loading: false,
                                    message: payload
                                  };

                                  case actions.DELETE_FOLDER_SUCCESS:
                                    return {
                                        ...state,
                                        isSuccessful: true,
                                        loading: false,
                                        message: payload
                                      };
                
                                      case actions.DELETE_FILE_SUCCESS:
                                        return {
                                            ...state,
                                            isSuccessful: true,
                                            loading: false,
                                            message: payload
                                          };

                                          case actions.DOWNLOAD_FILE_SUCCESS:
                                            return {
                                                ...state,
                                                isSuccessful: true,
                                                loading: false,
                                                downloadedFile: payload
                                              };

        default:
            return state
    }
}