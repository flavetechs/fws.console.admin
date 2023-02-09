import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  getCountries,
  getStates,
  resetCreateSuccessful,
  updateSms,
  validateBaseUrlSuffix,
} from "../../../store/actions/smservice-actions";
import avatars1 from "../../../assets/images/avatars/01.png";
import avatars2 from "../../../assets/images/avatars/avtar_2.png";
import avatars3 from "../../../assets/images/avatars/avtar_2.png";
import avatars4 from "../../../assets/images/avatars/avtar_3.png";
import avatars5 from "../../../assets/images/avatars/avtar_4.png";
import avatars6 from "../../../assets/images/avatars/avtar_5.png";
import * as Yup from "yup";
import { ISmserviceState } from "../../../store/Models/SmserviceState";
import { IProductState } from "../../../store/Models/ProductState";
import { getAllUserProducts, getSingleUserProduct } from "../../../store/actions/products-actions";

const UpdateSms = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const locations = useLocation();
  const state = useSelector((state: any) => state);
  const { singleUserProduct }: IProductState = state.product;
  const { countries, states, baseUrlSuffixValidation, validationSuccessful, createSuccessful }: ISmserviceState =
    state.smservice;
  const [images, setImages] = useState("");
  const ImageDisplay = (event: any) => {
    if (event.target.files[0]) {
      setImages(URL.createObjectURL(event.target.files[0]));
    }
  };
  //VALIDATIONS SCHEMA
  const validation = Yup.object().shape({
    schoolName: Yup.string().required("School Name is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    prefix: Yup.string()
    .matches(
      /((https?):\/\/)/,
      "Enter correct url!"
    ),
    url: Yup.string()
      .matches(
        /[a-z0-9-%]+/,
        "Enter correct url!"
      )
      .required("School Url is required"),
      suffix: Yup.string()
      .matches(
      /(\.flavetechs.com)/,
        "Enter correct url!"
      )
  });
  //VALIDATIONS SCHEMA
  useEffect(() => {
    const queryParams = new URLSearchParams(locations.search);
    const userProductId = queryParams.get("userProductId");
    if (!userProductId) return;
    getSingleUserProduct(userProductId)(dispatch);
    getCountries()(dispatch);
  }, [locations.search, dispatch]);


  useEffect(() => {
    setImages(singleUserProduct?.smsLogo)
    getStates(singleUserProduct?.country)(dispatch);
  }, [singleUserProduct, dispatch]);

  useEffect(() => {
   if(createSuccessful){
    resetCreateSuccessful()(dispatch);
    history.goBack();
   }  
  }, [createSuccessful, history, dispatch]);


  return (
    <>
      <div>
        <Formik
          initialValues={{
            schoolName: singleUserProduct?.schoolName || "",
            address: singleUserProduct?.address || "",
            ipAddress: singleUserProduct?.ipAddress || "",
            country: singleUserProduct?.country || "",
            state: singleUserProduct?.state || "",
            schoolUrl: singleUserProduct?.schoolUrl || "",
            prefix:  singleUserProduct?.schoolUrl.charAt(4) === "s" ? singleUserProduct?.schoolUrl.slice(0,8):singleUserProduct?.schoolUrl.slice(0,7)||"",
            url: singleUserProduct?.schoolUrl.charAt(4) === "s" ? singleUserProduct?.schoolUrl.slice(8,-15):singleUserProduct?.schoolUrl.slice(7,-15)|| "",
            suffix: singleUserProduct?.schoolUrl.slice(-15)|| "",
            schoolLogo: singleUserProduct?.smsLogo || "",
            productId: singleUserProduct?.productId || "",
          }}
          enableReinitialize={true}
          validationSchema={validation}
          onSubmit={(values: any) => {
            values.schoolLogo = images;
            values.schoolUrl = values.prefix + values.url + values.suffix
            const params = new FormData();
            params.append("schoolName", values.schoolName);
            params.append("clientId", singleUserProduct?.clientId);
            params.append("apiKey", singleUserProduct?.smsapI_KEY);
            params.append("address", values.address);
            params.append("ipAddress", values.ipAddress);
            params.append("country", values.country);
            params.append("state", values.state);
            params.append("schoolUrl", values.schoolUrl);
            params.append("schoolLogo", values.schoolLogo);
            params.append("file", values.file);
            params.append("productId", values.productId);
            updateSms(params)(dispatch);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
            setFieldValue,
          }) => (
            <Row className="d-flex justify-content-center">
              <Col xl="10" lg="8">
                <Card>
                  <Card.Header className="d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">
                        <b>Update Student Management Service</b>
                      </h4>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className="new-user-info">
                      <div>
                        <Row>
                          <div className="col-md-6">
                            {touched.schoolName && errors.schoolName && (
                              <div className="text-danger">
                                {errors.schoolName}
                              </div>
                            )}
                          </div>
                          <div className="col-md-6">
                            {touched.address && errors.address && (
                              <div className="text-danger">
                                {errors.address}
                              </div>
                            )}
                          </div>
                        </Row>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label htmlFor="schoolName" className="form-label">
                              <b>School Name:</b>
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              name="schoolName"
                              id="schoolName"
                              disabled
                              placeholder="School Name"
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label htmlFor="address" className="form-label">
                              <b>Address:</b>
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              name="address"
                              id="address"
                              placeholder="Address"
                            />
                          </div>
                          <Row>
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                              {touched.country && errors.country && (
                                <div className="text-danger">
                                  {errors.country}
                                </div>
                              )}
                            </div>
                          </Row>
                          <div className="col-md-6 form-group">
                            <label htmlFor="ipAddress" className="form-label">
                              <b>IP Address:</b>
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              name="ipAddress"
                              id="ipAddress"
                              placeholder="IP Address"
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label htmlFor="country" className="form-label">
                              <b>Country:</b>
                            </label>
                            <Field
                              as="select"
                              name="country"
                              className="form-select"
                              id="country"
                              onChange={(e: any) => {
                                setFieldValue("country", e.target.value);
                                getStates(e.target.value)(dispatch);
                              }}
                            >
                              <option value="Select Country">
                                Select Country
                              </option>
                              {countries?.map((item, idx) => (
                                <option key={idx} value={item.value} selected={item.value === singleUserProduct?.country}>
                                  {item.name}
                                </option>
                              ))}
                            </Field>
                          </div>
                          <Row>
                            <div className="col-md-6">
                              {touched.state && errors.state && (
                                <div className="text-danger">
                                  {errors.state}
                                </div>
                              )}
                            </div>
                           
                          </Row>
                          <div className="col-md-6 form-group">
                            <label htmlFor="state" className="form-label">
                              <b>State:</b>
                            </label>
                            <Field
                              as="select"
                              name="state"
                              className="form-select"
                              id="state"
                              onChange={(e: any) => {
                                setFieldValue("state", e.target.value);
                              }}
                            >
                              <option value="Select State">Select State</option>
                              {states?.map((item, idx) => (
                                <option key={idx} value={item.value} selected={item.value === singleUserProduct?.state}>
                                  {item.name}
                                </option>
                              ))}
                            </Field>
                          </div>
                          <Row>
                            <div className="col-md-6">
                              {touched.prefix && errors.prefix && (
                                <div className="text-danger">
                                  {errors.prefix}
                                </div>
                              )}
                                {touched.url && errors.url && (
                                <div className="text-danger">
                                  {errors.url}
                                </div>
                              )}
                                {touched.suffix && errors.suffix && (
                                <div className="text-danger">
                                  {errors.suffix}
                                </div>
                              )}
                              <div className="text-danger">
                                {!baseUrlSuffixValidation && validationSuccessful
                                  ? "Base suffix already taken"
                                  : ""} 
                              </div>

                            </div>
                          </Row>
                          <label className="form-label">
                            <b>School URL:</b>
                          </label>
                          <Form.Group className="col-md-6 input-group">
            
                              <Field
                              type="text"
                              className="form-control text-lowercase"
                              name="prefix"
                              id="prefix"
                              aria-describedby="name"
                              placeholder="http://|https://"
                             
                            />
                           
                            <Field
                              type="text"
                              className="form-control text-lowercase"
                              name="url"
                              id="url"
                              aria-describedby="name"
                              placeholder="example"
                              onKeyUp={(e: any) => {
                              const suffix = e.target.value.slice(0,4)=== "www."? e.target.value.slice(4):e.target.value
                              validateBaseUrlSuffix(suffix)(dispatch);
                              }}
                            />
                               <Field
                              type="text"
                              className="form-control text-lowercase"
                              name="suffix"
                              id="suffix"
                              aria-describedby="name"
                              placeholder=".flavetechs.com"
                              
                            />
                         
                          </Form.Group>
           
                          <div className="row form-group">
                            <div className="col-md-6">
                              <div className="header-title mt-3">
                                <p className="card-title fw-bold">
                                  School Logo
                                </p>
                              </div>
                              <div className="profile-img-edit position-relative">
                                <div>
                                  <img
                                    src={avatars1}
                                    alt="User-Profile"
                                    className="theme-color-default-img img-fluid avatar avatar-100 avatar-rounded-100"
                                  />
                                  <img
                                    src={avatars2}
                                    alt="User-Profile"
                                    className="theme-color-purple-img img-fluid avatar avatar-100 avatar-rounded-100"
                                  />
                                  <img
                                    src={avatars3}
                                    alt="User-Profile"
                                    className="theme-color-blue-img img-fluid avatar avatar-100 avatar-rounded-100"
                                  />
                                  <img
                                    src={avatars5}
                                    alt="User-Profile"
                                    className="theme-color-green-img img-fluid avatar avatar-100 avatar-rounded-100"
                                  />
                                  <img
                                    src={avatars6}
                                    alt="User-Profile"
                                    className="theme-color-yellow-img img-fluid avatar avatar-100 avatar-rounded-100"
                                  />
                                  <img
                                    src={avatars4}
                                    alt="User-Profile"
                                    className="theme-color-pink-img img-fluid avatar avatar-100 avatar-rounded-100"
                                  />{" "}
                                </div>
                                <div className="upload-icone bg-primary">
                                  <label htmlFor="file">
                                    <svg
                                      className="upload-button"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 24 24"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <path
                                        fill="#ffffff"
                                        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                                      ></path>
                                    </svg>
                                    <input
                                      type="file"
                                      id="file"
                                      style={{ display: "none" }}
                                      name="file"
                                      accept="image/jpeg,image/jpg,image/png"
                                      className="file-upload form-control"
                                      data-original-title="upload photos"
                                      onChange={(event: any) => {
                                        setFieldValue(
                                          "file",
                                          event.target.files[0]
                                        );
                                        ImageDisplay(event);
                                      }}
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="img-extension mt-3">
                                <div className="d-inline-block align-items-center">
                                  <span>Only</span> <span>.jpg</span>{" "}
                                  <span>.png</span> <span>.jpeg</span>
                                  <span> allowed</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              {images ? (
                                <img
                                  className=" img-fluid mt-4"
                                  id="displayImg"
                                  src={images}
                                  alt="School Logo"
                                  height="180px"
                                  width="180px"
                                />
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <Button
                            type="button"
                            variant="btn btn-danger mx-2"
                            onClick={() => {
                              history.goBack();
                            }}
                          >
                            Cancel
                          </Button>{" "}
                          <Button
                            type="button"
                            variant="btn btn-primary"
                            onClick={() => handleSubmit()}
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Formik>
      </div>
    </>
  );
};
export default UpdateSms;
