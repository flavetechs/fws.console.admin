import swal from 'sweetalert';

export const successModal= (message) => {swal("Successful",message, "success")} 

export const errorModal= (message) => {swal("Error",message, "error")} 

export const deleteDialogModal= (message) => {swal({
    title: "Are you sure delete this?",
    text: "Once deleted, you will not be able to recover this",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal(message, {
        icon: "success",
      });
    } else {
      swal("Your item is safe!");
    }
  });} 

  export const decisionDialogModal= (title,text,message,message2) => {swal({
    title: title,
    text: text,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal(message, {
        icon: "success",
      });
    } else {
      swal(message2);
    }
  });} 