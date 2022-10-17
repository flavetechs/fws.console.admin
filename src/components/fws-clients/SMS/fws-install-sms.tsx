import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  createSms,
  getCountries,
  getStates,
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

const CreateSms = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const locations = useLocation();
  const state = useSelector((state : any) => state);
  const { countries, states, baseUrlSuffixValidation, validationSuccessful } : ISmserviceState =
    state.smservice;
  const queryParams = new URLSearchParams(locations.search);
  const productId = queryParams.get("productId");
  const [images, setImages] = useState();
  const ImageDisplay = (event : any) => {
    if (event.target.files[0]) {
     // setImages(URL.createObjectURL(event.target.files[0]));
    }
  };
  //VALIDATIONS SCHEMA
  const validation = Yup.object().shape({
    schoolName: Yup.string().required("School Name is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    baseUrl: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Base Url is required"),
    baseUrlAppendix: Yup.string().required("Base Url Suffix is required"),
  });
  //VALIDATIONS SCHEMA
  useEffect(() => {
    getCountries()(dispatch);
  }, [dispatch]);
  return (
    <>
      <div>
        <Formik
          initialValues={{
            schoolName: "",
            address: "",
            ipAddress: "",
            country: "",
            state: "",
            // city: "",
            baseUrl: "",
            baseUrlAppendix: "",
            schoolLogo: "",
            productId: productId,
          }}
          validationSchema={validation}
          onSubmit={(values) => {
            createSms(values)(dispatch);
            history.goBack();
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
                        <b>Add Student Management Service</b>
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
                          <Form.Group className="col-md-6 form-group">
                            <label htmlFor="schoolName" className="form-label">
                              <b>School Name:</b>
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              name="schoolName"
                              id="schoolName"
                              aria-describedby="name"
                              required
                              placeholder="School Name"
                            />
                          </Form.Group>
                          <Form.Group className="col-md-6 form-group">
                            <label htmlFor="lastName" className="form-label">
                              <b>Address:</b>
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              name="address"
                              id="address"
                              aria-describedby="name"
                              required
                              placeholder="Address"
                            />
                          </Form.Group>
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
                          <Form.Group className="col-md-6 form-group">
                            <label htmlFor="ipAddress" className="form-label">
                              <b>IP Address:</b>
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              name="ipAddress"
                              id="ipAddress"
                              aria-describedby="name"
                              placeholder="IP Address"
                            />
                          </Form.Group>
                          <Form.Group className="col-md-6 form-group">
                            <label htmlFor="address" className="form-label">
                              <b>Country:</b>
                            </label>
                            <Field
                              as="select"
                              name="country"
                              className="form-select"
                              id="country"
                              onChange={(e : any) => {
                                setFieldValue("country", e.target.value);
                                getStates(e.target.value)(dispatch);
                              }}
                            >
                              <option value="Select Country">
                                Select Country
                              </option>
                              {countries?.map((item, idx) => (
                                <option key={idx} value={item.value}>
                                  {item.name}
                                </option>
                              ))}
                            </Field>
                          </Form.Group>
                          <Row>
                            <div className="col-md-6">
                              {touched.state && errors.state && (
                                <div className="text-danger">
                                  {errors.state}
                                </div>
                              )}
                            </div>
                            <div className="col-md-6">
                              {touched.baseUrl && errors.baseUrl && (
                                <div className="text-danger">
                                  {errors.baseUrl}
                                </div>
                              )}
                            </div>
                          </Row>
                          <Form.Group className="col-md-6 form-group">
                            <label htmlFor="state" className="form-label">
                              <b>State:</b>
                            </label>
                            <Field
                              as="select"
                              name="state"
                              className="form-select"
                              id="state"
                              onChange={(e : any) => {
                                setFieldValue("state", e.target.value);
                              }}
                            >
                              <option value="Select State">Select State</option>
                              {states?.map((item, idx) => (
                                <option key={idx} value={item.value}>
                                  {item.name}
                                </option>
                              ))}
                            </Field>
                          </Form.Group>
                          <Form.Group className="col-md-6 form-group">
                            <label htmlFor="baseUrl" className="form-label">
                              <b>Base URL:</b>
                            </label>
                            <Field
                              type="text"
                              className="form-control text-lowercase"
                              name="baseUrl"
                              id="baseUrl"
                              aria-describedby="name"
                              required
                              placeholder="base URL"
                            />
                          </Form.Group>
                          <Row>
                            <div className="col-md-6">
                              {touched.baseUrlAppendix &&
                                errors.baseUrlAppendix && (
                                  <div className="text-danger">
                                    {errors.baseUrlAppendix}
                                  </div>
                                )}
                            </div>
                          </Row>
                          <Form.Group className="col-md-6 form-group">
                            <label
                              htmlFor="baseUrlAppendix"
                              className="form-label"
                            >
                              <b>Base Suffix:</b>
                            </label>
                            <Field
                              type="text"
                              className="form-control text-lowercase"
                              name="baseUrlAppendix"
                              id="baseUrlAppendix"
                              onKeyUp={(e  : any) => {
                                validateBaseUrlSuffix(e.target.value)(dispatch);
                              }}
                              aria-describedby="name"
                              required
                              placeholder="base suffix"
                            />
                            <div className="text-danger mt-2">
                              {!baseUrlSuffixValidation && validationSuccessful
                                ? "Base suffix already taken"
                                : ""}
                            </div>
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
                                  <label htmlFor="photo">
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
                                      id="photo"
                                      style={{ display: "none" }}
                                      name="photo"
                                      accept="image/jpeg,image/jpg,image/png"
                                      className="file-upload form-control"
                                      data-original-title="upload photos"
                                      onChange={(event) => {
                                        // setFieldValue(
                                        //   "photo",
                                        //   event.currentTarget.files[0]
                                        // );
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
                            onClick={()=>handleSubmit}
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
export default CreateSms;
