import swal from 'sweetalert';
import { actions } from '../action-types/alert-action-types';

export const successModal= (message : any) => {swal("Successful",message, "success")} 

export const errorModal= (message : any) => {swal("Error",message, "error")} 

export const deleteDialogModal= (message : any) => {swal({
    title: "Are you sure delete this?",
    text: "Once deleted, you will not be able to recover this",
    icon: "warning",
    buttons: [true],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal(message, {
        icon: "success",
      });
      respondToDeleteDialog('continue')
    } else {
      swal("Your item is safe!");
      respondToDeleteDialog('')
    }
  });} 

  export const decisionDialogModal= (title : any,text : any,message : any,message2: any) => {swal({
    title: title,
    text: text,
    icon: "warning",
    buttons: [true],
    dangerMode: true,
  })
  .then((willDo) => {
    if (willDo) {
      swal(message, {
        icon: "success",
      });
      respondDialog('continue')
    } else {
      swal(message2);
      respondDialog('')
    }
  });} 
  export const respondToDeleteDialog = (value: any) =>(dispatch: any) => {
    dispatch({
        type: actions.DELETE_DIALOG_RESPPONSE,
        payload: value
    })
}

export const respondDialog = (value: any) => (dispatch: any)=> {
    dispatch({
        type: actions.RESPOND_DECISION_DIALOG,
        payload: value
    })
}