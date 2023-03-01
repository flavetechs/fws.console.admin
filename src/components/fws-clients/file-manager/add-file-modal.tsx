import { Button, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { createFile, updateFile } from "../../../store/actions/file-manager-actions";
import { respondModal, showHideAddFileModal } from "../../../store/actions/alert-actions";
import { FileModal } from "../../partials/components/hoc-tools/file-modal";


export function AddFileModal(props: any) {
  const dispatch = useDispatch();
  const [file, setFile] = useState<any>('');
  const [images, setImages] = useState('');

  // ACCESSING STATE FROM REDUX STORE
  const state = useSelector((state: any) => state);
  const { showAddFileModal } = state.alert;
  // ACCESSING STATE FROM REDUX STORE


  React.useEffect(() => {
    showAddFileModal && props.fileName &&
      setFile(props.fileName)
  }, [props]);

  React.useEffect(() => {
    if (showAddFileModal === false) {
      setFile('')
    }
  }, [showAddFileModal]);

  const ImageDisplay = (event: any) => {
    if (event.target.files[0]) {
      setImages(URL.createObjectURL(event.target.files[0]));
    }
  };
  let fileType: any;
  if (file?.name?.split(".")[1] == "png") { fileType = 0 }
  else if (file?.name?.split(".")[1] == "jpg") { fileType = 1 }
  else if (file?.name?.split(".")[1] == "jpeg") { fileType = 1 }
  else if (file?.name?.split(".")[1]?.includes("doc")) { fileType = 3 }
  else if (file?.name?.split(".")[1]?.includes("xls")) { fileType = 4 }
  else if (file?.name?.split(".")[1]?.includes("txt")) { fileType = 6 }
  else { fileType = 5 }


  console.log("file", file);

  return (
    <>
      <FileModal title={props.fileId ? "Update File" : "Add File"}>
        <div>
          <Row className="mx-5 align-items-center" style={{ margin:"25% 0 25% 0" }}>
            <div className="">
              {file &&
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="button-tooltip-2"> back</Tooltip>}
                >
                  <svg
                    onClick={() => {
                      setFile("");
                    }}
                    style={{ cursor: "pointer" }}
                    className=" text-primary"
                    width="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.165 11.9934L13.1634 11.6393C13.1513 10.2348 13.0666 8.98174 12.9206 8.18763C12.9206 8.17331 12.7613 7.38572 12.6599 7.12355C12.5006 6.74463 12.2126 6.42299 11.8515 6.2192C11.5624 6.0738 11.2592 6 10.9417 6C10.6922 6.01157 10.2806 6.13714 9.98692 6.24242L9.74283 6.33596C8.12612 6.97815 5.03561 9.07656 3.85199 10.3598L3.76473 10.4495L3.37527 10.8698C3.12982 11.1915 3 11.5847 3 12.0077C3 12.3866 3.11563 12.7656 3.3469 13.0718C3.41614 13.171 3.52766 13.2983 3.62693 13.4058L4.006 13.8026C5.31046 15.1243 8.13485 16.9782 9.59883 17.5924C9.59883 17.6057 10.5086 17.9857 10.9417 18H10.9995C11.6639 18 12.2846 17.6211 12.6021 17.0086C12.6888 16.8412 12.772 16.5132 12.8352 16.2252L12.949 15.6813C13.0788 14.8067 13.165 13.465 13.165 11.9934ZM19.4967 13.5183C20.3269 13.5183 21 12.8387 21 12.0004C21 11.1622 20.3269 10.4825 19.4967 10.4825L15.7975 10.8097C15.1463 10.8097 14.6183 11.3417 14.6183 12.0004C14.6183 12.6581 15.1463 13.1912 15.7975 13.1912L19.4967 13.5183Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </OverlayTrigger>
              }
            </div>
            {file?.type?.includes('image') ?
              <div>
                <img
                  className=" img-fluid "
                  id="displayImg"
                  src={images}
                  alt="file"
                />
              </div>
              
          :    //<img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/pdf.svg" className="img-fluid" alt="pdf.svg" loading="lazy" />
                file?.name?.split(".")[1]?.includes("xls") ?
                 <div className="p-2 px-5 card-thumbnail bg-light" style={{width:"50%",margin:"0 25% 0 25%"}}>
                  <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/excel.svg" className="img-fluid " alt="excel.svg" loading="lazy" />
                  <h5 className="text-center">{file.name}</h5>
                  </div>
                    : file?.name?.split(".")[1]?.includes("doc") ? 
                    <div className="p-2 px-5 card-thumbnail bg-light" style={{width:"50%",margin:"0 25% 0 25%"}}>
                      <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/word.svg" className="img-fluid" alt="word.svg" loading="lazy" />
                      <h5 className="text-center">{file.name}</h5>
                      </div>
                        // <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/ppt.svg" className="img-fluid" alt="ppt.svg" loading="lazy" />
                        : file?.name?.split(".")[1]?.includes("txt") ? 
                        <div className="p-2 px-5 card-thumbnail bg-light" style={{width:"50%",margin:"0 25% 0 25%"}}>
                          <svg
                            width="80"
                            viewBox="0 0 113 146"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M110.667 47.9166L64.5833 1.83333C63.4124 0.660896 61.8237 0.00145877 60.1667 0H22.9167C16.8388 0 11.0098 2.41443 6.71213 6.71213C2.41443 11.0098 0 16.8388 0 22.9167V122.917C0 128.995 2.41443 134.823 6.71213 139.121C11.0098 143.419 16.8388 145.833 22.9167 145.833H89.5833C95.6612 145.833 101.49 143.419 105.788 139.121C110.086 134.823 112.5 128.995 112.5 122.917V52.0833C112.434 50.5133 111.78 49.0257 110.667 47.9166ZM66.6667 16.6822L95.8178 45.8333H66.6667V16.6822ZM89.5833 137.984H22.9167C20.154 137.984 14.0175 133.01 12.064 131.056C10.1104 129.103 7.84884 125.679 7.84884 122.917V22.9167C7.84884 20.154 10.1104 14.405 12.064 12.4515C14.0175 10.4979 20.154 7.84883 22.9167 7.84883H58.8178V47.4322C58.8394 49.083 59.7337 50.8189 60.9012 51.9863C62.0686 53.1538 63.4169 53.6606 65.0678 53.6822H104.651V122.917C104.651 125.679 102.39 131.428 100.436 133.382C98.4825 135.335 92.346 137.984 89.5833 137.984Z"
                                fill="white"
                            />
                        </svg>
                        <h5 className="text-center">{file.name}</h5>
                        </div>
              : !file ?
                <h4 className="uppy-Dashboard-AddFiles-title">Drop files here or

                  <span className="mx-1 text-primary"><label htmlFor="files" style={{ cursor: 'pointer' }}> <input
                    type="file"
                    id="files"
                    style={{ display: "none" }}
                    name="files"
                    accept=".xlsx, .xls,.txt,image/jpeg,image/jpg,image/png,.doc,.docx"
                    className="file-upload form-control"
                    data-original-title="upload photos"
                    onChange={(event: any) => {
                      setFile(
                        event.target.files[0]
                      );
                      ImageDisplay(event);
                    }}
                  />

                    browse files </label></span>

                </h4>
                : <h3 className="mx-5">{file.name}</h3>
            }
          </Row>
        </div>

        <div className="d-flex justify-content-end">
          <Button
            variant="danger"
            className="mx-2"
            onClick={() => {
              showHideAddFileModal(false)(dispatch);
              respondModal("cancel")(dispatch);
              props.setTeacherClassNoteId('');
              props.setNoteSendModal(false)
            }}
          >
            Cancel
          </Button>
          <Button variant="primary" className="" onClick={() => {
            const params = new FormData();
            params.append("file", file);
            params.append("fileType", fileType);
            params.append("folderId", props.folderId);
            showHideAddFileModal(false)(dispatch);
            props.fileId ? updateFile(props.folderId,params)(dispatch)
              : createFile(props.folderId,params)(dispatch)
          }}>
            Upload
          </Button>
        </div>
      </FileModal>
    </>
  );
}
