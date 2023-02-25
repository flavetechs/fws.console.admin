import React from 'react'
import { useHistory } from 'react-router-dom'
import { fileManagerLocations } from '../../router/fws-client-path-locations'
import './file-manager.css'

const FileManager = () => {
    const history = useHistory();
    return (

        <div className="light theme-default theme-with-animation card-default theme-color-default" cz-shortcut-listen="true">
            <div id="loading">
                <div className="loader simple-loader animate__animated animate__fadeOut d-none">
                    <div className="loader-body">
                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/loader.webp" alt="loader" className="light-loader img-fluid w-25" width="200" height="200" />
                    </div>
                </div>
            </div>

            {/* <aside className="sidebar sidebar-base sidebar-white left-bordered" data-toggle="main-sidebar" data-sidebar="responsive">
                <div className="sidebar-header d-flex align-items-center justify-content-start">
                    <a href="../dashboard/index.html" className="navbar-brand">

                        <div className="logo-main">
                            <div className="logo-normal">
                                <svg className=" icon-30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
                                    <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
                                    <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
                                    <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
                                </svg>
                            </div>
                            <div className="logo-mini">
                                <svg className=" icon-30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
                                    <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
                                    <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
                                    <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
                                </svg>
                            </div>
                        </div>
                        <h4 className="logo-title" data-setting="app_name">Hope UI</h4>
                    </a>
                    <div className="sidebar-toggle" data-toggle="sidebar" data-active="true">
                        <i className="icon">
                            <svg className="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </i>
                    </div>
                </div>
                <div className="sidebar-body pt-0 data-scrollbar" data-scrollbar="true"><div className="scroll-content">
                    <div className="sidebar-profile-card mt-3">
                        <div className="sidebar-profile-body">
                            <div className="mb-3 d-flex justify-content-center">
                                <div className="rounded rounded-3 border border-primary p-2">
                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/avatars/01.png" alt="User-Profile" className="img-fluid rounded" loading="lazy" />
                                </div>
                            </div>
                            <div className="sidebar-profile-detail">
                                <h6 className="sidebar-profile-name">Elon musk</h6>
                                <span className="sidebar-profile-username">@musk</span>
                            </div>
                            <div className="sidebar-profile-action">
                                <div className="btn btn-primary btn-icon btn-sm rounded-pill btn-action">
                                    <span className="btn-inner">
                                        <svg className="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="btn btn-primary btn-icon btn-sm rounded-pill btn-action">
                                    <span className="btn-inner">
                                        <svg className="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M11.7761 21.8374C9.49311 20.4273 7.37081 18.7645 5.44807 16.8796C4.09069 15.5338 3.05404 13.8905 2.41735 12.0753C1.27971 8.53523 2.60399 4.48948 6.30129 3.2884C8.2528 2.67553 10.3752 3.05175 12.0072 4.29983C13.6398 3.05315 15.7616 2.67705 17.7132 3.2884C21.4105 4.48948 22.7436 8.53523 21.606 12.0753C20.9745 13.8888 19.944 15.5319 18.5931 16.8796C16.6686 18.7625 14.5465 20.4251 12.265 21.8374L12.0161 22L11.7761 21.8374Z" fill="currentColor"></path>
                                            <path d="M12.0109 22.0001L11.776 21.8375C9.49013 20.4275 7.36487 18.7648 5.43902 16.8797C4.0752 15.5357 3.03238 13.8923 2.39052 12.0754C1.26177 8.53532 2.58605 4.48957 6.28335 3.28849C8.23486 2.67562 10.3853 3.05213 12.0109 4.31067V22.0001Z" fill="currentColor"></path>
                                            <path d="M18.2304 9.99922C18.0296 9.98629 17.8425 9.8859 17.7131 9.72157C17.5836 9.55723 17.5232 9.3434 17.5459 9.13016C17.5677 8.4278 17.168 7.78851 16.5517 7.53977C16.1609 7.43309 15.9243 7.00987 16.022 6.59249C16.1148 6.18182 16.4993 5.92647 16.8858 6.0189C16.9346 6.027 16.9816 6.04468 17.0244 6.07105C18.2601 6.54658 19.0601 7.82641 18.9965 9.22576C18.9944 9.43785 18.9117 9.63998 18.7673 9.78581C18.6229 9.93164 18.4291 10.0087 18.2304 9.99922Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="btn btn-primary btn-icon btn-sm rounded-pill btn-action">
                                    <span className="btn-inner">
                                        <svg className="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z" fill="currentColor"></path>
                                            <path opacity="0.4" d="M14.0088 19.2283C13.5088 19.1215 10.4627 19.1215 9.96275 19.2283C9.53539 19.327 9.07324 19.5566 9.07324 20.0602C9.09809 20.5406 9.37935 20.9646 9.76895 21.2335L9.76795 21.2345C10.2718 21.6273 10.8632 21.877 11.4824 21.9667C11.8123 22.012 12.1482 22.01 12.4901 21.9667C13.1083 21.877 13.6997 21.6273 14.2036 21.2345L14.2026 21.2335C14.5922 20.9646 14.8734 20.5406 14.8983 20.0602C14.8983 19.5566 14.4361 19.327 14.0088 19.2283Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    <span className="notification-alert"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="hr-horizontal" />
                    <div className="sidebar-list">
                        <ul className="navbar-nav iq-main-menu" id="iq-filemanger-page">
                            <li className="nav-item static-item">
                                <a className="nav-link static-item disabled text-start" href="#" >
                                    <span className="default-icon">File Manager</span>
                                    <span className="mini-icon">-</span>
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link active" aria-current="page" href="../file-manager/index.html">
                                    <i className="icon">
                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="currentColor"></path>
                                        </svg>
                                    </i>
                                    <span className="item-name">Dashboard</span>
                                </a>
                            </li>
                            <li><hr className="hr-horizontal" /></li>
                            <li className="nav-item static-item">
                                <a className="nav-link static-item disabled text-start" href="#" >
                                    <span className="default-icon">Pages</span>
                                    <span className="mini-icon">-</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="../file-manager/image-folder.html">
                                    <i className="icon">
                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.9999 14.7024V16.0859C21.9999 16.3155 21.9899 16.5471 21.9698 16.7767C21.6893 19.9357 19.4949 22 16.3286 22H7.67125C6.06804 22 4.71534 21.4797 3.74339 20.5363C3.36263 20.1864 3.04199 19.7753 2.79149 19.3041C3.12215 18.9021 3.49289 18.462 3.85361 18.0208C4.46484 17.289 5.05602 16.5661 5.42676 16.0959C5.97786 15.4142 7.43077 13.6196 9.4448 14.4617C9.85562 14.6322 10.2163 14.8728 10.547 15.0833C11.3586 15.6247 11.6993 15.7851 12.2704 15.4743C12.9017 15.1335 13.3125 14.4617 13.7434 13.76C13.9739 13.388 14.2043 13.0281 14.4548 12.6972C15.547 11.2736 17.2304 10.8926 18.6332 11.7348C19.3346 12.1559 19.9358 12.6872 20.4969 13.2276C20.6171 13.3479 20.7374 13.4592 20.8476 13.5695C20.9979 13.7198 21.4989 14.2211 21.9999 14.7024Z" fill="currentColor"></path>
                                            <path opacity="0.4" d="M16.3387 2H7.67134C4.27455 2 2 4.37607 2 7.91411V16.086C2 17.3181 2.28056 18.4119 2.79158 19.3042C3.12224 18.9022 3.49299 18.4621 3.85371 18.0199C4.46493 17.2891 5.05611 16.5662 5.42685 16.096C5.97796 15.4143 7.43086 13.6197 9.44489 14.4618C9.85571 14.6323 10.2164 14.8729 10.5471 15.0834C11.3587 15.6248 11.6994 15.7852 12.2705 15.4734C12.9018 15.1336 13.3126 14.4618 13.7435 13.759C13.9739 13.3881 14.2044 13.0282 14.4549 12.6973C15.5471 11.2737 17.2305 10.8927 18.6333 11.7349C19.3347 12.1559 19.9359 12.6873 20.497 13.2277C20.6172 13.348 20.7375 13.4593 20.8477 13.5696C20.998 13.7189 21.499 14.2202 22 14.7025V7.91411C22 4.37607 19.7255 2 16.3387 2Z" fill="currentColor"></path>
                                            <path d="M11.4544 8.79665C11.4544 10.2053 10.2811 11.3782 8.87325 11.3782C7.46644 11.3782 6.29309 10.2053 6.29309 8.79665C6.29309 7.38906 7.46644 6.21506 8.87325 6.21506C10.2811 6.21506 11.4544 7.38906 11.4544 8.79665Z" fill="currentColor"></path>
                                        </svg>
                                    </i>
                                    <span className="item-name">Image</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="../file-manager/video-folder.html">
                                    <i className="icon">
                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M22 12.0048C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0048C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0048Z" fill="currentColor"></path>
                                            <path d="M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z" fill="currentColor"></path>
                                        </svg>
                                    </i>
                                    <span className="item-name">Video</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="../file-manager/document-folder.html">
                                    <i className="icon">
                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M18.8088 9.021C18.3573 9.021 17.7592 9.011 17.0146 9.011C15.1987 9.011 13.7055 7.508 13.7055 5.675V2.459C13.7055 2.206 13.5036 2 13.253 2H7.96363C5.49517 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59022 22 8.16958 22H16.0463C18.5058 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.299 9.012 20.0475 9.013C19.6247 9.016 19.1177 9.021 18.8088 9.021Z" fill="#currentColor"></path>
                                            <path opacity="0.4" d="M16.084 2.56729C15.785 2.25629 15.263 2.47029 15.263 2.90129V5.53829C15.263 6.64429 16.174 7.55429 17.28 7.55429C17.977 7.56229 18.945 7.56429 19.767 7.56229C20.188 7.56129 20.402 7.05829 20.11 6.75429C19.055 5.65729 17.166 3.69129 16.084 2.56729Z" fill="#currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.9739 11.3876H12.3589C12.7699 11.3876 13.1039 11.0546 13.1039 10.6436C13.1039 10.2326 12.7699 9.89861 12.3589 9.89861H8.9739C8.5629 9.89861 8.2299 10.2326 8.2299 10.6436C8.2299 11.0546 8.5629 11.3876 8.9739 11.3876ZM8.974 16.3818H14.418C14.829 16.3818 15.163 16.0488 15.163 15.6378C15.163 15.2268 14.829 14.8928 14.418 14.8928H8.974C8.563 14.8928 8.23 15.2268 8.23 15.6378C8.23 16.0488 8.563 16.3818 8.974 16.3818Z" fill="#currentColor"></path>
                                        </svg>
                                    </i>
                                    <span className="item-name">Document</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="../file-manager/all-files.html">
                                    <i className="icon">
                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.8843 5.11485H13.9413C13.2081 5.11969 12.512 4.79355 12.0474 4.22751L11.0782 2.88762C10.6214 2.31661 9.9253 1.98894 9.19321 2.00028H7.11261C3.37819 2.00028 2.00001 4.19201 2.00001 7.91884V11.9474C1.99536 12.3904 21.9956 12.3898 21.9969 11.9474V10.7761C22.0147 7.04924 20.6721 5.11485 16.8843 5.11485Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8321 6.54346C21.1521 6.91754 21.3993 7.34785 21.5612 7.81235C21.8798 8.76704 22.0273 9.77029 21.9969 10.7761V16.0291C21.9956 16.4716 21.963 16.9134 21.8991 17.3512C21.7775 18.124 21.5057 18.8655 21.0989 19.5341C20.9119 19.8571 20.6849 20.1552 20.4231 20.4214C19.2383 21.5089 17.665 22.0749 16.0574 21.992H7.93061C6.32049 22.0743 4.74462 21.5085 3.55601 20.4214C3.2974 20.1547 3.07337 19.8566 2.88915 19.5341C2.48475 18.866 2.21869 18.1237 2.1067 17.3512C2.03549 16.9141 1.99981 16.472 2 16.0291V10.7761C1.99983 10.3373 2.02357 9.89895 2.07113 9.4628C2.08113 9.38628 2.09614 9.31101 2.11098 9.23652C2.13573 9.11233 2.16005 8.99031 2.16005 8.86829C2.25031 8.34196 2.41496 7.83108 2.64908 7.35094C3.34261 5.86908 4.76525 5.11484 7.09481 5.11484H16.8754C18.1802 5.01393 19.4753 5.40673 20.5032 6.21514C20.6215 6.31552 20.7316 6.42532 20.8321 6.54346ZM6.97033 15.5411H17.0355H17.0533C17.2741 15.5507 17.4896 15.4716 17.6517 15.3216C17.8137 15.1715 17.9088 14.963 17.9157 14.7425C17.9282 14.5487 17.8644 14.3576 17.7379 14.2101C17.5924 14.0118 17.3618 13.8934 17.1155 13.8906H6.97033C6.51365 13.8906 6.14343 14.2601 6.14343 14.7159C6.14343 15.1716 6.51365 15.5411 6.97033 15.5411Z" fill="currentColor"></path>
                                        </svg>
                                    </i>
                                    <span className="item-name">All Files</span>
                                    <div>
                                        <span className="badge bg-warning d-inline-block rounded-pill">21</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="../file-manager/trash.html">
                                    <i className="icon">
                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M19.6433 9.48844C19.6433 9.55644 19.1103 16.2972 18.8059 19.1341C18.6153 20.875 17.493 21.931 15.8095 21.961C14.516 21.99 13.2497 22 12.0039 22C10.6812 22 9.38772 21.99 8.13215 21.961C6.50507 21.922 5.38177 20.845 5.20088 19.1341C4.88772 16.2872 4.36448 9.55644 4.35476 9.48844C4.34503 9.28345 4.41117 9.08846 4.54538 8.93046C4.67765 8.78447 4.86827 8.69647 5.06861 8.69647H18.9392C19.1385 8.69647 19.3194 8.78447 19.4624 8.93046C19.5956 9.08846 19.6627 9.28345 19.6433 9.48844Z" fill="currentColor"></path>
                                            <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                        </svg>
                                    </i>
                                    <span className="item-name">Trash</span>
                                </a>
                            </li>
                            <li><hr className="hr-horizontal" /></li>
                            <li className="nav-item static-item">
                                <a className="nav-link static-item disabled text-start" href="#">
                                    <span className="default-icon">Other</span>
                                    <span className="mini-icon">-</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="../dashboard/auth-pro/sign-in.html" target="_blank">
                                    <i className="icon">
                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M2 6.447C2 3.996 4.03024 2 6.52453 2H11.4856C13.9748 2 16 3.99 16 6.437V17.553C16 20.005 13.9698 22 11.4744 22H6.51537C4.02515 22 2 20.01 2 17.563V16.623V6.447Z" fill="currentColor"></path>
                                            <path d="M21.7787 11.4548L18.9329 8.5458C18.6388 8.2458 18.1655 8.2458 17.8723 8.5478C17.5802 8.8498 17.5811 9.3368 17.8743 9.6368L19.4335 11.2298H17.9386H9.54826C9.13434 11.2298 8.79834 11.5748 8.79834 11.9998C8.79834 12.4258 9.13434 12.7698 9.54826 12.7698H19.4335L17.8743 14.3628C17.5811 14.6628 17.5802 15.1498 17.8723 15.4518C18.0194 15.6028 18.2113 15.6788 18.4041 15.6788C18.595 15.6788 18.7868 15.6028 18.9329 15.4538L21.7787 12.5458C21.9199 12.4008 21.9998 12.2048 21.9998 11.9998C21.9998 11.7958 21.9199 11.5998 21.7787 11.4548Z" fill="currentColor"></path>
                                        </svg>
                                    </i>
                                    <span className="item-name">Sign Out</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">
                                    <i className="icon">
                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M22 11.9998C22 17.5238 17.523 21.9998 12 21.9998C6.477 21.9998 2 17.5238 2 11.9998C2 6.47776 6.477 1.99976 12 1.99976C17.523 1.99976 22 6.47776 22 11.9998Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8701 12.6307C12.8701 13.1127 12.4771 13.5057 11.9951 13.5057C11.5131 13.5057 11.1201 13.1127 11.1201 12.6307V8.21069C11.1201 7.72869 11.5131 7.33569 11.9951 7.33569C12.4771 7.33569 12.8701 7.72869 12.8701 8.21069V12.6307ZM11.1251 15.8035C11.1251 15.3215 11.5161 14.9285 11.9951 14.9285C12.4881 14.9285 12.8801 15.3215 12.8801 15.8035C12.8801 16.2855 12.4881 16.6785 12.0051 16.6785C11.5201 16.6785 11.1251 16.2855 11.1251 15.8035Z" fill="currentColor"></path>
                                        </svg>
                                    </i>
                                    <span className="item-name">Help</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div><div className="scrollbar-track scrollbar-track-x" ><div className="scrollbar-thumb scrollbar-thumb-x" ></div></div></div>
                <div className="sidebar-footer"></div>
            </aside> */}
            <main className="main-content">
                <div className="position-relative">

                    {/* <nav className="nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu left-border default">
                        <div className="container-fluid navbar-inner">
                            <a href="../dashboard/index.html" className="navbar-brand">

                                <div className="logo-main">
                                    <div className="logo-normal">
                                        <svg className="text-primary icon-30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
                                            <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
                                            <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
                                            <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
                                        </svg>
                                    </div>
                                    <div className="logo-mini">
                                        <svg className="text-primary icon-30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
                                            <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
                                            <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
                                            <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="logo-title d-block d-xl-none" data-setting="app_name">Hope UI</h4>
                            </a>
                            <div className="sidebar-toggle" data-toggle="sidebar" data-active="true">
                                <i className="icon d-flex">
                                    <svg className="icon-20" width="20" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                                    </svg>
                                </i>
                            </div>
                            <div className="d-flex align-items-center justify-content-between product-offcanvas">
                                <div className="breadcrumb-title border-end me-3 pe-3 d-none d-xl-block">
                                    <small className="mb-0 text-capitalize">Dashboard</small>
                                </div>
                                <div className="offcanvas offcanvas-end shadow-none iq-product-menu-responsive on-rtl end" id="offcanvasBottom">
                                    <div className="offcanvas-body">
                                        <ul className="iq-nav-menu list-unstyled">
                                            <li className="nav-item active">
                                                <a className="nav-link menu-arrow justify-content-start" data-bs-toggle="collapse" href="#homeData" role="button" aria-expanded="false" aria-controls="homeData">
                                                    <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z" fill="currentColor"></path>
                                                    </svg>
                                                    <span className="nav-text ms-2">Home</span>
                                                </a>
                                                <ul className="iq-header-sub-menu list-unstyled collapse" id="homeData">
                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/index.html">Dashboard</a></li>
                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/alternate-dashboard.html">Alternate Dashboard</a></li>
                                                    <li className="nav-item">
                                                        <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#menuStyles" role="button" aria-expanded="false" aria-controls="menuStyles">
                                                            Menu Style
                                                            <i className="right-icon">
                                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="menuStyles">
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/index-horizontal.html">Horizontal Dashboard</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/index-dual-horizontal.html">Dual Horizontal Dashboard</a>
                                                            </li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/index-dual-compact.html">Dual Compact</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/index-boxed.html">Boxed Horizontal</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/index-boxed-fancy.html">Boxed Fancy</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item"><a className="nav-link " href="../e-commerce/index.html">E-Commerce</a></li>
                                                    <li className="nav-item"><a className="nav-link " href="../social-app/index.html">Social App</a></li>
                                                    <li className="nav-item"><a className="nav-link " href="../blog/index.html">Blog</a></li>
                                                    <li className="nav-item"><a className="nav-link " href="../appointment/index.html">Appointment</a></li>
                                                    <li className="nav-item"><a className="nav-link active" href="../file-manager/index.html">File Manager</a></li>
                                                    <li className="nav-item"><a className="nav-link " href="../chat/index.html" target="_blank">Chat</a></li>
                                                    <li className="nav-item"><a className="nav-link " href="../mail/index.html">Mail</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link menu-arrow justify-content-start" data-bs-toggle="collapse" href="#allPagesData" role="button" aria-expanded="false" aria-controls="allPagesData">
                                                    <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2" fill="currentColor"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07999 6.64999V6.65999C7.64899 6.65999 7.29999 7.00999 7.29999 7.43999C7.29999 7.86999 7.64899 8.21999 8.07999 8.21999H11.069C11.5 8.21999 11.85 7.86999 11.85 7.42899C11.85 6.99999 11.5 6.64999 11.069 6.64999H8.07999ZM15.92 12.74H8.07999C7.64899 12.74 7.29999 12.39 7.29999 11.96C7.29999 11.53 7.64899 11.179 8.07999 11.179H15.92C16.35 11.179 16.7 11.53 16.7 11.96C16.7 12.39 16.35 12.74 15.92 12.74ZM15.92 17.31H8.07999C7.77999 17.35 7.48999 17.2 7.32999 16.95C7.16999 16.69 7.16999 16.36 7.32999 16.11C7.48999 15.85 7.77999 15.71 8.07999 15.74H15.92C16.319 15.78 16.62 16.12 16.62 16.53C16.62 16.929 16.319 17.27 15.92 17.31Z" fill="currentColor"></path>
                                                    </svg>
                                                    <span className="nav-text ms-2">Pages</span>
                                                </a>
                                                <ul className="iq-header-sub-menu list-unstyled collapse" id="allPagesData">
                                                    <li className="nav-item">
                                                        <a className="nav-link menu-arrow " data-bs-toggle="collapse" href="#specialPages" role="button" aria-expanded="false" aria-controls="specialPages">
                                                            Special Pages
                                                            <i className="right-icon">
                                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="specialPages">
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/special-pages/billing.html">Billing</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/special-pages/calender.html">Calender</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/special-pages/kanban.html">Kanban</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/special-pages/pricing.html">Pricing</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/special-pages/timeline.html">Timeline</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#authSkins" role="button" aria-expanded="false" aria-controls="authSkins">
                                                            Auth skins
                                                            <i className="right-icon">
                                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="authSkins">
                                                            <li className="nav-item">
                                                                <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#defaultAuth" role="button" aria-expanded="false" aria-controls="defaultAuth">
                                                                    Default
                                                                    <i className="right-icon">
                                                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        </svg>
                                                                    </i>
                                                                </a>
                                                                <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="defaultAuth">
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/auth/sign-in.html">Sign In</a></li>
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/auth/sign-up.html">Sign Up</a></li>
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/auth/confirm-mail.html">Email Verified</a></li>
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/auth/recoverpw.html">Reset Password</a></li>
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/auth/lock-screen.html">Lock Screen</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#animatedAuth" role="button" aria-expanded="false" aria-controls="animatedAuth">
                                                                    Animated
                                                                    <i className="right-icon">
                                                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        </svg>
                                                                    </i>
                                                                </a>
                                                                <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="animatedAuth">
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/auth-pro/sign-in.html">Sign In</a></li>
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/auth-pro/sign-up.html">Sign Up</a></li>
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/auth-pro/email.html">Email</a></li>
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/auth-pro/lock-screen.html">Lock screen</a></li>
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/auth-pro/reset-password.html">Reset password</a></li>
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/auth-pro/two-factor.html">Two factor</a></li>
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/auth-pro/account-deactivate.html">Account
                                                                        deactivate</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#popupAuth" role="button" aria-expanded="false" aria-controls="popupAuth">
                                                                    popup
                                                                    <i className="right-icon">
                                                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        </svg>
                                                                    </i>
                                                                </a>
                                                                <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="popupAuth">
                                                                    <li className="nav-item"><a className="nav-link " href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Sign In</a></li>
                                                                    <li className="nav-item"><a className="nav-link " href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Sign Up</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#simpleAuth" role="button" aria-expanded="false" aria-controls="simpleAuth">
                                                                    simple
                                                                    <i className="right-icon">
                                                                        <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        </svg>
                                                                    </i>
                                                                </a>
                                                                <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="simpleAuth">
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/simple-auth-pro/sign-in.html">Sign In</a></li>
                                                                    <li className="nav-item"><a className="nav-link " href="../dashboard/simple-auth-pro/sign-up.html">Sign Up</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#userApps" role="button" aria-expanded="false" aria-controls="userApps">
                                                            User
                                                            <i className="right-icon">
                                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="userApps">
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/app/user-profile.html">User Profile</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/app/user-add.html">User Add</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/app/user-list.html">User List</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#utilities" role="button" aria-expanded="false" aria-controls="utilities">
                                                            Utilities
                                                            <i className="right-icon">
                                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="utilities">
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/errors/maintenance.html">Maintenance</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/errors/error404.html">404</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/errors/error500.html">505</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#extraPlugins" role="button" aria-expanded="false" aria-controls="extraPlugins">
                                                            Plugins
                                                            <i className="right-icon">
                                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="extraPlugins">
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/button-hover.html">Button Hover</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/choise-js.html">Choise JS</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/fslightbox.html">FSlightbox</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/select2.html">Select2</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/sweet-alert.html">Sweetalert</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/flatpickr.html">flatpickr</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/apexcharts.html">Apexcharts</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/gallery-hover.html">Gallery Hover</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/image-croper.html">Image Croper</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/loader.html">Loader</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/rating.html">Rating</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/quill-editor.html">Quill</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/plugins/uppy.html">Uppy</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link menu-arrow justify-content-start" data-bs-toggle="collapse" href="#elementsData" role="button" aria-expanded="false" aria-controls="elementsData">
                                                    <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M11.9912 18.6215L5.49945 21.8641C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7088C4 14.4284 4.40573 14.8726 5.47299 15.3701L11.9912 18.6215Z" fill="currentColor"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z" fill="currentColor"></path>
                                                    </svg>
                                                    <span className="nav-text ms-2">Elements </span>
                                                </a>
                                                <ul className="iq-header-sub-menu list-unstyled collapse" id="elementsData">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="../">Components</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="../dashboard/plugins/ui-color.html">UI Color</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#widgetsPage" role="button" aria-expanded="false" aria-controls="widgetsPage">
                                                            Widgets
                                                            <i className="right-icon">
                                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="widgetsPage">
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/widget/widgetbasic.html">Widget Basic</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/widget/widgetchart.html">Widget Chart</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/widget/widgetcard.html">Widget Card</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#mapPages" role="button" aria-expanded="false" aria-controls="mapPages">
                                                            Map
                                                            <i className="right-icon">
                                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="mapPages">
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/maps/google.html">Google</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/maps/vector.html">Vector</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#formsPages" role="button" aria-expanded="false" aria-controls="formsPages">
                                                            Form
                                                            <i className="right-icon">
                                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="formsPages">
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/form/form-element.html">Element</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/form/form-wizard.html">Wizard</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/form/form-validation.html">Validation</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#tablesPages" role="button" aria-expanded="false" aria-controls="tablesPages">
                                                            Table
                                                            <i className="right-icon">
                                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="tablesPages">
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/table/bootstrap-table.html">Bootstrap Table</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/table/table-data.html">Data Table</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/table/border-table.html">Bordered Table</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/table/fancy-table.html">Fancy Table</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/table/fixed-table.html">Fixed Table</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link menu-arrow" data-bs-toggle="collapse" href="#iconsPages" role="button" aria-expanded="false" aria-controls="iconsPages">
                                                            Icons
                                                            <i className="right-icon">
                                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <ul aria-expanded="false" className="iq-header-sub-menu left list-unstyled collapse" id="iconsPages">
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/icons/solid.html">Solid</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/icons/outline.html">Outlined</a></li>
                                                            <li className="nav-item"><a className="nav-link " href="../dashboard/icons/dual-tone.html">Dual Tone</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <button id="navbar-toggle" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">
                                        <span className="navbar-toggler-bar bar1 mt-1"></span>
                                        <span className="navbar-toggler-bar bar2"></span>
                                        <span className="navbar-toggler-bar bar3"></span>
                                    </span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
                                    <li className="nav-item dropdown me-0 me-xl-3">
                                        <div className="d-flex align-items-center mr-2 iq-font-style" role="group" aria-label="First group" data-setting="radio">
                                            <input type="radio" className="btn-check" name="theme_font_size" value="theme-fs-sm" id="font-size-sm" />
                                            <label className="btn btn-border border-0 btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Font size 14px">
                                                <span className="mb-0 h6" >A</span>
                                            </label>
                                            <input type="radio" className="btn-check" name="theme_font_size" value="theme-fs-md" id="font-size-md" />
                                            <label className="btn btn-border border-0 btn-icon" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Font size 16px">
                                                <span className="mb-0 h4" >A</span>
                                            </label>
                                            <input type="radio" className="btn-check" name="theme_font_size" value="theme-fs-lg" id="font-size-lg" />
                                            <label className="btn btn-border border-0 btn-icon" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Font size 18px">
                                                <span className="mb-0 h2" >A</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown border-end pe-3 d-none d-xl-block">
                                        <div className="form-group input-group mb-0 search-input">
                                            <input type="text" className="form-control" placeholder="Search..." />
                                            <span className="input-group-text">
                                                <svg className="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                                                    <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown iq-responsive-menu border-end d-block d-xl-none">
                                        <div className="btn btn-sm bg-body" id="navbarDropdown-search-11" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                                                <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown-search-11" >
                                            <li className="px-3 py-0">
                                                <div className="form-group input-group mb-0">
                                                    <input type="text" className="form-control" placeholder="Search..." />
                                                    <span className="input-group-text">
                                                        <svg className="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                                                            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link ps-3" id="notification-drop" data-bs-toggle="dropdown">
                                            <div className="btn btn-primary btn-icon btn-sm rounded-pill btn-action">
                                                <span className="btn-inner">
                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                <span className="notification-alert"></span>
                                            </div>
                                        </a>
                                        <div className="p-0 sub-drop dropdown-menu dropdown-menu-end" aria-labelledby="notification-drop">
                                            <div className="m-0 shadow-none card">
                                                <div className="py-3 card-header d-flex justify-content-between bg-primary">
                                                    <div className="header-title">
                                                        <h5 className="mb-0 text-white">All Carts</h5>
                                                    </div>
                                                </div>
                                                <div className="p-0 card-body max-17 scroll-thin">
                                                    <div className="iq-sub-card">
                                                        <div className="d-flex align-items-center">
                                                            <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/shapes/01.png" alt="" loading="lazy" />
                                                            <div className="ms-3 flex-grow-1">
                                                                <h6 className="mb-0 ">Biker’s Jacket</h6>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <p className="mb-0">$56.00</p>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn btn-icon text-danger btn-sm">
                                                                <span className="btn-inner">
                                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                        <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="iq-sub-card">
                                                        <div className="d-flex align-items-center">
                                                            <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/shapes/02.png" alt="" loading="lazy" />
                                                            <div className="ms-3 flex-grow-1">
                                                                <h6 className="mb-0 ">Casual Shoes</h6>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <p className="mb-0">$56.00</p>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn btn-icon text-danger btn-sm">
                                                                <span className="btn-inner">
                                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                        <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="iq-sub-card">
                                                        <div className="d-flex align-items-center">
                                                            <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/shapes/03.png" alt="" loading="lazy" />
                                                            <div className="ms-3 flex-grow-1">
                                                                <h6 className="mb-0 ">Knitted Shrug</h6>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <p className="mb-0">$56.00</p>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn btn-icon text-danger btn-sm">
                                                                <span className="btn-inner">
                                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                        <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="iq-sub-card">
                                                        <div className="d-flex align-items-center">
                                                            <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/shapes/04.png" alt="" loading="lazy" />
                                                            <div className="ms-3 flex-grow-1">
                                                                <h6 className="mb-0 ">Blue Handbag</h6>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <p className="mb-0">$56.00</p>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn btn-icon text-danger btn-sm">
                                                                <span className="btn-inner">
                                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                        <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="iq-sub-card">
                                                        <div className="d-flex align-items-center">
                                                            <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/shapes/01.png" alt="" loading="lazy" />
                                                            <div className="ms-3 flex-grow-1">
                                                                <h6 className="mb-0 ">Bikers Jacket</h6>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <p className="mb-0">$56.00</p>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn btn-icon text-danger btn-sm">
                                                                <span className="btn-inner">
                                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                        <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="iq-sub-card">
                                                        <div className="d-flex align-items-center">
                                                            <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/shapes/02.png" alt="" loading="lazy" />
                                                            <div className="ms-3 flex-grow-1">
                                                                <h6 className="mb-0 ">Casual Shoes</h6>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <p className="mb-0">$56.00</p>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn btn-icon text-danger btn-sm">
                                                                <span className="btn-inner">
                                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                        <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="iq-sub-card">
                                                        <div className="d-flex align-items-center">
                                                            <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/shapes/03.png" alt="" loading="lazy" />
                                                            <div className="ms-3 flex-grow-1">
                                                                <h6 className="mb-0 ">Knitted Shrug</h6>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <p className="mb-0">$56.00</p>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn btn-icon text-danger btn-sm">
                                                                <span className="btn-inner">
                                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                        <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="iq-sub-card">
                                                        <div className="d-flex align-items-center">
                                                            <img className="p-1 avatar-40 rounded-pill bg-soft-primary" src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/shapes/04.png" alt="" loading="lazy" />
                                                            <div className="ms-3 flex-grow-1">
                                                                <h6 className="mb-0 ">Blue Handbag</h6>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <p className="mb-0">$56.00</p>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn btn-icon text-danger btn-sm">
                                                                <span className="btn-inner">
                                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                        <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer p-0 text-center">
                                                    <div className="d-grid">
                                                        <a href="../e-commerce/order-process.html" className="btn btn-primary">View All</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown" id="itemdropdown1">
                                        <a className="py-0 nav-link d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="btn btn-primary btn-icon btn-sm rounded-pill">
                                                <span className="btn-inner">
                                                    <svg className="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z" fill="currentColor"></path>
                                                        <path opacity="0.4" d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a className="dropdown-item" href="../dashboard/app/user-profile.html">Profile</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="../dashboard/app/user-privacy-setting.html">Privacy Setting</a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="../dashboard/auth/sign-in.html">Logout</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item iq-full-screen d-none d-xl-block" id="fullscreen-item">
                                        <a href="#" className="nav-link" id="btnFullscreen" data-bs-toggle="dropdown">
                                            <div className="btn btn-primary btn-icon btn-sm rounded-pill">
                                                <span className="btn-inner">
                                                    <svg className="normal-screen icon-24" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.5528 5.99656L13.8595 10.8961" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M14.8016 5.97618L18.5524 5.99629L18.5176 9.96906" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M5.8574 18.896L10.5507 13.9964" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M9.60852 18.9164L5.85775 18.8963L5.89258 14.9235" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <svg className="full-normal-screen d-none icon-24" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.7542 10.1932L18.1867 5.79319" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.2976 10.212L13.7547 10.1934L13.7871 6.62518" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.4224 13.5726L5.82149 18.1398" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M6.74391 13.5535L10.4209 13.5723L10.3867 17.2755" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav> */}
                </div>
                <div className="content-inner pb-0 container-fluid" id="page_layout">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3 className="mb-0">Your Folders</h3>
                            <div className="row row-cols-lg-4 row-cols-md-4 row-cols-1 ">
                                <div className="col">
                                    <div className="card card-folder">
                                        <div className="card-body" style={{cursor:'pointer'}} onClick={()=>{history.push(fileManagerLocations.fileList)}}>
                                            <div className="d-flex justify-content-between">
                                                <a className="avatar-40 bg-soft-primary rounded-pill d-flex justify-content-center align-items-center">
                                                    <svg width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M16.3328 22H7.66618C4.2769 22 2 19.6229 2 16.0843V7.91672C2 4.37811 4.2769 2 7.66618 2H16.3338C19.7231 2 22 4.37811 22 7.91672V16.0843C22 19.6229 19.7231 22 16.3328 22Z" fill="currentColor"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2451 8.67496C11.2451 10.045 10.1301 11.16 8.7601 11.16C7.3891 11.16 6.2751 10.045 6.2751 8.67496C6.2751 7.30496 7.3891 6.18896 8.7601 6.18896C10.1301 6.18896 11.2451 7.30496 11.2451 8.67496ZM19.4005 14.0876C19.6335 14.3136 19.8005 14.5716 19.9105 14.8466C20.2435 15.6786 20.0705 16.6786 19.7145 17.5026C19.2925 18.4836 18.4845 19.2246 17.4665 19.5486C17.0145 19.6936 16.5405 19.7556 16.0675 19.7556H7.6865C6.8525 19.7556 6.1145 19.5616 5.5095 19.1976C5.1305 18.9696 5.0635 18.4446 5.3445 18.1026C5.8145 17.5326 6.2785 16.9606 6.7465 16.3836C7.6385 15.2796 8.2395 14.9596 8.9075 15.2406C9.1785 15.3566 9.4505 15.5316 9.7305 15.7156C10.4765 16.2096 11.5135 16.8876 12.8795 16.1516C13.8132 15.641 14.3552 14.7673 14.827 14.0069L14.8365 13.9916C14.8682 13.9407 14.8997 13.8898 14.9311 13.8391C15.0915 13.5799 15.2495 13.3246 15.4285 13.0896C15.6505 12.7986 16.4745 11.8886 17.5395 12.5366C18.2185 12.9446 18.7895 13.4966 19.4005 14.0876Z" fill="currentColor"></path>
                                                    </svg>
                                                </a>

                                                <div className="dropdown">
                                                    <svg width="5" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" id="dropdownMenu-1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <path d="M2.49927 2.50444V2.49544" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 7.50438V7.49538" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 12.5044V12.4954" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu-1">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <h5>Image</h5>
                                                <p className="mb-0">246 Items</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>                    <div className="col">
                                    <div className="card card-folder">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <a className="avatar-40 bg-soft-primary rounded-pill d-flex justify-content-center align-items-center">
                                                    <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M21.3309 7.44251C20.9119 7.17855 20.3969 7.1552 19.9579 7.37855L18.4759 8.12677C17.9279 8.40291 17.5879 8.96129 17.5879 9.58261V15.4161C17.5879 16.0374 17.9279 16.5948 18.4759 16.873L19.9569 17.6202C20.1579 17.7237 20.3729 17.7735 20.5879 17.7735C20.8459 17.7735 21.1019 17.7004 21.3309 17.5572C21.7499 17.2943 21.9999 16.8384 21.9999 16.339V8.66179C21.9999 8.1623 21.7499 7.70646 21.3309 7.44251Z" fill="currentColor"></path>
                                                        <path d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z" fill="currentColor"></path>
                                                    </svg>
                                                </a>

                                                <div className="dropdown">
                                                    <svg width="5" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" id="dropdownMenu-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <path d="M2.49927 2.50444V2.49544" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 7.50438V7.49538" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 12.5044V12.4954" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu-2">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <h5>Video</h5>
                                                <p className="mb-0">246 Items</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>                    <div className="col">
                                    <div className="card card-folder">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <a className="avatar-40 bg-soft-primary rounded-pill d-flex justify-content-center align-items-center">
                                                    <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M18.8088 9.021C18.3573 9.021 17.7592 9.011 17.0146 9.011C15.1987 9.011 13.7055 7.508 13.7055 5.675V2.459C13.7055 2.206 13.5036 2 13.253 2H7.96363C5.49517 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59022 22 8.16958 22H16.0463C18.5058 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.299 9.012 20.0475 9.013C19.6247 9.016 19.1177 9.021 18.8088 9.021Z" fill="currentColor"></path>
                                                        <path opacity="0.4" d="M16.0842 2.56737C15.7852 2.25637 15.2632 2.47037 15.2632 2.90137V5.53837C15.2632 6.64437 16.1742 7.55437 17.2802 7.55437C17.9772 7.56237 18.9452 7.56437 19.7672 7.56237C20.1882 7.56137 20.4022 7.05837 20.1102 6.75437C19.0552 5.65737 17.1662 3.69137 16.0842 2.56737Z" fill="currentColor"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.97398 11.3877H12.359C12.77 11.3877 13.104 11.0547 13.104 10.6437C13.104 10.2327 12.77 9.89868 12.359 9.89868H8.97398C8.56298 9.89868 8.22998 10.2327 8.22998 10.6437C8.22998 11.0547 8.56298 11.3877 8.97398 11.3877ZM8.97408 16.3819H14.4181C14.8291 16.3819 15.1631 16.0489 15.1631 15.6379C15.1631 15.2269 14.8291 14.8929 14.4181 14.8929H8.97408C8.56308 14.8929 8.23008 15.2269 8.23008 15.6379C8.23008 16.0489 8.56308 16.3819 8.97408 16.3819Z" fill="currentColor"></path>
                                                    </svg>
                                                </a>

                                                <div className="dropdown">
                                                    <svg width="5" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" id="dropdownMenu-3" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <path d="M2.49927 2.50444V2.49544" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 7.50438V7.49538" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 12.5044V12.4954" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu-3">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <h5>Documents</h5>
                                                <p className="mb-0">246 Items</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>                    <div className="col">
                                    <div className="card card-folder">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <a className="avatar-40 bg-soft-primary rounded-pill d-flex justify-content-center align-items-center">
                                                    <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.3571 6.45056C13.3068 5.96422 13.2543 5.45963 13.1254 4.95611C12.7741 3.75153 11.801 3.00001 10.7576 3.00001C10.1757 2.99786 9.43954 3.35644 9.0222 3.71932L5.56287 6.61697H3.75194C2.41918 6.61697 1.34751 7.6444 1.14513 9.12705C0.973161 10.5506 0.931217 13.2379 1.14513 14.8042C1.33073 16.3706 2.35416 17.383 3.75194 17.383H5.56287L9.08931 20.3236C9.45107 20.6382 10.0897 20.9989 10.6769 20.9989C10.7146 21 10.7482 21 10.7817 21C11.845 21 12.7814 20.2206 13.1327 19.0192C13.2659 18.5082 13.312 18.0293 13.3571 17.5666L13.4043 17.1082C13.5846 15.6213 13.5846 8.36908 13.4043 6.89288L13.3571 6.45056Z" fill="currentColor"></path>
                                                        <path opacity="0.4" d="M17.4064 6.49468C17.118 6.06953 16.5465 5.96325 16.1281 6.25849C15.7139 6.55587 15.6112 7.14206 15.8995 7.56613C16.7017 8.74816 17.1432 10.3221 17.1432 12.0001C17.1432 13.6771 16.7017 15.252 15.8995 16.4341C15.6112 16.8581 15.7139 17.4443 16.1292 17.7417C16.2844 17.8512 16.4658 17.9092 16.6524 17.9092C16.9534 17.9092 17.2344 17.7578 17.4064 17.5055C18.4193 16.0132 18.9782 14.0582 18.9782 12.0001C18.9782 9.94201 18.4193 7.98698 17.4064 6.49468Z" fill="currentColor"></path>
                                                        <path opacity="0.4" d="M20.5672 3.45726C20.2809 3.03319 19.7073 2.92475 19.29 3.22107C18.8758 3.51845 18.773 4.10464 19.0603 4.52871C20.4172 6.52776 21.1649 9.18169 21.1649 11.9999C21.1649 14.8192 20.4172 17.4731 19.0603 19.4722C18.773 19.8973 18.8758 20.4824 19.291 20.7798C19.4462 20.8893 19.6266 20.9473 19.8132 20.9473C20.1142 20.9473 20.3963 20.7959 20.5672 20.5436C22.1359 18.2343 22.9999 15.2003 22.9999 11.9999C22.9999 8.80164 22.1359 5.76657 20.5672 3.45726Z" fill="currentColor"></path>
                                                    </svg>
                                                </a>

                                                <div className="dropdown">
                                                    <svg width="5" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" id="dropdownMenu-4" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <path d="M2.49927 2.50444V2.49544" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 7.50438V7.49538" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 12.5044V12.4954" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu-4">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <h5>Audio</h5>
                                                <p className="mb-0">246 Items</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>                    <div className="col">
                                    <div className="card card-folder">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <a className="avatar-40 bg-soft-primary rounded-pill d-flex justify-content-center align-items-center">
                                                    <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M22 12.0048C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0048C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0048Z" fill="currentColor"></path>
                                                        <path d="M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z" fill="currentColor"></path>
                                                    </svg>
                                                </a>

                                                <div className="dropdown">
                                                    <svg width="5" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" id="dropdownMenu-5" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <path d="M2.49927 2.50444V2.49544" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 7.50438V7.49538" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 12.5044V12.4954" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu-5">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <h5>Movies</h5>
                                                <p className="mb-0">246 Items</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>                    <div className="col">
                                    <div className="card card-folder">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <a className="avatar-40 bg-soft-primary rounded-pill d-flex justify-content-center align-items-center">
                                                    <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                                                        <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                                                        <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                                                    </svg>
                                                </a>

                                                <div className="dropdown">
                                                    <svg width="5" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" id="dropdownMenu-6" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <path d="M2.49927 2.50444V2.49544" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 7.50438V7.49538" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 12.5044V12.4954" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu-6">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <h5>Assignment</h5>
                                                <p className="mb-0">246 Items</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>                    <div className="col">
                                    <div className="card card-folder">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <a className="avatar-40 bg-soft-primary rounded-pill d-flex justify-content-center align-items-center">
                                                    <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M16.8843 5.11485H13.9413C13.2081 5.11969 12.512 4.79355 12.0474 4.22751L11.0782 2.88762C10.6214 2.31661 9.9253 1.98894 9.19321 2.00028H7.11261C3.37819 2.00028 2.00001 4.19201 2.00001 7.91884V11.9474C1.99536 12.3904 21.9956 12.3898 21.9969 11.9474V10.7761C22.0147 7.04924 20.6721 5.11485 16.8843 5.11485Z" fill="currentColor"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8321 6.54353C21.1521 6.91761 21.3993 7.34793 21.5612 7.81243C21.8798 8.76711 22.0273 9.77037 21.9969 10.7761V16.0292C21.9956 16.4717 21.963 16.9135 21.8991 17.3513C21.7775 18.1241 21.5057 18.8656 21.0989 19.5342C20.9119 19.8571 20.6849 20.1553 20.4231 20.4215C19.2383 21.5089 17.665 22.0749 16.0574 21.9921H7.93061C6.32049 22.0743 4.74462 21.5086 3.55601 20.4215C3.2974 20.1547 3.07337 19.8566 2.88915 19.5342C2.48475 18.8661 2.21869 18.1238 2.1067 17.3513C2.03549 16.9142 1.99981 16.4721 2 16.0292V10.7761C1.99983 10.3374 2.02357 9.89902 2.07113 9.46288C2.08113 9.38636 2.09614 9.31109 2.11098 9.23659C2.13573 9.11241 2.16005 8.99038 2.16005 8.86836C2.25031 8.34204 2.41496 7.83116 2.64908 7.35101C3.34261 5.86916 4.76525 5.11492 7.09481 5.11492H16.8754C18.1802 5.01401 19.4753 5.4068 20.5032 6.21522C20.6215 6.3156 20.7316 6.4254 20.8321 6.54353ZM6.97033 15.5412H17.0355H17.0533C17.2741 15.5507 17.4896 15.4717 17.6517 15.3217C17.8137 15.1716 17.9088 14.963 17.9157 14.7425C17.9282 14.5487 17.8644 14.3577 17.7379 14.2101C17.5924 14.0118 17.3618 13.8935 17.1155 13.8907H6.97033C6.51365 13.8907 6.14343 14.2602 6.14343 14.7159C6.14343 15.1717 6.51365 15.5412 6.97033 15.5412Z" fill="currentColor"></path>
                                                    </svg>
                                                </a>

                                                <div className="dropdown">
                                                    <svg width="5" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" id="dropdownMenu-7" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <path d="M2.49927 2.50444V2.49544" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 7.50438V7.49538" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 12.5044V12.4954" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu-7">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <h5>Ui-Kit</h5>
                                                <p className="mb-0">246 Items</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-folder">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <a className="avatar-40 bg-soft-primary rounded-pill d-flex justify-content-center align-items-center">
                                                    <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M12.9763 3.11361L15.2028 7.58789C15.3668 7.91205 15.6799 8.13717 16.041 8.18719L21.042 8.91556C21.3341 8.95658 21.5992 9.11066 21.7782 9.34578C21.9552 9.5779 22.0312 9.87205 21.9882 10.1612C21.9532 10.4013 21.8402 10.6234 21.6672 10.7935L18.0434 14.3063C17.7783 14.5514 17.6583 14.9146 17.7223 15.2698L18.6145 20.2083C18.7095 20.8046 18.3144 21.3669 17.7223 21.48C17.4783 21.519 17.2282 21.478 17.0082 21.3659L12.5472 19.0417C12.2161 18.8746 11.8251 18.8746 11.494 19.0417L7.03303 21.3659C6.48491 21.657 5.80576 21.4589 5.5007 20.9187C5.38767 20.7036 5.34766 20.4584 5.38467 20.2193L6.27686 15.2798C6.34088 14.9256 6.21985 14.5604 5.95579 14.3153L2.33202 10.8045C1.90092 10.3883 1.88792 9.70296 2.30301 9.27175C2.31201 9.26274 2.32201 9.25274 2.33202 9.24273C2.50405 9.06764 2.7301 8.95658 2.97415 8.92757L7.97523 8.1982C8.33531 8.14717 8.64837 7.92406 8.81341 7.59789L10.9599 3.11361C11.1509 2.72942 11.547 2.4903 11.9771 2.5003H12.1111C12.4842 2.54533 12.8093 2.77644 12.9763 3.11361Z" fill="currentColor"></path>
                                                        <path d="M11.992 18.9171C11.7983 18.9231 11.6096 18.9752 11.4399 19.0682L7.00072 21.3871C6.45756 21.6464 5.80756 21.4452 5.50303 20.9258C5.39021 20.7136 5.34927 20.4704 5.38721 20.2322L6.27384 15.3032C6.33375 14.9449 6.21394 14.5806 5.95334 14.3284L2.32794 10.8185C1.8976 10.3971 1.88961 9.70556 2.31096 9.27421C2.31695 9.26821 2.32195 9.2632 2.32794 9.2582C2.49967 9.08806 2.72133 8.97597 2.95996 8.94094L7.96523 8.20433C8.32767 8.1583 8.64219 7.93211 8.80194 7.60384L10.9776 3.06312C11.1843 2.69682 11.5806 2.47864 12 2.50166C11.992 2.7989 11.992 18.715 11.992 18.9171Z" fill="currentColor"></path>
                                                    </svg>
                                                </a>

                                                <div className="dropdown">
                                                    <svg width="5" viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" id="dropdownMenu-8" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <path d="M2.49927 2.50444V2.49544" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 7.50438V7.49538" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2.49927 12.5044V12.4954" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu-8">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <h5>Design</h5>
                                                <p className="mb-0">246 Items</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="mb-0">Storage Details</h4>
                                </div>
                                <div className="card-body">
                                    <div role="progressbar" className="circularProgressBar mx-5" style={{ width: '70%' }}></div>
                                <div className='text-center  fw-bold'>Used of 100MB</div>
                                    <div className="row ">
                                        <div className="col-sm-12 mt-5">
                                            <div id="storage-chart"><div id="apexchartsus8bdyay" className="apexcharts-canvas apexchartsus8bdyay apexcharts-theme-light" >        </div>
                                            </div>
                                            <div className="d-flex flex flex-column gap-4">
                                                <div className="d-flex gap-3">
                                                    <span className="avatar-50 bg-soft-primary rounded">
                                                        <svg className="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                    <div className="w-100 ">
                                                        <div className="d-flex justify-content-between">
                                                            <h6>Documents</h6>
                                                            <p>5,674s</p>
                                                        </div>
                                                        <div className="shadow-none progress bg-soft-primary w-100" >
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{width:'50%'}}></div> </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-3 ">
                                                    <span className="avatar-50 bg-soft-primary rounded">
                                                        <svg className="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.4" d="M21.3309 7.44251C20.9119 7.17855 20.3969 7.1552 19.9579 7.37855L18.4759 8.12677C17.9279 8.40291 17.5879 8.96129 17.5879 9.58261V15.4161C17.5879 16.0374 17.9279 16.5948 18.4759 16.873L19.9569 17.6202C20.1579 17.7237 20.3729 17.7735 20.5879 17.7735C20.8459 17.7735 21.1019 17.7004 21.3309 17.5572C21.7499 17.2943 21.9999 16.8384 21.9999 16.339V8.66179C21.9999 8.1623 21.7499 7.70646 21.3309 7.44251Z" fill="currentColor"></path>
                                                            <path d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                    <div className="w-100 ">
                                                        <div className="d-flex justify-content-between">
                                                            <h6>Videos</h6>
                                                            <p>1,624</p>
                                                        </div>
                                                        <div className="shadow-none progress bg-soft-primary w-100" >
                                                            <div className="progress-bar bg-warning" role="progressbar" style={{width:'60%'}}></div> </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-3">
                                                    <span className="avatar-50 bg-soft-primary rounded">
                                                        <svg className="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.4" d="M16.3328 22H7.66618C4.2769 22 2 19.6229 2 16.0843V7.91672C2 4.37811 4.2769 2 7.66618 2H16.3338C19.7231 2 22 4.37811 22 7.91672V16.0843C22 19.6229 19.7231 22 16.3328 22Z" fill="currentColor"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2451 8.67496C11.2451 10.045 10.1301 11.16 8.7601 11.16C7.3891 11.16 6.2751 10.045 6.2751 8.67496C6.2751 7.30496 7.3891 6.18896 8.7601 6.18896C10.1301 6.18896 11.2451 7.30496 11.2451 8.67496ZM19.4005 14.0876C19.6335 14.3136 19.8005 14.5716 19.9105 14.8466C20.2435 15.6786 20.0705 16.6786 19.7145 17.5026C19.2925 18.4836 18.4845 19.2246 17.4665 19.5486C17.0145 19.6936 16.5405 19.7556 16.0675 19.7556H7.6865C6.8525 19.7556 6.1145 19.5616 5.5095 19.1976C5.1305 18.9696 5.0635 18.4446 5.3445 18.1026C5.8145 17.5326 6.2785 16.9606 6.7465 16.3836C7.6385 15.2796 8.2395 14.9596 8.9075 15.2406C9.1785 15.3566 9.4505 15.5316 9.7305 15.7156C10.4765 16.2096 11.5135 16.8876 12.8795 16.1516C13.8132 15.641 14.3552 14.7673 14.827 14.0069L14.8365 13.9916C14.8682 13.9407 14.8997 13.8898 14.9311 13.8391C15.0915 13.5799 15.2495 13.3246 15.4285 13.0896C15.6505 12.7986 16.4745 11.8886 17.5395 12.5366C18.2185 12.9446 18.7895 13.4966 19.4005 14.0876Z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                    <div className="w-100 ">
                                                        <div className="d-flex justify-content-between">
                                                            <h6>Images</h6>
                                                            <p>5,515</p>
                                                        </div>
                                                        <div className="shadow-none progress bg-soft-primary w-100" >
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{width:'90%'}} ></div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        <div className="row">
                            <div className="col-lg-8 ">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="d-flex flex-wrap justify-content-between">
                                            <h4 className="me-2 mt-2">Activity Chart</h4>
                                            <div className="d-flex mt-2">
                                                <div className="dropdown">
                                                    <a href="#" className="text-secondary dropdown-toggle" id="dropdownMenuButton22" data-bs-toggle="dropdown" aria-expanded="false">This year</a>
                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton22" >
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">omething else herer</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div id="file-manager-chart" style={{ minHeight: '325px' }}><div id="apexchartsh7gcrg8" className="apexcharts-canvas apexchartsh7gcrg8 apexcharts-theme-light" style={{ width: '507px', height: '310px' }}>
                                            <svg id="SvgjsSvg1322" width="507" height="310" xmlns="http://www.w3.org/2000/svg" version="1.1" className="apexcharts-svg" transform="translate(0, 0)" style={{ background: 'transparent' }}>
                                                <g id="SvgjsG1324" className="apexcharts-inner apexcharts-graphical" transform="translate(64.4516372680664, 30)"><defs id="SvgjsDefs1323"><clipPath id="gridRectMaskh7gcrg8"><rect id="SvgjsRect1330" width="994.3784408569336" height="246.15699999999998" x="-3.5" y="-1.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath>
                                                    <clipPath id="forecastMaskh7gcrg8"></clipPath><clipPath id="nonForecastMaskh7gcrg8"></clipPath><clipPath id="gridRectMarkerMaskh7gcrg8"><rect id="SvgjsRect1331" width="991.3784408569336" height="247.15699999999998" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><linearGradient id="SvgjsLinearGradient1336" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop1337" stop-opacity="1" stop-color="rgba(58,87,232,1)" offset="0"></stop><stop id="SvgjsStop1338" stop-opacity="1" stop-color="rgba(58,87,232,1)" offset="0.5"></stop><stop id="SvgjsStop1339" stop-opacity="1" stop-color="rgba(58,87,232,1)" offset="1"></stop></linearGradient></defs><line id="SvgjsLine1329" x1="164.06307347615558" y1="0" x2="164.06307347615558" y2="243.15699999999998" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-xcrosshairs" x="164.06307347615558" y="0" width="1" height="243.15699999999998" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG1352" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1353" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1355" font-family="Helvetica, Arial, sans-serif" x="0" y="272.157" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " ><tspan id="SvgjsTspan1356">Jan</tspan><title>Jan</title></text><text id="SvgjsText1358" x="164.56307347615558" y="272.157" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " ><tspan id="SvgjsTspan1359">Feb</tspan><title>Feb</title></text><text id="SvgjsText1361" x="329.1261469523112" y="272.157" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1362">Mar</tspan><title>Mar</title></text><text id="SvgjsText1364" font-family="Helvetica, Arial, sans-serif" x="493.68922042846685" y="272.157" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " ><tspan id="SvgjsTspan1365">Apr</tspan><title>Apr</title></text><text id="SvgjsText1367" x="658.2522939046225" y="272.157" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " ><tspan id="SvgjsTspan1368">May</tspan><title>May</title></text><text id="SvgjsText1370" x="822.8153673807782" y="272.157" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " ><tspan id="SvgjsTspan1371">Jun</tspan><title>Jun</title></text><text id="SvgjsText1373" x="987.3784408569337" y="272.157" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " >
                                                        <tspan id="SvgjsTspan1374">July</tspan><title>July</title></text></g></g><g id="SvgjsG1341" className="apexcharts-grid"><g id="SvgjsG1342" className="apexcharts-gridlines-horizontal"><line id="SvgjsLine1346" x1="0" y1="60.789249999999996" x2="987.3784408569336" y2="60.789249999999996" stroke="#e0e0e0" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1347" x1="0" y1="121.57849999999999" x2="987.3784408569336" y2="121.57849999999999" stroke="#e0e0e0" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                            <line id="SvgjsLine1348" x1="0" y1="182.36775" x2="987.3784408569336" y2="182.36775" stroke="#e0e0e0" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line></g><g id="SvgjsG1343" className="apexcharts-gridlines-vertical"></g><line id="SvgjsLine1351" x1="0" y1="243.15699999999998" x2="987.3784408569336" y2="243.15699999999998" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1350" x1="0" y1="1" x2="0" y2="243.15699999999998" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1332" className="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG1333" className="apexcharts-series"  ><path id="SvgjsPath1340" d="M 0 91.18387499999997C 57.59707571665445 91.18387499999997 106.96599775950114 182.36774999999997 164.56307347615558 182.36774999999997C 222.16014919281002 182.36774999999997 271.5290712356567 30.394624999999962 329.12614695231116 30.394624999999962C 386.7232226689656 30.394624999999962 436.0921447118123 182.36774999999997 493.68922042846674 182.36774999999997C 551.2862961451212 182.36774999999997 600.6552181879679 91.18387499999997 658.2522939046223 91.18387499999997C 715.8493696212768 91.18387499999997 765.2182916641235 212.76237499999996 822.815367380778 212.76237499999996C 880.4124430974324 212.76237499999996 929.781365140279 60.78924999999998 987.3784408569335 60.78924999999998" fill="none" fill-opacity="1" stroke="url(#SvgjsLinearGradient1336)" stroke-opacity="1" stroke-linecap="butt" stroke-width="3" stroke-dasharray="0" className="apexcharts-line" clip-path="url(#gridRectMaskh7gcrg8)" path="M 0 91.18387499999997C 57.59707571665445 91.18387499999997 106.96599775950114 182.36774999999997 164.56307347615558 182.36774999999997C 222.16014919281002 182.36774999999997 271.5290712356567 30.394624999999962 329.12614695231116 30.394624999999962C 386.7232226689656 30.394624999999962 436.0921447118123 182.36774999999997 493.68922042846674 182.36774999999997C 551.2862961451212 182.36774999999997 600.6552181879679 91.18387499999997 658.2522939046223 91.18387499999997C 715.8493696212768 91.18387499999997 765.2182916641235 212.76237499999996 822.815367380778 212.76237499999996C 880.4124430974324 212.76237499999996 929.781365140279 60.78924999999998 987.3784408569335 60.78924999999998" fill-rule="evenodd"></path><g id="SvgjsG1334" className="apexcharts-series-markers-wrap" >
                                                                <g className="apexcharts-series-markers"><circle id="SvgjsCircle1397" r="0" cx="164.56307347615558" cy="182.36774999999997" className="apexcharts-marker w90j9bxu4 no-pointer-events" stroke="#ffffff" fill="#3a57e8" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1335" className="apexcharts-datalabels" ></g></g>
                                                    <g id="SvgjsG1344" className="apexcharts-grid-borders"><line id="SvgjsLine1345" x1="0" y1="0" x2="987.3784408569336" y2="0" stroke="#e0e0e0" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1349" x1="0" y1="243.15699999999998" x2="987.3784408569336" y2="243.15699999999998" stroke="#e0e0e0" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line></g><line id="SvgjsLine1392" x1="0" y1="0" x2="987.3784408569336" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1393" x1="0" y1="0" x2="987.3784408569336" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1394" className="apexcharts-yaxis-annotations"></g><g id="SvgjsG1395" className="apexcharts-xaxis-annotations"></g><g id="SvgjsG1396" className="apexcharts-point-annotations"></g></g><rect id="SvgjsRect1328" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1375" className="apexcharts-yaxis" transform="translate(34.451637268066406, 0)"><g id="SvgjsG1376" className="apexcharts-yaxis-texts-g"><text id="SvgjsText1378" font-family="Helvetica, Arial, sans-serif" x="20" y="31.4" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " ><tspan id="SvgjsTspan1379">100 GB</tspan><title>100 GB</title></text><text id="SvgjsText1381" font-family="Helvetica, Arial, sans-serif" x="20" y="92.18925" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1382">80 GB</tspan><title>80 GB</title></text><text id="SvgjsText1384" font-family="Helvetica, Arial, sans-serif" x="20" y="152.9785" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " ><tspan id="SvgjsTspan1385">60 GB</tspan><title>60 GB</title></text><text id="SvgjsText1387" font-family="Helvetica, Arial, sans-serif" x="20" y="213.76775" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " ><tspan id="SvgjsTspan1388">40 GB</tspan><title>40 GB</title></text><text id="SvgjsText1390" font-family="Helvetica, Arial, sans-serif" x="20" y="274.55699999999996" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " >
                                                        <tspan id="SvgjsTspan1391">20 GB</tspan><title>20 GB</title></text></g></g><g id="SvgjsG1325" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend" style={{ maxHeight: '155px' }}></div><div className="apexcharts-tooltip apexcharts-theme-light" style={{ left: '240.015px', top: '185.368px' }}><div className="apexcharts-tooltip-title" >Feb</div><div className="apexcharts-tooltip-series-group apexcharts-active" style={{ order: 1, display: 'flex' }}><span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgb(58, 87, 232)' }}></span>
                                                            <div className="apexcharts-tooltip-text" ><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label">Booked: </span><span className="apexcharts-tooltip-text-y-value">40 GB</span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light" style={{ left: '206.683px', top: '275.157px' }}><div className="apexcharts-xaxistooltip-text" style={{ fontSize: '12px', minWidth: '18.9609px' }}>Feb</div></div>
                                            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text"></div></div></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 ">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="mb-0">Uploading on Drive</h4>
                                    </div>
                                    <div className="card-body d-flex gap-4 flex-column">
                                        <div className="">
                                            <p className="drive-header mb-0" >Onboarding.zip</p>
                                            <div className="drive-progress d-flex align-items-center">
                                                <div className="shadow-none progress bg-soft-primary w-75" >
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '20%', transition: 'width 2s ease 0s' }}></div>
                                                </div>
                                                <span className="ms-1"style={{fontSize:"12px"}}>23 mb</span>
                                            
                                            <svg width="20" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                                <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                            </svg></div>
                                        </div>
                                        <div className="">
                                            <p className="drive-header mb-0">Web Design.zip</p>
                                            <div className="drive-progress d-flex align-items-center">
                                                <div className="shadow-none progress bg-soft-primary w-75" >
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '20%', transition: 'width 2s ease 0s' }}></div>
                                                </div>
                                                <span className="ms-1"style={{fontSize:"12px"}}>90 mb</span>
                                            
                                            <svg width="20" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                                <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                            </svg></div>
                                        </div>
                                        <div className="">
                                            <p className="drive-header mb-0">Example.zar</p>
                                            <div className="drive-progress d-flex align-items-center">
                                                <div className="shadow-none progress bg-soft-primary w-75" >
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '20%', transition: 'width 2s ease 0s' }}></div>
                                                </div>
                                                <span className="ms-1"style={{fontSize:"12px"}}>73 mb</span>
                                            
                                            <svg width="20" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                                <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                            </svg></div>
                                        </div>
                                        <div className="">
                                            <p className="drive-header mb-0">Web Design.zip</p>
                                            <div className="drive-progress d-flex align-items-center">
                                                <div className="shadow-none progress bg-soft-primary w-75" >
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '20%', transition: 'width 2s ease 0s' }}></div>
                                                </div>
                                                <span className="ms-1"style={{fontSize:"12px"}}>23 mb</span>
                                            
                                            <svg width="20" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                                <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                            </svg></div>
                                        </div>
                                        <div className="">
                                            <p className="drive-header mb-0">Designing.pptx</p>
                                            <div className="drive-progress d-flex align-items-center">
                                                <div className="shadow-none progress bg-soft-primary w-75" >
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '20%', transition: 'width 2s ease 0s' }}></div>
                                                </div>
                                                <span className="ms-1"style={{fontSize:"12px"}}>23 mb</span>
                                            
                                            <svg width="20" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                                <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                            </svg></div>
                                        </div>
                                        <div className="">
                                            <p className="drive-header mb-0">Web Design.zip</p>
                                            <div className="drive-progress d-flex align-items-center">
                                                <div className="shadow-none progress bg-soft-primary w-75" >
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '20%', transition: 'width 2s ease 0s' }}></div>
                                                </div>
                                                <span className="ms-1"style={{fontSize:"12px"}}>23 mb</span>
                                            
                                            <svg width="20" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                                <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                            </svg></div>
                                        </div>
                                        <div className="">
                                            <p className="drive-header mb-0">Example.zar</p>
                                            <div className="drive-progress d-flex align-items-center">
                                                <div className="shadow-none progress bg-soft-primary w-75" >
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '20%', transition: 'width 2s ease 0s' }}></div>
                                                </div>
                                                <span className="ms-1"style={{fontSize:"12px"}}>23 mb</span>
                                            
                                            <svg width="20" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                                <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                            </svg></div>
                                        </div>
                                        <div className="">
                                            <p className="drive-header mb-0">Designing.pptx</p>
                                            <div className="drive-progress d-flex align-items-center">
                                                <div className="shadow-none progress bg-soft-primary w-75" >
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '20%', transition: 'width 2s ease 0s' }}></div>
                                                </div>
                                                <span className="ms-1"style={{fontSize:"12px"}}>23 mb</span>
                                            
                                            <svg width="20" viewBox="0 0 24 24" className="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z" fill="currentColor"></path>
                                                <path d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z" fill="currentColor"></path>
                                            </svg></div>
                                        </div>
                                        </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="d-flex justify-content-between">
                                                    <h4>Recently added files</h4>
                                                    <a href="../file-manager/document-folder.html" className="text-primary">View all</a>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table table-borderless iq-file-manager-table mb-0">
                                                    <thead>
                                                        <tr className="border-bottom bg-transparent text-dark">
                                                            <th scope="col">Files</th>
                                                            <th scope="col">Last Modified</th>
                                                            <th scope="col">Size</th>
                                                            <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <span className="avatar-40 rounded-pill iq-recently-badge">
                                                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.4" d="M2 11.0786C2.05 13.4166 2.19 17.4156 2.21 17.8566C2.281 18.7996 2.642 19.7526 3.204 20.4246C3.986 21.3676 4.949 21.7886 6.292 21.7886C8.148 21.7986 10.194 21.7986 12.181 21.7986C14.176 21.7986 16.112 21.7986 17.747 21.7886C19.071 21.7886 20.064 21.3566 20.836 20.4246C21.398 19.7526 21.759 18.7896 21.81 17.8566C21.83 17.4856 21.93 13.1446 21.99 11.0786H2Z" fill="currentColor"></path>
                                                                            <path d="M11.2451 15.3843V16.6783C11.2451 17.0923 11.5811 17.4283 11.9951 17.4283C12.4091 17.4283 12.7451 17.0923 12.7451 16.6783V15.3843C12.7451 14.9703 12.4091 14.6343 11.9951 14.6343C11.5811 14.6343 11.2451 14.9703 11.2451 15.3843Z" fill="currentColor"></path>
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.211 14.5565C10.111 14.9195 9.762 15.1515 9.384 15.1015C6.833 14.7455 4.395 13.8405 2.337 12.4815C2.126 12.3435 2 12.1075 2 11.8555V8.38949C2 6.28949 3.712 4.58149 5.817 4.58149H7.784C7.972 3.12949 9.202 2.00049 10.704 2.00049H13.286C14.787 2.00049 16.018 3.12949 16.206 4.58149H18.183C20.282 4.58149 21.99 6.28949 21.99 8.38949V11.8555C21.99 12.1075 21.863 12.3425 21.654 12.4815C19.592 13.8465 17.144 14.7555 14.576 15.1105C14.541 15.1155 14.507 15.1175 14.473 15.1175C14.134 15.1175 13.831 14.8885 13.746 14.5525C13.544 13.7565 12.821 13.1995 11.99 13.1995C11.148 13.1995 10.433 13.7445 10.211 14.5565ZM13.286 3.50049H10.704C10.031 3.50049 9.469 3.96049 9.301 4.58149H14.688C14.52 3.96049 13.958 3.50049 13.286 3.50049Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <h6 className=" mb-0">Marcus Family.jpg</h6>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <small className="text-muted">16 Oct,11:23m</small>
                                                            </td>
                                                            <td>
                                                                <small className="text-primary">
                                                                    12 MB
                                                                </small>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="d-flex align-items-center text-danger">
                                                                    <span className="btn-inner">
                                                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                            <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <span className="avatar-40 rounded-pill iq-recently-badge">
                                                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <h6 className=" mb-0">Work.Doc</h6>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <small className="text-muted">20 Nov,12:40pm</small>
                                                            </td>
                                                            <td>
                                                                <small className="text-primary">
                                                                    4.3 MB
                                                                </small>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="d-flex align-items-center text-danger">
                                                                    <span className="btn-inner">
                                                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                            <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <span className="avatar-40 rounded-pill iq-recently-badge">
                                                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.4" d="M21.3309 7.44251C20.9119 7.17855 20.3969 7.1552 19.9579 7.37855L18.4759 8.12677C17.9279 8.40291 17.5879 8.96129 17.5879 9.58261V15.4161C17.5879 16.0374 17.9279 16.5948 18.4759 16.873L19.9569 17.6202C20.1579 17.7237 20.3729 17.7735 20.5879 17.7735C20.8459 17.7735 21.1019 17.7004 21.3309 17.5572C21.7499 17.2943 21.9999 16.8384 21.9999 16.339V8.66179C21.9999 8.1623 21.7499 7.70646 21.3309 7.44251Z" fill="currentColor"></path>
                                                                            <path d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <h6 className="mb-0">Apha.mkv</h6>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <small className="text-muted">08 Oct,05:45pm</small>
                                                            </td>
                                                            <td>
                                                                <small className="text-primary">
                                                                    10 MB
                                                                </small>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="d-flex align-items-center text-danger">
                                                                    <span className="btn-inner">
                                                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                            <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <span className="avatar-40 rounded-pill iq-recently-badge">
                                                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.4" d="M16.3328 22H7.66618C4.2769 22 2 19.6229 2 16.0843V7.91672C2 4.37811 4.2769 2 7.66618 2H16.3338C19.7231 2 22 4.37811 22 7.91672V16.0843C22 19.6229 19.7231 22 16.3328 22Z" fill="currentColor"></path>
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2451 8.67496C11.2451 10.045 10.1301 11.16 8.7601 11.16C7.3891 11.16 6.2751 10.045 6.2751 8.67496C6.2751 7.30496 7.3891 6.18896 8.7601 6.18896C10.1301 6.18896 11.2451 7.30496 11.2451 8.67496ZM19.4005 14.0876C19.6335 14.3136 19.8005 14.5716 19.9105 14.8466C20.2435 15.6786 20.0705 16.6786 19.7145 17.5026C19.2925 18.4836 18.4845 19.2246 17.4665 19.5486C17.0145 19.6936 16.5405 19.7556 16.0675 19.7556H7.6865C6.8525 19.7556 6.1145 19.5616 5.5095 19.1976C5.1305 18.9696 5.0635 18.4446 5.3445 18.1026C5.8145 17.5326 6.2785 16.9606 6.7465 16.3836C7.6385 15.2796 8.2395 14.9596 8.9075 15.2406C9.1785 15.3566 9.4505 15.5316 9.7305 15.7156C10.4765 16.2096 11.5135 16.8876 12.8795 16.1516C13.8132 15.641 14.3552 14.7673 14.827 14.0069L14.8365 13.9916C14.8682 13.9407 14.8997 13.8898 14.9311 13.8391C15.0915 13.5799 15.2495 13.3246 15.4285 13.0896C15.6505 12.7986 16.4745 11.8886 17.5395 12.5366C18.2185 12.9446 18.7895 13.4966 19.4005 14.0876Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <h6 className=" mb-0">SVG Logo.png </h6>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <small className="text-muted">04 Jul,10:30pm</small>
                                                            </td>
                                                            <td>
                                                                <small className="text-primary">
                                                                    9 MB
                                                                </small>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="d-flex align-items-center text-danger">
                                                                    <span className="btn-inner">
                                                                        <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                            <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Cloud Storage</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="border-bottom">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/10.png" className="img-fluid avatar-30" alt="10" loading="lazy" />
                                                        <h5 className=" mb-0">Drop Box</h5>
                                                    </div>
                                                    <div>
                                                        <div className="d-flex justify-content-between mt-2 text-dark">
                                                            <small>32gb</small>
                                                            <small>48gb</small>
                                                        </div>
                                                        <div className="shadow-none progress bg-soft-primary w-100 mt-2" >
                                                            <div className="progress-bar bg-primary" role="progressbar" ></div></div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="border-bottom">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/9.png" className="img-fluid avatar-30" alt="9" loading="lazy" />
                                                        <h5 className="mb-0">One Drive</h5>
                                                    </div>
                                                    <div>
                                                        <div className="d-flex justify-content-between mt-2 text-dark">
                                                            <small>10gb</small>
                                                            <small>48gb</small>
                                                        </div>
                                                        <div className="shadow-none progress bg-soft-primary w-100 mt-2" >
                                                            <div className="progress-bar bg-primary" role="progressbar" ></div></div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="border-bottom">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/17.png" className="img-fluid avatar-30" alt="17" loading="lazy" />
                                                        <h5 className="mb-0">Google Drive</h5>
                                                    </div>
                                                    <div>
                                                        <div className="d-flex justify-content-between mt-2 text-dark">
                                                            <small>15gb</small>
                                                            <small>48gb</small>
                                                        </div>
                                                        <div className="shadow-none progress bg-soft-primary w-100 mt-2" >
                                                            <div className="progress-bar bg-primary" role="progressbar" ></div>  </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/18.png" className="img-fluid w-75" alt="18" loading="lazy" />
                                                    <h5 className="mb-3">Upgrade to Special Offer  For Unlimited Storage</h5>
                                                    <div className="d-flex justify-content-center ms-2">
                                                        <button type="submit" className="btn btn-primary">Buy storage</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="footer default">
                            <div className="footer-body">
                                <ul className="left-panel list-inline mb-0 p-0">
                                    <li className="list-inline-item"><a href="../dashboard/extra/privacy-policy.html">Privacy Policy</a></li>
                                    <li className="list-inline-item"><a href="../dashboard/extra/terms-of-service.html">Terms of Use</a></li>
                                </ul>
                                <div className="right-panel">
                                    <span className="text-gray">
                                        <svg className="icon-16" width="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.85 2.50065C16.481 2.50065 17.111 2.58965 17.71 2.79065C21.401 3.99065 22.731 8.04065 21.62 11.5806C20.99 13.3896 19.96 15.0406 18.611 16.3896C16.68 18.2596 14.561 19.9196 12.28 21.3496L12.03 21.5006L11.77 21.3396C9.48102 19.9196 7.35002 18.2596 5.40102 16.3796C4.06102 15.0306 3.03002 13.3896 2.39002 11.5806C1.26002 8.04065 2.59002 3.99065 6.32102 2.76965C6.61102 2.66965 6.91002 2.59965 7.21002 2.56065H7.33002C7.61102 2.51965 7.89002 2.50065 8.17002 2.50065H8.28002C8.91002 2.51965 9.52002 2.62965 10.111 2.83065H10.17C10.21 2.84965 10.24 2.87065 10.26 2.88965C10.481 2.96065 10.69 3.04065 10.89 3.15065L11.27 3.32065C11.3618 3.36962 11.4649 3.44445 11.554 3.50912C11.6104 3.55009 11.6612 3.58699 11.7 3.61065C11.7163 3.62028 11.7329 3.62996 11.7496 3.63972C11.8354 3.68977 11.9247 3.74191 12 3.79965C13.111 2.95065 14.46 2.49065 15.85 2.50065ZM18.51 9.70065C18.92 9.68965 19.27 9.36065 19.3 8.93965V8.82065C19.33 7.41965 18.481 6.15065 17.19 5.66065C16.78 5.51965 16.33 5.74065 16.18 6.16065C16.04 6.58065 16.26 7.04065 16.68 7.18965C17.321 7.42965 17.75 8.06065 17.75 8.75965V8.79065C17.731 9.01965 17.8 9.24065 17.94 9.41065C18.08 9.58065 18.29 9.67965 18.51 9.70065Z" fill="currentColor"></path>
                                        </svg>
                                    </span> by <a href="https://iqonic.design/" target="_blank">IQONIC Design</a>.
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </main>
            <div className="offcanvas offcanvas-end live-customizer on-rtl end" id="live-customizer" data-bs-scroll="true" data-bs-backdrop="false" aria-labelledby="live-customizer-label">
                <div className="offcanvas-header">
                    <div className="d-flex align-items-center">
                        <h4 className="offcanvas-title" id="live-customizer-label">Live Customizer</h4>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                        <button className="btn btn-primary px-3" data-copy="settings" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Copy">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M18.8088 9.021C18.3573 9.021 17.7592 9.011 17.0146 9.011C15.1987 9.011 13.7055 7.508 13.7055 5.675V2.459C13.7055 2.206 13.5026 2 13.253 2H7.96363C5.49517 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59022 22 8.16958 22H16.0453C18.5058 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.298 9.012 20.0465 9.013C19.6247 9.016 19.1168 9.021 18.8088 9.021Z" fill="currentColor"></path>
                                <path opacity="0.4" d="M16.0842 2.56737C15.7852 2.25637 15.2632 2.47037 15.2632 2.90137V5.53837C15.2632 6.64437 16.1742 7.55437 17.2792 7.55437C17.9772 7.56237 18.9452 7.56437 19.7672 7.56237C20.1882 7.56137 20.4022 7.05837 20.1102 6.75437C19.0552 5.65737 17.1662 3.69137 16.0842 2.56737Z" fill="currentColor"></path>
                                <path d="M14.3672 12.2364H12.6392V10.5094C12.6392 10.0984 12.3062 9.7644 11.8952 9.7644C11.4842 9.7644 11.1502 10.0984 11.1502 10.5094V12.2364H9.4232C9.0122 12.2364 8.6792 12.5704 8.6792 12.9814C8.6792 13.3924 9.0122 13.7264 9.4232 13.7264H11.1502V15.4524C11.1502 15.8634 11.4842 16.1974 11.8952 16.1974C12.3062 16.1974 12.6392 15.8634 12.6392 15.4524V13.7264H14.3672C14.7782 13.7264 15.1122 13.3924 15.1122 12.9814C15.1122 12.5704 14.7782 12.2364 14.3672 12.2364Z" fill="currentColor"></path>
                            </svg>
                            Copy Config
                        </button>
                        <button className="btn btn-primary btn-icon" data-reset="settings" data-bs-toggle="tooltip" data-bs-placement="left" aria-label="Reset All Settings" data-bs-original-title="Reset All Settings">
                            <span className="btn-inner">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                        <path d="M4.88076 14.6713C4.74978 14.2784 4.32504 14.066 3.93208 14.197C3.53912 14.328 3.32675 14.7527 3.45774 15.1457L4.88076 14.6713ZM20.8808 15.1457C21.0117 14.7527 20.7994 14.328 20.4064 14.197C20.0135 14.066 19.5887 14.2784 19.4577 14.6713L20.8808 15.1457ZM4.16925 14.9085C3.45774 15.1457 3.45785 15.146 3.45797 15.1464C3.45802 15.1465 3.45815 15.1469 3.45825 15.1472C3.45845 15.1478 3.45868 15.1485 3.45895 15.1493C3.45948 15.1509 3.46013 15.1528 3.46092 15.1551C3.46249 15.1597 3.46456 15.1657 3.46716 15.1731C3.47235 15.188 3.47961 15.2084 3.48902 15.2341C3.50782 15.2854 3.53521 15.3576 3.5717 15.4477C3.64461 15.6279 3.7542 15.8805 3.90468 16.1814C4.2048 16.7817 4.67223 17.5836 5.34308 18.3886C6.68942 20.0043 8.88343 21.6585 12.1693 21.6585V20.1585C9.45507 20.1585 7.64908 18.8128 6.49542 17.4284C5.91627 16.7334 5.5087 16.0354 5.24632 15.5106C5.11555 15.2491 5.02201 15.0329 4.96212 14.8849C4.9322 14.811 4.91076 14.7543 4.89733 14.7177C4.89062 14.6994 4.88593 14.6861 4.88318 14.6783C4.88181 14.6744 4.88093 14.6718 4.88053 14.6706C4.88033 14.67 4.88025 14.6698 4.88029 14.6699C4.88031 14.67 4.88036 14.6701 4.88044 14.6704C4.88047 14.6705 4.88056 14.6707 4.88058 14.6708C4.88067 14.671 4.88076 14.6713 4.16925 14.9085ZM12.1693 21.6585C15.4551 21.6585 17.6491 20.0043 18.9954 18.3886C19.6663 17.5836 20.1337 16.7817 20.4338 16.1814C20.5843 15.8805 20.6939 15.6279 20.7668 15.4477C20.8033 15.3576 20.8307 15.2854 20.8495 15.2341C20.8589 15.2084 20.8662 15.188 20.8713 15.1731C20.8739 15.1657 20.876 15.1597 20.8776 15.1551C20.8784 15.1528 20.879 15.1509 20.8796 15.1493C20.8798 15.1485 20.8801 15.1478 20.8803 15.1472C20.8804 15.1469 20.8805 15.1465 20.8805 15.1464C20.8807 15.146 20.8808 15.1457 20.1693 14.9085C19.4577 14.6713 19.4578 14.671 19.4579 14.6708C19.4579 14.6707 19.458 14.6705 19.4581 14.6704C19.4581 14.6701 19.4582 14.67 19.4582 14.6699C19.4583 14.6698 19.4582 14.67 19.458 14.6706C19.4576 14.6718 19.4567 14.6744 19.4553 14.6783C19.4526 14.6861 19.4479 14.6994 19.4412 14.7177C19.4277 14.7543 19.4063 14.811 19.3764 14.8849C19.3165 15.0329 19.223 15.2491 19.0922 15.5106C18.8298 16.0354 18.4222 16.7334 17.8431 17.4284C16.6894 18.8128 14.8834 20.1585 12.1693 20.1585V21.6585Z" fill="currentColor"></path>
                                        <path d="M21.5183 19.2271C21.4293 19.2234 21.3427 19.196 21.2671 19.1465L16.3546 15.8924C16.2197 15.8026 16.1413 15.6537 16.148 15.4969C16.1546 15.34 16.2452 15.1982 16.3873 15.1202L21.5571 12.2926C21.7075 12.2106 21.8932 12.213 22.0416 12.3003C22.1907 12.387 22.2783 12.5436 22.2712 12.7096L22.014 18.7913C22.007 18.9573 21.9065 19.1059 21.7506 19.1797C21.6772 19.215 21.597 19.2305 21.5183 19.2271" fill="currentColor"></path>
                                    </g>
                                    <path d="M20.0742 10.0265C20.1886 10.4246 20.6041 10.6546 21.0022 10.5401C21.4003 10.4257 21.6302 10.0102 21.5158 9.61214L20.0742 10.0265ZM4.10803 8.88317C3.96071 9.27031 4.15513 9.70356 4.54226 9.85087C4.92939 9.99818 5.36265 9.80377 5.50996 9.41664L4.10803 8.88317ZM20.795 9.81934C21.5158 9.61214 21.5157 9.6118 21.5156 9.61144C21.5155 9.61129 21.5154 9.6109 21.5153 9.61059C21.5152 9.60998 21.515 9.60928 21.5147 9.60848C21.5143 9.60689 21.5137 9.60493 21.513 9.6026C21.5116 9.59795 21.5098 9.59184 21.5075 9.58431C21.503 9.56925 21.4966 9.54853 21.4882 9.52251C21.4716 9.47048 21.4473 9.39719 21.4146 9.3056C21.3493 9.12256 21.2503 8.8656 21.1126 8.55861C20.8378 7.94634 20.4044 7.12552 19.7678 6.29313C18.4902 4.62261 16.3673 2.87801 13.0844 2.74053L13.0216 4.23922C15.7334 4.35278 17.4816 5.77291 18.5763 7.20436C19.1258 7.92295 19.5038 8.63743 19.744 9.17271C19.8638 9.43949 19.9482 9.65937 20.0018 9.80972C20.0286 9.88483 20.0477 9.94238 20.0596 9.97951C20.0655 9.99808 20.0696 10.0115 20.072 10.0195C20.0732 10.0235 20.074 10.0261 20.0744 10.0273C20.0746 10.0278 20.0746 10.0281 20.0746 10.028C20.0746 10.0279 20.0745 10.0278 20.0745 10.0275C20.0744 10.0274 20.0744 10.0272 20.0743 10.0271C20.0743 10.0268 20.0742 10.0265 20.795 9.81934ZM13.0844 2.74053C9.80146 2.60306 7.54016 4.16407 6.12741 5.72193C5.42345 6.49818 4.92288 7.27989 4.59791 7.86704C4.43497 8.16144 4.31491 8.40923 4.23452 8.58617C4.1943 8.67471 4.16391 8.7457 4.14298 8.79616C4.13251 8.82139 4.1244 8.84151 4.11859 8.85613C4.11568 8.86344 4.11336 8.86938 4.1116 8.8739C4.11072 8.87616 4.10998 8.87807 4.10939 8.87962C4.10909 8.88039 4.10883 8.88108 4.1086 8.88167C4.10849 8.88196 4.10834 8.88234 4.10829 8.88249C4.10815 8.88284 4.10803 8.88317 4.80899 9.14991C5.50996 9.41664 5.50985 9.41692 5.50975 9.41719C5.50973 9.41725 5.50964 9.41749 5.50959 9.4176C5.5095 9.41784 5.50945 9.41798 5.50942 9.41804C5.50938 9.41816 5.50947 9.41792 5.50969 9.41734C5.51014 9.41619 5.51113 9.41365 5.51267 9.40979C5.51574 9.40206 5.52099 9.38901 5.52846 9.37101C5.5434 9.335 5.56719 9.27924 5.60018 9.20664C5.66621 9.0613 5.76871 8.84925 5.91031 8.59341C6.19442 8.08008 6.63084 7.39971 7.23855 6.72958C8.44912 5.39466 10.3098 4.12566 13.0216 4.23922L13.0844 2.74053Z" fill="currentColor"></path>
                                    <path d="M8.78337 9.33604C8.72981 9.40713 8.65805 9.46292 8.57443 9.49703L3.1072 11.6951C2.95672 11.7552 2.78966 11.7352 2.66427 11.6407C2.53887 11.5462 2.47359 11.3912 2.48993 11.2299L3.09576 5.36863C3.11367 5.19823 3.22102 5.04666 3.37711 4.97402C3.5331 4.9005 3.71173 4.91728 3.84442 5.01726L8.70581 8.68052C8.8385 8.78051 8.90387 8.94759 8.8762 9.1178C8.86358 9.19825 8.83082 9.27308 8.78337 9.33604" fill="currentColor"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <button type="button" className="btn-close px-0 text-reset shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body data-scrollbar">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="border border-2 rounded mb-3">
                                <div className="px-3 pt-3 text-center">
                                    <h5 className="d-inline-block">Style Setting</h5>
                                </div>
                                <div className="p-3">
                                    <div>
                                        <h6 className="mb-3">Theme</h6>
                                        <div className="d-grid gap-3 grid-cols-3 mb-3">
                                            <div data-setting="radio">
                                                <input type="radio" value="auto" className="btn-check" name="theme_scheme" id="color-mode-auto" />
                                                <label className="btn btn-border d-block">
                                                    <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="currentColor" d="M7,2V13H10V22L17,10H13L17,2H7Z"></path>
                                                    </svg>
                                                    Auto
                                                </label>
                                            </div>
                                            <div data-setting="radio">
                                                <input type="radio" value="dark" className="btn-check" name="theme_scheme" id="color-mode-dark" />
                                                <label className="btn btn-border d-block" >
                                                    <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="currentColor" d="M9,2C7.95,2 6.95,2.16 6,2.46C10.06,3.73 13,7.5 13,12C13,16.5 10.06,20.27 6,21.54C6.95,21.84 7.95,22 9,22A10,10 0 0,0 19,12A10,10 0 0,0 9,2Z"></path>
                                                    </svg>
                                                    Dark
                                                </label>
                                            </div>
                                            <div data-setting="radio">
                                                <input type="radio" value="light" className="btn-check" name="theme_scheme" id="color-mode-light" />
                                                <label className="btn  btn-border d-block" >
                                                    <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="currentColor" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z">
                                                        </path>
                                                    </svg>
                                                    Light
                                                </label>
                                            </div>
                                        </div>
                                        <div className="d-grid gap-3 grid-cols-2 mb-4">
                                            <div data-setting="attribute" className="text-center">
                                                <input type="radio" value="ltr" className="btn-check" name="theme_scheme_direction" data-prop="dir" id="theme-scheme-direction-ltr" />
                                                <label className="btn btn-border d-block p-0" >
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/01.png" alt="ltr" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/01.png" alt="ltr" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className=" mt-2"> LTR </span>
                                            </div>
                                            <div data-setting="attribute" className="text-center">
                                                <input type="radio" value="rtl" className="btn-check" name="theme_scheme_direction" data-prop="dir" id="theme-scheme-direction-rtl" />
                                                <label className="btn btn-border d-block p-0">
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/02.png" alt="ltr" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/02.png" alt="ltr" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className=" mt-2"> RTL </span>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="hr-horizontal" />

                                    <div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="mt-4 mb-3">Color Customizer</h6>
                                            <div className="d-flex align-items-center">
                                                <a href="#custom-color" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="custom-color">Custom</a>
                                                <div data-setting="radio">
                                                    <input type="radio" value="theme-color-default" className="btn-check" name="theme_color" id="theme-color-default" />
                                                    <label className="btn bg-transparent px-2 border-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Reset Color" aria-label="Reset Color">
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21.4799 12.2424C21.7557 12.2326 21.9886 12.4482 21.9852 12.7241C21.9595 14.8075 21.2975 16.8392 20.0799 18.5506C18.7652 20.3986 16.8748 21.7718 14.6964 22.4612C12.518 23.1505 10.1711 23.1183 8.01299 22.3694C5.85488 21.6205 4.00382 20.196 2.74167 18.3126C1.47952 16.4293 0.875433 14.1905 1.02139 11.937C1.16734 9.68346 2.05534 7.53876 3.55018 5.82945C5.04501 4.12014 7.06478 2.93987 9.30193 2.46835C11.5391 1.99683 13.8711 2.2599 15.9428 3.2175L16.7558 1.91838C16.9822 1.55679 17.5282 1.62643 17.6565 2.03324L18.8635 5.85986C18.945 6.11851 18.8055 6.39505 18.549 6.48314L14.6564 7.82007C14.2314 7.96603 13.8445 7.52091 14.0483 7.12042L14.6828 5.87345C13.1977 5.18699 11.526 4.9984 9.92231 5.33642C8.31859 5.67443 6.8707 6.52052 5.79911 7.74586C4.72753 8.97119 4.09095 10.5086 3.98633 12.1241C3.8817 13.7395 4.31474 15.3445 5.21953 16.6945C6.12431 18.0446 7.45126 19.0658 8.99832 19.6027C10.5454 20.1395 12.2278 20.1626 13.7894 19.6684C15.351 19.1743 16.7062 18.1899 17.6486 16.8652C18.4937 15.6773 18.9654 14.2742 19.0113 12.8307C19.0201 12.5545 19.2341 12.3223 19.5103 12.3125L21.4799 12.2424Z" fill="#31BAF1"></path>
                                                            <path d="M20.0941 18.5594C21.3117 16.848 21.9736 14.8163 21.9993 12.7329C22.0027 12.4569 21.7699 12.2413 21.4941 12.2512L19.5244 12.3213C19.2482 12.3311 19.0342 12.5633 19.0254 12.8395C18.9796 14.283 18.5078 15.6861 17.6628 16.8739C16.7203 18.1986 15.3651 19.183 13.8035 19.6772C12.2419 20.1714 10.5595 20.1483 9.01246 19.6114C7.4654 19.0746 6.13845 18.0534 5.23367 16.7033C4.66562 15.8557 4.28352 14.9076 4.10367 13.9196C4.00935 18.0934 6.49194 21.37 10.008 22.6416C10.697 22.8908 11.4336 22.9852 12.1652 22.9465C13.075 22.8983 13.8508 22.742 14.7105 22.4699C16.8889 21.7805 18.7794 20.4073 20.0941 18.5594Z" fill="#0169CA"></path>
                                                        </svg>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="collapse" id="custom-color">
                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                <label className="" >Primary</label>
                                                <input className="" name="theme_color" data-extra="primary" type="color" id="custom-primary-color" value="#3a57e8" data-setting="color" />
                                            </div>
                                            <div className="form-group d-flex d-flex justify-content-between align-items-center">
                                                <label className="" >Secondary</label>
                                                <input className="" name="theme_color" data-extra="info" type="color" id="custom-info-color" value="#08B1BA" data-setting="color" />
                                            </div>
                                        </div>
                                        <div className="grid-cols-5 mb-4 d-grid gap-3">
                                            <div data-setting="radio">
                                                <input type="radio" value="theme-color-blue" className="btn-check" name="theme_color" id="theme-color-1" />
                                                <label className="btn btn-border d-block bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Theme-1" aria-label="Theme-1">
                                                    <svg className="customizer-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
                                                        <circle cx="12" cy="12" r="10" fill="#00C3F9"></circle>
                                                        <path d="M2,12 a1,1 1 1,0 20,0" fill="#573BFF"></path>
                                                    </svg>
                                                </label>
                                            </div>
                                            <div data-setting="radio">
                                                <input type="radio" value="theme-color-gray" className="btn-check" name="theme_color" id="theme-color-2" />
                                                <label className="btn btn-border d-block bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Theme-2" aria-label="Theme-2">
                                                    <svg className="customizer-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
                                                        <circle cx="12" cy="12" r="10" fill="#91969E"></circle>
                                                        <path d="M2,12 a1,1 1 1,0 20,0" fill="#FD8D00"></path>
                                                    </svg>
                                                </label>
                                            </div>
                                            <div data-setting="radio">
                                                <input type="radio" value="theme-color-red" className="btn-check" name="theme_color" id="theme-color-3" />
                                                <label className="btn btn-border d-block bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Theme-3" aria-label="Theme-3">
                                                    <svg className="customizer-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
                                                        <circle cx="12" cy="12" r="10" fill="#DB5363"></circle>
                                                        <path d="M2,12 a1,1 1 1,0 20,0" fill="#366AF0"></path>
                                                    </svg>
                                                </label>
                                            </div>
                                            <div data-setting="radio">
                                                <input type="radio" value="theme-color-yellow" className="btn-check" name="theme_color" id="theme-color-4" />
                                                <label className="btn btn-border d-block bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Theme-4" aria-label="Theme-4">
                                                    <svg className="customizer-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
                                                        <circle cx="12" cy="12" r="10" fill="#EA6A12"></circle>
                                                        <path d="M2,12 a1,1 1 1,0 20,0" fill="#6410F1"></path>
                                                    </svg>
                                                </label>
                                            </div>
                                            <div data-setting="radio">
                                                <input type="radio" value="theme-color-pink" className="btn-check" name="theme_color" id="theme-color-5" />
                                                <label className="btn btn-border d-block bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Theme-5" aria-label="Theme-5">
                                                    <svg className="customizer-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
                                                        <circle cx="12" cy="12" r="10" fill="#E586B3"></circle>
                                                        <path d="M2,12 a1,1 1 1,0 20,0" fill="#25C799"></path>
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="hr-horizontal" />
                                    <div data-setting="checkbox">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h6 className="mt-4 mb-3">Menu Hide</h6>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" value="sidebar-none" name="sidebar_show" id="switch-sidebar-show" type="checkbox" />
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="hr-horizontal" />


                                    <div>
                                        <h6 className="mt-4 mb-3">Menu Color</h6>
                                        <div className="d-grid gap-3 grid-cols-3 mb-3">
                                            <div data-setting="radio">
                                                <input type="radio" value="sidebar-white" className="btn-check" name="sidebar_color" id="sidebar-white" />
                                                <label className="btn btn-border d-flex align-items-center bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Sidebar White">
                                                    <i className="text-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-18" width="18" viewBox="0 0 24 24" fill="currentColor">
                                                            <circle cx="12" cy="12" r="8" fill="currentColor" stroke="black" stroke-width="3"></circle>
                                                        </svg>
                                                    </i>
                                                    <span className="ms-2 ">Default</span>
                                                </label>
                                            </div>
                                            <div data-setting="radio">
                                                <input type="radio" value="sidebar-dark" className="btn-check" name="sidebar_color" id="sidebar-dark" />
                                                <label className="btn btn-border d-flex align-items-center bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Sidebar Dark">
                                                    <i className="text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-18" width="18" viewBox="0 0 24 24" fill="currentColor">
                                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                                        </svg>
                                                    </i>
                                                    <span className="ms-2 "> Dark </span>
                                                </label>
                                            </div>
                                            <div data-setting="radio">
                                                <input type="radio" value="sidebar-color" className="btn-check" name="sidebar_color" id="sidebar-color" />
                                                <label className="btn btn-border d-flex align-items-center bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Sidebar Colored">
                                                    <i className="text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-18" width="18" viewBox="0 0 24 24" fill="currentColor">
                                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                                        </svg>
                                                    </i>
                                                    <span className="ms-2 "> Color </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="d-grid gap-3 grid-cols-2 mb-4">
                                            <div data-setting="radio">
                                                <input type="radio" value="sidebar-transparent" className="btn-check" name="sidebar_color" id="sidebar-transparent" />
                                                <label className="btn btn-border d-flex align-items-center bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Sidebar Transparent">
                                                    <i className="text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-18" width="18" viewBox="0 0 24 24" fill="currentColor">
                                                            <circle cx="12" cy="12" r="8" fill="#F5F6FA" stroke="black" stroke-width="3"></circle>
                                                        </svg>
                                                    </i>
                                                    <span className="ms-2">Transparent</span>
                                                </label>
                                            </div>
                                            <div data-setting="radio">
                                                <input type="radio" value="sidebar-glass" className="btn-check" name="sidebar_color" id="sidebar-glass" />
                                                <label className="btn btn-border d-flex align-items-center bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Sidebar Transparent">
                                                    <i className="text-dark">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-18" width="18" viewBox="0 0 24 24" fill="currentColor">
                                                            <circle cx="12" cy="12" r="8" fill="#F5F6FA" stroke="black" stroke-width="3"></circle>
                                                        </svg>
                                                    </i>
                                                    <span className="ms-2">Glass</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="hr-horizontal" />


                                    <div>
                                        <h6 className="mt-4 mb-3">Menu Style</h6>
                                        <div className="d-grid gap-3 grid-cols-4 mb-4">
                                            <div data-setting="checkbox" className="text-center">
                                                <input type="checkbox" value="sidebar-mini" className="btn-check" name="sidebar_type" id="sidebar-mini" />
                                                <label className="btn btn-border p-0 d-block overflow-hidden">
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/03.png" alt="mini" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/03.png" alt="mini" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className="mt-2">Mini</span>
                                            </div>
                                            <div data-setting="checkbox" className="text-center">
                                                <input type="checkbox" value="sidebar-hover" data-extra="{target: '.sidebar', ClassListAdd: 'sidebar-mini'}" className="btn-check" name="sidebar_type" id="sidebar-hover" />
                                                <label className="btn btn-border p-0 d-block overflow-hidden" >
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/04.png" alt="hover" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/04.png" alt="hover" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className="mt-2">Hover</span>
                                            </div>
                                            <div data-setting="checkbox" className="text-center">
                                                <input type="checkbox" value="sidebar-boxed" className="btn-check" name="sidebar_type" id="sidebar-boxed" />
                                                <label className="btn btn-border p-0 d-block overflow-hidden" >
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/05.png" alt="boxed" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/05.png" alt="boxed" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className="mt-2">Boxed</span>
                                            </div>
                                            <div data-setting="checkbox" className="text-center">
                                                <input type="checkbox" value="sidebar-soft" className="btn-check" name="sidebar_type" id="sidebar-soft" />
                                                <label className="btn btn-border p-0 d-block overflow-hidden" >
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/05.png" alt="boxed" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/05.png" alt="boxed" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className="mt-2">Soft</span>
                                            </div>
                                        </div>
                                    </div>


                                    <hr className="hr-horizontal" />


                                    <div>
                                        <h6 className="mt-4 mb-3">Active Menu Style</h6>
                                        <div className="d-grid gap-3 grid-cols-3 mb-4">
                                            <div data-setting="radio" className="text-center">
                                                <input type="radio" value="sidebar-default navs-rounded" className="btn-check" name="sidebar_menu_style" id="navs-rounded" />
                                                <label className="btn btn-border p-0 d-block overflow-hidden">
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/06.png" alt="mini" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/06.png" alt="mini" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className="mt-2">Rounded One Side</span>
                                            </div>
                                            <div data-setting="radio" className="text-center">
                                                <input type="radio" value="sidebar-default navs-rounded-all" className="btn-check" name="sidebar_menu_style" id="navs-rounded-all" />
                                                <label className="btn btn-border p-0 d-block overflow-hidden" >
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/07.png" alt="hover" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/07.png" alt="hover" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className="mt-2">Rounded All</span>
                                            </div>
                                            <div data-setting="radio" className="text-center">
                                                <input type="radio" value="sidebar-default navs-pill" className="btn-check" name="sidebar_menu_style" id="navs-pill" />
                                                <label className="btn btn-border p-0 d-block overflow-hidden" >
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/08.png" alt="boxed" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/08.png" alt="boxed" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className="mt-2">Pill One Side</span>
                                            </div>
                                            <div data-setting="radio" className="text-center">
                                                <input type="radio" value="sidebar-default navs-pill-all" className="btn-check" name="sidebar_menu_style" id="navs-pill-all" />
                                                <label className="btn btn-border p-0 d-block overflow-hidden" >
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/09.png" alt="boxed" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/09.png" alt="boxed" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className="mt-2">Pill All</span>
                                            </div>
                                            <div data-setting="radio" className="text-center">
                                                <input type="radio" value="left-bordered" className="btn-check" name="sidebar_menu_style" id="left-bordered" />
                                                <label className="btn btn-border position-relative p-0 d-block overflow-hidden" >
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/14.png" alt="boxed" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/14.png" alt="boxed" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <small className="badge bg-danger position-absolute top-1 end-0 m-2">Pro</small>
                                                </label>
                                                <span className="mt-2">Left Bordered</span>
                                            </div>
                                            <div data-setting="radio" className="text-center">
                                                <input type="radio" value="sidebar-default navs-full-width" className="btn-check" name="sidebar_menu_style" id="navs-full-width" />
                                                <label className="btn btn-border position-relative p-0 d-block overflow-hidden" >
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/15.png" alt="boxed" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/15.png" alt="boxed" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <small className="badge bg-danger position-absolute top-1 end-0 m-2">Pro</small>
                                                </label>
                                                <span className="mt-2">Full Width</span>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="hr-horizontal" />

                                    <div data-setting="checkbox">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h6 className="mt-4 mb-3">Navbar Hide</h6>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" value="iq-navbar-none" name="header_navbar_show" id="switch-navbar-show" type="checkbox" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="hr-horizontal" />
                                    <div>
                                        <h6 className="mt-4 mb-3">Navbar Style</h6>
                                        <div className="d-grid gap-3 grid-cols-4 mb-4">
                                            <div data-setting="radio" className="text-center">
                                                <input type="radio" value="nav-glass" className="btn-check" name="header_navbar" id="nav-glass" />
                                                <label className="btn btn-border p-0 d-block overflow-hidden">
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/10.png" alt="hover" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/10.png" alt="hover" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className="mt-2">Glass</span>
                                            </div>
                                            <div data-setting="radio" className="text-center">
                                                <input type="radio" value="navs-sticky" className="btn-check" name="header_navbar" id="navs-sticky" />
                                                <label className="btn btn-border p-0 d-block overflow-hidden" >
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/04.png" alt="hover" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/04.png" alt="hover" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className="mt-2">Sticky</span>
                                            </div>
                                            <div data-setting="radio" className="text-center">
                                                <input type="radio" value="navs-transparent" className="btn-check" name="header_navbar" id="navs-transparent" />
                                                <label className="btn btn-border p-0 d-block overflow-hidden" >
                                                    <img src="../assets/images/settings/dark/12.png" alt="boxed" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="../assets/images/settings/light/12.png" alt="boxed" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className="mt-2">Transparent</span>
                                            </div>
                                            <div data-setting="radio" className="text-center">
                                                <input type="radio" value="navs-default" className="btn-check" name="header_navbar" id="navs-default" />
                                                <label className="btn btn-border p-0 d-block overflow-hidden" >
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/dark/01.png" alt="default" className="mode dark-img img-fluid" width="200" height="200" loading="lazy" />
                                                    <img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/settings/light/01.png" alt="default" className="mode light-img img-fluid" width="200" height="200" loading="lazy" />
                                                </label>
                                                <span className="mt-2">Default</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="hr-horizontal" />
                                    <div className="mb-4">
                                        <div className="mt-4 mb-3">
                                            <h6 className="d-inline-block mb-0 me-2">Card Style</h6>
                                            <small className="badge bg-warning rounded-pill">Pro</small>
                                        </div>
                                        <div className="d-grid gap-3 grid-cols-2 mb-3">
                                            <div data-setting="radio">
                                                <input type="radio" value="card-default" className="btn-check" name="card_color" id="card-default" />
                                                <label className="btn btn-border d-block" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Card White">
                                                    <span>Default Style</span>
                                                </label>
                                            </div>
                                            <div data-setting="radio">
                                                <input type="radio" value="card-glass" className="btn-check" name="card_color" id="card-glass" />
                                                <label className="btn btn-border d-block" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Card Glass">
                                                    <span>Glass Effect</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div data-setting="radio">
                                            <input type="radio" value="card-transparent" className="btn-check" name="card_color" id="card-transparent" />
                                            <label className="btn btn-border d-block" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Card Transparent">
                                                <span>Transparent Style</span>
                                            </label>
                                        </div>
                                    </div>


                                    <hr className="hr-horizontal" />

                                    <div className="mt-4 mb-3">
                                        <h6 className="d-inline-block mb-0 me-2">Footer </h6>
                                        <small className="badge bg-warning rounded-pill">Pro</small>
                                    </div>
                                    <div className="d-grid gap-3 grid-cols-3 mb-4">
                                        <div data-setting="radio">
                                            <input type="radio" value="default" className="btn-check" name="footer" id="footer_default" />
                                            <label className="btn btn-border d-block" >Default</label>
                                        </div>
                                        <div data-setting="radio">
                                            <input type="radio" value="sticky" className="btn-check" name="footer" id="footer_Sticky" />
                                            <label className="btn btn-border d-block" >Sticky</label>
                                        </div>
                                        <div data-setting="radio">
                                            <input type="radio" value="glass" className="btn-check" name="footer" id="footer_glass" />
                                            <label className="btn btn-border d-block" >Glass</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="border border-2 rounded">
                                <div className="px-3 pt-3 d-flex align-items-center justify-content-center gap-2">
                                    <h5 className="mb-0">Advanced</h5>
                                    <span className="badge rounded-pill bg-warning">Pro</span>
                                </div>
                                <div className="p-3">
                                    <h6 className="mb-3 d-inline-block">App Name</h6>
                                    <span data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Edit the App Name with your business name to familiarize your audience. " data-bs-original-title="Edit the App Name with your business name to familiarize your audience. ">
                                        <svg className="icon-20" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </span>
                                    <div className="d-grid gap-3 grid-cols-1 mb-4">
                                        <div className="form-group mb-0">
                                            <input type="text" data-setting="input" name="app_name" className="form-control" value="" />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="d-inline-block">Font</h6>
                                        <a href="javascript:void(0)" data-reset="body-heading-font">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.4799 12.2424C21.7557 12.2326 21.9886 12.4482 21.9852 12.7241C21.9595 14.8075 21.2975 16.8392 20.0799 18.5506C18.7652 20.3986 16.8748 21.7718 14.6964 22.4612C12.518 23.1505 10.1711 23.1183 8.01299 22.3694C5.85488 21.6205 4.00382 20.196 2.74167 18.3126C1.47952 16.4293 0.875433 14.1905 1.02139 11.937C1.16734 9.68346 2.05534 7.53876 3.55018 5.82945C5.04501 4.12014 7.06478 2.93987 9.30193 2.46835C11.5391 1.99683 13.8711 2.2599 15.9428 3.2175L16.7558 1.91838C16.9822 1.55679 17.5282 1.62643 17.6565 2.03324L18.8635 5.85986C18.945 6.11851 18.8055 6.39505 18.549 6.48314L14.6564 7.82007C14.2314 7.96603 13.8445 7.52091 14.0483 7.12042L14.6828 5.87345C13.1977 5.18699 11.526 4.9984 9.92231 5.33642C8.31859 5.67443 6.8707 6.52052 5.79911 7.74586C4.72753 8.97119 4.09095 10.5086 3.98633 12.1241C3.8817 13.7395 4.31474 15.3445 5.21953 16.6945C6.12431 18.0446 7.45126 19.0658 8.99832 19.6027C10.5454 20.1395 12.2278 20.1626 13.7894 19.6684C15.351 19.1743 16.7062 18.1899 17.6486 16.8652C18.4937 15.6773 18.9654 14.2742 19.0113 12.8307C19.0201 12.5545 19.2341 12.3223 19.5103 12.3125L21.4799 12.2424Z" fill="currentColor"></path>
                                                <path d="M20.0941 18.5594C21.3117 16.848 21.9736 14.8163 21.9993 12.7329C22.0027 12.4569 21.7699 12.2413 21.4941 12.2512L19.5244 12.3213C19.2482 12.3311 19.0342 12.5633 19.0254 12.8395C18.9796 14.283 18.5078 15.6861 17.6628 16.8739C16.7203 18.1986 15.3651 19.183 13.8035 19.6772C12.2419 20.1714 10.5595 20.1483 9.01246 19.6114C7.4654 19.0746 6.13845 18.0534 5.23367 16.7033C4.66562 15.8557 4.28352 14.9076 4.10367 13.9196C4.00935 18.0934 6.49194 21.37 10.008 22.6416C10.697 22.8908 11.4336 22.9852 12.1652 22.9465C13.075 22.8983 13.8508 22.742 14.7105 22.4699C16.8889 21.7805 18.7794 20.4073 20.0941 18.5594Z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="d-grid gap-3 grid-cols-2 mb-4">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div className="label">
                                                    <label className="mb-0 d-inline-block">Body Font</label>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0">
                                                <select name="body_font_family" className="form-control" data-select="font" data-setting="select">
                                                    <option value="">Select Body Font</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div className="label">
                                                    <label className="mb-0 d-inline-block">Heading Font</label>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0">
                                                <select name="heading_font_family" className="form-control" data-select="font" data-setting="select">
                                                    <option value="">Select Heading Font</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h6 className="d-inline-block mb-3 me-2">Page Style </h6>
                                        <small className="badge bg-warning rounded-pill">Pro</small>
                                        <span data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Wrap your content layout and select Full Width or Boxed styles.  " data-bs-original-title="Wrap your content layout and select Full Width or Boxed styles.  ">
                                            <svg className="icon-20" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="d-grid gap-3 grid-cols-2 mb-4">
                                        <div data-setting="radio">
                                            <input type="radio" value="container" className="btn-check" name="page_layout" id="page-layout-boxed" />
                                            <label className="btn btn-border d-block" >Boxed</label>
                                        </div>
                                        <div data-setting="radio">
                                            <input type="radio" value="container-fluid" className="btn-check" name="page_layout" id="page-layout-full-width" />
                                            <label className="btn btn-border d-block" >Full Width</label>
                                        </div>
                                    </div>


                                    <div>
                                        <h6 className="d-inline-block mb-3 me-2">Style Appearance </h6>
                                        <small className="badge bg-warning rounded-pill">Pro</small>
                                    </div>
                                    <div className="d-grid gap-3 grid-cols-3 mb-4">
                                        <div data-setting="checkbox">
                                            <input type="checkbox" value="theme-flat" className="btn-check" name="theme_style_appearance" id="theme-style-appearance-flat" />
                                            <label className="btn btn-border d-block" >Flat</label>
                                        </div>
                                        <div data-setting="checkbox">
                                            <input type="checkbox" value="theme-bordered" className="btn-check" name="theme_style_appearance" id="theme-style-appearance-bordered" />
                                            <label className="btn btn-border d-block" >Bordered</label>
                                        </div>
                                        <div data-setting="checkbox">
                                            <input type="checkbox" value="theme-sharp" className="btn-check" name="theme_style_appearance" id="theme-style-appearance-sharp" />
                                            <label className="btn btn-border d-block" >Sharp</label>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="d-inline-block mb-3 me-2">Page Transition </h6>
                                        <small className="badge bg-warning rounded-pill">Pro</small>
                                    </div>
                                    <div className="d-grid gap-3 grid-cols-2 mb-4">
                                        <div data-setting="radio">
                                            <input type="radio" value="theme-with-animation" className="btn-check" name="theme_transition" id="page-animation" />
                                            <label className="btn btn-border d-block" >Animation</label>
                                        </div>
                                        <div data-setting="radio">
                                            <input type="radio" value="theme-without-animation" className="btn-check" name="theme_transition" id="without-page-animation" />
                                            <label className="btn btn-border d-block" >No Animation</label>
                                        </div>
                                    </div>


                                    <div>
                                        <h6 className="mb-3 d-inline-block">Storage</h6>
                                        <span data-bs-toggle="tooltip" data-bs-placement="right" aria-label="You can save the setting changes you made for your project on either Local storage, Session storage." data-bs-original-title="You can save the setting changes you made for your project on either Local storage, Session storage.">
                                            <svg className="icon-20" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="d-grid gap-3 grid-cols-3 mb-4">
                                        <div data-setting="radio">
                                            <input type="radio" value="localStorage" className="btn-check" name="saveLocal" id="save-localstorage" />
                                            <label className="btn btn-border d-block" >Local</label>
                                        </div>
                                        <div data-setting="radio">
                                            <input type="radio" value="sessionStorage" className="btn-check" name="saveLocal" id="save-sessionstorage" />
                                            <label className="btn btn-border d-block" >Session</label>
                                        </div>
                                        <div data-setting="radio">
                                            <input type="radio" value="none" className="btn-check" name="saveLocal" id="save-none" />
                                            <label className="btn btn-border d-block" >None</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn btn-fixed-end btn-warning btn-icon btn-setting" id="settingbutton" data-bs-toggle="offcanvas" data-bs-target="#live-customizer" role="button" aria-controls="live-customizer">
                <svg className="icon-24 animated-rotate" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8064 7.62361L20.184 6.54352C19.6574 5.6296 18.4905 5.31432 17.5753 5.83872V5.83872C17.1397 6.09534 16.6198 6.16815 16.1305 6.04109C15.6411 5.91402 15.2224 5.59752 14.9666 5.16137C14.8021 4.88415 14.7137 4.56839 14.7103 4.24604V4.24604C14.7251 3.72922 14.5302 3.2284 14.1698 2.85767C13.8094 2.48694 13.3143 2.27786 12.7973 2.27808H11.5433C11.0367 2.27807 10.5511 2.47991 10.1938 2.83895C9.83644 3.19798 9.63693 3.68459 9.63937 4.19112V4.19112C9.62435 5.23693 8.77224 6.07681 7.72632 6.0767C7.40397 6.07336 7.08821 5.98494 6.81099 5.82041V5.82041C5.89582 5.29601 4.72887 5.61129 4.20229 6.52522L3.5341 7.62361C3.00817 8.53639 3.31916 9.70261 4.22975 10.2323V10.2323C4.82166 10.574 5.18629 11.2056 5.18629 11.8891C5.18629 12.5725 4.82166 13.2041 4.22975 13.5458V13.5458C3.32031 14.0719 3.00898 15.2353 3.5341 16.1454V16.1454L4.16568 17.2346C4.4124 17.6798 4.82636 18.0083 5.31595 18.1474C5.80554 18.2866 6.3304 18.2249 6.77438 17.976V17.976C7.21084 17.7213 7.73094 17.6516 8.2191 17.7822C8.70725 17.9128 9.12299 18.233 9.37392 18.6717C9.53845 18.9489 9.62686 19.2646 9.63021 19.587V19.587C9.63021 20.6435 10.4867 21.5 11.5433 21.5H12.7973C13.8502 21.5001 14.7053 20.6491 14.7103 19.5962V19.5962C14.7079 19.088 14.9086 18.6 15.2679 18.2407C15.6272 17.8814 16.1152 17.6807 16.6233 17.6831C16.9449 17.6917 17.2594 17.7798 17.5387 17.9394V17.9394C18.4515 18.4653 19.6177 18.1544 20.1474 17.2438V17.2438L20.8064 16.1454C21.0615 15.7075 21.1315 15.186 21.001 14.6964C20.8704 14.2067 20.55 13.7894 20.1108 13.5367V13.5367C19.6715 13.284 19.3511 12.8666 19.2206 12.3769C19.09 11.8873 19.16 11.3658 19.4151 10.928C19.581 10.6383 19.8211 10.3982 20.1108 10.2323V10.2323C21.0159 9.70289 21.3262 8.54349 20.8064 7.63277V7.63277V7.62361Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <circle cx="12.1747" cy="11.8891" r="2.63616" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                </svg>
            </a>
            <div className="btn-download ">
                <a className="btn btn-success py-2 px-3 d-flex gap-2" href="https://iqonic.design/item/hope-ui-pro/item-checkout/?coupon_code=DROPBY20" target="_blank">
                    <svg className="icon-22" width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                    </svg>
                    Buy Now
                </a>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdrop" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form action="#">
                                <h3 className="text-center">Sign In</h3>
                                <p className="text-center">Sign in to stay connected</p>
                                <div className="form-group">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control mb-0" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control mb-0" placeholder="Enter password" />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="form-check d-inline-block mt-2 pt-1">
                                        <input type="checkbox" className="form-check-input" id="customCheck11" />
                                        <label className="form-check-label" >Remember Me</label>
                                    </div>
                                    <a href="#">Forget password</a>
                                </div>
                                <div className="text-center pb-3">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Sign in</button>
                                </div>
                                <p className="text-center">Or sign in with other accounts?</p>
                                <div className="d-flex justify-content-center">
                                    <ul className="list-group list-group-horizontal list-group-flush">
                                        <li className="list-group-item border-0 pb-0">
                                            <a href="#"><img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/brands/fb.svg" alt="fb" loading="lazy" /></a>
                                        </li>
                                        <li className="list-group-item border-0 pb-0">
                                            <a href="#"><img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/brands/gm.svg" alt="gm" loading="lazy" /></a>
                                        </li>
                                        <li className="list-group-item border-0 pb-0">
                                            <a href="#"><img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/brands/im.svg" alt="im" loading="lazy" /></a>
                                        </li>
                                        <li className="list-group-item border-0 pb-0">
                                            <a href="#"><img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/brands/li.svg" alt="li" loading="lazy" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-center">Don't have account?<a href="#"> Click here to sign up.</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdrop1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form action="#">
                                <h3 className="text-center">Sign Up</h3>
                                <p className="text-center">Create your Hope UI account</p>
                                <div className="d-flex justify-content-between">
                                    <div className="form-group me-3">
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control mb-0" placeholder="Enter First Name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control mb-0" placeholder="Enter Last Name" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="form-group me-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control mb-0" placeholder="Enter Email" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Phone No.</label>
                                        <input type="tel" className="form-control mb-0" placeholder="Enter Phone Number" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="form-group me-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control mb-0" placeholder="Enter Password" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control mb-0" placeholder="Enter Confirm Password" />
                                    </div>
                                </div>
                                <div className="text-center pb-3">
                                    <input type="checkbox" className="form-check-input" id="customCheck112" />
                                    <label className="form-check-label" >I agree with the terms of use</label>
                                </div>
                                <div className="text-center pb-3">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Sign in</button>
                                </div>
                                <p className="text-center">Or sign in with other accounts?</p>
                                <div className="d-flex justify-content-center">
                                    <ul className="list-group list-group-horizontal list-group-flush">
                                        <li className="list-group-item border-0 pb-0">
                                            <a href="#"><img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/brands/fb.svg" alt="fb" loading="lazy" /></a>
                                        </li>
                                        <li className="list-group-item border-0 pb-0">
                                            <a href="#"><img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/brands/gm.svg" alt="gm" loading="lazy" /></a>
                                        </li>
                                        <li className="list-group-item border-0 pb-0">
                                            <a href="#"><img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/brands/im.svg" alt="im" loading="lazy" /></a>
                                        </li>
                                        <li className="list-group-item border-0 pb-0">
                                            <a href="#"><img src="https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images/brands/li.svg" alt="li" loading="lazy" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-center">Already have an Account<a href="#">Sign in</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileManager