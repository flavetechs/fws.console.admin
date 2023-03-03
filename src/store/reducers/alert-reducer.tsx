import { actions } from "../action-types/alert-action-types"
import { IAlertState } from "../Models/AlertState"
import { _state } from "../states/alert-state"
export const alertReducer = (state : IAlertState =_state, { type, payload }: any) => {
    switch (type) {
     
        case actions.DELETE_DIALOG_RESPPONSE:
            return {
                ...state,
                deleteDialogResponse: payload
            }

            case actions.CUSTOMISED_MODAL_RESPONSE:
                return {
                    ...state,
                    customisedModalValue: payload
                }
       
        case actions.RESPOND_DECISION_DIALOG:
            return {
                ...state,
                dialogResponse: payload
            }

            case actions.SHOW_HIDE_MODAL:
            return {
                ...state,
                showModal: payload
            }
            case actions.SHOW_HIDE_ADD_FOLDER_MODAL:
            return {
                ...state,
                showAddFolderModal: payload
            }

            case actions.SHOW_HIDE_ADD_FILE_MODAL:
                return {
                    ...state,
                    showAddFileModal: payload
                }
    
            case actions.RESPOND_MODAL:
            return {
                ...state,
                modalResponse: payload
            }
            
       
        default:
            return state
    }
}