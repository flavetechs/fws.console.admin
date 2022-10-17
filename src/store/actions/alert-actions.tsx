import swal from 'sweetalert';
import { actions } from '../action-types/alert-action-types';

export const successModal= (message : any) => {swal("Successful",message, "success")} 

export const errorModal= (message : any) => {swal("Error",message, "error")} 

export const deleteDialogModal= () =>(dispatch: any) => {swal({
    title: "Are you sure delete this?",
    text: "Once deleted, you will not be able to recover this",
    icon: "warning",
    buttons: ["cancel",true],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      // swal(message, {
      //   icon: "success",
      // });
      respondToDeleteDialog('continue')(dispatch)
    } else {
      swal("Your item is safe!");
      respondToDeleteDialog('')(dispatch)
    }
  });} 

  export const decisionDialogModal= (title : any,text : any,message : any) =>(dispatch: any) => {
    swal({
    title: title,
    text: text,
    icon: "warning",
    buttons: ["cancel",true],
    dangerMode: true,
  })
  .then((willDo) => {
    if (willDo) {
      // swal(message, {
      //   icon: "success",
      // });
      respondDialog('continue')(dispatch)
    } else {
      swal(message);
      respondDialog('')(dispatch)
    }
  });} 

  export const customisedModal= (text : any,content:any)=>(dispatch :any)=> {
    swal(text, {
      content: content,
      buttons: ["cancel",true],
    })
    .then((value) => {
      dispatch({
        type: actions.CUSTOMISED_MODAL_RESPONSE,
        payload: value
    })
    });
  }

//   export const customisedValueForModals = (value: any) =>(dispatch: any) => {
//     dispatch({
//         type: actions.CUSTOMISED_MODAL_RESPONSE,
//         payload: value
//     })
// }

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