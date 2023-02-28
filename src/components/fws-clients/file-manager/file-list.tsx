import React, { useState } from 'react'
import "./file-manager.css"

const FileList = () => {
    const [showMenuDropdown, setShowMenuDropdown] = useState(false);
    return (
        <div>
            <div className="card bg-transparent dropdown">
                <div className='d-flex justify-content-end m-3'>
                    <button className="btn btn-sm btn-primary" onClick={(e) => {
                        setShowMenuDropdown(!showMenuDropdown);
                    }}>Create File/Folder <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24">
                            <path d="M10.869 16.6308C10.811 16.5743 10.563 16.3609 10.359 16.1622C9.076 14.9971 6.976 11.9576 6.335 10.3668C6.232 10.1252 6.014 9.51437 6 9.18802C6 8.8753 6.072 8.5772 6.218 8.29274C6.422 7.93814 6.743 7.65368 7.122 7.49781C7.385 7.39747 8.172 7.2416 8.186 7.2416C9.047 7.08573 10.446 7 11.992 7C13.465 7 14.807 7.08573 15.681 7.21335C15.695 7.22796 16.673 7.38383 17.008 7.55431C17.62 7.86702 18 8.47784 18 9.13151V9.18802C17.985 9.61374 17.605 10.509 17.591 10.509C16.949 12.0141 14.952 14.9834 13.625 16.1768C13.625 16.1768 13.284 16.5129 13.071 16.659C12.765 16.887 12.386 17 12.007 17C11.584 17 11.19 16.8724 10.869 16.6308Z" fill="currentColor"></path>
                        </svg>
                        <ul className={`${showMenuDropdown && "show"} dropdown-menu `} aria-labelledby="dropdownMenu-5">
                            <li><a className="dropdown-item dropdown-hover" href="#">Folder</a></li>
                            <li><a className="dropdown-item dropdown-hover" href="#">File</a></li>
                        </ul>
                    </button>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <div className="col">
                        <div className="card iq-file-manager">
                            <div className="card-body card-thumbnail">
                                <a href="#" data-title="PDF" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../file-manager/assets/images/doc-files/demo.pdf" data-bs-toggle="modal" data-bs-target="#file-documents">
                                    <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                        
                                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/pdf.svg" className="img-fluid" alt="pdf.svg" loading="lazy" />
                                    </div>
                                </a>
                                <div className="mt-2">
                                    <div className="d-flex justify-content-between">
                                        <p className="small mb-2">Created on Dec 13, 2020</p>
                                        <a href="">5mb</a>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 text-primary gap-2">
                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                        </svg>
                                        <p className=" mb-0 text-dark">Doc-123472578.pdf</p>
                                        <div>
                                            <svg className="icon-24 text-danger" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small>You opened <a href="javascript:void(0)">just now</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>            </div>
                    <div className="col">
                        <div className="card iq-file-manager">
                            <div className="card-body card-thumbnail">
                                <a href="#" data-title="XLSX" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../file-manager/assets/images/doc-files/demo.xlsx" data-bs-toggle="modal" data-bs-target="#file-documents">
                                    <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/excel.svg" className="img-fluid" alt="excel.svg" loading="lazy" />
                                    </div>
                                </a>
                                <div className="mt-2">
                                    <div className="d-flex justify-content-between">
                                        <p className="small mb-2">Created on Dec 13, 2020</p>
                                        <a href="">2mb</a>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 text-primary gap-2">
                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                        </svg>
                                        <p className=" mb-0 text-dark">Doc-25783.xlsx</p>
                                        <div>   <svg className="icon-24 text-danger" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                            <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                        </svg></div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small>You opened <a href="javascript:void(0)">2 days ago</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>            </div>
                    <div className="col">
                        <div className="card iq-file-manager">
                            <div className="card-body card-thumbnail">
                                <a href="#" data-title="DOCX" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../file-manager/assets/images/doc-files/demo.docx" data-bs-toggle="modal" data-bs-target="#file-documents">
                                    <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/word.svg" className="img-fluid" alt="word.svg" loading="lazy" />
                                    </div>
                                </a>
                                <div className="mt-2">
                                    <div className="d-flex justify-content-between">
                                        <p className="small mb-2">Created on Dec 13, 2020</p>
                                        <a href="">7mb</a>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 text-primary gap-2">
                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                        </svg>
                                        <p className=" mb-0 text-dark">abc-25783.doc</p>
                                        <div>
                                            <div>   <svg className="icon-24 text-danger" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                            </svg></div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small>You opened <a href="javascript:void(0)">a month ago</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>            </div>
                    <div className="col">
                        <div className="card iq-file-manager">
                            <div className="card-body card-thumbnail">
                                <a href="#" data-title="PPTX" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../file-manager/assets/images/doc-files/demo.pptx" data-bs-toggle="modal" data-bs-target="#file-documents">
                                    <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/ppt.svg" className="img-fluid" alt="ppt.svg" loading="lazy" />
                                    </div>
                                </a>
                                <div className="mt-2">
                                    <div className="d-flex justify-content-between">
                                        <p className="small mb-2">Created on Dec 13, 2020</p>
                                      
                                        <a href="">12mb</a>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 text-primary gap-2">
                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                        </svg>
                                        <p className=" mb-0 text-dark">xyz-25783.pptx</p>
                                        <div>   <svg className="icon-24 text-danger" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                        <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                    </svg></div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small>You opened <a href="">2 days ago</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card iq-file-manager">
                            <div className="card-body card-thumbnail">
                                <a href="#" data-title="DOCX" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../file-manager/assets/images/doc-files/A047_WP2_Exp4.docx" data-bs-toggle="modal" data-bs-target="#file-documents">
                                    <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/word.svg" className="img-fluid" alt="word.svg" loading="lazy" />
                                    </div>
                                </a>
                                <div className="mt-2">
                                    <div className="d-flex justify-content-between">
                                        <p className="small mb-2">Created on Dec 13, 2020</p>
                                        <a href="">10mb</a>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 text-primary gap-2">
                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                        </svg>
                                        <p className=" mb-0 text-dark">abd-25783.doc</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small>You opened <a href="javascript:void(0)">a month ago</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>            </div>
                    <div className="col">
                        <div className="card iq-file-manager">
                            <div className="card-body card-thumbnail">
                                <a href="#" data-title="PPTX" data-load-file="file" data-load-target="#resolte-contaniner" data-url="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/doc-files/demo.pptx" data-bs-toggle="modal" data-bs-target="#file-documents">
                                    <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/ppt.svg" className="img-fluid" alt="ppt.svg" loading="lazy" />
                                    </div>
                                </a>
                                <div className="mt-2">
                                    <div className="d-flex justify-content-between">
                                        <p className="small mb-2">Created on Dec 13, 2020</p>
                                        <a href="">58kb</a>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 text-primary gap-2">
                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                        </svg>
                                        <p className=" mb-0 text-dark">abc-123472578.pptx</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small>You opened <a href="javascript:void(0)">just now</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>            </div>
                    <div className="col">
                        <div className="card iq-file-manager">
                            <div className="card-body card-thumbnail">
                                <a href="#" data-title="XLSX" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../file-manager/assets/images/doc-files/demo.xlsx" data-bs-toggle="modal" data-bs-target="#file-documents">
                                    <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/excel.svg" className="img-fluid" alt="excel.svg" loading="lazy" />
                                    </div>
                                </a>
                                <div className="mt-2">
                                    <div className="d-flex justify-content-between">
                                        <p className="small mb-2">Created on Dec 13, 2020</p>
                                        <a href="">2mb</a>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 text-primary gap-2">
                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                        </svg>
                                        <p className=" mb-0 text-dark">list-25783.xlsx</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small>You opened <a href="javascript:void(0)">2 days ago</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>            </div>
                    <div className="col">
                        <div className="card iq-file-manager">
                            <div className="card-body card-thumbnail">
                                <a href="#" data-title="PDF" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../file-manager/assets/images/doc-files/demo.pdf" data-bs-toggle="modal" data-bs-target="#file-documents">
                                    <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/pdf.svg" className="img-fluid" alt="pdf.svg" loading="lazy" />
                                    </div>
                                </a>
                                <div className="mt-2">
                                    <div className="d-flex justify-content-between">
                                        <p className="small mb-2">Created on Dec 13, 2020</p>
                                        <a href="">15mb</a>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 text-primary gap-2">
                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                        </svg>
                                        <p className=" mb-0 text-dark">Themes-123472578.pdf</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small>You opened <a href="javascript:void(0)">just now</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>            </div>
                </div></div>
        </div>
    )
}

export default FileList