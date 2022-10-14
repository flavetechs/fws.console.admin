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
       
        case actions.RESPOND_DECISION_DIALOG:
            return {
                ...state,
                dialogResponse: payload
            }
       
        default:
            return state
    }
}