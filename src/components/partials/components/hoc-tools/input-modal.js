import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { respondModal, showHideAddFolderModal } from "../../../../store/actions/alert-actions";

export function InputModal(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
  const {showAddFolderModal } = state.alert;
  return( 
<Modal
  show={showAddFolderModal}
  onHide={() => {
    showHideAddFolderModal(false)(dispatch);
    respondModal("cancel")(dispatch);
  }}
  id="viewModal"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title className="h5">{props.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>{props.children}</Modal.Body>
</Modal>

)
}