import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,useLocation } from "react-router-dom";
import { createSms } from "../../store/actions/smservice-actions";
import avatars1 from "../../assets/images/avatars/01.png";
import avatars2 from "../../assets/images/avatars/avtar_2.png";
import avatars3 from "../../assets/images/avatars/avtar_2.png";
import avatars4 from "../../assets/images/avatars/avtar_3.png";
import avatars5 from "../../assets/images/avatars/avtar_4.png";
import avatars6 from "../../assets/images/avatars/avtar_5.png";

const CreateSms = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const locations = useLocation();
  const state = useSelector((state) => state);
  const { products } = state.product;
  const queryParams = new URLSearchParams(locations.search);
  const productId = queryParams.get("productId");
  const [images, setImages] = useState(null);
  const ImageDisplay = (event) => {
    if (event.target.files[0]) {
      setImages(URL.createObjectURL(event.target.files[0]));
    }
  };
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
            city: "",
            baseUrl: "",
            baseUrlAppendix: "",
            schoolLogo: "",
            productId: productId,
          }}
          //validationSchema={validation}
          onSubmit={(values) => {
            createSms(values)(dispatch);
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
                              required
                              placeholder="IP Address"
                            />
                          </Form.Group>
                          <Form.Group className="col-md-6 form-group">
                            <label htmlFor="address" className="form-label">
                              <b>Country:</b>
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              name="country"
                              id="country"
                              aria-describedby="name"
                              required
                              placeholder="country"
                            />
                          </Form.Group>
                          <Form.Group className="col-md-6 form-group">
                            <label htmlFor="state" className="form-label">
                              <b>State:</b>
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              name="state"
                              id="state"
                              aria-describedby="name"
                              placeholder="State"
                            />
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
                          <Form.Group className="col-md-6 form-group">
                            <label htmlFor="baseAppendix" className="form-label">
                              <b>Base Appendix:</b>
                            </label>
                            <Field
                              type="text"
                              className="form-control text-lowercase"
                              name="baseAppendix"
                              id="baseAppendix"
                              aria-describedby="name"
                              required
                              placeholder="base Appendix"
                            />
                          </Form.Group>
                          <div className="row form-group">
                          <div className="col-md-6">
                            <div className="header-title mt-3">
                              <p className="card-title fw-bold">School Logo</p>
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
                                      setFieldValue(
                                        "photo",
                                        event.currentTarget.files[0]
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
                            onClick={handleSubmit}
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
