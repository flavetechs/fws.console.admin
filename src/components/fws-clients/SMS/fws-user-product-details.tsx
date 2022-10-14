import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getSingleProduct } from "../../../store/actions/products-actions";
import { IProductState } from "../../../store/Models/ProductState";

const UserProductDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const locations = useLocation();
  const state = useSelector((state: any) => state);
  const { singleProduct }: IProductState = state.product;
  const queryParams = new URLSearchParams(locations.search);
  const userProductId = queryParams.get("userProductId");

  useEffect(() => {
    getSingleProduct(userProductId || "")(dispatch);
  }, []);

  return (
    <>
      <Row>
        <Col md="12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                            <img src={singleProduct?.productUrl} alt="User-Profile" className="theme-color-default-img img-fluid rounded-pill avatar-100"/>
                  </div>
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">{singleProduct?.productName}</h4>
                    <span> - Flavetech</span>
                  </div>
                </div>
            <button className="btn btn-sm btn-primary">Export Pins</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
             <div className="card">
               <div className="card-header">
                  <div className="header-title">
                     <h4 className="card-title">News</h4>
                  </div>
               </div>
               <div className="card-body">
                  <ul className="list-inline m-0 p-0">
                     <li className="d-flex mb-2">
                        <div className="news-icon me-3">
                           <svg width="20" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"></path>
                           </svg>
                        </div>
                        <p className="news-detail mb-0">there is a meetup in your city on fryday at 19:00. <a href="#">see details</a></p>
                     </li>
                     <li className="d-flex">
                        <div className="news-icon me-3">
                           <svg width="20" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"></path>
                           </svg>
                        </div>
                        <p className="news-detail mb-0">20% off coupon on selected items at pharmaprix </p>
                     </li>
                  </ul>
               </div>
             </div>
             <div className="card">
               <div className="card-header d-flex align-items-center justify-content-between">
                  <div className="header-title">
                     <h4 className="card-title">Gallery</h4>
                  </div>
                  <span>132 pics</span>
               </div>
               <div className="card-body">
                  <div className="d-grid gap-card grid-cols-3">
                     <a data-fslightbox="gallery" >
                        <img src="https://templates.iqonic.design/hope-ui/html/dist/assets/images/icons/04.png" className="img-fluid bg-soft-info rounded" alt="profile-image"/>
                     </a>
                     <a data-fslightbox="gallery" >
                        <img src="https://templates.iqonic.design/hope-ui/html/dist/assets/images/shapes/02.png" className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
                     </a>
                     <a data-fslightbox="gallery" >
                        <img src="https://templates.iqonic.design/hope-ui/html/dist/assets/images/icons/08.png" className="img-fluid bg-soft-info rounded" alt="profile-image"/>
                     </a>
                     <a data-fslightbox="gallery" >
                        <img src="https://templates.iqonic.design/hope-ui/html/dist/assets/images/shapes/04.png" className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
                     </a>
                     <a data-fslightbox="gallery">
                        <img src="https://templates.iqonic.design/hope-ui/html/dist/assets/images/icons/02.png" className="img-fluid bg-soft-warning rounded" alt="profile-image"/>
                     </a>
                     <a data-fslightbox="gallery" >
                        <img src="https://templates.iqonic.design/hope-ui/html/dist/assets/images/shapes/06.png" className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
                     </a>
                     <a data-fslightbox="gallery" href="../../assets/images/icons/05.png">
                        <img src="https://templates.iqonic.design/hope-ui/html/dist/assets/images/icons/05.png" className="img-fluid bg-soft-danger rounded" alt="profile-image"/>
                     </a>
                     <a data-fslightbox="gallery" href="../../assets/images/shapes/04.png">
                        <img src="https://templates.iqonic.design/hope-ui/html/dist/assets/images/shapes/04.png" className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
                     </a>
                     <a data-fslightbox="gallery" href="../../assets/images/icons/01.png">
                        <img src="https://templates.iqonic.design/hope-ui/html/dist/assets/images/icons/01.png" className="img-fluid bg-soft-success rounded" alt="profile-image"/>
                     </a>
                  </div>
               </div>
             </div>
             <div className="card">
               <div className="card-header">
                  <div className="header-title">
                     <h4 className="card-title">Twitter Feeds</h4>
                  </div>
               </div>
               <div className="card-body">
                  <div className="twit-feed">
                     <div className="d-flex align-items-center mb-2">
                        <img className="rounded-pill img-fluid avatar-50 me-3 p-1 bg-soft-danger ps-2" src="https://templates.iqonic.design/hope-ui/html/dist/assets/images/icons/03.png" alt=""/>
                        <div className="media-support-info">
                           <h6 className="mb-0">Figma Community</h6>
                           <p className="mb-0">@figma20 
                              <span className="text-primary">
                                 <svg width="15" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                                 </svg>
                              </span>
                           </p>
                        </div>
                     </div>
                     <div className="media-support-body">
                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <div className="d-flex flex-wrap">
                           <a href="#" className="twit-meta-tag pe-2">#Html</a>
                           <a href="#" className="twit-meta-tag pe-2">#Bootstrap</a>
                        </div>
                        <div className="twit-date">07 Jan 2021</div>
                     </div>
                  </div>
                  <hr className="my-4"/>
                  <div className="twit-feed">
                     <div className="d-flex align-items-center mb-2">
                        <img className="rounded-pill img-fluid avatar-50 me-3 p-1 bg-soft-primary" src="../../assets/images/icons/04.png" alt=""/>
                        <div className="media-support-info">
                           <h6 className="mb-0">Flutter</h6>
                           <p className="mb-0">@jane59
                              <span className="text-primary">
                                 <svg width="15" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                                 </svg>
                              </span>
                           </p>
                        </div>
                     </div>
                     <div className="media-support-body">
                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <div className="d-flex flex-wrap">
                           <a href="#" className="twit-meta-tag pe-2">#Js</a>
                           <a href="#" className="twit-meta-tag pe-2">#Bootstrap</a>
                        </div>
                        <div className="twit-date">18 Feb 2021</div>
                     </div>
                  </div>
                  <hr className="my-4"/>
                  <div className="twit-feed">
                     <div className="d-flex align-items-center mb-2">
                           <img className="rounded-pill img-fluid avatar-50 me-3 p-1 bg-soft-warning pt-2" src="../../assets/images/icons/02.png" alt=""/>
                        <div className="mt-2">
                           <h6 className="mb-0">Blender</h6>
                           <p className="mb-0">@blender59
                              <span className="text-primary">
                                 <svg width="15" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                                 </svg>
                              </span>
                           </p>
                        </div>
                     </div>
                     <div className="media-support-body">
                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <div className="d-flex flex-wrap">
                           <a href="#" className="twit-meta-tag pe-2">#Html</a>
                           <a href="#" className="twit-meta-tag pe-2">#CSS</a>
                        </div>
                        <div className="twit-date">15 Mar 2021</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default UserProductDetails;
