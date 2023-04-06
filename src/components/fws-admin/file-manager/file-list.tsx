import React, { useEffect, useState } from 'react'
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { fileManagerLocations } from '../../../router/fws-path-locations';
import { deleteDialogModal, errorModal, respondToDeleteDialog, showHideAddFileModal, showHideAddFolderModal } from '../../../store/actions/alert-actions';
import { deleteFile, deleteFolder, downloadFile, getAllFiles } from '../../../store/actions/file-manager-actions';
import {  saveAsFile} from '../../../utils/download-files';
import { CheckSingleItem } from '../../../utils/tools';
import { PaginationFilter3 } from '../../partials/components/pagination-filter';
import { AddFileModal } from './add-file-modal';
import { AddFolderModal } from './add-folder-modal';
import "./file-manager.scss"

const FileList = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const locations = useLocation();
    const [showMenuDropdown, setShowMenuDropdown] = useState(false);
    const queryParams = new URLSearchParams(locations.search);
    const folderId = queryParams.get("folderId");

    // ACCESSING STATE FROM REDUX STORE
    const state = useSelector((state: any) => state);
    const { files, filterProps, downloadedFile } = state.fileManager;
    const { deleteDialogResponse } = state.alert;
    const [indexRow, setIndexRow] = useState("");
    const [fileProps, setFileProps] = useState<any>({ fileId: "", fileType: "", fileName: "" });
    const [showDeleteButton, setDeleteButton] = useState(true);
    const [showCheckBoxes, setShowCheckBoxes] = useState(false);
    const [createMenu, setCreateMenu] = useState(false);
    const [selectedIds, setSelectedIds] = useState<any>([]);
    const [copiedLink, setCopiedLink] = useState<any>({ idx: "", status: false });
    // ACCESSING STATE FROM REDUX STORE

    useEffect(() => {
        getAllFiles(folderId, 1, 10)(dispatch);
    }, [])

    useEffect(() => {
       downloadedFile && saveAsFile(fileProps.fileName, downloadedFile)
    }, [downloadedFile]);

    useEffect(() => {
        if (deleteDialogResponse === "continue") {
            if (selectedIds.length === 0) {
                errorModal("No Item selected to be deleted");
            }

            else {
                if (fileProps.fileType === 5) { deleteFolder(fileProps.fileId, folderId)(dispatch); }
                else { deleteFile(folderId, selectedIds)(dispatch) }
                setDeleteButton(true);
                setShowCheckBoxes(false);
                setSelectedIds([]);
            }

        } else if (deleteDialogResponse === "cancel") {
            setDeleteButton(true);
            setShowCheckBoxes(false);
            setSelectedIds([]);
        }
        return () => {
            respondToDeleteDialog("")(dispatch);
        };
    }, [fileProps, deleteDialogResponse, dispatch]);
    
    //delete dialog


    return (
        <>
            <AddFileModal folderId={folderId} />
            <AddFolderModal folderId={folderId} folderFromFile={true} fileId={fileProps.fileId} fileName={fileProps.fileName} />
            <div>
                <Row>
                    <Col sm="12">
                        <Card className="bg-transparent">
                            <Card className='m-3'>
                                <Card.Body className='d-md-flex justify-content-between p-2'>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip id="button-tooltip-2"> back</Tooltip>}
                                    >
                                        <svg
                                            onClick={() => {
                                                history.goBack();
                                            }}
                                            style={{ cursor: "pointer" }}
                                            className=" text-primary m-2"
                                            width="32"
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
                                    <div>
                                        {showDeleteButton ? (
                                            <button
                                                type="button"
                                                className="text-center btn-primary btn-icon mx-2  mt-2 btn btn-primary"
                                                onClick={() => {
                                                    setDeleteButton(!showDeleteButton);
                                                    setShowCheckBoxes(!showCheckBoxes);
                                                }}
                                            >
                                                <i className="btn-inner">
                                                    <svg
                                                        width="20"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M20.708 6.23975H3.75"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </i>
                                                <span> Delete</span>
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                className="text-center btn-primary btn-icon mx-2 mt-2 btn btn-primary"
                                                onClick={() => {
                                                    deleteDialogModal()(dispatch);
                                                }}
                                            >
                                                <i className="btn-inner">
                                                    <svg
                                                        width="20"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M20.708 6.23975H3.75"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </i>
                                                <span> Delete Selected</span>
                                            </button>
                                        )}
                                        <button className="btn btn-sm btn-primary me-2 mt-2" onClick={(e) => {
                                            setShowMenuDropdown(!showMenuDropdown); setCreateMenu(!createMenu); setFileProps({ fileId: "", fileType: "", fileName: "New Folder" })
                                        }}>Create File/Folder <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24">
                                                <path d="M10.869 16.6308C10.811 16.5743 10.563 16.3609 10.359 16.1622C9.076 14.9971 6.976 11.9576 6.335 10.3668C6.232 10.1252 6.014 9.51437 6 9.18802C6 8.8753 6.072 8.5772 6.218 8.29274C6.422 7.93814 6.743 7.65368 7.122 7.49781C7.385 7.39747 8.172 7.2416 8.186 7.2416C9.047 7.08573 10.446 7 11.992 7C13.465 7 14.807 7.08573 15.681 7.21335C15.695 7.22796 16.673 7.38383 17.008 7.55431C17.62 7.86702 18 8.47784 18 9.13151V9.18802C17.985 9.61374 17.605 10.509 17.591 10.509C16.949 12.0141 14.952 14.9834 13.625 16.1768C13.625 16.1768 13.284 16.5129 13.071 16.659C12.765 16.887 12.386 17 12.007 17C11.584 17 11.19 16.8724 10.869 16.6308Z" fill="currentColor"></path>
                                            </svg>
                                            <ul className={`${showMenuDropdown && createMenu && "show"} dropdown-menu `} aria-labelledby="dropdownMenu-5">
                                                <li onClick={(e) => { showHideAddFolderModal(true)(dispatch) }}><a className="dropdown-item dropdown-hover"  >Folder</a></li>
                                                <li onClick={(e) => { showHideAddFileModal(true)(dispatch) }} ><a className="dropdown-item dropdown-hover" >File</a></li>
                                            </ul>
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>


                            <Row className='file-row'>
                                {files.map((file: any, idx: any) => (
                                    file.fileType !== 5 ?
                                        <Col md="6" lg="3" xxl="2" key={idx}>
                                            <Card className='card-thumbnail '>
                                                <Card.Body className="px-3">

                                                    {
                                                        //<img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/pdf.svg" className="img-fluid" alt="pdf.svg" loading="lazy" />
                                                        // <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/ppt.svg" className="img-fluid" alt="ppt.svg" loading="lazy" />
                                                        file.fileType === 4 ?
                                                            <div  className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body ">
                                                                <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/excel.svg" className="img-fluid" alt="excel.svg" loading="lazy" />
                                                            </div>
                                                            : file.fileType === 2 ?
                                                                <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body ">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fece00" width="122" height="122" viewBox="0 0 24 24"><path d="M10.997 19.06c0 1.277-2.996 1.268-2.996.003 0-1.314 2.996-1.344 2.996-.003zm11.003-8.06v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3zm-14-4h3v-1h-3v1zm0-2h3v-1h-3v1zm0-2h3v-1h-3v1zm0 6h3v-1h-3v1zm0 2h3v-1h-3v1zm0 2h3v-1h-3v1zm3.925 5.5l-.925-4.5h-3l-.925 4.5c-.393 1.578.801 2.5 2.425 2.5 1.626 0 2.817-.924 2.425-2.5zm3.984-12.723c2.047-.478 4.805.279 6.091 1.179-1.494-1.998-5.23-5.708-7.432-6.881 1.156 1.168 1.563 4.234 1.341 5.702z" /></svg>
                                                                </div>
                                                                : file.fileType === 3 ?
                                                                    <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                                                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/word.svg" className="img-fluid" alt="word.svg" loading="lazy" />
                                                                    </div>
                                                                    : file.fileType === 6 ?
                                                                        <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                                                            <svg
                                                                                width="122"
                                                                                viewBox="0 0 113 146"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M110.667 47.9166L64.5833 1.83333C63.4124 0.660896 61.8237 0.00145877 60.1667 0H22.9167C16.8388 0 11.0098 2.41443 6.71213 6.71213C2.41443 11.0098 0 16.8388 0 22.9167V122.917C0 128.995 2.41443 134.823 6.71213 139.121C11.0098 143.419 16.8388 145.833 22.9167 145.833H89.5833C95.6612 145.833 101.49 143.419 105.788 139.121C110.086 134.823 112.5 128.995 112.5 122.917V52.0833C112.434 50.5133 111.78 49.0257 110.667 47.9166ZM66.6667 16.6822L95.8178 45.8333H66.6667V16.6822ZM89.5833 137.984H22.9167C20.154 137.984 14.0175 133.01 12.064 131.056C10.1104 129.103 7.84884 125.679 7.84884 122.917V22.9167C7.84884 20.154 10.1104 14.405 12.064 12.4515C14.0175 10.4979 20.154 7.84883 22.9167 7.84883H58.8178V47.4322C58.8394 49.083 59.7337 50.8189 60.9012 51.9863C62.0686 53.1538 63.4169 53.6606 65.0678 53.6822H104.651V122.917C104.651 125.679 102.39 131.428 100.436 133.382C98.4825 135.335 92.346 137.984 89.5833 137.984Z"
                                                                                    fill="white"
                                                                                />
                                                                            </svg>
                                                                        </div>

                                                                        :
                                                                        <div style={{ height: '160px' }} className=" d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                                                           <a target="_blank"rel="noopener noreferrer" href={file.path}>
                                                                            <img
                                                                                className=" img-fluid h-100 rounded"
                                                                                id="displayImg"
                                                                                src={file.path}
                                                                                alt="file"
                                                                            />
                                                                            </a>
                                                                        </div>
                                                    }


                                                    <div className="mt-2">
                                                        <div className="d-flex justify-content-end">
                                                            {/* <p className="small mb-2">Created on Dec 13, 2020</p> */}
                                                            <a >{file.size}kb</a>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-center mb-2 text-primary gap-2">
                                                            <div className='d-flex align-items-center '>
                                                                <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                                                </svg>
                                                                <p className=" mb-0 text-dark text-wrap text-mod">{file.fileName}</p>
                                                            </div>
                                                            <div>
                                                                {showCheckBoxes ?
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        checked={
                                                                            file.isChecked
                                                                            || false
                                                                        }
                                                                        onChange={(e) => {
                                                                            const result: any = CheckSingleItem(
                                                                                e.target.checked,
                                                                                selectedIds,
                                                                                file.id,
                                                                                files,
                                                                                "id"
                                                                            );
                                                                            setSelectedIds(result[1]);
                                                                        }}
                                                                    /> :
                                                                    <svg style={{ cursor: "pointer" }} onClick={() => {
                                                                        deleteDialogModal()(dispatch);
                                                                        setSelectedIds([...selectedIds, file.id]);
                                                                    }} className="icon-24 text-danger" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                        <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                    </svg>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <small onClick={() => { downloadFile(file.id)(dispatch); setFileProps({ fileId: file.id, fileType: file.fileType, fileName: file.fileName }) }} style={{ cursor: 'pointer' }} className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className='mx-1' width="18" height="18" viewBox="0 0 24 24"><path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" /></svg>Download</small>
                                                            <small onMouseDown={() => { setCopiedLink({ idx, status: !copiedLink.status }) }} onClick={() => { navigator.clipboard.writeText(file.path) }} className="text-primary" style={{ cursor: 'pointer' }}>
                                                                <svg
                                                                    clipRule="evenodd"
                                                                    fillRule="evenodd"
                                                                    width={18}
                                                                    strokeLinejoin="round"
                                                                    strokeMiterlimit="2"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="m6 18h-3c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v3h3c.621 0 1 .522 1 1v14c0 .621-.522 1-1 1h-14c-.48 0-1-.379-1-1zm1.5-10.5v13h13v-13zm9-1.5v-2.5h-13v13h2.5v-9.5c0-.481.38-1 1-1z"
                                                                        fillRule="nonzero" fill="currentColor"
                                                                    />
                                                                </svg>   {copiedLink.idx == idx && copiedLink.status ? 'Copied' : 'Copy'}</small>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        :
                                        <Col md="6" lg="3" xxl="2" key={idx}>
                                            <Card className=" card-thumbnail">
                                                <Card.Body className="px-3 ">
                                                    <div className=''>
                                                        <div className="p-4 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                                            <a className=" ">
                                                                <svg style={{ cursor: 'pointer' }} onClick={() => { window.location.assign(`${fileManagerLocations.fileList}?folderId=${file.id}`) }} xmlns="http://www.w3.org/2000/svg" width="122" height="122" fill="#fece00" viewBox="0 0 24 24"><path d="M7.972 2h-6.972l.714 5h2.021l-.429-3h3.694c1.112 1.388 1.952 2 4.277 2h9.283l-.2 1h2.04l.6-3h-11.723c-1.978 0-2.041-.417-3.305-2zm16.028 7h-24l2 13h20l2-13z" /></svg>                 </a>
                                                        </div>
                                                        <div className="dropdown  d-flex justify-content-end mt-2" onClick={() => {
                                                            setIndexRow(idx);
                                                            setShowMenuDropdown(!showMenuDropdown)
                                                            setCreateMenu(false)
                                                        }}>
                                                            <svg width="5" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" id="dropdownMenu-1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <path d="M2.49927 2.50444V2.49544" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M2.49927 7.50438V7.49538" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M2.49927 12.5044V12.4954" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                            <ul className={`dropdown-menu ${showMenuDropdown && indexRow === idx && 'show'}`} aria-labelledby="dropdownMenu-1">
                                                                <li onClick={() => {
                                                                    showHideAddFolderModal(true)(dispatch);
                                                                    setFileProps({ fileId: file.id, fileType: file.fileType, fileName: file.fileName })
                                                                }}><a className="dropdown-item" style={{ cursor: 'pointer' }}>update</a></li>
                                                                <li><a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => {
                                                                    deleteDialogModal()(dispatch);
                                                                    setFileProps({ fileId: file.id, fileType: file.fileType, fileName: file.fileName })
                                                                    setSelectedIds([...selectedIds, file.id]);
                                                                }}>delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="mt-4" style={{ cursor: 'pointer' }} onClick={() => { window.location.assign(`${fileManagerLocations.fileList}?folderId=${file.id}`) }}>
                                                        <h4 className='text-mod'>{file.fileName}</h4>


                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>


                                ))}
                            </Row>


                            <div className='mt-5'>
                                <PaginationFilter3
                                    filterProps={filterProps}
                                    action={getAllFiles}
                                    dispatch={dispatch}
                                    param1={folderId}
                                    param2={1}
                                    param3={10}
                                />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default FileList