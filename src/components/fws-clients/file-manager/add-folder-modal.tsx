import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { createFolder, updateFolder } from "../../../store/actions/file-manager-actions";
import { respondModal, showHideAddFolderModal } from "../../../store/actions/alert-actions";
import { InputModal } from "../../partials/components/hoc-tools/input-modal";


export function AddFolderModal(props:any) {
  const dispatch = useDispatch();
  const [filename, setFilename] = useState('');

  // ACCESSING STATE FROM REDUX STORE
  const state = useSelector((state:any) => state);
  const { showAddFolderModal } = state.alert;
  // ACCESSING STATE FROM REDUX STORE


  React.useEffect(() => {
    showAddFolderModal && props.folderName &&
   setFilename(props.folderName)
  }, [props]);

  React.useEffect(() => {
    if (showAddFolderModal === false) {
      setFilename('')
    }
  }, [showAddFolderModal]);


  return (
    <>
      <InputModal title={props.folderId ? "Update Folder" : "Add Folder"}>
        <div>
          <div className="mb-3">
          <label className="">File Name: </label>
          <input type="text" value={filename} className="form-control" placeholder="e.g Images" onChange={(e:any)=>{setFilename(e.target.value)}} />
        </div>
          <div className="d-flex justify-content-end">
            <Button
              variant="danger"
              className="mx-2"
              onClick={() => {
                showHideAddFolderModal(false)(dispatch);
                respondModal("cancel")(dispatch);
                props.setTeacherClassNoteId('');
                props.setNoteSendModal(false)
              }}
            >
              Cancel
            </Button>
            <Button variant="primary" className="" onClick={() => {
               showHideAddFolderModal(false)(dispatch);
              props.folderId ?  updateFolder({id:props.folderId,filename})(dispatch)
              : createFolder({filename})(dispatch)
            }}>
              Send
            </Button>
          </div>
        </div>
      </InputModal>
    </>
  );
}
