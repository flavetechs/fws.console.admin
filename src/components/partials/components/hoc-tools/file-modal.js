import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { respondModal, showHideAddFileModal } from "../../../../store/actions/alert-actions";

export function FileModal(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
  const {showAddFileModal } = state.alert;
  return( 
<Modal
  show={showAddFileModal}
  onHide={() => {
    showHideAddFileModal(false)(dispatch);
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