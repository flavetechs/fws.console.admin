import React from 'react'

const FileList = () => {
  return (
    <div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div className="col">
                <div className="card iq-file-manager">
                    <div className="card-body card-thumbnail">
                        <a href="#" data-title="PDF" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../file-manager/assets/images/doc-files/demo.pdf" data-bs-toggle="modal" data-bs-target="#file-documents">
                            <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/pdf.svg" className="img-fluid" alt="pdf.svg" loading="lazy"/>
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
                                <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/excel.svg" className="img-fluid" alt="excel.svg" loading="lazy"/>
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
                                <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/word.svg" className="img-fluid" alt="word.svg" loading="lazy"/>
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
                                <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/ppt.svg" className="img-fluid" alt="ppt.svg" loading="lazy"/>
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
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                            <small>You opened <a href="">2 days ago</a></small>
                            </div>
                        </div>
                    </div>
                </div>            </div>
            <div className="col">
                <div className="card iq-file-manager">
                    <div className="card-body card-thumbnail">
                        <a href="#" data-title="DOCX" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../file-manager/assets/images/doc-files/A047_WP2_Exp4.docx" data-bs-toggle="modal" data-bs-target="#file-documents">
                            <div className="p-3 d-flex justify-content-center align-items-center iq-document rounded bg-body">
                                <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/word.svg" className="img-fluid" alt="word.svg" loading="lazy"/>
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
                                <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/ppt.svg" className="img-fluid" alt="ppt.svg" loading="lazy"/>
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
                                <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/excel.svg" className="img-fluid" alt="excel.svg" loading="lazy"/>
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
                                <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/pdf.svg" className="img-fluid" alt="pdf.svg" loading="lazy"/>
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
        </div>
    </div>
  )
}

export default FileList